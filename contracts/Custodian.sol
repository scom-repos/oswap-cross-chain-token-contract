// SPDX-License-Identifier: GPL-3.0-only
pragma solidity 0.8.9;

import "./Authorization.sol";
import "./Token.sol";
import "./ICrossChainPolicy.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/utils/Address.sol";

contract Custodian is Authorization, Pausable, ReentrancyGuard {
    using SafeERC20 for IERC20;

    ICrossChainPolicy public crossChainPolicy;
    uint256 public round;

    mapping(uint256 => mapping(IERC20 => mapping(address => uint256))) public locked; //round -> token -> owner -> amount
    mapping(bytes32 => mapping(uint16 => bool)) public refunded;
    mapping(IERC20 => bool) public allowedTokens;

    event Lock(address indexed from, uint256 round, IERC20 indexed token, uint256 amount, uint256 newBalance);
    event CrossChainPolicyChanged(ICrossChainPolicy newPolicy);
    event Refund(IERC20 indexed token, address indexed destination, uint256 amount);
    event AllowToken(IERC20 indexed token, bool isAllow, address msgSender);
    event NewRound(uint256 round);

    constructor() {
        permit(msg.sender);
    }
    function pause() external onlyOwner {
        _pause();
    }
    function resume() external onlyOwner {
        _unpause();
    }

    function setCrossChainPolicy(ICrossChainPolicy crossChainPolicy_) external onlyOwner {
        crossChainPolicy = crossChainPolicy_;
        emit CrossChainPolicyChanged(crossChainPolicy);
    }
    function allowToken(IERC20 token, bool allow) external onlyOwner {
        allowedTokens[token] = allow;
        emit AllowToken(token, allow, msg.sender);
    }
    function _transferTokenFrom(IERC20 token, uint amount) internal returns (uint256 balance) {
        balance = token.balanceOf(address(this));
        token.safeTransferFrom(msg.sender, address(this), amount);
        balance = token.balanceOf(address(this)) - balance;
    }

    /**
     * @dev Lock token in this contract
     * 
     * @param token The token to lock
     * @param amount The amount to lock
     */
    function lock(IERC20 token, uint256 amount) external whenNotPaused nonReentrant {
        require(allowedTokens[token], "Invalid token");
        amount = _transferTokenFrom(token, amount);
        uint256 newBalance = locked[round][token][msg.sender] + amount;
        locked[round][token][msg.sender] = newBalance;
        emit Lock(msg.sender, round, token, amount, newBalance);
    }

    /**
     * @dev Refund tokens after we have received them back on the secondary chain.
     * 
     * @param txHash The hash of the transaction on the other chain
     * @param transferIndex The index of the event on the other chain (if the transaction contained multiple transfers)
     * @param destination The destination of the funds
     * @param amount The amount of funds
     */
    function refund(bytes32 txHash, uint16 transferIndex, IERC20 token, address destination, uint256 amount, bytes memory extraData) external auth whenNotPaused nonReentrant {
        require(!refunded[txHash][transferIndex], "This transfer was already processed");
        refunded[txHash][transferIndex] = true;
        if (address(crossChainPolicy) != address(0)) {
            crossChainPolicy.onTransfer(token, destination, amount, extraData);
        }
        token.safeTransfer(destination, amount);
        emit Refund(token, destination, amount);
    }

    function transferToken(IERC20 token, address destination, uint256 amount) external onlyOwner nonReentrant {
        token.safeTransfer(destination, amount);
    }
    function transferETH(address payable destination, uint256 amount) external onlyOwner nonReentrant {
        Address.sendValue(destination, amount);
    }

    function newRound() external auth {
        round++;
        emit NewRound(round);
    }
}
