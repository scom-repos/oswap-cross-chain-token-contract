import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
export interface IAllowTokenParams {
    token: string;
    allow: boolean;
}
export interface ILockParams {
    token: string;
    amount: number | BigNumber;
}
export interface ILockedParams {
    param1: number | BigNumber;
    param2: string;
    param3: string;
}
export interface IRefundParams {
    txHash: string;
    transferIndex: number | BigNumber;
    token: string;
    destination: string;
    amount: number | BigNumber;
    extraData: string;
}
export interface IRefundedParams {
    param1: string;
    param2: number | BigNumber;
}
export interface ITransferETHParams {
    destination: string;
    amount: number | BigNumber;
}
export interface ITransferTokenParams {
    token: string;
    destination: string;
    amount: number | BigNumber;
}
export declare class Custodian extends _Contract {
    static _abi: any;
    constructor(wallet: IWallet, address?: string);
    deploy(options?: TransactionOptions): Promise<string>;
    parseAllowTokenEvent(receipt: TransactionReceipt): Custodian.AllowTokenEvent[];
    decodeAllowTokenEvent(event: Event): Custodian.AllowTokenEvent;
    parseAuthorizeEvent(receipt: TransactionReceipt): Custodian.AuthorizeEvent[];
    decodeAuthorizeEvent(event: Event): Custodian.AuthorizeEvent;
    parseCrossChainPolicyChangedEvent(receipt: TransactionReceipt): Custodian.CrossChainPolicyChangedEvent[];
    decodeCrossChainPolicyChangedEvent(event: Event): Custodian.CrossChainPolicyChangedEvent;
    parseDeauthorizeEvent(receipt: TransactionReceipt): Custodian.DeauthorizeEvent[];
    decodeDeauthorizeEvent(event: Event): Custodian.DeauthorizeEvent;
    parseLockEvent(receipt: TransactionReceipt): Custodian.LockEvent[];
    decodeLockEvent(event: Event): Custodian.LockEvent;
    parseNewRoundEvent(receipt: TransactionReceipt): Custodian.NewRoundEvent[];
    decodeNewRoundEvent(event: Event): Custodian.NewRoundEvent;
    parsePausedEvent(receipt: TransactionReceipt): Custodian.PausedEvent[];
    decodePausedEvent(event: Event): Custodian.PausedEvent;
    parseRefundEvent(receipt: TransactionReceipt): Custodian.RefundEvent[];
    decodeRefundEvent(event: Event): Custodian.RefundEvent;
    parseStartOwnershipTransferEvent(receipt: TransactionReceipt): Custodian.StartOwnershipTransferEvent[];
    decodeStartOwnershipTransferEvent(event: Event): Custodian.StartOwnershipTransferEvent;
    parseTransferOwnershipEvent(receipt: TransactionReceipt): Custodian.TransferOwnershipEvent[];
    decodeTransferOwnershipEvent(event: Event): Custodian.TransferOwnershipEvent;
    parseUnpausedEvent(receipt: TransactionReceipt): Custodian.UnpausedEvent[];
    decodeUnpausedEvent(event: Event): Custodian.UnpausedEvent;
    allowToken: {
        (params: IAllowTokenParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IAllowTokenParams, options?: TransactionOptions) => Promise<void>;
    };
    allowedTokens: {
        (param1: string, options?: TransactionOptions): Promise<boolean>;
    };
    crossChainPolicy: {
        (options?: TransactionOptions): Promise<string>;
    };
    deny: {
        (user: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (user: string, options?: TransactionOptions) => Promise<void>;
    };
    isPermitted: {
        (param1: string, options?: TransactionOptions): Promise<BigNumber>;
    };
    lock: {
        (params: ILockParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ILockParams, options?: TransactionOptions) => Promise<void>;
    };
    locked: {
        (params: ILockedParams, options?: TransactionOptions): Promise<BigNumber>;
    };
    newOwner: {
        (options?: TransactionOptions): Promise<string>;
    };
    newRound: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    };
    owner: {
        (options?: TransactionOptions): Promise<string>;
    };
    pause: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    };
    paused: {
        (options?: TransactionOptions): Promise<boolean>;
    };
    permit: {
        (user: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (user: string, options?: TransactionOptions) => Promise<void>;
    };
    refund: {
        (params: IRefundParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IRefundParams, options?: TransactionOptions) => Promise<void>;
    };
    refunded: {
        (params: IRefundedParams, options?: TransactionOptions): Promise<boolean>;
    };
    resume: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    };
    round: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    setCrossChainPolicy: {
        (crossChainPolicy: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (crossChainPolicy: string, options?: TransactionOptions) => Promise<void>;
    };
    takeOwnership: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    };
    transferETH: {
        (params: ITransferETHParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ITransferETHParams, options?: TransactionOptions) => Promise<void>;
    };
    transferOwnership: {
        (newOwner: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (newOwner: string, options?: TransactionOptions) => Promise<void>;
    };
    transferToken: {
        (params: ITransferTokenParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ITransferTokenParams, options?: TransactionOptions) => Promise<void>;
    };
    private assign;
}
export declare module Custodian {
    interface AllowTokenEvent {
        token: string;
        isAllow: boolean;
        msgSender: string;
        _event: Event;
    }
    interface AuthorizeEvent {
        user: string;
        _event: Event;
    }
    interface CrossChainPolicyChangedEvent {
        newPolicy: string;
        _event: Event;
    }
    interface DeauthorizeEvent {
        user: string;
        _event: Event;
    }
    interface LockEvent {
        from: string;
        round: BigNumber;
        token: string;
        amount: BigNumber;
        newBalance: BigNumber;
        _event: Event;
    }
    interface NewRoundEvent {
        round: BigNumber;
        _event: Event;
    }
    interface PausedEvent {
        account: string;
        _event: Event;
    }
    interface RefundEvent {
        token: string;
        destination: string;
        amount: BigNumber;
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
    interface UnpausedEvent {
        account: string;
        _event: Event;
    }
}
