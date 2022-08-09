import { InjectedConnector } from "@web3-react/injected-connector";

export const injected = new InjectedConnector({ supportedChainIds: [1, 3, 4, 5, 42, 1337, 31337] });

// export const CALADEX_ADDR = "0x08E240fCa6EDF06f4F1DaF75308e3df22f894fAE" ;
// export const CALADEX_ADDR = "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC" ;
export const CALADEX_ADDR = "0x9e93F9444702F9E3b30df939a98D25B9c0D8AfF2";

export const DAI_ADDR = "0xad6d458402f60fd3bd25163575031acdce07538d" ;

export const BLOCK_CONFIRMATION_THRESHOLD = 1;