import React, { useEffect, useState } from "react";
import { Button, Text, Input, Box, Spinner } from "theme-ui";
import Toaster from "../toaster/Toaster";
import { useWeb3React } from "@web3-react/core";
import { useMetaContext } from "../../context";
import axios from "axios";
import { BigNumber } from "@ethersproject/bignumber";
import { claimHashMainnet as CLAIM_HASH } from "../../constants/abi";
import { Countdown } from "./Countdown";
import { Connect } from "./connect/Connect";

const ToasterType = {
  success: "success",
  fail: "fail",
};

const getClaimInfo = async (account: string) => {
  let res = await axios.get(
    `https://metakrew.mypinata.cloud/ipfs/${CLAIM_HASH}`
  );

  let validAddresses = res.data.claims;
  //let checksumAddress = ethers.utils.getAddress(account);

  return validAddresses[account];
};

export const Claim: React.FC = () => {
  const context = useWeb3React();
  const {
    active,
    account,
    error,
    deactivate,
    connector
  } = context;

  const [timerActive, setTimerActive] = useState(true);
  const [showToaster, setShowToaster] = useState(false);
  const [message, setMessage] = useState<string>();
  const [toasterType, setToasterType] = useState<string>();
  const [isPending, setIsPending] = useState(false);
  const [metakrewClaimable, setMetakrewClaimable] = useState(0)
  const [info, setInfo] = useState({
    index: 0, amount: "0x000", proof: []
  })
  const [OMA, setOMA] = useState(0)
  const [isClaimed, setIsClaimed] = useState(false)

  const [amount, setAmount] = useState<number>(0)

  const { contracts } = useMetaContext()


  const claimDrop = async () => {
    setIsPending(true)
    let errorMessage: string | undefined;
    if (!account) {
      errorMessage = "Connect Wallet";
      console.log(errorMessage);
      return;
    }
    try {
      if (active && account) {
        let res: any;

        // if user has already claimed before
        if (isClaimed) {
          const estimatedGas = await contracts.metakrew.estimateGas.remainderClaim(amount);

          setIsPending(true)

          let tx = await contracts.metakrew.remainderClaim(
            amount,
            { gasLimit: BigNumber.from(Math.round((estimatedGas.toNumber() * 1.10))) }
          );

          res = await tx.wait();

        } else {
          const info = await getClaimInfo(account);
          if (info) {
            setInfo(info)
          }

          const estimatedGas = await contracts.metakrew.estimateGas.claim(
            info.index,
            info.amount,
            amount,
            info.proof
          );

          setIsPending(true)

          let tx = await contracts.metakrew.claim(
            info.index,
            info.amount,
            amount,
            info.proof,
            { gasLimit: BigNumber.from(Math.round((estimatedGas.toNumber() * 1.10))) }
          );

          res = await tx.wait();
        }

        setToasterType(ToasterType.success);
        setMessage("You have successfully minted your Metakrew!");
        console.log(res)
      }
    } catch (err: any) {
      console.error(err)
      setToasterType(ToasterType.fail);
      switch (true) {
        case err.message.includes("The claiming time has passed."):
          setMessage("The Claim window has closed");
          break;
        case err.message.includes("Cannot read properties of undefined (reading 'index')"):
          setMessage("Your address is not elegible for this claim.");
          break;
        case err.message.includes("Metakey Distributor: NFT already claimed"):
          setMessage("NFT already claimed");
          break;
        case (err.message.includes("Must claim at least one") || err.message.includes("Must mint at least 1")):
          setMessage("You Must claim at least 1 metakrew");
          break;
        case (err.message.includes("Cannot claim more than you are eligible for") || err.message.includes("Cannot claim more than you have left")):
          setMessage("You cannot claim more than you are eligible for.");
          break;
        case err.message.includes("Claim must be active to mint Krew"):
          setMessage("Claim not active");
          break;
        default:
          setMessage(
            "Something went wrong. If you are using a ledger, you may need to update it."
          );
      }
    }
    contracts.metakrew.overflowedMintingAmount(account).then((data: any) => setOMA(data.toString() / 1)).catch(console.error)
    getClaimInfo(account).then((data: any) => { if (data) {setInfo(data)}});
    setAmount(0)
    updateToaster();
    setIsPending(false)
  };

  useEffect(() => {
    if (active && account) {
      contracts.metakrew.overflowedMintingAmount(account).then((data: any) => setOMA(data.toString() / 1)).catch(console.error)
      getClaimInfo(account).then((data: any) => { if (data) {setInfo(data)}});
    }
  }, [contracts, active, account, connector])

  useEffect(() => {
    if (info.index > 0 ) {
      contracts.metakrew.isClaimed(info.index).then((data: any) => setIsClaimed(data.toString() === "true")).catch(console.error)
    }
  }, [info, contracts])

  useEffect(() => {
    if (active && account) {
      if (isClaimed) {
        setMetakrewClaimable(OMA)
      } else {
        try {
          setMetakrewClaimable(parseInt(info.amount, 16))
        } catch {
          setMetakrewClaimable(0)
        }
      }
    }
  }, [OMA, info, active, account, isClaimed, connector])


  const updateToaster = () => {
    setShowToaster(true);

    setTimeout(() => {
      setShowToaster(false);
    }, 3000);
  };

  /*
  const updateTimerStatus = (state: any) => {
    setTimerActive(state);
  };
  */

  if (isPending) {
    return (
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Spinner width="20px" height="20px" color="#49CFDE" />
        <Text sx={{ ml: "1rem", mb: "0.5rem", maxWidth: "500px", color: "#fff", fontFamily: "Poppins" }} >Claiming Your Metakrew... Please Be Patient.</Text>
      </Box>
    );
  }

  return (
    <>
      {/*connect*/}
      <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <Connect />

        {active && account &&
          (
            <Box>
              {/*!timerActive*/ timerActive ? (
                <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
                  <Text sx={{ mb: "0.5rem", maxWidth: "500px", color: "#fff", fontFamily: "Poppins", fontWeight: 800 }}>You have {metakrewClaimable} metakrew left to claim</Text>
                  <Text sx={{ mb: "0.5rem", maxWidth: "500px", color: "#fff", fontFamily: "Poppins" }}>Enter Claim Amount (40 per Tx)</Text>
                  <Input type="number" name="amount" sx={{ mb: "1rem", width: "80px", color: "white" }} onChange={(e: any) => {
                    const parsedAmount = parseInt(e.target.value)
                    if (parsedAmount >= 0 && parsedAmount <= 40) {
                      setAmount(parsedAmount);
                    }
                    if (parsedAmount < 0) {
                      e.target.value = 40
                    }
                    if (parsedAmount > 40) {
                      e.target.value = 0
                    }
                  }
                  } />
                  <Box sx={{ display: "flex", flexDirection: "row" }}>
                    <Button
                      variant="layout.animation.mintButton"
                      onClick={claimDrop}
                      sx={{ width: "fit-content" }}
                    >
                      Claim
                    </Button>
                    {(active || error) && (
                      <Button
                        variant="layout.animation.mintButton"
                        sx={{
                          marginLeft: "0.4rem",
                          width: "fit-content"
                        }}
                        onClick={() => {
                          deactivate();
                        }}
                      >
                        Disconnect Wallet
                      </Button>
                    )}


                  </Box>
                </Box>

              ) : (
                <Button
                  variant="layout.animation.mintButton"
                  sx={{
                    marginLeft: "0rem",
                    width: "fit-content"
                  }}
                  onClick={() => {
                    deactivate();
                  }}
                >
                  Disconnect Wallet
                </Button>
              )}

              {showToaster && (
                <>
                  <Toaster
                    toasterState={showToaster}
                    message={message}
                    type={toasterType}
                  />
                </>
              )}

            </Box>
          )}
        <Box sx={{ display: "flex", flex: 1, flexDirection: "column", justifyContent: "flex-end", mt: "auto" }}>
          <Countdown setTimerActive={setTimerActive} />
        </Box>
      </Box>
    </>
  );
};
