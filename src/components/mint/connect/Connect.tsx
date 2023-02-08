
import { useEffect, useState } from 'react';
import { useEagerConnect, useInactiveListener } from './hook';
import * as React from "react";

import {
  useWeb3React,
  UnsupportedChainIdError
} from "@web3-react/core";
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected
} from "@web3-react/injected-connector";
import {
  URI_AVAILABLE,
  UserRejectedRequestError as UserRejectedRequestErrorWalletConnect,
  WalletConnectConnector
} from "@web3-react/walletconnect-connector";


import {
  injected,
  walletconnect,
  walletlink,
  /*
  ledger,
  trezor,
  frame,
  fortmatic,
  portis,
  squarelink,
  torus,
  authereum
  */
} from "./connectors";
import { Button, Box, Text, Spinner } from '@theme-ui/components';

type Connector = any

const connectorsByName: Record<string, Connector> = {
  'MetaMask': injected,
  'WalletConnect': walletconnect,
  'WalletLink': walletlink,
  /*
  'Ledger': ledger,
  'Trezor': trezor,
  'Frame': frame,
  'Fortmatic': fortmatic,
  'Portis': portis,
  'Squarelink': squarelink,
  'Torus': torus,
  'Authereum': authereum
  */
};


function getErrorMessage(error: any) {
  if (error instanceof NoEthereumProviderError) {
    return "No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.";
  } else if (error instanceof UnsupportedChainIdError) {
    return "You're connected to an unsupported network.";
  } else if (
    error instanceof UserRejectedRequestErrorInjected ||
    error instanceof UserRejectedRequestErrorWalletConnect
  ) {
    return "Please authorize this website to access your Ethereum account.";
  } else {
    console.error(error);
    return "An unknown error occurred. Check the console for more details.";
  }
}


export const Connect: React.FC = () => {

  const context = useWeb3React();
  const {
    connector,
    activate,
    deactivate,
    active,
    error
  } = context;

  // handle logic to recognize the connector currently being activated
  const [activatingConnector, setActivatingConnector] = useState<any>();
  useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]);

  // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
  const triedEager = useEagerConnect();

  // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
  useInactiveListener(!triedEager || !!activatingConnector);

  // log the walletconnect URI
  useEffect(() => {
    const logURI = (uri: any) => {
      console.log("WalletConnect URI", uri);
    };
    walletconnect.on(URI_AVAILABLE, logURI);

    return () => {
      walletconnect.off(URI_AVAILABLE, logURI);
    };
  }, []);

  useEffect(() => {
    if (connector instanceof WalletConnectConnector) {
      if (connector.walletConnectProvider?.signer?.connection?.wc?._accounts.length === 0) {connector.walletConnectProvider = undefined}
    }
  }, [connector])

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: error ? "column" : "row",
        }}
      >
        {!(active || error) && <Box sx={{ flexDirection: ["column", "column", "column", "row"], display: "flex", flex: 1, justifyContent: "flex-start" }}>
          {Object.keys(connectorsByName).map((name: any) => {
            const currentConnector = connectorsByName[name];
            const activating = currentConnector === activatingConnector;
            const connected = currentConnector === connector;
            const disabled =
              !triedEager || !!activatingConnector || connected || !!error;

            return (
              <Button
                variant="layout.animation.mintButton"
                sx={{
                  marginRight: "0.4rem",
                  marginBottom: "0.5rem",
                  width: "fit-content",
                  borderColor: activating
                    ? "orange"
                    : connected
                      ? "green"
                      : "unset",
                  cursor: disabled ? "unset" : "pointer",
                  position: "relative"
                }}
                disabled={disabled}
                key={name}
                onClick={() => {
                  setActivatingConnector(currentConnector);
                  activate(connectorsByName[name]);
                }}
              >
                {activating ? (
                  <Spinner width="14px" height="14px"/>
                ) : name}
              </Button>
            );
          })}
        </Box>}

        {!!error && (
          <>
            <br />
            <Text sx={{ mb: "3rem", maxWidth: "500px", color: "#fff", fontFamily: "Poppins" }}>
              {getErrorMessage(error)}
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
                Deactivate
              </Button>
            </Text>
          </>
        )}

      </Box>
    </>
  )
}