


import { useWeb3React } from "@web3-react/core";
import axios, { AxiosResponse } from "axios";
import { createContext, useContext, useReducer, useMemo, useEffect } from "react";
import { Contracts, unsignedContracts } from "../constants/abi";
import { MetatisedObject, signContracts } from "../utils";
import { FAQ, IntroContent, Race, RoadmapPiece, TeamMember, Trait } from "./interfaces";

const INITIAL_STATE: State = {
  content: {
    intro: {
      it: {
        title: "",
        content: ""
      },
      does: {
        title: "",
        content: ""
      }
    },
    race: [
      {
        "race": "",
        "title": "",
        "content": [
          ""
        ],
        "image": ""
      },
    ],
    traits: [
      {
        "title": "",
        "content": "",
        "special": "",
        "images": [
          { "title": "", "url": "" }
        ]
      },
    ],
    faqs: [
      {
        "question": "How many avatars in the collection?",
        "content": "There will be 9750 randomly generated pfps in the Metakrew."
      },
      {
        "question": "Is there a presale?",
        "content": "No! The Metakrew are free to claim (plus gas) for Metakey holders; as such a presale is not necessary."
      },
      {
        "question": "How long is the claim window?",
        "content": "We are planning a two week claim window."
      },
    ],
    brought: {
      title: "",
      content: ""
    },
    team: [
      {
        "name": "Matty",
        "image":
          "https://res.cloudinary.com/metakey/image/upload/f_webp/q_auto:eco/c_scale,w_400/v1636082988/metakrewLandingPage/matty_ll356c.jpg",
        "title": "Captain",
        "social": "https://twitter.com/DCLBlogger"
      },
      {
        "name": "Mohsi",
        "image":
          "https://res.cloudinary.com/metakey/image/upload/f_webp/q_auto:eco/c_scale,w_400/v1636082988/metakrewLandingPage/MOhsi_hdgrub.jpg",
        "title": "First Officer",
        "social": "https://twitter.com/AgentMohsi"
      },
      {
        "name": "Billy",
        "image":
          "https://res.cloudinary.com/metakey/image/upload/f_webp/q_auto:eco/c_scale,w_400/v1636082994/metakrewLandingPage/billy_tq8bpz.jpg",
        "title": "Chief Metaverse Architect",
        "social": "https://twitter.com/BillyKRoberts"
      },
      {
        "name": "Victor",
        "image":
          "https://res.cloudinary.com/metakey/image/upload/f_webp/q_auto:eco/c_scale,w_400/v1636082988/metakrewLandingPage/victor_knekyx.jpg",
        "title": "Starship Engineer",
        "social": "https://twitter.com/Atheal9k"
      },
      {
        "name": "Michael",
        "image":
          "https://res.cloudinary.com/metakey/image/upload/f_webp/q_auto:eco/c_scale,w_400/v1636082988/metakrewLandingPage/Micheal_pvcng3.jpg",
        "title": "Xeno-Anthropologist",
        "social": "https://twitter.com/ethysasher"
      },
      {
        "name": "Poppy",
        "image":
          "https://res.cloudinary.com/metakey/image/upload/f_webp/q_auto:eco/c_scale,w_400/v1636082992/metakrewLandingPage/Poppy_c8xsjm.jpg",
        "title": "Polyhistor Artisan",
        "social": "https://twitter.com/p_opp_i"
      },
    ],
    roadmap: [
      {
        "title": "",
        "content": "",
        "image": "",
        "special": ""
      },
    ]
  }
}

export const contentURI = "https://res.cloudinary.com/metakey/raw/upload/v1645399430/metakrewLandingPageNew/content/content_z6mprq.json"

const INITIAL_CONTRACTS: Contracts = {
  metakrew: unsignedContracts.eth.rinkeby.metakrew
}

const deadline = 1637278200
const endClaimDeadline = 1638478800


interface State {
  content: Content
}

interface Content {
  intro: IntroContent,
  race: Race[],
  traits: Trait[],
  faqs: FAQ[],
  brought: {
    title: string,
    content: string
  },
  team: TeamMember[]
  roadmap: RoadmapPiece[]
}

// Creating the context
const MetaContext = createContext({
  MetaState: INITIAL_STATE,
  setState: () => { },
  contracts: INITIAL_CONTRACTS,
  deadline: deadline,
  endClaimDeadline: endClaimDeadline
});


interface SetContent {
  type: "SET_CONTENT",
  data: Content
}

export const useMetaContext = () => { return useContext(MetaContext) }

// Defining what actions are available
type Action = SetContent

// Reducer returns the MetaState from dispatched methods.
function reducer(MetaState: State = INITIAL_STATE, action: Action) {
  switch (action.type) {
    case "SET_CONTENT":
      return Object.assign({}, MetaState, { content: action.data })

    default:
      return MetaState;
  }
}


// Provider provides the context MetaState to the DOM
export const Provider: React.FC = ({ children }) => {
  const [MetaState, dispatch] = useReducer(reducer, INITIAL_STATE);

  const context = useWeb3React();
  const {
    library,
    chainId,
    active,
    account
  } = context;

  const setState = () => {
    axios.get(contentURI).then(
      (res: AxiosResponse) => {
        dispatch({
          type: "SET_CONTENT",
          data: res.data
        })

      })
  }

  const contracts: Contracts = useMemo(() => {
    try {
      if (active && account) {
        var signedContracts: MetatisedObject<any>
        switch (chainId) {
          case 1:
            signedContracts = signContracts(unsignedContracts.eth.mainnet, library)
            break;
          case 4:
            signedContracts = signContracts(unsignedContracts.eth.rinkeby, library)
            break;

          default:
            return INITIAL_CONTRACTS
        }
        return signedContracts as Contracts
      } else {
        return INITIAL_CONTRACTS
      }
    } catch (e) {
      console.error(e)
      return INITIAL_CONTRACTS
    }
    // eslint-disable-next-line
  }, [library, active, chainId, account]);

  return (
    <MetaContext.Provider
      value={useMemo(
        () => ({
          MetaState,
          setState,
          contracts,
          deadline,
          endClaimDeadline
        }),
        // eslint-disable-next-line
        [MetaState, contracts]
      )}
    >
      {children}
    </MetaContext.Provider>)

}

export const Updater = () => {
  const { setState } = useMetaContext()
  useEffect(
    () => {
      setState()
      // eslint-disable-next-line
    }, [])

  return null
}