import { BaseContract } from './BaseContract'

export class InsuranceContract extends BaseContract {
  insuranceType: string;
  premium: number;
  termYears: number;

  constructor(insuranceType: string, premium: number, termYears: number, contractId: string, clientName: string) {
    super(contractId, clientName);
    this.insuranceType = insuranceType;
    this.premium = premium;
    this.termYears = termYears;
  }

  calculateTotalPremium() {
    return this.premium * this.termYears;
  }
}