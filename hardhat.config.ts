import "@nomicfoundation/hardhat-toolbox";

import './tasks/deploy';

import { DEPLOYER_PRIVATE_KEY } from "./environment";

const config = {
  solidity: "0.8.9",
  networks: {
    local: {
      url: 'http://localhost:8545',
      accounts: [DEPLOYER_PRIVATE_KEY],
    },
    // TODO: other networks
  },
  gasReporter: {
    enabled: true
  },
};

export default config;
