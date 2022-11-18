import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';

const name = 'LazyNFT';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deployer } = await getNamedAccounts();
  const { deploy } = deployments;

  const deployment = await deploy(name, {
    from: deployer,
    args: [
      'https://gateway.pinata.cloud/ipfs/QmPosh8tfsqc2utmhMCtdMh2vgySXx9rhuN8CoLJKq3b5K/',
      60 * 1000 * 1,
    ],
  });

  deployments.log(`Contract ${name} deployed at ${deployment.address}`);
};

export default func;

func.tags = [name];
