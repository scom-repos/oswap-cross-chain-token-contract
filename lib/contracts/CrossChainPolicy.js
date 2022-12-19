"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrossChainPolicy = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const CrossChainPolicy_json_1 = __importDefault(require("./CrossChainPolicy.json"));
class CrossChainPolicy extends eth_contract_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, CrossChainPolicy_json_1.default.abi, CrossChainPolicy_json_1.default.bytecode);
        this.assign();
    }
    deploy(maximumPerDay, options) {
        return this.__deploy([this.wallet.utils.toString(maximumPerDay)], options);
    }
    parseAddExtraAllowanceEvent(receipt) {
        return this.parseEvents(receipt, "AddExtraAllowance").map(e => this.decodeAddExtraAllowanceEvent(e));
    }
    decodeAddExtraAllowanceEvent(event) {
        let result = event.data;
        return {
            who: result.who,
            amount: new eth_contract_1.BigNumber(result.amount),
            newAmount: new eth_contract_1.BigNumber(result.newAmount),
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
    assign() {
        let extraAllowance_call = async (options) => {
            let result = await this.call('extraAllowance', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.extraAllowance = extraAllowance_call;
        let isPermitted_call = async (param1, options) => {
            let result = await this.call('isPermitted', [param1], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.isPermitted = isPermitted_call;
        let maximumPerDay_call = async (options) => {
            let result = await this.call('maximumPerDay', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.maximumPerDay = maximumPerDay_call;
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
        let remainingAllowance_call = async (options) => {
            let result = await this.call('remainingAllowance', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.remainingAllowance = remainingAllowance_call;
        let transferredToday_call = async (options) => {
            let result = await this.call('transferredToday', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.transferredToday = transferredToday_call;
        let addExtraAllowance_send = async (amount, options) => {
            let result = await this.send('addExtraAllowance', [this.wallet.utils.toString(amount)], options);
            return result;
        };
        let addExtraAllowance_call = async (amount, options) => {
            let result = await this.call('addExtraAllowance', [this.wallet.utils.toString(amount)], options);
            return;
        };
        this.addExtraAllowance = Object.assign(addExtraAllowance_send, {
            call: addExtraAllowance_call
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
        let onTransferParams = (params) => [params.param1, params.param2, this.wallet.utils.toString(params.amount), this.wallet.utils.stringToBytes(params.param4)];
        let onTransfer_send = async (params, options) => {
            let result = await this.send('onTransfer', onTransferParams(params), options);
            return result;
        };
        let onTransfer_call = async (params, options) => {
            let result = await this.call('onTransfer', onTransferParams(params), options);
            return;
        };
        this.onTransfer = Object.assign(onTransfer_send, {
            call: onTransfer_call
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
    }
}
exports.CrossChainPolicy = CrossChainPolicy;
CrossChainPolicy._abi = CrossChainPolicy_json_1.default.abi;
