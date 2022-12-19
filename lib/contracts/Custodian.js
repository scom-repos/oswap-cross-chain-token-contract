"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Custodian = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const Custodian_json_1 = __importDefault(require("./Custodian.json"));
class Custodian extends eth_contract_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, Custodian_json_1.default.abi, Custodian_json_1.default.bytecode);
        this.assign();
    }
    deploy(options) {
        return this.__deploy([], options);
    }
    parseAllowTokenEvent(receipt) {
        return this.parseEvents(receipt, "AllowToken").map(e => this.decodeAllowTokenEvent(e));
    }
    decodeAllowTokenEvent(event) {
        let result = event.data;
        return {
            token: result.token,
            isAllow: result.isAllow,
            msgSender: result.msgSender,
            _event: event
        };
    }
    parseAuthorizeEvent(receipt) {
        return this.parseEvents(receipt, "Authorize").map(e => this.decodeAuthorizeEvent(e));
    }
    decodeAuthorizeEvent(event) {
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseCrossChainPolicyChangedEvent(receipt) {
        return this.parseEvents(receipt, "CrossChainPolicyChanged").map(e => this.decodeCrossChainPolicyChangedEvent(e));
    }
    decodeCrossChainPolicyChangedEvent(event) {
        let result = event.data;
        return {
            newPolicy: result.newPolicy,
            _event: event
        };
    }
    parseDeauthorizeEvent(receipt) {
        return this.parseEvents(receipt, "Deauthorize").map(e => this.decodeDeauthorizeEvent(e));
    }
    decodeDeauthorizeEvent(event) {
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseLockEvent(receipt) {
        return this.parseEvents(receipt, "Lock").map(e => this.decodeLockEvent(e));
    }
    decodeLockEvent(event) {
        let result = event.data;
        return {
            from: result.from,
            round: new eth_contract_1.BigNumber(result.round),
            token: result.token,
            amount: new eth_contract_1.BigNumber(result.amount),
            newBalance: new eth_contract_1.BigNumber(result.newBalance),
            _event: event
        };
    }
    parseNewRoundEvent(receipt) {
        return this.parseEvents(receipt, "NewRound").map(e => this.decodeNewRoundEvent(e));
    }
    decodeNewRoundEvent(event) {
        let result = event.data;
        return {
            round: new eth_contract_1.BigNumber(result.round),
            _event: event
        };
    }
    parsePausedEvent(receipt) {
        return this.parseEvents(receipt, "Paused").map(e => this.decodePausedEvent(e));
    }
    decodePausedEvent(event) {
        let result = event.data;
        return {
            account: result.account,
            _event: event
        };
    }
    parseRefundEvent(receipt) {
        return this.parseEvents(receipt, "Refund").map(e => this.decodeRefundEvent(e));
    }
    decodeRefundEvent(event) {
        let result = event.data;
        return {
            token: result.token,
            destination: result.destination,
            amount: new eth_contract_1.BigNumber(result.amount),
            _event: event
        };
    }
    parseStartOwnershipTransferEvent(receipt) {
        return this.parseEvents(receipt, "StartOwnershipTransfer").map(e => this.decodeStartOwnershipTransferEvent(e));
    }
    decodeStartOwnershipTransferEvent(event) {
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseTransferOwnershipEvent(receipt) {
        return this.parseEvents(receipt, "TransferOwnership").map(e => this.decodeTransferOwnershipEvent(e));
    }
    decodeTransferOwnershipEvent(event) {
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseUnpausedEvent(receipt) {
        return this.parseEvents(receipt, "Unpaused").map(e => this.decodeUnpausedEvent(e));
    }
    decodeUnpausedEvent(event) {
        let result = event.data;
        return {
            account: result.account,
            _event: event
        };
    }
    assign() {
        let allowedTokens_call = async (param1, options) => {
            let result = await this.call('allowedTokens', [param1], options);
            return result;
        };
        this.allowedTokens = allowedTokens_call;
        let crossChainPolicy_call = async (options) => {
            let result = await this.call('crossChainPolicy', [], options);
            return result;
        };
        this.crossChainPolicy = crossChainPolicy_call;
        let isPermitted_call = async (param1, options) => {
            let result = await this.call('isPermitted', [param1], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.isPermitted = isPermitted_call;
        let lockedParams = (params) => [this.wallet.utils.toString(params.param1), params.param2, params.param3];
        let locked_call = async (params, options) => {
            let result = await this.call('locked', lockedParams(params), options);
            return new eth_contract_1.BigNumber(result);
        };
        this.locked = locked_call;
        let newOwner_call = async (options) => {
            let result = await this.call('newOwner', [], options);
            return result;
        };
        this.newOwner = newOwner_call;
        let owner_call = async (options) => {
            let result = await this.call('owner', [], options);
            return result;
        };
        this.owner = owner_call;
        let paused_call = async (options) => {
            let result = await this.call('paused', [], options);
            return result;
        };
        this.paused = paused_call;
        let refundedParams = (params) => [this.wallet.utils.stringToBytes32(params.param1), this.wallet.utils.toString(params.param2)];
        let refunded_call = async (params, options) => {
            let result = await this.call('refunded', refundedParams(params), options);
            return result;
        };
        this.refunded = refunded_call;
        let round_call = async (options) => {
            let result = await this.call('round', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.round = round_call;
        let allowTokenParams = (params) => [params.token, params.allow];
        let allowToken_send = async (params, options) => {
            let result = await this.send('allowToken', allowTokenParams(params), options);
            return result;
        };
        let allowToken_call = async (params, options) => {
            let result = await this.call('allowToken', allowTokenParams(params), options);
            return;
        };
        this.allowToken = Object.assign(allowToken_send, {
            call: allowToken_call
        });
        let deny_send = async (user, options) => {
            let result = await this.send('deny', [user], options);
            return result;
        };
        let deny_call = async (user, options) => {
            let result = await this.call('deny', [user], options);
            return;
        };
        this.deny = Object.assign(deny_send, {
            call: deny_call
        });
        let lockParams = (params) => [params.token, this.wallet.utils.toString(params.amount)];
        let lock_send = async (params, options) => {
            let result = await this.send('lock', lockParams(params), options);
            return result;
        };
        let lock_call = async (params, options) => {
            let result = await this.call('lock', lockParams(params), options);
            return;
        };
        this.lock = Object.assign(lock_send, {
            call: lock_call
        });
        let newRound_send = async (options) => {
            let result = await this.send('newRound', [], options);
            return result;
        };
        let newRound_call = async (options) => {
            let result = await this.call('newRound', [], options);
            return;
        };
        this.newRound = Object.assign(newRound_send, {
            call: newRound_call
        });
        let pause_send = async (options) => {
            let result = await this.send('pause', [], options);
            return result;
        };
        let pause_call = async (options) => {
            let result = await this.call('pause', [], options);
            return;
        };
        this.pause = Object.assign(pause_send, {
            call: pause_call
        });
        let permit_send = async (user, options) => {
            let result = await this.send('permit', [user], options);
            return result;
        };
        let permit_call = async (user, options) => {
            let result = await this.call('permit', [user], options);
            return;
        };
        this.permit = Object.assign(permit_send, {
            call: permit_call
        });
        let refundParams = (params) => [this.wallet.utils.stringToBytes32(params.txHash), this.wallet.utils.toString(params.transferIndex), params.token, params.destination, this.wallet.utils.toString(params.amount), this.wallet.utils.stringToBytes(params.extraData)];
        let refund_send = async (params, options) => {
            let result = await this.send('refund', refundParams(params), options);
            return result;
        };
        let refund_call = async (params, options) => {
            let result = await this.call('refund', refundParams(params), options);
            return;
        };
        this.refund = Object.assign(refund_send, {
            call: refund_call
        });
        let resume_send = async (options) => {
            let result = await this.send('resume', [], options);
            return result;
        };
        let resume_call = async (options) => {
            let result = await this.call('resume', [], options);
            return;
        };
        this.resume = Object.assign(resume_send, {
            call: resume_call
        });
        let setCrossChainPolicy_send = async (crossChainPolicy, options) => {
            let result = await this.send('setCrossChainPolicy', [crossChainPolicy], options);
            return result;
        };
        let setCrossChainPolicy_call = async (crossChainPolicy, options) => {
            let result = await this.call('setCrossChainPolicy', [crossChainPolicy], options);
            return;
        };
        this.setCrossChainPolicy = Object.assign(setCrossChainPolicy_send, {
            call: setCrossChainPolicy_call
        });
        let takeOwnership_send = async (options) => {
            let result = await this.send('takeOwnership', [], options);
            return result;
        };
        let takeOwnership_call = async (options) => {
            let result = await this.call('takeOwnership', [], options);
            return;
        };
        this.takeOwnership = Object.assign(takeOwnership_send, {
            call: takeOwnership_call
        });
        let transferETHParams = (params) => [params.destination, this.wallet.utils.toString(params.amount)];
        let transferETH_send = async (params, options) => {
            let result = await this.send('transferETH', transferETHParams(params), options);
            return result;
        };
        let transferETH_call = async (params, options) => {
            let result = await this.call('transferETH', transferETHParams(params), options);
            return;
        };
        this.transferETH = Object.assign(transferETH_send, {
            call: transferETH_call
        });
        let transferOwnership_send = async (newOwner, options) => {
            let result = await this.send('transferOwnership', [newOwner], options);
            return result;
        };
        let transferOwnership_call = async (newOwner, options) => {
            let result = await this.call('transferOwnership', [newOwner], options);
            return;
        };
        this.transferOwnership = Object.assign(transferOwnership_send, {
            call: transferOwnership_call
        });
        let transferTokenParams = (params) => [params.token, params.destination, this.wallet.utils.toString(params.amount)];
        let transferToken_send = async (params, options) => {
            let result = await this.send('transferToken', transferTokenParams(params), options);
            return result;
        };
        let transferToken_call = async (params, options) => {
            let result = await this.call('transferToken', transferTokenParams(params), options);
            return;
        };
        this.transferToken = Object.assign(transferToken_send, {
            call: transferToken_call
        });
    }
}
exports.Custodian = Custodian;
Custodian._abi = Custodian_json_1.default.abi;
