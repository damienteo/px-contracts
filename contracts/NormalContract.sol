// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./ContractChecker.sol";

contract NormalContract {
    ContractChecker public contractChecker;

    constructor(address _contractChecker) {
        contractChecker = ContractChecker(_contractChecker);
    }

    function getChecked() public view returns (string memory) {
        return contractChecker.interact();
    }
}
