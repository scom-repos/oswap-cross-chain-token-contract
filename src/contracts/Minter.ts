import {IWallet, Contract as _Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj, TransactionOptions} from "@ijstech/eth-contract";
import Bin from "./Minter.json";
export interface IBurnParams {txHash:string;token:string;amount:number|BigNumber}
export interface IMintParams {txHash:string;transferIndex:number|BigNumber;token:string;destination:string;amount:number|BigNumber;extraData:string}
export interface IMintedParams {param1:string;param2:number|BigNumber}
export class Minter extends _Contract{
    static _abi: any = Bin.abi;
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(options?: number|BigNumber|TransactionOptions): Promise<string>{
        return this.__deploy([], options);
    }
    parseAuthorizeEvent(receipt: TransactionReceipt): Minter.AuthorizeEvent[]{
        return this.parseEvents(receipt, "Authorize").map(e=>this.decodeAuthorizeEvent(e));
    }
    decodeAuthorizeEvent(event: Event): Minter.AuthorizeEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseBurnEvent(receipt: TransactionReceipt): Minter.BurnEvent[]{
        return this.parseEvents(receipt, "Burn").map(e=>this.decodeBurnEvent(e));
    }
    decodeBurnEvent(event: Event): Minter.BurnEvent{
        let result = event.data;
        return {
            token: result.token,
            amount: new BigNumber(result.amount),
            _event: event
        };
    }
    parseCrossChainPolicyChangedEvent(receipt: TransactionReceipt): Minter.CrossChainPolicyChangedEvent[]{
        return this.parseEvents(receipt, "CrossChainPolicyChanged").map(e=>this.decodeCrossChainPolicyChangedEvent(e));
    }
    decodeCrossChainPolicyChangedEvent(event: Event): Minter.CrossChainPolicyChangedEvent{
        let result = event.data;
        return {
            newPolicy: result.newPolicy,
            _event: event
        };
    }
    parseDeauthorizeEvent(receipt: TransactionReceipt): Minter.DeauthorizeEvent[]{
        return this.parseEvents(receipt, "Deauthorize").map(e=>this.decodeDeauthorizeEvent(e));
    }
    decodeDeauthorizeEvent(event: Event): Minter.DeauthorizeEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseMintEvent(receipt: TransactionReceipt): Minter.MintEvent[]{
        return this.parseEvents(receipt, "Mint").map(e=>this.decodeMintEvent(e));
    }
    decodeMintEvent(event: Event): Minter.MintEvent{
        let result = event.data;
        return {
            token: result.token,
            destination: result.destination,
            amount: new BigNumber(result.amount),
            _event: event
        };
    }
    parsePausedEvent(receipt: TransactionReceipt): Minter.PausedEvent[]{
        return this.parseEvents(receipt, "Paused").map(e=>this.decodePausedEvent(e));
    }
    decodePausedEvent(event: Event): Minter.PausedEvent{
        let result = event.data;
        return {
            account: result.account,
            _event: event
        };
    }
    parseStartOwnershipTransferEvent(receipt: TransactionReceipt): Minter.StartOwnershipTransferEvent[]{
        return this.parseEvents(receipt, "StartOwnershipTransfer").map(e=>this.decodeStartOwnershipTransferEvent(e));
    }
    decodeStartOwnershipTransferEvent(event: Event): Minter.StartOwnershipTransferEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseTransferOwnershipEvent(receipt: TransactionReceipt): Minter.TransferOwnershipEvent[]{
        return this.parseEvents(receipt, "TransferOwnership").map(e=>this.decodeTransferOwnershipEvent(e));
    }
    decodeTransferOwnershipEvent(event: Event): Minter.TransferOwnershipEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseUnpausedEvent(receipt: TransactionReceipt): Minter.UnpausedEvent[]{
        return this.parseEvents(receipt, "Unpaused").map(e=>this.decodeUnpausedEvent(e));
    }
    decodeUnpausedEvent(event: Event): Minter.UnpausedEvent{
        let result = event.data;
        return {
            account: result.account,
            _event: event
        };
    }
    burn: {
        (params: IBurnParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IBurnParams, options?: TransactionOptions) => Promise<void>;
    }
    burned: {
        (param1:string, options?: TransactionOptions): Promise<boolean>;
    }
    crossChainPolicy: {
        (options?: TransactionOptions): Promise<string>;
    }
    deny: {
        (user:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (user:string, options?: TransactionOptions) => Promise<void>;
    }
    isPermitted: {
        (param1:string, options?: TransactionOptions): Promise<BigNumber>;
    }
    mint: {
        (params: IMintParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IMintParams, options?: TransactionOptions) => Promise<void>;
    }
    minted: {
        (params: IMintedParams, options?: TransactionOptions): Promise<boolean>;
    }
    newOwner: {
        (options?: TransactionOptions): Promise<string>;
    }
    owner: {
        (options?: TransactionOptions): Promise<string>;
    }
    pause: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    }
    paused: {
        (options?: TransactionOptions): Promise<boolean>;
    }
    permit: {
        (user:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (user:string, options?: TransactionOptions) => Promise<void>;
    }
    resume: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    }
    setCrossChainPolicy: {
        (crossChainPolicy:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (crossChainPolicy:string, options?: TransactionOptions) => Promise<void>;
    }
    takeOwnership: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    }
    transferOwnership: {
        (newOwner:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (newOwner:string, options?: TransactionOptions) => Promise<void>;
    }
    private assign(){
        let burned_call = async (param1:string, options?: TransactionOptions): Promise<boolean> => {
            let result = await this.call('burned',[this.wallet.utils.stringToBytes32(param1)],options);
            return result;
        }
        this.burned = burned_call
        let crossChainPolicy_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('crossChainPolicy',[],options);
            return result;
        }
        this.crossChainPolicy = crossChainPolicy_call
        let isPermitted_call = async (param1:string, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('isPermitted',[param1],options);
            return new BigNumber(result);
        }
        this.isPermitted = isPermitted_call
        let mintedParams = (params: IMintedParams) => [this.wallet.utils.stringToBytes32(params.param1),this.wallet.utils.toString(params.param2)];
        let minted_call = async (params: IMintedParams, options?: TransactionOptions): Promise<boolean> => {
            let result = await this.call('minted',mintedParams(params),options);
            return result;
        }
        this.minted = minted_call
        let newOwner_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('newOwner',[],options);
            return result;
        }
        this.newOwner = newOwner_call
        let owner_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('owner',[],options);
            return result;
        }
        this.owner = owner_call
        let paused_call = async (options?: TransactionOptions): Promise<boolean> => {
            let result = await this.call('paused',[],options);
            return result;
        }
        this.paused = paused_call
        let burnParams = (params: IBurnParams) => [this.wallet.utils.stringToBytes32(params.txHash),params.token,this.wallet.utils.toString(params.amount)];
        let burn_send = async (params: IBurnParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('burn',burnParams(params),options);
            return result;
        }
        let burn_call = async (params: IBurnParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('burn',burnParams(params),options);
            return;
        }
        this.burn = Object.assign(burn_send, {
            call:burn_call
        });
        let deny_send = async (user:string, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('deny',[user],options);
            return result;
        }
        let deny_call = async (user:string, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('deny',[user],options);
            return;
        }
        this.deny = Object.assign(deny_send, {
            call:deny_call
        });
        let mintParams = (params: IMintParams) => [this.wallet.utils.stringToBytes32(params.txHash),this.wallet.utils.toString(params.transferIndex),params.token,params.destination,this.wallet.utils.toString(params.amount),this.wallet.utils.stringToBytes(params.extraData)];
        let mint_send = async (params: IMintParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('mint',mintParams(params),options);
            return result;
        }
        let mint_call = async (params: IMintParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('mint',mintParams(params),options);
            return;
        }
        this.mint = Object.assign(mint_send, {
            call:mint_call
        });
        let pause_send = async (options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('pause',[],options);
            return result;
        }
        let pause_call = async (options?: TransactionOptions): Promise<void> => {
            let result = await this.call('pause',[],options);
            return;
        }
        this.pause = Object.assign(pause_send, {
            call:pause_call
        });
        let permit_send = async (user:string, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('permit',[user],options);
            return result;
        }
        let permit_call = async (user:string, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('permit',[user],options);
            return;
        }
        this.permit = Object.assign(permit_send, {
            call:permit_call
        });
        let resume_send = async (options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('resume',[],options);
            return result;
        }
        let resume_call = async (options?: TransactionOptions): Promise<void> => {
            let result = await this.call('resume',[],options);
            return;
        }
        this.resume = Object.assign(resume_send, {
            call:resume_call
        });
        let setCrossChainPolicy_send = async (crossChainPolicy:string, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('setCrossChainPolicy',[crossChainPolicy],options);
            return result;
        }
        let setCrossChainPolicy_call = async (crossChainPolicy:string, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('setCrossChainPolicy',[crossChainPolicy],options);
            return;
        }
        this.setCrossChainPolicy = Object.assign(setCrossChainPolicy_send, {
            call:setCrossChainPolicy_call
        });
        let takeOwnership_send = async (options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('takeOwnership',[],options);
            return result;
        }
        let takeOwnership_call = async (options?: TransactionOptions): Promise<void> => {
            let result = await this.call('takeOwnership',[],options);
            return;
        }
        this.takeOwnership = Object.assign(takeOwnership_send, {
            call:takeOwnership_call
        });
        let transferOwnership_send = async (newOwner:string, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('transferOwnership',[newOwner],options);
            return result;
        }
        let transferOwnership_call = async (newOwner:string, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('transferOwnership',[newOwner],options);
            return;
        }
        this.transferOwnership = Object.assign(transferOwnership_send, {
            call:transferOwnership_call
        });
    }
}
export module Minter{
    export interface AuthorizeEvent {user:string,_event:Event}
    export interface BurnEvent {token:string,amount:BigNumber,_event:Event}
    export interface CrossChainPolicyChangedEvent {newPolicy:string,_event:Event}
    export interface DeauthorizeEvent {user:string,_event:Event}
    export interface MintEvent {token:string,destination:string,amount:BigNumber,_event:Event}
    export interface PausedEvent {account:string,_event:Event}
    export interface StartOwnershipTransferEvent {user:string,_event:Event}
    export interface TransferOwnershipEvent {user:string,_event:Event}
    export interface UnpausedEvent {account:string,_event:Event}
}