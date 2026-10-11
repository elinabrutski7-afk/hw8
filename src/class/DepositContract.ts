import { BaseContract } from './BaseContract'

export class DepositContract extends BaseContract {
  amount: number;
  interestRate: number;

  constructor(amount: number, interestRate: number, contractId: string, clientName: string) {
    super(contractId, clientName);
    this.amount = amount;
    this.interestRate = interestRate;
  }

  calculateInterest(): number {
    return (this.interestRate / 100) * this.amount;
  }
}