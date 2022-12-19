
import {Utils, Wallet, Erc20, BigNumber} from "@ijstech/eth-wallet";
import {Token, Custodian} from '../src/contracts';
import * as Config from '../data/config';

let rpcUrl = Config.rpcUrl
let account = Config.deployer;

async function deployToken(wallet: Wallet, tokenOptions: any) {
    const token = new Token(wallet)
    let address = await token.deploy({
        name: tokenOptions.name,
        symbol: tokenOptions.symbol
    })
    console.log('address', address)
}

async function deployCustodian(wallet: Wallet, custodianOptions: any) {
    const custodian = new Custodian(wallet)
    let address = await custodian.deploy();
    console.log('address', address);
    await custodian.allowToken({
        token: custodianOptions.token,
        allow: custodianOptions.allow
    })
    await custodian.transferOwnership(custodianOptions.newOwner);
}

async function main() {
    let {tokenOptions, custodianOptions} = Config.deploymentOptionsArray;
    let wallet = new Wallet(rpcUrl, account);  
    // await deployToken(wallet, tokenOptions);
    await deployCustodian(wallet, custodianOptions);
}

main();