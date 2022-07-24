import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

import './tasks/deploy';

import { DEPLOYER_PRIVATE_KEY } from "./environment";

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  networks: {
    local: {
      url: 'http://localhost:8545',
      accounts: [DEPLOYER_PRIVATE_KEY],
    },
    // TODO: other networks
  }
};

export default config;
