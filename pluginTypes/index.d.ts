/// <amd-module name="@scom/cross-chain-token-contract/contracts/@openzeppelin/contracts/token/ERC20/ERC20.json.ts" />
declare module "@scom/cross-chain-token-contract/contracts/@openzeppelin/contracts/token/ERC20/ERC20.json.ts" {
    const _default: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default;
}
/// <amd-module name="@scom/cross-chain-token-contract/contracts/@openzeppelin/contracts/token/ERC20/ERC20.ts" />
declare module "@scom/cross-chain-token-contract/contracts/@openzeppelin/contracts/token/ERC20/ERC20.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
    export interface IDeployParams {
        name: string;
        symbol: string;
    }
    export interface IAllowanceParams {
        owner: string;
        spender: string;
    }
    export interface IApproveParams {
        spender: string;
        amount: number | BigNumber;
    }
    export interface IDecreaseAllowanceParams {
        spender: string;
        subtractedValue: number | BigNumber;
    }
    export interface IIncreaseAllowanceParams {
        spender: string;
        addedValue: number | BigNumber;
    }
    export interface ITransferParams {
        recipient: string;
        amount: number | BigNumber;
    }
    export interface ITransferFromParams {
        sender: string;
        recipient: string;
        amount: number | BigNumber;
    }
    export class ERC20 extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
        parseApprovalEvent(receipt: TransactionReceipt): ERC20.ApprovalEvent[];
        decodeApprovalEvent(event: Event): ERC20.ApprovalEvent;
        parseTransferEvent(receipt: TransactionReceipt): ERC20.TransferEvent[];
        decodeTransferEvent(event: Event): ERC20.TransferEvent;
        allowance: {
            (params: IAllowanceParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        approve: {
            (params: IApproveParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IApproveParams, options?: TransactionOptions) => Promise<boolean>;
        };
        balanceOf: {
            (account: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        decimals: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        decreaseAllowance: {
            (params: IDecreaseAllowanceParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IDecreaseAllowanceParams, options?: TransactionOptions) => Promise<boolean>;
        };
        increaseAllowance: {
            (params: IIncreaseAllowanceParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IIncreaseAllowanceParams, options?: TransactionOptions) => Promise<boolean>;
        };
        name: {
            (options?: TransactionOptions): Promise<string>;
        };
        symbol: {
            (options?: TransactionOptions): Promise<string>;
        };
        totalSupply: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        transfer: {
            (params: ITransferParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ITransferParams, options?: TransactionOptions) => Promise<boolean>;
        };
        transferFrom: {
            (params: ITransferFromParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ITransferFromParams, options?: TransactionOptions) => Promise<boolean>;
        };
        private assign;
    }
    export module ERC20 {
        interface ApprovalEvent {
            owner: string;
            spender: string;
            value: BigNumber;
            _event: Event;
        }
        interface TransferEvent {
            from: string;
            to: string;
            value: BigNumber;
            _event: Event;
        }
    }
}
/// <amd-module name="@scom/cross-chain-token-contract/contracts/Authorization.json.ts" />
declare module "@scom/cross-chain-token-contract/contracts/Authorization.json.ts" {
    const _default_1: {
        abi: ({
            inputs: any[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_1;
}
/// <amd-module name="@scom/cross-chain-token-contract/contracts/Authorization.ts" />
declare module "@scom/cross-chain-token-contract/contracts/Authorization.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
    export class Authorization extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(options?: TransactionOptions): Promise<string>;
        parseAuthorizeEvent(receipt: TransactionReceipt): Authorization.AuthorizeEvent[];
        decodeAuthorizeEvent(event: Event): Authorization.AuthorizeEvent;
        parseDeauthorizeEvent(receipt: TransactionReceipt): Authorization.DeauthorizeEvent[];
        decodeDeauthorizeEvent(event: Event): Authorization.DeauthorizeEvent;
        parseStartOwnershipTransferEvent(receipt: TransactionReceipt): Authorization.StartOwnershipTransferEvent[];
        decodeStartOwnershipTransferEvent(event: Event): Authorization.StartOwnershipTransferEvent;
        parseTransferOwnershipEvent(receipt: TransactionReceipt): Authorization.TransferOwnershipEvent[];
        decodeTransferOwnershipEvent(event: Event): Authorization.TransferOwnershipEvent;
        deny: {
            (user: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (user: string, options?: TransactionOptions) => Promise<void>;
        };
        isPermitted: {
            (param1: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        newOwner: {
            (options?: TransactionOptions): Promise<string>;
        };
        owner: {
            (options?: TransactionOptions): Promise<string>;
        };
        permit: {
            (user: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (user: string, options?: TransactionOptions) => Promise<void>;
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
    export module Authorization {
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
}
/// <amd-module name="@scom/cross-chain-token-contract/contracts/CrossChainPolicy.json.ts" />
declare module "@scom/cross-chain-token-contract/contracts/CrossChainPolicy.json.ts" {
    const _default_2: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_2;
}
/// <amd-module name="@scom/cross-chain-token-contract/contracts/CrossChainPolicy.ts" />
declare module "@scom/cross-chain-token-contract/contracts/CrossChainPolicy.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
    export interface IOnTransferParams {
        param1: string;
        param2: string;
        amount: number | BigNumber;
        param4: string;
    }
    export class CrossChainPolicy extends _Contract {
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
    export module CrossChainPolicy {
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
}
/// <amd-module name="@scom/cross-chain-token-contract/contracts/Custodian.json.ts" />
declare module "@scom/cross-chain-token-contract/contracts/Custodian.json.ts" {
    const _default_3: {
        abi: ({
            inputs: any[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_3;
}
/// <amd-module name="@scom/cross-chain-token-contract/contracts/Custodian.ts" />
declare module "@scom/cross-chain-token-contract/contracts/Custodian.ts" {
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
    export class Custodian extends _Contract {
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
    export module Custodian {
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
}
/// <amd-module name="@scom/cross-chain-token-contract/contracts/Minter.json.ts" />
declare module "@scom/cross-chain-token-contract/contracts/Minter.json.ts" {
    const _default_4: {
        abi: ({
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            outputs?: undefined;
            stateMutability?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_4;
}
/// <amd-module name="@scom/cross-chain-token-contract/contracts/Minter.ts" />
declare module "@scom/cross-chain-token-contract/contracts/Minter.ts" {
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
    export class Minter extends _Contract {
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
    export module Minter {
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
}
/// <amd-module name="@scom/cross-chain-token-contract/contracts/Token.json.ts" />
declare module "@scom/cross-chain-token-contract/contracts/Token.json.ts" {
    const _default_5: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_5;
}
/// <amd-module name="@scom/cross-chain-token-contract/contracts/Token.ts" />
declare module "@scom/cross-chain-token-contract/contracts/Token.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
    export interface IDeployParams {
        name: string;
        symbol: string;
    }
    export interface IAllowanceParams {
        owner: string;
        spender: string;
    }
    export interface IApproveParams {
        spender: string;
        amount: number | BigNumber;
    }
    export interface IBurnFromParams {
        account: string;
        amount: number | BigNumber;
    }
    export interface IDecreaseAllowanceParams {
        spender: string;
        subtractedValue: number | BigNumber;
    }
    export interface IIncreaseAllowanceParams {
        spender: string;
        addedValue: number | BigNumber;
    }
    export interface IMintParams {
        account: string;
        amount: number | BigNumber;
    }
    export interface ITransferParams {
        recipient: string;
        amount: number | BigNumber;
    }
    export interface ITransferFromParams {
        sender: string;
        recipient: string;
        amount: number | BigNumber;
    }
    export class Token extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
        parseApprovalEvent(receipt: TransactionReceipt): Token.ApprovalEvent[];
        decodeApprovalEvent(event: Event): Token.ApprovalEvent;
        parseAuthorizeEvent(receipt: TransactionReceipt): Token.AuthorizeEvent[];
        decodeAuthorizeEvent(event: Event): Token.AuthorizeEvent;
        parseDeauthorizeEvent(receipt: TransactionReceipt): Token.DeauthorizeEvent[];
        decodeDeauthorizeEvent(event: Event): Token.DeauthorizeEvent;
        parseStartOwnershipTransferEvent(receipt: TransactionReceipt): Token.StartOwnershipTransferEvent[];
        decodeStartOwnershipTransferEvent(event: Event): Token.StartOwnershipTransferEvent;
        parseTransferEvent(receipt: TransactionReceipt): Token.TransferEvent[];
        decodeTransferEvent(event: Event): Token.TransferEvent;
        parseTransferOwnershipEvent(receipt: TransactionReceipt): Token.TransferOwnershipEvent[];
        decodeTransferOwnershipEvent(event: Event): Token.TransferOwnershipEvent;
        allowance: {
            (params: IAllowanceParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        approve: {
            (params: IApproveParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IApproveParams, options?: TransactionOptions) => Promise<boolean>;
        };
        balanceOf: {
            (account: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        burn: {
            (amount: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (amount: number | BigNumber, options?: TransactionOptions) => Promise<void>;
        };
        burnFrom: {
            (params: IBurnFromParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IBurnFromParams, options?: TransactionOptions) => Promise<void>;
        };
        decimals: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        decreaseAllowance: {
            (params: IDecreaseAllowanceParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IDecreaseAllowanceParams, options?: TransactionOptions) => Promise<boolean>;
        };
        deny: {
            (user: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (user: string, options?: TransactionOptions) => Promise<void>;
        };
        increaseAllowance: {
            (params: IIncreaseAllowanceParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IIncreaseAllowanceParams, options?: TransactionOptions) => Promise<boolean>;
        };
        isPermitted: {
            (param1: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        mint: {
            (params: IMintParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IMintParams, options?: TransactionOptions) => Promise<boolean>;
        };
        name: {
            (options?: TransactionOptions): Promise<string>;
        };
        newOwner: {
            (options?: TransactionOptions): Promise<string>;
        };
        owner: {
            (options?: TransactionOptions): Promise<string>;
        };
        permit: {
            (user: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (user: string, options?: TransactionOptions) => Promise<void>;
        };
        symbol: {
            (options?: TransactionOptions): Promise<string>;
        };
        takeOwnership: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<void>;
        };
        totalSupply: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        transfer: {
            (params: ITransferParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ITransferParams, options?: TransactionOptions) => Promise<boolean>;
        };
        transferFrom: {
            (params: ITransferFromParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ITransferFromParams, options?: TransactionOptions) => Promise<boolean>;
        };
        transferOwnership: {
            (newOwner: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (newOwner: string, options?: TransactionOptions) => Promise<void>;
        };
        private assign;
    }
    export module Token {
        interface ApprovalEvent {
            owner: string;
            spender: string;
            value: BigNumber;
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
        interface TransferEvent {
            from: string;
            to: string;
            value: BigNumber;
            _event: Event;
        }
        interface TransferOwnershipEvent {
            user: string;
            _event: Event;
        }
    }
}
/// <amd-module name="@scom/cross-chain-token-contract/contracts/index.ts" />
declare module "@scom/cross-chain-token-contract/contracts/index.ts" {
    export { ERC20 } from "@scom/cross-chain-token-contract/contracts/@openzeppelin/contracts/token/ERC20/ERC20.ts";
    export { Authorization } from "@scom/cross-chain-token-contract/contracts/Authorization.ts";
    export { CrossChainPolicy } from "@scom/cross-chain-token-contract/contracts/CrossChainPolicy.ts";
    export { Custodian } from "@scom/cross-chain-token-contract/contracts/Custodian.ts";
    export { Minter } from "@scom/cross-chain-token-contract/contracts/Minter.ts";
    export { Token } from "@scom/cross-chain-token-contract/contracts/Token.ts";
}
/// <amd-module name="@scom/cross-chain-token-contract" />
declare module "@scom/cross-chain-token-contract" {
    export * as Contracts from "@scom/cross-chain-token-contract/contracts/index.ts";
}
