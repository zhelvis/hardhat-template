import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

import './tasks/deploy';

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  networks: {
    local: {
      url: 'http://localhost:8545',
      // TODO: move to env
      accounts: ['0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80'],
    },
    // TODO: other networks
  }
};

export default config;
