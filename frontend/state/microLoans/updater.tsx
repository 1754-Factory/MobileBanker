import Web3 from "web3";

import { getMicroLoanFactory } from "../../utils/getContract";

export async function fetchPossibleLoan({
  wallet,
}: {
  wallet?: string;
}): Promise<
  | undefined
  | {
      amountPaid: string;
      amountOwed: string;
      id: string;
      deadline: number;
      totalBorrowed: string;
      monthlyRate: string;
    }
> {
  const web3 = new Web3(
    new Web3.providers.HttpProvider("https://forno.celo.org")
  );

  const loanContract = getMicroLoanFactory(web3);

  const loanId = await loanContract.methods.requestsByAddress(wallet).call();
  if (parseInt(loanId) === 0) {
    const loan = await loanContract.methods.loans(loanId).call();
    const amountOwed = await loanContract.methods.getAmountOwed(loanId).call();

    return {
      amountPaid: loan.totalPaid.toString(),
      amountOwed: amountOwed.toString(),
      id: loanId,
      deadline: parseInt(loan.deadline.toString()),
      totalBorrowed: loan.amount.toString(),
      monthlyRate: "10000",
    };
  }
  return undefined;
}
