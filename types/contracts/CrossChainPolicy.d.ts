import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
export interface IOnTransferParams {
    param1: string;
    param2: string;
    amount: number | BigNumber;
    param4: string;
}
export declare class CrossChainPolicy extends _Contract {
    static _abi: any;
    constructor(wallet: IWallet, address?: string);
    deploy(maximumPerDay: number | BigNumber, options?: TransactionOptions): Promise<string>;
    parseAddExtraAllowanceEvent(receipt: TransactionReceipt): CrossChainPolicy.AddExtraAllowanceEvent[];
    decodeAddExtraAllowanceEvent(event: Event): CrossChainPolicy.AddExtraAllowanceEvent;
    parseAuthorizeEvent(receipt: TransactionReceipt): CrossChainPolicy.AuthorizeEvent[];
    decodeAuthorizeEvent(event: Event): CrossChainPolicy.AuthorizeEvent;
    parseDeauthorizeEvent(receipt: TransactionReceipt): CrossChainPolicy.DeauthorizeEvent[];
    decodeDeauthorizeEvent(event: Event): CrossChainPolicy.DeauthorizeEvent;
    parseStartOwnershipTransferEvent(receipt: TransactionReceipt): CrossChainPolicy.StartOwnershipTransferEvent[];
    decodeStartOwnershipTransferEvent(event: Event): CrossChainPolicy.StartOwnershipTransferEvent;
    parseTransferOwnershipEvent(receipt: TransactionReceipt): CrossChainPolicy.TransferOwnershipEvent[];
    decodeTransferOwnershipEvent(event: Event): CrossChainPolicy.TransferOwnershipEvent;
    addExtraAllowance: {
        (amount: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (amount: number | BigNumber, options?: TransactionOptions) => Promise<void>;
    };
    deny: {
        (user: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (user: string, options?: TransactionOptions) => Promise<void>;
    };
    extraAllowance: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    isPermitted: {
        (param1: string, options?: TransactionOptions): Promise<BigNumber>;
    };
    maximumPerDay: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    newOwner: {
        (options?: TransactionOptions): Promise<string>;
    };
    onTransfer: {
        (params: IOnTransferParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IOnTransferParams, options?: TransactionOptions) => Promise<void>;
    };
    owner: {
        (options?: TransactionOptions): Promise<string>;
    };
    permit: {
        (user: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (user: string, options?: TransactionOptions) => Promise<void>;
    };
    remainingAllowance: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    takeOwnership: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    };
    transferOwnership: {
        (newOwner: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (newOwner: string, options?: TransactionOptions) => Promise<void>;
    };
    transferredToday: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    private assign;
}
export declare module CrossChainPolicy {
    interface AddExtraAllowanceEvent {
        who: string;
        amount: BigNumber;
        newAmount: BigNumber;
        _event: Event;
    }
    interface AuthorizeEvent {
        user: string;
        _event: Event;
    }
    interface DeauthorizeEvent {
        user: string;
        _event: Event;
    }
    interface StartOwnershipTransferEvent {
        user: string;
        _event: Event;
    }
    interface TransferOwnershipEvent {
        user: string;
        _event: Event;
    }
}
