import { BaseContract } from '../../src/class/BaseContract'
import { DepositContract } from '../../src/class/DepositContract'
import { LoanContract } from '../../src/class/LoanContract'
import { InsuranceContract } from '../../src/class/InsuranceContract'

describe('BaseContract general tests', () => {
  let contract: BaseContract;
  beforeEach(() => {
    contract = new BaseContract('C-1', 'Elina');
    contract.activate();
  });

  afterEach(() => {
    contract.deactivate();
    console.log('account deactivated, test completed');
  });

  test('Correct contact ID', () => {
    expect(contract.contractId).toBe('C-1');
  });
  test('Correct client name', () => {
    expect(contract.clientName).toBe('Elina');
  })
  test('Correct activity status', () => {
    expect(contract.isActive).toBeTruthy();
  })
  test('Deactivate account', () => {
    contract.deactivate();
    expect(contract.isActive).toBeFalsy()
  })
})

describe('DepositContract tests', () => {
  let contract: DepositContract;

  beforeEach(() => {
    contract = new DepositContract(1000, 5, 'C-2', 'Elena');
    contract.activate();
  });

  afterEach(() => {
    contract.deactivate();
    console.log('account deactivated, test completed');
  });

  test('Correct contact ID', () => {
    expect(contract.contractId).toBe('C-2');
  })
  test('Correct client name', () => {
    expect(contract.clientName).toBe('Elena');
  })
  test('Correct activity status', () => {
    expect(contract.isActive).toBeTruthy();
  })
  test('Calculation of the amount of interest on a deposit', () => {
    expect(contract.calculateInterest()).toBe(50);
  })
  test('Correct amount', () => {
    expect(contract.amount).toBe(1000);
  })
  test('Correct interest rate', () => {
    expect(contract.interestRate).toBe(5);
  })
})

describe('LoanContract tests', () => {
  let contract: LoanContract;

  beforeEach(() => {
    contract = new LoanContract(10000, 160, 65, 'C-3', 'Alina');
    contract.activate();
  });
  afterEach(() => {
    contract.deactivate();
    console.log('account deactivated, test completed');
  });

  test('Correct contact ID', () => {
    expect(contract.contractId).toBe('C-3');
  });
  test('Correct client name', () => {
    expect(contract.clientName).toBe('Alina')
  });
  test('Correct activity status', () => {
    expect(contract.isActive).toBeTruthy()
  });
  test('Correct loan amount', () => {
    expect(contract.loanAmount).toBe(10000);
  });
  test('Correct calculation of the total amount of loan payments', () => {
    expect(contract.calculateTotalPayment()).toBe(10400);
  })
  test('Correct monthly payment', () => {
    expect(contract.monthlyPayment).toBe(160);
  })
  test('Correct loan term months', () => {
    expect(contract.loanTermMonths).toBe(65);
  })
})

describe('InsuranceContract tests', () => {
  let contract: InsuranceContract;
  beforeEach(() => {
    contract = new InsuranceContract('health', 500, 5, 'C-4', 'Irina');
    contract.activate();
  });
  afterEach(() => {
    contract.deactivate();
    console.log('lololo');
  });

  test('Correct contact ID', () => {
    expect(contract.contractId).toBe('C-4');
  });
  test('Correct client name', () => {
    expect(contract.clientName).toBe('Irina');
  });
  test('Correct activity status', () => {
    expect(contract.isActive).toBeTruthy();
  });
  test('Correct insurance status', () => {
    expect(contract.insuranceType).toBe('health');
  });
  test(
    'Correct calculation of the total amount of insurance payments for the entire term', () => {
      expect(contract.calculateTotalPremium()).toBe(2500);
    })
  test('Correct premium', () => {
    expect(contract.premium).toBe(500);
  })
  test('Correct term years', () => {
    expect(contract.termYears).toBe(5);
  })
})