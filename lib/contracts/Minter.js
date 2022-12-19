"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Minter = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const Minter_json_1 = __importDefault(require("./Minter.json"));
class Minter extends eth_contract_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, Minter_json_1.default.abi, Minter_json_1.default.bytecode);
        this.assign();
    }
    deploy(options) {
        return this.__deploy([], options);
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
    parseBurnEvent(receipt) {
        return this.parseEvents(receipt, "Burn").map(e => this.decodeBurnEvent(e));
    }
    decodeBurnEvent(event) {
        let result = event.data;
        return {
            token: result.token,
            amount: new eth_contract_1.BigNumber(result.amount),
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
    parseMintEvent(receipt) {
        return this.parseEvents(receipt, "Mint").map(e => this.decodeMintEvent(e));
    }
    decodeMintEvent(event) {
        let result = event.data;
        return {
            token: result.token,
            destination: result.destination,
            amount: new eth_contract_1.BigNumber(result.amount),
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
        let burned_call = async (param1, options) => {
            let result = await this.call('burned', [this.wallet.utils.stringToBytes32(param1)], options);
            return result;
        };
        this.burned = burned_call;
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
        let mintedParams = (params) => [this.wallet.utils.stringToBytes32(params.param1), this.wallet.utils.toString(params.param2)];
        let minted_call = async (params, options) => {
            let result = await this.call('minted', mintedParams(params), options);
            return result;
        };
        this.minted = minted_call;
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
        let burnParams = (params) => [this.wallet.utils.stringToBytes32(params.txHash), params.token, this.wallet.utils.toString(params.amount)];
        let burn_send = async (params, options) => {
            let result = await this.send('burn', burnParams(params), options);
            return result;
        };
        let burn_call = async (params, options) => {
            let result = await this.call('burn', burnParams(params), options);
            return;
        };
        this.burn = Object.assign(burn_send, {
            call: burn_call
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
        let mintParams = (params) => [this.wallet.utils.stringToBytes32(params.txHash), this.wallet.utils.toString(params.transferIndex), params.token, params.destination, this.wallet.utils.toString(params.amount), this.wallet.utils.stringToBytes(params.extraData)];
        let mint_send = async (params, options) => {
            let result = await this.send('mint', mintParams(params), options);
            return result;
        };
        let mint_call = async (params, options) => {
            let result = await this.call('mint', mintParams(params), options);
            return;
        };
        this.mint = Object.assign(mint_send, {
            call: mint_call
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
exports.Minter = Minter;
Minter._abi = Minter_json_1.default.abi;
