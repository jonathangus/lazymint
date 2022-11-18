// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import '@openzeppelin/contracts/token/ERC1155/ERC1155.sol';
import '@openzeppelin/contracts/access/Ownable.sol';
import './Lazymint.sol';

contract LazyNFT is ERC1155, Lazymint {
    mapping(address => bool) public minted;

    constructor(string memory uri_, uint256 updateInterval)
        ERC1155(uri_)
        Lazymint(updateInterval)
    {}

    function execute(address account) internal override {
        _mint(account, 1, 1, '');
        minted[account] = true;
    }

    function tempMint() public {
        _mint(msg.sender, 1, 1, '');
        minted[msg.sender] = true;
    }
}
