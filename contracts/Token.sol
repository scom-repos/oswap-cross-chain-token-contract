// SPDX-License-Identifier: GPL-3.0-only
pragma solidity 0.8.9;

import "./Authorization.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";

contract Token is Authorization, ERC20Burnable {
    constructor(string memory name_, string memory symbol_) ERC20(name_, symbol_) {
        permit(msg.sender);
    }

    function mint(address account, uint256 amount) public auth returns (bool) {
        _mint(account, amount);
        return true;
    }
}
