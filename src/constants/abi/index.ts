import { Contract } from "@ethersproject/contracts"

export const metakeyAbi: any = require("./prod/metakeyAbi.json")
export const metakeyDistributorAbi: any = require("./prod/metakeyDistributorAbi.json")
export const metakrewAbi: any = require("./prod/metakrewAbi.json")
export const metakrewTestAbi: any = require("./prod/metakrewTestAbi.json")

export const claimHashRinkeby = "QmNdMW6sapaJRDySBnpCBhLfXP73NsCKgcgUhNmNGfUvnG";
export const claimHashMainnet = "QmWQWa3DseTmg6E9JZHrykRqfnWapAwaNrBdnCAnri98UV";


export interface Contracts {
  metakrew: Contract
}

export const addresses = {
  eth: {
    mainnet: {
      metakrew: "0xE4e50B96F70AaB13A2D7e654D07D7D4173319653",
    },
    rinkeby: {
      metakrew: "0x0ca2a100B1a4a2306d8c7197ab783f294e2F28fe"
    }
  },
}

export const unsignedContracts = {
  eth: {
    mainnet: {
      metakrew: new Contract(addresses.eth.mainnet.metakrew, metakrewAbi),
    },
    rinkeby: {
      metakrew: new Contract(addresses.eth.rinkeby.metakrew, metakrewAbi),
    },
  },
}


