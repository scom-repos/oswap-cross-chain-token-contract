import {IWallet, Contract as _Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj, TransactionOptions} from "@ijstech/eth-contract";
import Bin from "./Custodian.json";
export interface IAllowTokenParams {token:string;allow:boolean}
export interface ILockParams {token:string;amount:number|BigNumber}
export interface ILockedParams {param1:number|BigNumber;param2:string;param3:string}
export interface IRefundParams {txHash:string;transferIndex:number|BigNumber;token:string;destination:string;amount:number|BigNumber;extraData:string}
export interface IRefundedParams {param1:string;param2:number|BigNumber}
export interface ITransferETHParams {destination:string;amount:number|BigNumber}
export interface ITransferTokenParams {token:string;destination:string;amount:number|BigNumber}
export class Custodian extends _Contract{
    static _abi: any = Bin.abi;
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(options?: TransactionOptions): Promise<string>{
        return this.__deploy([], options);
    }
    parseAllowTokenEvent(receipt: TransactionReceipt): Custodian.AllowTokenEvent[]{
        return this.parseEvents(receipt, "AllowToken").map(e=>this.decodeAllowTokenEvent(e));
    }
    decodeAllowTokenEvent(event: Event): Custodian.AllowTokenEvent{
        let result = event.data;
        return {
            token: result.token,
            isAllow: result.isAllow,
            msgSender: result.msgSender,
            _event: event
        };
    }
    parseAuthorizeEvent(receipt: TransactionReceipt): Custodian.AuthorizeEvent[]{
        return this.parseEvents(receipt, "Authorize").map(e=>this.decodeAuthorizeEvent(e));
    }
    decodeAuthorizeEvent(event: Event): Custodian.AuthorizeEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseCrossChainPolicyChangedEvent(receipt: TransactionReceipt): Custodian.CrossChainPolicyChangedEvent[]{
        return this.parseEvents(receipt, "CrossChainPolicyChanged").map(e=>this.decodeCrossChainPolicyChangedEvent(e));
    }
    decodeCrossChainPolicyChangedEvent(event: Event): Custodian.CrossChainPolicyChangedEvent{
        let result = event.data;
        return {
            newPolicy: result.newPolicy,
            _event: event
        };
    }
    parseDeauthorizeEvent(receipt: TransactionReceipt): Custodian.DeauthorizeEvent[]{
        return this.parseEvents(receipt, "Deauthorize").map(e=>this.decodeDeauthorizeEvent(e));
    }
    decodeDeauthorizeEvent(event: Event): Custodian.DeauthorizeEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseLockEvent(receipt: TransactionReceipt): Custodian.LockEvent[]{
        return this.parseEvents(receipt, "Lock").map(e=>this.decodeLockEvent(e));
    }
    decodeLockEvent(event: Event): Custodian.LockEvent{
        let result = event.data;
        return {
            from: result.from,
            round: new BigNumber(result.round),
            token: result.token,
            amount: new BigNumber(result.amount),
            newBalance: new BigNumber(result.newBalance),
            _event: event
        };
    }
    parseNewRoundEvent(receipt: TransactionReceipt): Custodian.NewRoundEvent[]{
        return this.parseEvents(receipt, "NewRound").map(e=>this.decodeNewRoundEvent(e));
    }
    decodeNewRoundEvent(event: Event): Custodian.NewRoundEvent{
        let result = event.data;
        return {
            round: new BigNumber(result.round),
            _event: event
        };
    }
    parsePausedEvent(receipt: TransactionReceipt): Custodian.PausedEvent[]{
        return this.parseEvents(receipt, "Paused").map(e=>this.decodePausedEvent(e));
    }
    decodePausedEvent(event: Event): Custodian.PausedEvent{
        let result = event.data;
        return {
            account: result.account,
            _event: event
        };
    }
    parseRefundEvent(receipt: TransactionReceipt): Custodian.RefundEvent[]{
        return this.parseEvents(receipt, "Refund").map(e=>this.decodeRefundEvent(e));
    }
    decodeRefundEvent(event: Event): Custodian.RefundEvent{
        let result = event.data;
        return {
            token: result.token,
            destination: result.destination,
            amount: new BigNumber(result.amount),
            _event: event
        };
    }
    parseStartOwnershipTransferEvent(receipt: TransactionReceipt): Custodian.StartOwnershipTransferEvent[]{
        return this.parseEvents(receipt, "StartOwnershipTransfer").map(e=>this.decodeStartOwnershipTransferEvent(e));
    }
    decodeStartOwnershipTransferEvent(event: Event): Custodian.StartOwnershipTransferEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseTransferOwnershipEvent(receipt: TransactionReceipt): Custodian.TransferOwnershipEvent[]{
        return this.parseEvents(receipt, "TransferOwnership").map(e=>this.decodeTransferOwnershipEvent(e));
    }
    decodeTransferOwnershipEvent(event: Event): Custodian.TransferOwnershipEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseUnpausedEvent(receipt: TransactionReceipt): Custodian.UnpausedEvent[]{
        return this.parseEvents(receipt, "Unpaused").map(e=>this.decodeUnpausedEvent(e));
    }
    decodeUnpausedEvent(event: Event): Custodian.UnpausedEvent{
        let result = event.data;
        return {
            account: result.account,
            _event: event
        };
    }
    allowToken: {
        (params: IAllowTokenParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IAllowTokenParams, options?: TransactionOptions) => Promise<void>;
    }
    allowedTokens: {
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
    lock: {
        (params: ILockParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ILockParams, options?: TransactionOptions) => Promise<void>;
    }
    locked: {
        (params: ILockedParams, options?: TransactionOptions): Promise<BigNumber>;
    }
    newOwner: {
        (options?: TransactionOptions): Promise<string>;
    }
    newRound: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
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
    refund: {
        (params: IRefundParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IRefundParams, options?: TransactionOptions) => Promise<void>;
    }
    refunded: {
        (params: IRefundedParams, options?: TransactionOptions): Promise<boolean>;
    }
    resume: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    }
    round: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    setCrossChainPolicy: {
        (crossChainPolicy:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (crossChainPolicy:string, options?: TransactionOptions) => Promise<void>;
    }
    takeOwnership: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    }
    transferETH: {
        (params: ITransferETHParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ITransferETHParams, options?: TransactionOptions) => Promise<void>;
    }
    transferOwnership: {
        (newOwner:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (newOwner:string, options?: TransactionOptions) => Promise<void>;
    }
    transferToken: {
        (params: ITransferTokenParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ITransferTokenParams, options?: TransactionOptions) => Promise<void>;
    }
    private assign(){
        let allowedTokens_call = async (param1:string, options?: TransactionOptions): Promise<boolean> => {
            let result = await this.call('allowedTokens',[param1],options);
            return result;
        }
        this.allowedTokens = allowedTokens_call
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
        let lockedParams = (params: ILockedParams) => [this.wallet.utils.toString(params.param1),params.param2,params.param3];
        let locked_call = async (params: ILockedParams, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('locked',lockedParams(params),options);
            return new BigNumber(result);
        }
        this.locked = locked_call
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
        let refundedParams = (params: IRefundedParams) => [this.wallet.utils.stringToBytes32(params.param1),this.wallet.utils.toString(params.param2)];
        let refunded_call = async (params: IRefundedParams, options?: TransactionOptions): Promise<boolean> => {
            let result = await this.call('refunded',refundedParams(params),options);
            return result;
        }
        this.refunded = refunded_call
        let round_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('round',[],options);
            return new BigNumber(result);
        }
        this.round = round_call
        let allowTokenParams = (params: IAllowTokenParams) => [params.token,params.allow];
        let allowToken_send = async (params: IAllowTokenParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('allowToken',allowTokenParams(params),options);
            return result;
        }
        let allowToken_call = async (params: IAllowTokenParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('allowToken',allowTokenParams(params),options);
            return;
        }
        this.allowToken = Object.assign(allowToken_send, {
            call:allowToken_call
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
        let lockParams = (params: ILockParams) => [params.token,this.wallet.utils.toString(params.amount)];
        let lock_send = async (params: ILockParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('lock',lockParams(params),options);
            return result;
        }
        let lock_call = async (params: ILockParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('lock',lockParams(params),options);
            return;
        }
        this.lock = Object.assign(lock_send, {
            call:lock_call
        });
        let newRound_send = async (options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('newRound',[],options);
            return result;
        }
        let newRound_call = async (options?: TransactionOptions): Promise<void> => {
            let result = await this.call('newRound',[],options);
            return;
        }
        this.newRound = Object.assign(newRound_send, {
            call:newRound_call
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
        let refundParams = (params: IRefundParams) => [this.wallet.utils.stringToBytes32(params.txHash),this.wallet.utils.toString(params.transferIndex),params.token,params.destination,this.wallet.utils.toString(params.amount),this.wallet.utils.stringToBytes(params.extraData)];
        let refund_send = async (params: IRefundParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('refund',refundParams(params),options);
            return result;
        }
        let refund_call = async (params: IRefundParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('refund',refundParams(params),options);
            return;
        }
        this.refund = Object.assign(refund_send, {
            call:refund_call
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
        let transferETHParams = (params: ITransferETHParams) => [params.destination,this.wallet.utils.toString(params.amount)];
        let transferETH_send = async (params: ITransferETHParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('transferETH',transferETHParams(params),options);
            return result;
        }
        let transferETH_call = async (params: ITransferETHParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('transferETH',transferETHParams(params),options);
            return;
        }
        this.transferETH = Object.assign(transferETH_send, {
            call:transferETH_call
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
        let transferTokenParams = (params: ITransferTokenParams) => [params.token,params.destination,this.wallet.utils.toString(params.amount)];
        let transferToken_send = async (params: ITransferTokenParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('transferToken',transferTokenParams(params),options);
            return result;
        }
        let transferToken_call = async (params: ITransferTokenParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('transferToken',transferTokenParams(params),options);
            return;
        }
        this.transferToken = Object.assign(transferToken_send, {
            call:transferToken_call
        });
    }
}
export module Custodian{
    export interface AllowTokenEvent {token:string,isAllow:boolean,msgSender:string,_event:Event}
    export interface AuthorizeEvent {user:string,_event:Event}
    export interface CrossChainPolicyChangedEvent {newPolicy:string,_event:Event}
    export interface DeauthorizeEvent {user:string,_event:Event}
    export interface LockEvent {from:string,round:BigNumber,token:string,amount:BigNumber,newBalance:BigNumber,_event:Event}
    export interface NewRoundEvent {round:BigNumber,_event:Event}
    export interface PausedEvent {account:string,_event:Event}
    export interface RefundEvent {token:string,destination:string,amount:BigNumber,_event:Event}
    export interface StartOwnershipTransferEvent {user:string,_event:Event}
    export interface TransferOwnershipEvent {user:string,_event:Event}
    export interface UnpausedEvent {account:string,_event:Event}
}