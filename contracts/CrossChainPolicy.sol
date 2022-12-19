// SPDX-License-Identifier: GPL-3.0-only
pragma solidity 0.8.9;

import "./ICrossChainPolicy.sol";
import "./Authorization.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract CrossChainPolicy is Authorization, ICrossChainPolicy {
    uint256 public maximumPerDay;
    uint256 public extraAllowance;
    uint256 _previousDay;
    uint256 _transferredToday;
    event AddExtraAllowance(address who, uint256 amount, uint newAmount);
    constructor(uint256 maximumPerDay_) {
        maximumPerDay = maximumPerDay_;
    }
    function remainingAllowance() external view returns (uint256) {
        return maximumPerDay + extraAllowance - transferredToday();
    }
    function transferredToday() public view returns (uint256) {
        return _previousDay == (block.timestamp / 1 days) ? _transferredToday : 0;
    }
    function _beforeAnythingElse() internal {
        uint256 today = block.timestamp / 1 days;
        if (_previousDay != today) {
            _transferredToday = 0;
            _previousDay = today;
        }
    }
    function addExtraAllowance(uint256 amount) external onlyOwner {
        extraAllowance += amount;
        emit AddExtraAllowance(msg.sender, amount, extraAllowance);
    }
    function onTransfer(IERC20 /*token*/, address /*destination*/, uint256 amount, bytes calldata /*extraData*/) external override auth {
        _beforeAnythingElse();
        if (amount > extraAllowance) {
            if (extraAllowance > 0) {
                amount -= extraAllowance;
                extraAllowance = 0;
            }
            _transferredToday += amount;
            require(_transferredToday <= maximumPerDay);
        } else {
            extraAllowance -= amount;
        }
    }
}
