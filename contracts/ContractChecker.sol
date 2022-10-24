// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract ContractChecker {
    modifier isNotContract(address _a) {
        uint256 size;
        assembly {
            size := extcodesize(_a)
        }
        require(size == 0, "Contract found!");
        _;
    }

    function interact()
        public
        view
        isNotContract(msg.sender)
        returns (string memory)
    {
        return "Not a contract";
    }
}
