import { expect } from "chai";
import { ethers } from "hardhat";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

import { ContractChecker, NormalContract } from "../typechain-types";

describe("ContractChecker", () => {
  let ContractChecker,
    contractCheckerContract: ContractChecker,
    owner: SignerWithAddress;

  beforeEach(async () => {
    ContractChecker = await ethers.getContractFactory("ContractChecker");
    contractCheckerContract = await ContractChecker.deploy();
    [owner] = await ethers.getSigners();
  });

  it("accepts non-contract wallet addresses", async () => {
    expect(await contractCheckerContract.interact()).to.equal("Not a contract");
  });

  it("rejects Normal Contracts", async () => {
    const NormalContract = await ethers.getContractFactory("NormalContract");
    const normalContract = await NormalContract.deploy(
      contractCheckerContract.address
    );

    await expect(normalContract.getChecked()).to.be.revertedWith(
      "Contract found!"
    );
  });
});
