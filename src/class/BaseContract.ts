 export class BaseContract{
  contractId: string;
  clientName: string;
  isActive: boolean;

  constructor(contractId: string, clientName: string) {
    this.contractId = contractId;
    this.clientName = clientName;
    this.isActive = false;
  }

  activate() {
    this.isActive = true;
  }

  deactivate() {
    this.isActive = false;
  }
}