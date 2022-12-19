import 'mocha';

import {Utils, Wallet, Erc20, BigNumber} from "@ijstech/eth-wallet";
import {Token, Custodian} from '../src/contracts';
import * as Ganache from "ganache";
import * as assert from 'assert';

suite('##Contracts', function() {  
    this.timeout(40000);
    let provider = Ganache.provider()        
    let wallet = new Wallet(provider);   
    let custodian: Custodian; 
    let accounts: string[];   
    let token1: Erc20; 
    let token2: Erc20; 

    const approveERC20Max = async (wallet: Wallet, tokenAddress: string, spenderAddress: string, amount: BigNumber) => {
        let erc20 = new Erc20(wallet, tokenAddress)
        let receipt = await erc20.approve({
            spender: spenderAddress, 
            amount
        });
        return receipt;
    }

    const lockToken = async (wallet: Wallet, erc20: Erc20, amount: BigNumber) => {
        let tokenDecimals = await erc20.decimals;
        await approveERC20Max(wallet, erc20.address, custodian.address, amount);
        await custodian.lock({
            token: erc20.address,
            amount: Utils.toDecimals(amount, tokenDecimals)
        })
    }
    setup(async function(){
        accounts = await wallet.accounts;
    })
    test('Deploy contracts', async function(){
        wallet.defaultAccount = accounts[0];      
        console.log('accounts', accounts)  
        token1 = new Erc20(wallet);
        await token1.deploy({
            name: 'OSWAP',
            symbol: 'OSWAP',
            cap: 99999999999999999
        });
        console.log('token1', token1.address)
        token2 = new Erc20(wallet);
        await token2.deploy({
            name: 'USDT',
            symbol: 'USDT',
            cap: 99999999999999999
        });
        console.log('token2', token2.address)
        custodian = new Custodian(wallet);
        await custodian.deploy();
        await custodian.allowToken({
            token: token1.address,
            allow: true
        })
        console.log('custodian', custodian.address)
        for (let i = 0; i < accounts.length; i++) {
            await token1.mint({
                address: accounts[i],
                amount: 10000
            });  
        }       
    })    
    test('Round 0: Account 1 Lock token1', async function() {    
        let round = await custodian.round();
        assert.strictEqual(round.toNumber(), 0); 
        await lockToken(wallet, token1, new BigNumber(10));
        let lockedAmount = await custodian.locked({
            param1: 0,
            param2: token1.address,
            param3: wallet.defaultAccount
        })
        assert.strictEqual(lockedAmount.toFixed(), Utils.toDecimals('10', 18).toFixed());   
    })
    test('Round 0: Account 2 Lock token1', async function() {    
        wallet.defaultAccount = accounts[1];   
        await lockToken(wallet, token1, new BigNumber(10));

        let lockedAmount = await custodian.locked({
            param1: 0,
            param2: token1.address,
            param3: wallet.defaultAccount
        })
        assert.strictEqual(lockedAmount.toFixed(), Utils.toDecimals('10', 18).toFixed()); 
    })   
    test('Round 0: Account 1 Lock token1', async function() {    
        wallet.defaultAccount = accounts[0];  
        await lockToken(wallet, token1, new BigNumber(30));
        let lockedAmount = await custodian.locked({
            param1: 0,
            param2: token1.address,
            param3: wallet.defaultAccount
        })
        assert.strictEqual(lockedAmount.toFixed(), Utils.toDecimals('40', 18).toFixed());  
    })
    test('New Round', async function() {
        wallet.defaultAccount = accounts[0];   
        await custodian.newRound();
        let account1LockedAmount = await custodian.locked({
            param1: 0,
            param2: token1.address,
            param3: accounts[0]
        })      
        let account2LockedAmount = await custodian.locked({
            param1: 0,
            param2: token1.address,
            param3: accounts[1]
        })           
        let round = await custodian.round();
        assert.strictEqual(account1LockedAmount.toFixed(), Utils.toDecimals('40', 18).toFixed());   
        assert.strictEqual(account2LockedAmount.toFixed(), Utils.toDecimals('10', 18).toFixed());   
        assert.strictEqual(round.toNumber(), 1);  
    })   
    test('Round 1: Account 2 Lock token1', async function() {    
        wallet.defaultAccount = accounts[1];   
        await lockToken(wallet, token1, new BigNumber(50));

        let lockedAmount = await custodian.locked({
            param1: 1,
            param2: token1.address,
            param3: wallet.defaultAccount
        })
        assert.strictEqual(lockedAmount.toFixed(), Utils.toDecimals('50', 18).toFixed()); 
    })   
    test('Round 1: Account 1 Lock token1', async function() {    
        wallet.defaultAccount = accounts[0];  
        await lockToken(wallet, token1, new BigNumber(20));
        let lockedAmount = await custodian.locked({
            param1: 1,
            param2: token1.address,
            param3: wallet.defaultAccount
        })
        assert.strictEqual(lockedAmount.toFixed(), Utils.toDecimals('20', 18).toFixed());  
    })
})