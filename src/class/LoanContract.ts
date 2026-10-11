import { BaseContract } from './BaseContract'

export class LoanContract extends BaseContract {
  loanAmount: number;
  monthlyPayment: number;
  loanTermMonths: number;

  constructor(loanAmount: number, monthlyPayment: number, loanTermMonths: number, contractId: string, clientName: string) {
    super(contractId, clientName);
    this.loanAmount = loanAmount;
    this.monthlyPayment = monthlyPayment;
    this.loanTermMonths = loanTermMonths;
  }

  calculateTotalPayment() {
    return this.loanTermMonths * this.monthlyPayment; // зачем нам тогда loanAmount...
  }
}