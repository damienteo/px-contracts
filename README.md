# 3 smart contracts with the below functions:

- First smart contract: Create a function to check if the “msg.sender” is a contract address or a non-smart contract address by using the “extcodesize” function. This is to protect the smart contract from being interacted by other smart contracts.

- Second smart contract: Create a smart contract to interact with the first contract but it will fail due to the check function of the first contract.

- Third smart contract: Create a smart contract to interact with the first smart contract and successfully pass the check function of the first contract.

`npx hardhat test` will run the tests which demonstrate what each contract does:

- First contract: ContractChecker.sol
- Second contract: NormalContract.sol
- Third contract: ActuallyAContract.sol
