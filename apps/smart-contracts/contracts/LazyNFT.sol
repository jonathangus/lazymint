// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import '@openzeppelin/contracts/token/ERC1155/ERC1155.sol';
import '@openzeppelin/contracts/access/Ownable.sol';
import './Lazymint.sol';

contract LazyNFT is ERC1155, Ownable, Lazymint {
    mapping(address => bool) public minted;

    constructor(string memory uri_) ERC1155(uri_) {}

    function setURI(string memory newuri) public onlyOwner {
        _setURI(newuri);
    }

    function execute(address account) internal override {
        _mint(account, 1, 1, '');
        minted[account] = true;
    }

    function tempMint() public {
        _mint(msg.sender, 1, 1, '');
        minted[msg.sender] = true;
    }
}
