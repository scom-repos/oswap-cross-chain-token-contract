define("@scom/cross-chain-token-contract/contracts/@openzeppelin/contracts/token/ERC20/ERC20.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@scom/cross-chain-token-contract/contracts/@openzeppelin/contracts/token/ERC20/ERC20.json.ts'/> 
    exports.default = {
        "abi": [
            { "inputs": [{ "internalType": "string", "name": "name_", "type": "string" }, { "internalType": "string", "name": "symbol_", "type": "string" }], "stateMutability": "nonpayable", "type": "constructor" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" },
            { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }
        ],
        "bytecode": "60806040523480156200001157600080fd5b5060405162000de938038062000de98339810160408190526200003491620001db565b81516200004990600390602085019062000068565b5080516200005f90600490602084019062000068565b50505062000282565b828054620000769062000245565b90600052602060002090601f0160209004810192826200009a5760008555620000e5565b82601f10620000b557805160ff1916838001178555620000e5565b82800160010185558215620000e5579182015b82811115620000e5578251825591602001919060010190620000c8565b50620000f3929150620000f7565b5090565b5b80821115620000f35760008155600101620000f8565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200013657600080fd5b81516001600160401b03808211156200015357620001536200010e565b604051601f8301601f19908116603f011681019082821181831017156200017e576200017e6200010e565b816040528381526020925086838588010111156200019b57600080fd5b600091505b83821015620001bf5785820183015181830184015290820190620001a0565b83821115620001d15760008385830101525b9695505050505050565b60008060408385031215620001ef57600080fd5b82516001600160401b03808211156200020757600080fd5b620002158683870162000124565b935060208501519150808211156200022c57600080fd5b506200023b8582860162000124565b9150509250929050565b600181811c908216806200025a57607f821691505b602082108114156200027c57634e487b7160e01b600052602260045260246000fd5b50919050565b610b5780620002926000396000f3fe608060405234801561001057600080fd5b50600436106100c95760003560e01c80633950935111610081578063a457c2d71161005b578063a457c2d714610194578063a9059cbb146101a7578063dd62ed3e146101ba57600080fd5b8063395093511461014357806370a082311461015657806395d89b411461018c57600080fd5b806318160ddd116100b257806318160ddd1461010f57806323b872dd14610121578063313ce5671461013457600080fd5b806306fdde03146100ce578063095ea7b3146100ec575b600080fd5b6100d6610200565b6040516100e39190610937565b60405180910390f35b6100ff6100fa3660046109d3565b610292565b60405190151581526020016100e3565b6002545b6040519081526020016100e3565b6100ff61012f3660046109fd565b6102a8565b604051601281526020016100e3565b6100ff6101513660046109d3565b610393565b610113610164366004610a39565b73ffffffffffffffffffffffffffffffffffffffff1660009081526020819052604090205490565b6100d66103dc565b6100ff6101a23660046109d3565b6103eb565b6100ff6101b53660046109d3565b6104c3565b6101136101c8366004610a5b565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020908152604080832093909416825291909152205490565b60606003805461020f90610a8e565b80601f016020809104026020016040519081016040528092919081815260200182805461023b90610a8e565b80156102885780601f1061025d57610100808354040283529160200191610288565b820191906000526020600020905b81548152906001019060200180831161026b57829003601f168201915b5050505050905090565b600061029f3384846104d0565b50600192915050565b60006102b5848484610683565b73ffffffffffffffffffffffffffffffffffffffff841660009081526001602090815260408083203384529091529020548281101561037b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206160448201527f6c6c6f77616e636500000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b61038885338584036104d0565b506001949350505050565b33600081815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff87168452909152812054909161029f9185906103d7908690610ae2565b6104d0565b60606004805461020f90610a8e565b33600090815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff86168452909152812054828110156104ac576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f0000000000000000000000000000000000000000000000000000006064820152608401610372565b6104b933858584036104d0565b5060019392505050565b600061029f338484610683565b73ffffffffffffffffffffffffffffffffffffffff8316610572576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f72657373000000000000000000000000000000000000000000000000000000006064820152608401610372565b73ffffffffffffffffffffffffffffffffffffffff8216610615576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f73730000000000000000000000000000000000000000000000000000000000006064820152608401610372565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b73ffffffffffffffffffffffffffffffffffffffff8316610726576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f64726573730000000000000000000000000000000000000000000000000000006064820152608401610372565b73ffffffffffffffffffffffffffffffffffffffff82166107c9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f65737300000000000000000000000000000000000000000000000000000000006064820152608401610372565b73ffffffffffffffffffffffffffffffffffffffff83166000908152602081905260409020548181101561087f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e636500000000000000000000000000000000000000000000000000006064820152608401610372565b73ffffffffffffffffffffffffffffffffffffffff8085166000908152602081905260408082208585039055918516815290812080548492906108c3908490610ae2565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161092991815260200190565b60405180910390a350505050565b600060208083528351808285015260005b8181101561096457858101830151858201604001528201610948565b81811115610976576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b803573ffffffffffffffffffffffffffffffffffffffff811681146109ce57600080fd5b919050565b600080604083850312156109e657600080fd5b6109ef836109aa565b946020939093013593505050565b600080600060608486031215610a1257600080fd5b610a1b846109aa565b9250610a29602085016109aa565b9150604084013590509250925092565b600060208284031215610a4b57600080fd5b610a54826109aa565b9392505050565b60008060408385031215610a6e57600080fd5b610a77836109aa565b9150610a85602084016109aa565b90509250929050565b600181811c90821680610aa257607f821691505b60208210811415610adc577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b60008219821115610b1c577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b50019056fea2646970667358221220c65bd450199a805e96ee895742792e75c648f5683ab4f878a6dcc9289aac399264736f6c63430008090033"
    };
});
define("@scom/cross-chain-token-contract/contracts/@openzeppelin/contracts/token/ERC20/ERC20.ts", ["require", "exports", "@ijstech/eth-contract", "@scom/cross-chain-token-contract/contracts/@openzeppelin/contracts/token/ERC20/ERC20.json.ts"], function (require, exports, eth_contract_1, ERC20_json_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ERC20 = void 0;
    class ERC20 extends eth_contract_1.Contract {
        constructor(wallet, address) {
            super(wallet, address, ERC20_json_1.default.abi, ERC20_json_1.default.bytecode);
            this.assign();
        }
        deploy(params, options) {
            return this.__deploy([params.name, params.symbol], options);
        }
        parseApprovalEvent(receipt) {
            return this.parseEvents(receipt, "Approval").map(e => this.decodeApprovalEvent(e));
        }
        decodeApprovalEvent(event) {
            let result = event.data;
            return {
                owner: result.owner,
                spender: result.spender,
                value: new eth_contract_1.BigNumber(result.value),
                _event: event
            };
        }
        parseTransferEvent(receipt) {
            return this.parseEvents(receipt, "Transfer").map(e => this.decodeTransferEvent(e));
        }
        decodeTransferEvent(event) {
            let result = event.data;
            return {
                from: result.from,
                to: result.to,
                value: new eth_contract_1.BigNumber(result.value),
                _event: event
            };
        }
        assign() {
            let allowanceParams = (params) => [params.owner, params.spender];
            let allowance_call = async (params, options) => {
                let result = await this.call('allowance', allowanceParams(params), options);
                return new eth_contract_1.BigNumber(result);
            };
            this.allowance = allowance_call;
            let balanceOf_call = async (account, options) => {
                let result = await this.call('balanceOf', [account], options);
                return new eth_contract_1.BigNumber(result);
            };
            this.balanceOf = balanceOf_call;
            let decimals_call = async (options) => {
                let result = await this.call('decimals', [], options);
                return new eth_contract_1.BigNumber(result);
            };
            this.decimals = decimals_call;
            let name_call = async (options) => {
                let result = await this.call('name', [], options);
                return result;
            };
            this.name = name_call;
            let symbol_call = async (options) => {
                let result = await this.call('symbol', [], options);
                return result;
            };
            this.symbol = symbol_call;
            let totalSupply_call = async (options) => {
                let result = await this.call('totalSupply', [], options);
                return new eth_contract_1.BigNumber(result);
            };
            this.totalSupply = totalSupply_call;
            let approveParams = (params) => [params.spender, this.wallet.utils.toString(params.amount)];
            let approve_send = async (params, options) => {
                let result = await this.send('approve', approveParams(params), options);
                return result;
            };
            let approve_call = async (params, options) => {
                let result = await this.call('approve', approveParams(params), options);
                return result;
            };
            this.approve = Object.assign(approve_send, {
                call: approve_call
            });
            let decreaseAllowanceParams = (params) => [params.spender, this.wallet.utils.toString(params.subtractedValue)];
            let decreaseAllowance_send = async (params, options) => {
                let result = await this.send('decreaseAllowance', decreaseAllowanceParams(params), options);
                return result;
            };
            let decreaseAllowance_call = async (params, options) => {
                let result = await this.call('decreaseAllowance', decreaseAllowanceParams(params), options);
                return result;
            };
            this.decreaseAllowance = Object.assign(decreaseAllowance_send, {
                call: decreaseAllowance_call
            });
            let increaseAllowanceParams = (params) => [params.spender, this.wallet.utils.toString(params.addedValue)];
            let increaseAllowance_send = async (params, options) => {
                let result = await this.send('increaseAllowance', increaseAllowanceParams(params), options);
                return result;
            };
            let increaseAllowance_call = async (params, options) => {
                let result = await this.call('increaseAllowance', increaseAllowanceParams(params), options);
                return result;
            };
            this.increaseAllowance = Object.assign(increaseAllowance_send, {
                call: increaseAllowance_call
            });
            let transferParams = (params) => [params.recipient, this.wallet.utils.toString(params.amount)];
            let transfer_send = async (params, options) => {
                let result = await this.send('transfer', transferParams(params), options);
                return result;
            };
            let transfer_call = async (params, options) => {
                let result = await this.call('transfer', transferParams(params), options);
                return result;
            };
            this.transfer = Object.assign(transfer_send, {
                call: transfer_call
            });
            let transferFromParams = (params) => [params.sender, params.recipient, this.wallet.utils.toString(params.amount)];
            let transferFrom_send = async (params, options) => {
                let result = await this.send('transferFrom', transferFromParams(params), options);
                return result;
            };
            let transferFrom_call = async (params, options) => {
                let result = await this.call('transferFrom', transferFromParams(params), options);
                return result;
            };
            this.transferFrom = Object.assign(transferFrom_send, {
                call: transferFrom_call
            });
        }
    }
    exports.ERC20 = ERC20;
    ERC20._abi = ERC20_json_1.default.abi;
});
define("@scom/cross-chain-token-contract/contracts/Authorization.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@scom/cross-chain-token-contract/contracts/Authorization.json.ts'/> 
    exports.default = {
        "abi": [
            { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "Authorize", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "Deauthorize", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "StartOwnershipTransfer", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "TransferOwnership", "type": "event" },
            { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "deny", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "isPermitted", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "newOwner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "permit", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "takeOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "newOwner_", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }
        ],
        "bytecode": "608060405234801561001057600080fd5b50600080546001600160a01b031916331790556104e6806100326000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80639c52a7f11161005b5780639c52a7f11461010b578063a2f55ae51461011e578063d4ee1d9014610131578063f2fde38b1461015157600080fd5b80633fd8cc4e1461008257806360536172146100bc5780638da5cb5b146100c6575b600080fd5b6100a5610090366004610473565b60026020526000908152604090205460ff1681565b60405160ff90911681526020015b60405180910390f35b6100c4610164565b005b6000546100e69073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100b3565b6100c4610119366004610473565b610292565b6100c461012c366004610473565b610339565b6001546100e69073ffffffffffffffffffffffffffffffffffffffff1681565b6100c461015f366004610473565b6103dc565b60015473ffffffffffffffffffffffffffffffffffffffff16331461020f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e0000000000000000000000000000000000000000000000606482015260840160405180910390fd5b600180546000805473ffffffffffffffffffffffffffffffffffffffff83167fffffffffffffffffffffffff000000000000000000000000000000000000000091821681179092559091169091556040519081527fcfaaa26691e16e66e73290fc725eee1a6b4e0e693a1640484937aac25ffb55a49060200160405180910390a1565b60005473ffffffffffffffffffffffffffffffffffffffff1633146102b657600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016905590519182527f79ede3839cd7a7d8bd77e97e5c890565fe4f76cdbbeaa364646e28a8695a788491015b60405180910390a150565b60005473ffffffffffffffffffffffffffffffffffffffff16331461035d57600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905590519182527f6d81a01b39982517ba331aeb4f387b0f9cc32334b65bb9a343a077973cf7adf5910161032e565b60005473ffffffffffffffffffffffffffffffffffffffff16331461040057600080fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040519081527f686a7ab184e6928ddedba810af7b443d6baa40bf32c4787ccd72c5b4b28cae1b9060200161032e565b60006020828403121561048557600080fd5b813573ffffffffffffffffffffffffffffffffffffffff811681146104a957600080fd5b939250505056fea264697066735822122061ffef652a73f359df0b3d3a01fe23585343e9f061226aaaa0d3cda382d281d864736f6c63430008090033"
    };
});
define("@scom/cross-chain-token-contract/contracts/Authorization.ts", ["require", "exports", "@ijstech/eth-contract", "@scom/cross-chain-token-contract/contracts/Authorization.json.ts"], function (require, exports, eth_contract_2, Authorization_json_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Authorization = void 0;
    class Authorization extends eth_contract_2.Contract {
        constructor(wallet, address) {
            super(wallet, address, Authorization_json_1.default.abi, Authorization_json_1.default.bytecode);
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
            let isPermitted_call = async (param1, options) => {
                let result = await this.call('isPermitted', [param1], options);
                return new eth_contract_2.BigNumber(result);
            };
            this.isPermitted = isPermitted_call;
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
    exports.Authorization = Authorization;
    Authorization._abi = Authorization_json_1.default.abi;
});
define("@scom/cross-chain-token-contract/contracts/CrossChainPolicy.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@scom/cross-chain-token-contract/contracts/CrossChainPolicy.json.ts'/> 
    exports.default = {
        "abi": [
            { "inputs": [{ "internalType": "uint256", "name": "maximumPerDay_", "type": "uint256" }], "stateMutability": "nonpayable", "type": "constructor" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "who", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "newAmount", "type": "uint256" }], "name": "AddExtraAllowance", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "Authorize", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "Deauthorize", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "StartOwnershipTransfer", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "TransferOwnership", "type": "event" },
            { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "addExtraAllowance", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "deny", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "extraAllowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "isPermitted", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "maximumPerDay", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "newOwner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "contract IERC20", "name": "", "type": "address" }, { "internalType": "address", "name": "", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "bytes", "name": "", "type": "bytes" }], "name": "onTransfer", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "permit", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "remainingAllowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "takeOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "newOwner_", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "transferredToday", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }
        ],
        "bytecode": "608060405234801561001057600080fd5b5060405161097538038061097583398101604081905261002f91610049565b600080546001600160a01b03191633179055600355610062565b60006020828403121561005b57600080fd5b5051919050565b610904806100716000396000f3fe608060405234801561001057600080fd5b50600436106100df5760003560e01c80639c52a7f11161008c578063baa6249811610066578063baa62498146101d9578063d4ee1d90146101e1578063efe5c3fa14610201578063f2fde38b1461020957600080fd5b80639c52a7f1146101aa578063a2f55ae5146101bd578063a4cd6e6f146101d057600080fd5b806373a2c2cb116100bd57806373a2c2cb1461013b5780637d58e90e1461014e5780638da5cb5b1461016557600080fd5b80633fd8cc4e146100e45780634c63c1a11461011e5780636053617214610133575b600080fd5b6101076100f2366004610759565b60026020526000908152604090205460ff1681565b60405160ff90911681526020015b60405180910390f35b61013161012c36600461077d565b61021c565b005b61013161033e565b61013161014936600461081c565b610468565b61015760035481565b604051908152602001610115565b6000546101859073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610115565b6101316101b8366004610759565b6104eb565b6101316101cb366004610759565b61058b565b61015760045481565b61015761062e565b6001546101859073ffffffffffffffffffffffffffffffffffffffff1681565b610157610654565b610131610217366004610759565b610678565b3360009081526002602052604090205460ff166001146102c3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6102cb61070f565b60045483111561031f57600454156102f2576004546102ea9084610864565b600060045592505b8260066000828254610304919061087b565b9091555050600354600654111561031a57600080fd5b610337565b82600460008282546103319190610864565b90915550505b5050505050565b60015473ffffffffffffffffffffffffffffffffffffffff1633146103e5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e000000000000000000000000000000000000000000000060648201526084016102ba565b600180546000805473ffffffffffffffffffffffffffffffffffffffff83167fffffffffffffffffffffffff000000000000000000000000000000000000000091821681179092559091169091556040519081527fcfaaa26691e16e66e73290fc725eee1a6b4e0e693a1640484937aac25ffb55a49060200160405180910390a1565b60005473ffffffffffffffffffffffffffffffffffffffff16331461048c57600080fd5b806004600082825461049e919061087b565b90915550506004546040805133815260208101849052908101919091527e9cfa415ffdba2718bd828b6c9a2d9895ccfc6b238c245f9852458913e5709a906060015b60405180910390a150565b60005473ffffffffffffffffffffffffffffffffffffffff16331461050f57600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016905590519182527f79ede3839cd7a7d8bd77e97e5c890565fe4f76cdbbeaa364646e28a8695a788491016104e0565b60005473ffffffffffffffffffffffffffffffffffffffff1633146105af57600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905590519182527f6d81a01b39982517ba331aeb4f387b0f9cc32334b65bb9a343a077973cf7adf591016104e0565b600061063d6201518042610893565b6005541461064b5750600090565b6006545b905090565b600061065e61062e565b60045460035461066e919061087b565b61064f9190610864565b60005473ffffffffffffffffffffffffffffffffffffffff16331461069c57600080fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040519081527f686a7ab184e6928ddedba810af7b443d6baa40bf32c4787ccd72c5b4b28cae1b906020016104e0565b600061071e6201518042610893565b9050806005541461073457600060065560058190555b50565b73ffffffffffffffffffffffffffffffffffffffff8116811461073457600080fd5b60006020828403121561076b57600080fd5b813561077681610737565b9392505050565b60008060008060006080868803121561079557600080fd5b85356107a081610737565b945060208601356107b081610737565b935060408601359250606086013567ffffffffffffffff808211156107d457600080fd5b818801915088601f8301126107e857600080fd5b8135818111156107f757600080fd5b89602082850101111561080957600080fd5b9699959850939650602001949392505050565b60006020828403121561082e57600080fd5b5035919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008282101561087657610876610835565b500390565b6000821982111561088e5761088e610835565b500190565b6000826108c9577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b50049056fea2646970667358221220cb4ec7db8632f80bec1dbdc0b37f6d2138506fc0e2dc753ce4870da7818ee08364736f6c63430008090033"
    };
});
define("@scom/cross-chain-token-contract/contracts/CrossChainPolicy.ts", ["require", "exports", "@ijstech/eth-contract", "@scom/cross-chain-token-contract/contracts/CrossChainPolicy.json.ts"], function (require, exports, eth_contract_3, CrossChainPolicy_json_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CrossChainPolicy = void 0;
    class CrossChainPolicy extends eth_contract_3.Contract {
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
                amount: new eth_contract_3.BigNumber(result.amount),
                newAmount: new eth_contract_3.BigNumber(result.newAmount),
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
                return new eth_contract_3.BigNumber(result);
            };
            this.extraAllowance = extraAllowance_call;
            let isPermitted_call = async (param1, options) => {
                let result = await this.call('isPermitted', [param1], options);
                return new eth_contract_3.BigNumber(result);
            };
            this.isPermitted = isPermitted_call;
            let maximumPerDay_call = async (options) => {
                let result = await this.call('maximumPerDay', [], options);
                return new eth_contract_3.BigNumber(result);
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
                return new eth_contract_3.BigNumber(result);
            };
            this.remainingAllowance = remainingAllowance_call;
            let transferredToday_call = async (options) => {
                let result = await this.call('transferredToday', [], options);
                return new eth_contract_3.BigNumber(result);
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
});
define("@scom/cross-chain-token-contract/contracts/Custodian.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@scom/cross-chain-token-contract/contracts/Custodian.json.ts'/> 
    exports.default = {
        "abi": [
            { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "contract IERC20", "name": "token", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "isAllow", "type": "bool" }, { "indexed": false, "internalType": "address", "name": "msgSender", "type": "address" }], "name": "AllowToken", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "Authorize", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "contract ICrossChainPolicy", "name": "newPolicy", "type": "address" }], "name": "CrossChainPolicyChanged", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "Deauthorize", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "round", "type": "uint256" }, { "indexed": true, "internalType": "contract IERC20", "name": "token", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "newBalance", "type": "uint256" }], "name": "Lock", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "round", "type": "uint256" }], "name": "NewRound", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "account", "type": "address" }], "name": "Paused", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "contract IERC20", "name": "token", "type": "address" }, { "indexed": true, "internalType": "address", "name": "destination", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Refund", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "StartOwnershipTransfer", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "TransferOwnership", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "account", "type": "address" }], "name": "Unpaused", "type": "event" },
            { "inputs": [{ "internalType": "contract IERC20", "name": "token", "type": "address" }, { "internalType": "bool", "name": "allow", "type": "bool" }], "name": "allowToken", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "contract IERC20", "name": "", "type": "address" }], "name": "allowedTokens", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "crossChainPolicy", "outputs": [{ "internalType": "contract ICrossChainPolicy", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "deny", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "isPermitted", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "contract IERC20", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "lock", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "contract IERC20", "name": "", "type": "address" }, { "internalType": "address", "name": "", "type": "address" }], "name": "locked", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "newOwner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "newRound", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "pause", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "paused", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "permit", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "bytes32", "name": "txHash", "type": "bytes32" }, { "internalType": "uint16", "name": "transferIndex", "type": "uint16" }, { "internalType": "contract IERC20", "name": "token", "type": "address" }, { "internalType": "address", "name": "destination", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "bytes", "name": "extraData", "type": "bytes" }], "name": "refund", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }, { "internalType": "uint16", "name": "", "type": "uint16" }], "name": "refunded", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "resume", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "round", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "contract ICrossChainPolicy", "name": "crossChainPolicy_", "type": "address" }], "name": "setCrossChainPolicy", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "takeOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address payable", "name": "destination", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferETH", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "newOwner_", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "contract IERC20", "name": "token", "type": "address" }, { "internalType": "address", "name": "destination", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferToken", "outputs": [], "stateMutability": "nonpayable", "type": "function" }
        ],
        "bytecode": "608060405234801561001057600080fd5b50600080546001600160a01b031916339081179091556003805460ff19169055600160045561003e90610043565b6100b4565b6000546001600160a01b0316331461005a57600080fd5b6001600160a01b038116600081815260026020908152604091829020805460ff1916600117905590519182527f6d81a01b39982517ba331aeb4f387b0f9cc32334b65bb9a343a077973cf7adf5910160405180910390a150565b611e28806100c36000396000f3fe608060405234801561001057600080fd5b50600436106101825760003560e01c80639141dfbf116100d8578063c5b1d9aa1161008c578063e744092e11610066578063e744092e1461037a578063f2fde38b1461039d578063f5537ede146103b057600080fd5b8063c5b1d9aa14610321578063d4ee1d9014610329578063dba6587b1461034957600080fd5b80639da0a123116100bd5780639da0a123146102c0578063a12be213146102ee578063a2f55ae51461030e57600080fd5b80639141dfbf1461029a5780639c52a7f1146102ad57600080fd5b80635bc35ae81161013a5780637b1a4909116101145780637b1a49091461023a5780638456cb591461024d5780638da5cb5b1461025557600080fd5b80635bc35ae8146102085780635c975abb1461021b578063605361721461023257600080fd5b8063282d3fdf1161016b578063282d3fdf146101ad5780632d9d3dc1146101c05780633fd8cc4e146101d357600080fd5b8063046f7da214610187578063146ca53114610191575b600080fd5b61018f6103c3565b005b61019a60065481565b6040519081526020015b60405180910390f35b61018f6101bb36600461199b565b6103f1565b61018f6101ce3660046119c7565b610649565b6101f66101e13660046119c7565b60026020526000908152604090205460ff1681565b60405160ff90911681526020016101a4565b61018f6102163660046119f2565b6106e7565b60035460ff165b60405190151581526020016101a4565b61018f61079d565b61018f61024836600461199b565b6108c8565b61018f610971565b6000546102759073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016101a4565b61018f6102a8366004611a71565b61099d565b61018f6102bb3660046119c7565b610d54565b6102226102ce366004611b88565b600860209081526000928352604080842090915290825290205460ff1681565b6005546102759073ffffffffffffffffffffffffffffffffffffffff1681565b61018f61031c3660046119c7565b610df4565b61018f610e97565b6001546102759073ffffffffffffffffffffffffffffffffffffffff1681565b61019a610357366004611bb4565b600760209081526000938452604080852082529284528284209052825290205481565b6102226103883660046119c7565b60096020526000908152604090205460ff1681565b61018f6103ab3660046119c7565b610f81565b61018f6103be366004611bf6565b611018565b60005473ffffffffffffffffffffffffffffffffffffffff1633146103e757600080fd5b6103ef6110d9565b565b60035460ff1615610463576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f5061757361626c653a207061757365640000000000000000000000000000000060448201526064015b60405180910390fd5b600260045414156104d0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015260640161045a565b600260045573ffffffffffffffffffffffffffffffffffffffff821660009081526009602052604090205460ff16610564576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f496e76616c696420746f6b656e00000000000000000000000000000000000000604482015260640161045a565b61056e82826111b5565b600654600090815260076020908152604080832073ffffffffffffffffffffffffffffffffffffffff871684528252808320338452909152812054919250906105b8908390611c66565b60068054600090815260076020908152604080832073ffffffffffffffffffffffffffffffffffffffff8916808552908352818420338086529084529382902086905593548151908152918201879052810184905292935090917f35b4ca39c100725dbe9147fdf70b2ee92892da24c8def6bc9af37c639de054b39060600160405180910390a35050600160045550565b60005473ffffffffffffffffffffffffffffffffffffffff16331461066d57600080fd5b600580547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040519081527f82f273b1948028a06588523761f83d1f88afec54c761fd03ffed9e945f97922d906020015b60405180910390a150565b60005473ffffffffffffffffffffffffffffffffffffffff16331461070b57600080fd5b73ffffffffffffffffffffffffffffffffffffffff821660008181526009602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016851515908117909155825190815233918101919091527fc631a8f1f6df9b09bf1cecd9af418b66ccd4d946247d47bb0fe1cb355d9359ee910160405180910390a25050565b60015473ffffffffffffffffffffffffffffffffffffffff163314610844576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e0000000000000000000000000000000000000000000000606482015260840161045a565b600180546000805473ffffffffffffffffffffffffffffffffffffffff83167fffffffffffffffffffffffff000000000000000000000000000000000000000091821681179092559091169091556040519081527fcfaaa26691e16e66e73290fc725eee1a6b4e0e693a1640484937aac25ffb55a4906020015b60405180910390a1565b60005473ffffffffffffffffffffffffffffffffffffffff1633146108ec57600080fd5b60026004541415610959576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015260640161045a565b60026004556109688282611329565b50506001600455565b60005473ffffffffffffffffffffffffffffffffffffffff16331461099557600080fd5b6103ef611488565b3360009081526002602052604090205460ff16600114610a3f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e0000000000000000000000000000000000000000000000606482015260840161045a565b60035460ff1615610aac576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f5061757361626c653a2070617573656400000000000000000000000000000000604482015260640161045a565b60026004541415610b19576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015260640161045a565b6002600455600086815260086020908152604080832061ffff8916845290915290205460ff1615610bcc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f54686973207472616e736665722077617320616c72656164792070726f63657360448201527f7365640000000000000000000000000000000000000000000000000000000000606482015260840161045a565b600086815260086020908152604080832061ffff89168452909152902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905560055473ffffffffffffffffffffffffffffffffffffffff1615610cbf576005546040517f4c63c1a100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff90911690634c63c1a190610c8c908790879087908790600401611cf4565b600060405180830381600087803b158015610ca657600080fd5b505af1158015610cba573d6000803e3d6000fd5b505050505b610ce073ffffffffffffffffffffffffffffffffffffffff85168484611548565b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167ff40cc8c1a1d17359049ba500cfc894596a692cffc9d03943cd92ec2e159cf6ae84604051610d3f91815260200190565b60405180910390a35050600160045550505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610d7857600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016905590519182527f79ede3839cd7a7d8bd77e97e5c890565fe4f76cdbbeaa364646e28a8695a788491016106dc565b60005473ffffffffffffffffffffffffffffffffffffffff163314610e1857600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905590519182527f6d81a01b39982517ba331aeb4f387b0f9cc32334b65bb9a343a077973cf7adf591016106dc565b3360009081526002602052604090205460ff16600114610f39576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e0000000000000000000000000000000000000000000000606482015260840161045a565b60068054906000610f4983611d3d565b91905055507fa2b5357eea32aeb35142ba36b087f9fe674f34f8b57ce94d30e9f4f572195bcf6006546040516108be91815260200190565b60005473ffffffffffffffffffffffffffffffffffffffff163314610fa557600080fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040519081527f686a7ab184e6928ddedba810af7b443d6baa40bf32c4787ccd72c5b4b28cae1b906020016106dc565b60005473ffffffffffffffffffffffffffffffffffffffff16331461103c57600080fd5b600260045414156110a9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015260640161045a565b60026004556110cf73ffffffffffffffffffffffffffffffffffffffff84168383611548565b5050600160045550565b60035460ff16611145576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f5061757361626c653a206e6f7420706175736564000000000000000000000000604482015260640161045a565b600380547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016108be565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a082319060240160206040518083038186803b15801561121d57600080fd5b505afa158015611231573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112559190611d76565b905061127973ffffffffffffffffffffffffffffffffffffffff841633308561161c565b6040517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152819073ffffffffffffffffffffffffffffffffffffffff8516906370a082319060240160206040518083038186803b1580156112e057600080fd5b505afa1580156112f4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113189190611d76565b6113229190611d8f565b9392505050565b80471015611393576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a20696e73756666696369656e742062616c616e6365000000604482015260640161045a565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d80600081146113ed576040519150601f19603f3d011682016040523d82523d6000602084013e6113f2565b606091505b5050905080611483576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603a60248201527f416464726573733a20756e61626c6520746f2073656e642076616c75652c207260448201527f6563697069656e74206d61792068617665207265766572746564000000000000606482015260840161045a565b505050565b60035460ff16156114f5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f5061757361626c653a2070617573656400000000000000000000000000000000604482015260640161045a565b600380547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586111903390565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526114839084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611680565b60405173ffffffffffffffffffffffffffffffffffffffff8085166024830152831660448201526064810182905261167a9085907f23b872dd000000000000000000000000000000000000000000000000000000009060840161159a565b50505050565b60006116e2826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff1661178c9092919063ffffffff16565b80519091501561148357808060200190518101906117009190611da6565b611483576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161045a565b606061179b84846000856117a3565b949350505050565b606082471015611835576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c0000000000000000000000000000000000000000000000000000606482015260840161045a565b843b61189d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161045a565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516118c69190611dc3565b60006040518083038185875af1925050503d8060008114611903576040519150601f19603f3d011682016040523d82523d6000602084013e611908565b606091505b5091509150611918828286611923565b979650505050505050565b60608315611932575081611322565b8251156119425782518084602001fd5b816040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161045a9190611ddf565b73ffffffffffffffffffffffffffffffffffffffff8116811461199857600080fd5b50565b600080604083850312156119ae57600080fd5b82356119b981611976565b946020939093013593505050565b6000602082840312156119d957600080fd5b813561132281611976565b801515811461199857600080fd5b60008060408385031215611a0557600080fd5b8235611a1081611976565b91506020830135611a20816119e4565b809150509250929050565b803561ffff81168114611a3d57600080fd5b919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60008060008060008060c08789031215611a8a57600080fd5b86359550611a9a60208801611a2b565b94506040870135611aaa81611976565b93506060870135611aba81611976565b92506080870135915060a087013567ffffffffffffffff80821115611ade57600080fd5b818901915089601f830112611af257600080fd5b813581811115611b0457611b04611a42565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908382118183101715611b4a57611b4a611a42565b816040528281528c6020848701011115611b6357600080fd5b8260208601602083013760006020848301015280955050505050509295509295509295565b60008060408385031215611b9b57600080fd5b82359150611bab60208401611a2b565b90509250929050565b600080600060608486031215611bc957600080fd5b833592506020840135611bdb81611976565b91506040840135611beb81611976565b809150509250925092565b600080600060608486031215611c0b57600080fd5b8335611c1681611976565b92506020840135611c2681611976565b929592945050506040919091013590565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008219821115611c7957611c79611c37565b500190565b60005b83811015611c99578181015183820152602001611c81565b8381111561167a5750506000910152565b60008151808452611cc2816020860160208601611c7e565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b600073ffffffffffffffffffffffffffffffffffffffff808716835280861660208401525083604083015260806060830152611d336080830184611caa565b9695505050505050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415611d6f57611d6f611c37565b5060010190565b600060208284031215611d8857600080fd5b5051919050565b600082821015611da157611da1611c37565b500390565b600060208284031215611db857600080fd5b8151611322816119e4565b60008251611dd5818460208701611c7e565b9190910192915050565b6020815260006113226020830184611caa56fea264697066735822122053d8dedbbf3f4f5d7952af4422f3c343592ee259508f9600e42fe8bfcdc8dac064736f6c63430008090033"
    };
});
define("@scom/cross-chain-token-contract/contracts/Custodian.ts", ["require", "exports", "@ijstech/eth-contract", "@scom/cross-chain-token-contract/contracts/Custodian.json.ts"], function (require, exports, eth_contract_4, Custodian_json_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Custodian = void 0;
    class Custodian extends eth_contract_4.Contract {
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
                round: new eth_contract_4.BigNumber(result.round),
                token: result.token,
                amount: new eth_contract_4.BigNumber(result.amount),
                newBalance: new eth_contract_4.BigNumber(result.newBalance),
                _event: event
            };
        }
        parseNewRoundEvent(receipt) {
            return this.parseEvents(receipt, "NewRound").map(e => this.decodeNewRoundEvent(e));
        }
        decodeNewRoundEvent(event) {
            let result = event.data;
            return {
                round: new eth_contract_4.BigNumber(result.round),
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
                amount: new eth_contract_4.BigNumber(result.amount),
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
                return new eth_contract_4.BigNumber(result);
            };
            this.isPermitted = isPermitted_call;
            let lockedParams = (params) => [this.wallet.utils.toString(params.param1), params.param2, params.param3];
            let locked_call = async (params, options) => {
                let result = await this.call('locked', lockedParams(params), options);
                return new eth_contract_4.BigNumber(result);
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
                return new eth_contract_4.BigNumber(result);
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
});
define("@scom/cross-chain-token-contract/contracts/Minter.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@scom/cross-chain-token-contract/contracts/Minter.json.ts'/> 
    exports.default = {
        "abi": [
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "Authorize", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "contract Token", "name": "token", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Burn", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "contract ICrossChainPolicy", "name": "newPolicy", "type": "address" }], "name": "CrossChainPolicyChanged", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "Deauthorize", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "contract Token", "name": "token", "type": "address" }, { "indexed": true, "internalType": "address", "name": "destination", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Mint", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "account", "type": "address" }], "name": "Paused", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "StartOwnershipTransfer", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "TransferOwnership", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "account", "type": "address" }], "name": "Unpaused", "type": "event" },
            { "inputs": [{ "internalType": "bytes32", "name": "txHash", "type": "bytes32" }, { "internalType": "contract Token", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "burn", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "name": "burned", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "crossChainPolicy", "outputs": [{ "internalType": "contract ICrossChainPolicy", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "deny", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "isPermitted", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "bytes32", "name": "txHash", "type": "bytes32" }, { "internalType": "uint16", "name": "transferIndex", "type": "uint16" }, { "internalType": "contract Token", "name": "token", "type": "address" }, { "internalType": "address", "name": "destination", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "bytes", "name": "extraData", "type": "bytes" }], "name": "mint", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }, { "internalType": "uint16", "name": "", "type": "uint16" }], "name": "minted", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "newOwner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "pause", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "paused", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "permit", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "resume", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "contract ICrossChainPolicy", "name": "crossChainPolicy_", "type": "address" }], "name": "setCrossChainPolicy", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "takeOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "newOwner_", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }
        ],
        "bytecode": "608060405234801561001057600080fd5b50600080546001600160a01b031916331790556003805460ff1916905560016004556112c3806100416000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c80638456cb5911610097578063a2f55ae511610066578063a2f55ae514610263578063d4ee1d9014610276578063d50aaf7c14610296578063f2fde38b146102a957600080fd5b80638456cb59146101e35780638da5cb5b146101eb5780639c52a7f114610230578063a12be2131461024357600080fd5b80633fd8cc4e116100d35780633fd8cc4e146101785780634adc2856146101ad5780635c975abb146101d057806360536172146101db57600080fd5b8063046f7da2146101055780631fc83ada1461010f5780632d9d3dc114610152578063346a907414610165575b600080fd5b61010d6102bc565b005b61013d61011d366004610fbb565b600660209081526000928352604080842090915290825290205460ff1681565b60405190151581526020015b60405180910390f35b61010d61016036600461100c565b6102ea565b61010d610173366004611030565b610388565b61019b61018636600461100c565b60026020526000908152604090205460ff1681565b60405160ff9091168152602001610149565b61013d6101bb366004611068565b60076020526000908152604090205460ff1681565b60035460ff1661013d565b61010d610698565b61010d6107c3565b60005461020b9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610149565b61010d61023e36600461100c565b6107ef565b60055461020b9073ffffffffffffffffffffffffffffffffffffffff1681565b61010d61027136600461100c565b61088f565b60015461020b9073ffffffffffffffffffffffffffffffffffffffff1681565b61010d6102a43660046110b0565b610932565b61010d6102b736600461100c565b610d71565b60005473ffffffffffffffffffffffffffffffffffffffff1633146102e057600080fd5b6102e8610e08565b565b60005473ffffffffffffffffffffffffffffffffffffffff16331461030e57600080fd5b600580547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040519081527f82f273b1948028a06588523761f83d1f88afec54c761fd03ffed9e945f97922d906020015b60405180910390a150565b3360009081526002602052604090205460ff1660011461042f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b60035460ff161561049c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f5061757361626c653a20706175736564000000000000000000000000000000006044820152606401610426565b60026004541415610509576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610426565b600260045560008381526007602052604090205460ff1615610587576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f54686973206275726e2077617320616c72656164792070726f636573736564006044820152606401610426565b6000838152600760205260409081902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055517f42966c680000000000000000000000000000000000000000000000000000000081526004810182905273ffffffffffffffffffffffffffffffffffffffff8316906342966c6890602401600060405180830381600087803b15801561062657600080fd5b505af115801561063a573d6000803e3d6000fd5b505050508173ffffffffffffffffffffffffffffffffffffffff167fcc16f5dbb4873280815c1ee09dbd06736cffcc184412cf7a71a0fdb75d397ca58260405161068691815260200190565b60405180910390a25050600160045550565b60015473ffffffffffffffffffffffffffffffffffffffff16331461073f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e00000000000000000000000000000000000000000000006064820152608401610426565b600180546000805473ffffffffffffffffffffffffffffffffffffffff83167fffffffffffffffffffffffff000000000000000000000000000000000000000091821681179092559091169091556040519081527fcfaaa26691e16e66e73290fc725eee1a6b4e0e693a1640484937aac25ffb55a4906020015b60405180910390a1565b60005473ffffffffffffffffffffffffffffffffffffffff1633146107e757600080fd5b6102e8610ee4565b60005473ffffffffffffffffffffffffffffffffffffffff16331461081357600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016905590519182527f79ede3839cd7a7d8bd77e97e5c890565fe4f76cdbbeaa364646e28a8695a7884910161037d565b60005473ffffffffffffffffffffffffffffffffffffffff1633146108b357600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905590519182527f6d81a01b39982517ba331aeb4f387b0f9cc32334b65bb9a343a077973cf7adf5910161037d565b3360009081526002602052604090205460ff166001146109d4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e00000000000000000000000000000000000000000000006064820152608401610426565b60035460ff1615610a41576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f5061757361626c653a20706175736564000000000000000000000000000000006044820152606401610426565b60026004541415610aae576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610426565b6002600455600086815260066020908152604080832061ffff8916845290915290205460ff1615610b61576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f54686973207472616e736665722077617320616c72656164792070726f63657360448201527f73656400000000000000000000000000000000000000000000000000000000006064820152608401610426565b600086815260066020908152604080832061ffff89168452909152902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905560055473ffffffffffffffffffffffffffffffffffffffff1615610c54576005546040517f4c63c1a100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff90911690634c63c1a190610c219087908790879087906004016111c7565b600060405180830381600087803b158015610c3b57600080fd5b505af1158015610c4f573d6000803e3d6000fd5b505050505b6040517f40c10f1900000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8481166004830152602482018490528516906340c10f1990604401602060405180830381600087803b158015610cc457600080fd5b505af1158015610cd8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cfc919061126b565b508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fab8530f87dc9b59234c4623bf917212bb2536d647574c8e7e5da92c2ede0c9f884604051610d5c91815260200190565b60405180910390a35050600160045550505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610d9557600080fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040519081527f686a7ab184e6928ddedba810af7b443d6baa40bf32c4787ccd72c5b4b28cae1b9060200161037d565b60035460ff16610e74576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f5061757361626c653a206e6f74207061757365640000000000000000000000006044820152606401610426565b600380547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016107b9565b60035460ff1615610f51576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f5061757361626c653a20706175736564000000000000000000000000000000006044820152606401610426565b600380547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258610ebf3390565b803561ffff81168114610fb657600080fd5b919050565b60008060408385031215610fce57600080fd5b82359150610fde60208401610fa4565b90509250929050565b73ffffffffffffffffffffffffffffffffffffffff8116811461100957600080fd5b50565b60006020828403121561101e57600080fd5b813561102981610fe7565b9392505050565b60008060006060848603121561104557600080fd5b83359250602084013561105781610fe7565b929592945050506040919091013590565b60006020828403121561107a57600080fd5b5035919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60008060008060008060c087890312156110c957600080fd5b863595506110d960208801610fa4565b945060408701356110e981610fe7565b935060608701356110f981610fe7565b92506080870135915060a087013567ffffffffffffffff8082111561111d57600080fd5b818901915089601f83011261113157600080fd5b81358181111561114357611143611081565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190838211818310171561118957611189611081565b816040528281528c60208487010111156111a257600080fd5b8260208601602083013760006020848301015280955050505050509295509295509295565b600073ffffffffffffffffffffffffffffffffffffffff8087168352602081871681850152856040850152608060608501528451915081608085015260005b828110156112225785810182015185820160a001528101611206565b8281111561123457600060a084870101525b5050601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160a00195945050505050565b60006020828403121561127d57600080fd5b8151801515811461102957600080fdfea264697066735822122067f594ff7bab0ce8f45e160d02a2f6038c8f5524a39453228473e6c53159e06664736f6c63430008090033"
    };
});
define("@scom/cross-chain-token-contract/contracts/Minter.ts", ["require", "exports", "@ijstech/eth-contract", "@scom/cross-chain-token-contract/contracts/Minter.json.ts"], function (require, exports, eth_contract_5, Minter_json_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Minter = void 0;
    class Minter extends eth_contract_5.Contract {
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
                amount: new eth_contract_5.BigNumber(result.amount),
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
                amount: new eth_contract_5.BigNumber(result.amount),
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
                return new eth_contract_5.BigNumber(result);
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
});
define("@scom/cross-chain-token-contract/contracts/Token.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@scom/cross-chain-token-contract/contracts/Token.json.ts'/> 
    exports.default = {
        "abi": [
            { "inputs": [{ "internalType": "string", "name": "name_", "type": "string" }, { "internalType": "string", "name": "symbol_", "type": "string" }], "stateMutability": "nonpayable", "type": "constructor" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "Authorize", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "Deauthorize", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "StartOwnershipTransfer", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "TransferOwnership", "type": "event" },
            { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "burn", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "burnFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "deny", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "isPermitted", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "mint", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "newOwner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "permit", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "takeOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "newOwner_", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }
        ],
        "bytecode": "60806040523480156200001157600080fd5b50604051620017fe380380620017fe833981016040819052620000349162000276565b600080546001600160a01b031916331790558151829082906200005f90600690602085019062000103565b5080516200007590600790602084019062000103565b50505062000089336200009160201b60201c565b50506200031d565b6000546001600160a01b03163314620000a957600080fd5b6001600160a01b038116600081815260026020908152604091829020805460ff1916600117905590519182527f6d81a01b39982517ba331aeb4f387b0f9cc32334b65bb9a343a077973cf7adf5910160405180910390a150565b8280546200011190620002e0565b90600052602060002090601f01602090048101928262000135576000855562000180565b82601f106200015057805160ff191683800117855562000180565b8280016001018555821562000180579182015b828111156200018057825182559160200191906001019062000163565b506200018e92915062000192565b5090565b5b808211156200018e576000815560010162000193565b634e487b7160e01b600052604160045260246000fd5b600082601f830112620001d157600080fd5b81516001600160401b0380821115620001ee57620001ee620001a9565b604051601f8301601f19908116603f01168101908282118183101715620002195762000219620001a9565b816040528381526020925086838588010111156200023657600080fd5b600091505b838210156200025a57858201830151818301840152908201906200023b565b838211156200026c5760008385830101525b9695505050505050565b600080604083850312156200028a57600080fd5b82516001600160401b0380821115620002a257600080fd5b620002b086838701620001bf565b93506020850151915080821115620002c757600080fd5b50620002d685828601620001bf565b9150509250929050565b600181811c90821680620002f557607f821691505b602082108114156200031757634e487b7160e01b600052602260045260246000fd5b50919050565b6114d1806200032d6000396000f3fe608060405234801561001057600080fd5b50600436106101775760003560e01c806370a08231116100d8578063a2f55ae51161008c578063d4ee1d9011610066578063d4ee1d901461033f578063dd62ed3e1461035f578063f2fde38b146103a557600080fd5b8063a2f55ae514610306578063a457c2d714610319578063a9059cbb1461032c57600080fd5b80638da5cb5b116100bd5780638da5cb5b146102a657806395d89b41146102eb5780639c52a7f1146102f357600080fd5b806370a082311461025d57806379cc67901461029357600080fd5b8063395093511161012f57806340c10f191161011457806340c10f191461022d57806342966c6814610240578063605361721461025557600080fd5b806339509351146101f75780633fd8cc4e1461020a57600080fd5b806318160ddd1161016057806318160ddd146101bd57806323b872dd146101cf578063313ce567146101e257600080fd5b806306fdde031461017c578063095ea7b31461019a575b600080fd5b6101846103b8565b6040516101919190611279565b60405180910390f35b6101ad6101a8366004611315565b61044a565b6040519015158152602001610191565b6005545b604051908152602001610191565b6101ad6101dd36600461133f565b610460565b60125b60405160ff9091168152602001610191565b6101ad610205366004611315565b61054b565b6101e561021836600461137b565b60026020526000908152604090205460ff1681565b6101ad61023b366004611315565b610594565b61025361024e36600461139d565b610640565b005b61025361064d565b6101c161026b36600461137b565b73ffffffffffffffffffffffffffffffffffffffff1660009081526003602052604090205490565b6102536102a1366004611315565b610777565b6000546102c69073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610191565b610184610830565b61025361030136600461137b565b61083f565b61025361031436600461137b565b6108e6565b6101ad610327366004611315565b610989565b6101ad61033a366004611315565b610a61565b6001546102c69073ffffffffffffffffffffffffffffffffffffffff1681565b6101c161036d3660046113b6565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260046020908152604080832093909416825291909152205490565b6102536103b336600461137b565b610a6e565b6060600680546103c7906113e9565b80601f01602080910402602001604051908101604052809291908181526020018280546103f3906113e9565b80156104405780601f1061041557610100808354040283529160200191610440565b820191906000526020600020905b81548152906001019060200180831161042357829003601f168201915b5050505050905090565b6000610457338484610b05565b50600192915050565b600061046d848484610cb8565b73ffffffffffffffffffffffffffffffffffffffff8416600090815260046020908152604080832033845290915290205482811015610533576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206160448201527f6c6c6f77616e636500000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6105408533858403610b05565b506001949350505050565b33600081815260046020908152604080832073ffffffffffffffffffffffffffffffffffffffff87168452909152812054909161045791859061058f90869061146c565b610b05565b3360009081526002602052604081205460ff16600114610636576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e0000000000000000000000000000000000000000000000606482015260840161052a565b6104578383610f6c565b61064a338261108c565b50565b60015473ffffffffffffffffffffffffffffffffffffffff1633146106f4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e0000000000000000000000000000000000000000000000606482015260840161052a565b600180546000805473ffffffffffffffffffffffffffffffffffffffff83167fffffffffffffffffffffffff000000000000000000000000000000000000000091821681179092559091169091556040519081527fcfaaa26691e16e66e73290fc725eee1a6b4e0e693a1640484937aac25ffb55a49060200160405180910390a1565b6000610783833361036d565b905081811015610814576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f45524332303a206275726e20616d6f756e74206578636565647320616c6c6f7760448201527f616e636500000000000000000000000000000000000000000000000000000000606482015260840161052a565b6108218333848403610b05565b61082b838361108c565b505050565b6060600780546103c7906113e9565b60005473ffffffffffffffffffffffffffffffffffffffff16331461086357600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016905590519182527f79ede3839cd7a7d8bd77e97e5c890565fe4f76cdbbeaa364646e28a8695a788491015b60405180910390a150565b60005473ffffffffffffffffffffffffffffffffffffffff16331461090a57600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905590519182527f6d81a01b39982517ba331aeb4f387b0f9cc32334b65bb9a343a077973cf7adf591016108db565b33600090815260046020908152604080832073ffffffffffffffffffffffffffffffffffffffff8616845290915281205482811015610a4a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f000000000000000000000000000000000000000000000000000000606482015260840161052a565b610a573385858403610b05565b5060019392505050565b6000610457338484610cb8565b60005473ffffffffffffffffffffffffffffffffffffffff163314610a9257600080fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040519081527f686a7ab184e6928ddedba810af7b443d6baa40bf32c4787ccd72c5b4b28cae1b906020016108db565b73ffffffffffffffffffffffffffffffffffffffff8316610ba7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f7265737300000000000000000000000000000000000000000000000000000000606482015260840161052a565b73ffffffffffffffffffffffffffffffffffffffff8216610c4a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f7373000000000000000000000000000000000000000000000000000000000000606482015260840161052a565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526004602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b73ffffffffffffffffffffffffffffffffffffffff8316610d5b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f6472657373000000000000000000000000000000000000000000000000000000606482015260840161052a565b73ffffffffffffffffffffffffffffffffffffffff8216610dfe576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f6573730000000000000000000000000000000000000000000000000000000000606482015260840161052a565b73ffffffffffffffffffffffffffffffffffffffff831660009081526003602052604090205481811015610eb4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e63650000000000000000000000000000000000000000000000000000606482015260840161052a565b73ffffffffffffffffffffffffffffffffffffffff808516600090815260036020526040808220858503905591851681529081208054849290610ef890849061146c565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610f5e91815260200190565b60405180910390a350505050565b73ffffffffffffffffffffffffffffffffffffffff8216610fe9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640161052a565b8060056000828254610ffb919061146c565b909155505073ffffffffffffffffffffffffffffffffffffffff82166000908152600360205260408120805483929061103590849061146c565b909155505060405181815273ffffffffffffffffffffffffffffffffffffffff8316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b73ffffffffffffffffffffffffffffffffffffffff821661112f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360448201527f7300000000000000000000000000000000000000000000000000000000000000606482015260840161052a565b73ffffffffffffffffffffffffffffffffffffffff8216600090815260036020526040902054818110156111e5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60448201527f6365000000000000000000000000000000000000000000000000000000000000606482015260840161052a565b73ffffffffffffffffffffffffffffffffffffffff83166000908152600360205260408120838303905560058054849290611221908490611484565b909155505060405182815260009073ffffffffffffffffffffffffffffffffffffffff8516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3505050565b600060208083528351808285015260005b818110156112a65785810183015185820160400152820161128a565b818111156112b8576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461131057600080fd5b919050565b6000806040838503121561132857600080fd5b611331836112ec565b946020939093013593505050565b60008060006060848603121561135457600080fd5b61135d846112ec565b925061136b602085016112ec565b9150604084013590509250925092565b60006020828403121561138d57600080fd5b611396826112ec565b9392505050565b6000602082840312156113af57600080fd5b5035919050565b600080604083850312156113c957600080fd5b6113d2836112ec565b91506113e0602084016112ec565b90509250929050565b600181811c908216806113fd57607f821691505b60208210811415611437577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000821982111561147f5761147f61143d565b500190565b6000828210156114965761149661143d565b50039056fea2646970667358221220b863c64e616e6cf8ada5f67d00484fd054eff24f7d4c3236aaf81687868be11964736f6c63430008090033"
    };
});
define("@scom/cross-chain-token-contract/contracts/Token.ts", ["require", "exports", "@ijstech/eth-contract", "@scom/cross-chain-token-contract/contracts/Token.json.ts"], function (require, exports, eth_contract_6, Token_json_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Token = void 0;
    class Token extends eth_contract_6.Contract {
        constructor(wallet, address) {
            super(wallet, address, Token_json_1.default.abi, Token_json_1.default.bytecode);
            this.assign();
        }
        deploy(params, options) {
            return this.__deploy([params.name, params.symbol], options);
        }
        parseApprovalEvent(receipt) {
            return this.parseEvents(receipt, "Approval").map(e => this.decodeApprovalEvent(e));
        }
        decodeApprovalEvent(event) {
            let result = event.data;
            return {
                owner: result.owner,
                spender: result.spender,
                value: new eth_contract_6.BigNumber(result.value),
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
        parseTransferEvent(receipt) {
            return this.parseEvents(receipt, "Transfer").map(e => this.decodeTransferEvent(e));
        }
        decodeTransferEvent(event) {
            let result = event.data;
            return {
                from: result.from,
                to: result.to,
                value: new eth_contract_6.BigNumber(result.value),
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
            let allowanceParams = (params) => [params.owner, params.spender];
            let allowance_call = async (params, options) => {
                let result = await this.call('allowance', allowanceParams(params), options);
                return new eth_contract_6.BigNumber(result);
            };
            this.allowance = allowance_call;
            let balanceOf_call = async (account, options) => {
                let result = await this.call('balanceOf', [account], options);
                return new eth_contract_6.BigNumber(result);
            };
            this.balanceOf = balanceOf_call;
            let decimals_call = async (options) => {
                let result = await this.call('decimals', [], options);
                return new eth_contract_6.BigNumber(result);
            };
            this.decimals = decimals_call;
            let isPermitted_call = async (param1, options) => {
                let result = await this.call('isPermitted', [param1], options);
                return new eth_contract_6.BigNumber(result);
            };
            this.isPermitted = isPermitted_call;
            let name_call = async (options) => {
                let result = await this.call('name', [], options);
                return result;
            };
            this.name = name_call;
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
            let symbol_call = async (options) => {
                let result = await this.call('symbol', [], options);
                return result;
            };
            this.symbol = symbol_call;
            let totalSupply_call = async (options) => {
                let result = await this.call('totalSupply', [], options);
                return new eth_contract_6.BigNumber(result);
            };
            this.totalSupply = totalSupply_call;
            let approveParams = (params) => [params.spender, this.wallet.utils.toString(params.amount)];
            let approve_send = async (params, options) => {
                let result = await this.send('approve', approveParams(params), options);
                return result;
            };
            let approve_call = async (params, options) => {
                let result = await this.call('approve', approveParams(params), options);
                return result;
            };
            this.approve = Object.assign(approve_send, {
                call: approve_call
            });
            let burn_send = async (amount, options) => {
                let result = await this.send('burn', [this.wallet.utils.toString(amount)], options);
                return result;
            };
            let burn_call = async (amount, options) => {
                let result = await this.call('burn', [this.wallet.utils.toString(amount)], options);
                return;
            };
            this.burn = Object.assign(burn_send, {
                call: burn_call
            });
            let burnFromParams = (params) => [params.account, this.wallet.utils.toString(params.amount)];
            let burnFrom_send = async (params, options) => {
                let result = await this.send('burnFrom', burnFromParams(params), options);
                return result;
            };
            let burnFrom_call = async (params, options) => {
                let result = await this.call('burnFrom', burnFromParams(params), options);
                return;
            };
            this.burnFrom = Object.assign(burnFrom_send, {
                call: burnFrom_call
            });
            let decreaseAllowanceParams = (params) => [params.spender, this.wallet.utils.toString(params.subtractedValue)];
            let decreaseAllowance_send = async (params, options) => {
                let result = await this.send('decreaseAllowance', decreaseAllowanceParams(params), options);
                return result;
            };
            let decreaseAllowance_call = async (params, options) => {
                let result = await this.call('decreaseAllowance', decreaseAllowanceParams(params), options);
                return result;
            };
            this.decreaseAllowance = Object.assign(decreaseAllowance_send, {
                call: decreaseAllowance_call
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
            let increaseAllowanceParams = (params) => [params.spender, this.wallet.utils.toString(params.addedValue)];
            let increaseAllowance_send = async (params, options) => {
                let result = await this.send('increaseAllowance', increaseAllowanceParams(params), options);
                return result;
            };
            let increaseAllowance_call = async (params, options) => {
                let result = await this.call('increaseAllowance', increaseAllowanceParams(params), options);
                return result;
            };
            this.increaseAllowance = Object.assign(increaseAllowance_send, {
                call: increaseAllowance_call
            });
            let mintParams = (params) => [params.account, this.wallet.utils.toString(params.amount)];
            let mint_send = async (params, options) => {
                let result = await this.send('mint', mintParams(params), options);
                return result;
            };
            let mint_call = async (params, options) => {
                let result = await this.call('mint', mintParams(params), options);
                return result;
            };
            this.mint = Object.assign(mint_send, {
                call: mint_call
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
            let transferParams = (params) => [params.recipient, this.wallet.utils.toString(params.amount)];
            let transfer_send = async (params, options) => {
                let result = await this.send('transfer', transferParams(params), options);
                return result;
            };
            let transfer_call = async (params, options) => {
                let result = await this.call('transfer', transferParams(params), options);
                return result;
            };
            this.transfer = Object.assign(transfer_send, {
                call: transfer_call
            });
            let transferFromParams = (params) => [params.sender, params.recipient, this.wallet.utils.toString(params.amount)];
            let transferFrom_send = async (params, options) => {
                let result = await this.send('transferFrom', transferFromParams(params), options);
                return result;
            };
            let transferFrom_call = async (params, options) => {
                let result = await this.call('transferFrom', transferFromParams(params), options);
                return result;
            };
            this.transferFrom = Object.assign(transferFrom_send, {
                call: transferFrom_call
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
    exports.Token = Token;
    Token._abi = Token_json_1.default.abi;
});
define("@scom/cross-chain-token-contract/contracts/index.ts", ["require", "exports", "@scom/cross-chain-token-contract/contracts/@openzeppelin/contracts/token/ERC20/ERC20.ts", "@scom/cross-chain-token-contract/contracts/Authorization.ts", "@scom/cross-chain-token-contract/contracts/CrossChainPolicy.ts", "@scom/cross-chain-token-contract/contracts/Custodian.ts", "@scom/cross-chain-token-contract/contracts/Minter.ts", "@scom/cross-chain-token-contract/contracts/Token.ts"], function (require, exports, ERC20_1, Authorization_1, CrossChainPolicy_1, Custodian_1, Minter_1, Token_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Token = exports.Minter = exports.Custodian = exports.CrossChainPolicy = exports.Authorization = exports.ERC20 = void 0;
    Object.defineProperty(exports, "ERC20", { enumerable: true, get: function () { return ERC20_1.ERC20; } });
    Object.defineProperty(exports, "Authorization", { enumerable: true, get: function () { return Authorization_1.Authorization; } });
    Object.defineProperty(exports, "CrossChainPolicy", { enumerable: true, get: function () { return CrossChainPolicy_1.CrossChainPolicy; } });
    Object.defineProperty(exports, "Custodian", { enumerable: true, get: function () { return Custodian_1.Custodian; } });
    Object.defineProperty(exports, "Minter", { enumerable: true, get: function () { return Minter_1.Minter; } });
    Object.defineProperty(exports, "Token", { enumerable: true, get: function () { return Token_1.Token; } });
});
define("@scom/cross-chain-token-contract", ["require", "exports", "@scom/cross-chain-token-contract/contracts/index.ts"], function (require, exports, Contracts) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Contracts = void 0;
    ///<amd-module name='@scom/cross-chain-token-contract'/> 
    exports.Contracts = Contracts;
});
