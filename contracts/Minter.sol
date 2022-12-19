// SPDX-License-Identifier: GPL-3.0-only
pragma solidity 0.8.9;

import "./Authorization.sol";
import "./Token.sol";
import "./ICrossChainPolicy.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract Minter is Authorization, Pausable, ReentrancyGuard {
    ICrossChainPolicy public crossChainPolicy;
    mapping(bytes32 => mapping(uint16 => bool)) public minted;
    mapping(bytes32 => bool) public burned;

    event CrossChainPolicyChanged(ICrossChainPolicy newPolicy);
    event Mint(Token indexed token, address indexed destination, uint256 amount);
    event Burn(Token indexed token, uint256 amount);

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

    /**
     * @dev Mint some tokens on the secondary chain after receiving tokens on the main chain.
     * 
     * @param txHash The hash of the transaction on the other chain
     * @param transferIndex The index of the event within the transaction the other chain (if the transaction contained multiple transfers)
     * @param destination The destination of the funds
     * @param amount The amount of funds
     */
    function mint(bytes32 txHash, uint16 transferIndex, Token token, address destination, uint256 amount, bytes memory extraData) external auth whenNotPaused nonReentrant {
        require(!minted[txHash][transferIndex], "This transfer was already processed");
        minted[txHash][transferIndex] = true;
        if (address(crossChainPolicy) != address(0)) {
            crossChainPolicy.onTransfer(token, destination, amount, extraData);
        }
        token.mint(destination, amount);
        emit Mint(token, destination, amount);
    }

    /**
     * @dev Burn tokens after their main chain counterparts have been confirmed to be refunded.
     * 
     * @param txHash The hash of the transaction on the other chain
     * @param amount The amount of funds
     */
    function burn(bytes32 txHash, Token token, uint256 amount) external auth whenNotPaused nonReentrant {
        require(!burned[txHash], "This burn was already processed");
        burned[txHash] = true;
        token.burn(amount);
        emit Burn(token, amount);
    }
}
