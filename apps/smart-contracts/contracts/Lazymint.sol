// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Lazymint {
    mapping(address => bool) public watchers;

    function addWatcher() public {
        watchers[msg.sender] = true;
    }

    function execute(address account) internal virtual {}
}
