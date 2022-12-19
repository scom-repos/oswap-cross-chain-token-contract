// SPDX-License-Identifier: GPL-3.0-only
pragma solidity 0.8.9;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

interface ICrossChainPolicy {
    function onTransfer(IERC20 token, address destination, uint256 amount, bytes memory extraData) external;
}
