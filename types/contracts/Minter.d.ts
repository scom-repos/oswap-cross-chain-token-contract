import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
export interface IBurnParams {
    txHash: string;
    token: string;
    amount: number | BigNumber;
}
export interface IMintParams {
    txHash: string;
    transferIndex: number | BigNumber;
    token: string;
    destination: string;
    amount: number | BigNumber;
    extraData: string;
}
export interface IMintedParams {
    param1: string;
    param2: number | BigNumber;
}
export declare class Minter extends _Contract {
    static _abi: any;
    constructor(wallet: IWallet, address?: string);
    deploy(options?: number | BigNumber | TransactionOptions): Promise<string>;
    parseAuthorizeEvent(receipt: TransactionReceipt): Minter.AuthorizeEvent[];
    decodeAuthorizeEvent(event: Event): Minter.AuthorizeEvent;
    parseBurnEvent(receipt: TransactionReceipt): Minter.BurnEvent[];
    decodeBurnEvent(event: Event): Minter.BurnEvent;
    parseCrossChainPolicyChangedEvent(receipt: TransactionReceipt): Minter.CrossChainPolicyChangedEvent[];
    decodeCrossChainPolicyChangedEvent(event: Event): Minter.CrossChainPolicyChangedEvent;
    parseDeauthorizeEvent(receipt: TransactionReceipt): Minter.DeauthorizeEvent[];
    decodeDeauthorizeEvent(event: Event): Minter.DeauthorizeEvent;
    parseMintEvent(receipt: TransactionReceipt): Minter.MintEvent[];
    decodeMintEvent(event: Event): Minter.MintEvent;
    parsePausedEvent(receipt: TransactionReceipt): Minter.PausedEvent[];
    decodePausedEvent(event: Event): Minter.PausedEvent;
    parseStartOwnershipTransferEvent(receipt: TransactionReceipt): Minter.StartOwnershipTransferEvent[];
    decodeStartOwnershipTransferEvent(event: Event): Minter.StartOwnershipTransferEvent;
    parseTransferOwnershipEvent(receipt: TransactionReceipt): Minter.TransferOwnershipEvent[];
    decodeTransferOwnershipEvent(event: Event): Minter.TransferOwnershipEvent;
    parseUnpausedEvent(receipt: TransactionReceipt): Minter.UnpausedEvent[];
    decodeUnpausedEvent(event: Event): Minter.UnpausedEvent;
    burn: {
        (params: IBurnParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IBurnParams, options?: TransactionOptions) => Promise<void>;
    };
    burned: {
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
    mint: {
        (params: IMintParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IMintParams, options?: TransactionOptions) => Promise<void>;
    };
    minted: {
        (params: IMintedParams, options?: TransactionOptions): Promise<boolean>;
    };
    newOwner: {
        (options?: TransactionOptions): Promise<string>;
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
    resume: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    };
    setCrossChainPolicy: {
        (crossChainPolicy: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (crossChainPolicy: string, options?: TransactionOptions) => Promise<void>;
    };
    takeOwnership: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    };
    transferOwnership: {
        (newOwner: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (newOwner: string, options?: TransactionOptions) => Promise<void>;
    };
    private assign;
}
export declare module Minter {
    interface AuthorizeEvent {
        user: string;
        _event: Event;
    }
    interface BurnEvent {
        token: string;
        amount: BigNumber;
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
    interface MintEvent {
        token: string;
        destination: string;
        amount: BigNumber;
        _event: Event;
    }
    interface PausedEvent {
        account: string;
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
