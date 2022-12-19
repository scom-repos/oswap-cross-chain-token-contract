import {IWallet, Contract as _Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj, TransactionOptions} from "@ijstech/eth-contract";
import Bin from "./CrossChainPolicy.json";
export interface IOnTransferParams {param1:string;param2:string;amount:number|BigNumber;param4:string}
export class CrossChainPolicy extends _Contract{
    static _abi: any = Bin.abi;
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(maximumPerDay:number|BigNumber, options?: TransactionOptions): Promise<string>{
        return this.__deploy([this.wallet.utils.toString(maximumPerDay)], options);
    }
    parseAddExtraAllowanceEvent(receipt: TransactionReceipt): CrossChainPolicy.AddExtraAllowanceEvent[]{
        return this.parseEvents(receipt, "AddExtraAllowance").map(e=>this.decodeAddExtraAllowanceEvent(e));
    }
    decodeAddExtraAllowanceEvent(event: Event): CrossChainPolicy.AddExtraAllowanceEvent{
        let result = event.data;
        return {
            who: result.who,
            amount: new BigNumber(result.amount),
            newAmount: new BigNumber(result.newAmount),
            _event: event
        };
    }
    parseAuthorizeEvent(receipt: TransactionReceipt): CrossChainPolicy.AuthorizeEvent[]{
        return this.parseEvents(receipt, "Authorize").map(e=>this.decodeAuthorizeEvent(e));
    }
    decodeAuthorizeEvent(event: Event): CrossChainPolicy.AuthorizeEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseDeauthorizeEvent(receipt: TransactionReceipt): CrossChainPolicy.DeauthorizeEvent[]{
        return this.parseEvents(receipt, "Deauthorize").map(e=>this.decodeDeauthorizeEvent(e));
    }
    decodeDeauthorizeEvent(event: Event): CrossChainPolicy.DeauthorizeEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseStartOwnershipTransferEvent(receipt: TransactionReceipt): CrossChainPolicy.StartOwnershipTransferEvent[]{
        return this.parseEvents(receipt, "StartOwnershipTransfer").map(e=>this.decodeStartOwnershipTransferEvent(e));
    }
    decodeStartOwnershipTransferEvent(event: Event): CrossChainPolicy.StartOwnershipTransferEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseTransferOwnershipEvent(receipt: TransactionReceipt): CrossChainPolicy.TransferOwnershipEvent[]{
        return this.parseEvents(receipt, "TransferOwnership").map(e=>this.decodeTransferOwnershipEvent(e));
    }
    decodeTransferOwnershipEvent(event: Event): CrossChainPolicy.TransferOwnershipEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    addExtraAllowance: {
        (amount:number|BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (amount:number|BigNumber, options?: TransactionOptions) => Promise<void>;
    }
    deny: {
        (user:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (user:string, options?: TransactionOptions) => Promise<void>;
    }
    extraAllowance: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    isPermitted: {
        (param1:string, options?: TransactionOptions): Promise<BigNumber>;
    }
    maximumPerDay: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    newOwner: {
        (options?: TransactionOptions): Promise<string>;
    }
    onTransfer: {
        (params: IOnTransferParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IOnTransferParams, options?: TransactionOptions) => Promise<void>;
    }
    owner: {
        (options?: TransactionOptions): Promise<string>;
    }
    permit: {
        (user:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (user:string, options?: TransactionOptions) => Promise<void>;
    }
    remainingAllowance: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    takeOwnership: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    }
    transferOwnership: {
        (newOwner:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (newOwner:string, options?: TransactionOptions) => Promise<void>;
    }
    transferredToday: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    private assign(){
        let extraAllowance_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('extraAllowance',[],options);
            return new BigNumber(result);
        }
        this.extraAllowance = extraAllowance_call
        let isPermitted_call = async (param1:string, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('isPermitted',[param1],options);
            return new BigNumber(result);
        }
        this.isPermitted = isPermitted_call
        let maximumPerDay_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('maximumPerDay',[],options);
            return new BigNumber(result);
        }
        this.maximumPerDay = maximumPerDay_call
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
        let remainingAllowance_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('remainingAllowance',[],options);
            return new BigNumber(result);
        }
        this.remainingAllowance = remainingAllowance_call
        let transferredToday_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('transferredToday',[],options);
            return new BigNumber(result);
        }
        this.transferredToday = transferredToday_call
        let addExtraAllowance_send = async (amount:number|BigNumber, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('addExtraAllowance',[this.wallet.utils.toString(amount)],options);
            return result;
        }
        let addExtraAllowance_call = async (amount:number|BigNumber, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('addExtraAllowance',[this.wallet.utils.toString(amount)],options);
            return;
        }
        this.addExtraAllowance = Object.assign(addExtraAllowance_send, {
            call:addExtraAllowance_call
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
        let onTransferParams = (params: IOnTransferParams) => [params.param1,params.param2,this.wallet.utils.toString(params.amount),this.wallet.utils.stringToBytes(params.param4)];
        let onTransfer_send = async (params: IOnTransferParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('onTransfer',onTransferParams(params),options);
            return result;
        }
        let onTransfer_call = async (params: IOnTransferParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('onTransfer',onTransferParams(params),options);
            return;
        }
        this.onTransfer = Object.assign(onTransfer_send, {
            call:onTransfer_call
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
export module CrossChainPolicy{
    export interface AddExtraAllowanceEvent {who:string,amount:BigNumber,newAmount:BigNumber,_event:Event}
    export interface AuthorizeEvent {user:string,_event:Event}
    export interface DeauthorizeEvent {user:string,_event:Event}
    export interface StartOwnershipTransferEvent {user:string,_event:Event}
    export interface TransferOwnershipEvent {user:string,_event:Event}
}