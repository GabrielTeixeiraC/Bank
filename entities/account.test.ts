import BankAccount from "./account";

describe("BankAccount", () => {
  let account: BankAccount;

  beforeEach(() => {
    account = new BankAccount(1000, 1);
  });

  it("should deposit the specified amount into the account", () => {
    account.deposit(500);
    expect(account.getBalance()).toBe(1500);
  });

  it("should withdraw the specified amount from the account", () => {
    account.withdraw(200);
    expect(account.getBalance()).toBe(800);
  });

  it("should return the current balance of the account", () => {
    expect(account.getBalance()).toBe(1000);
  });

  it("should return the account number", () => {
    expect(account.getNumber()).toBe(1);
  });

  it("should return the statement of transactions", () => {
    const date = new Date(2020, 1, 1);
    const spy = jest.spyOn(global, "Date").mockImplementation(() => date);

    account.deposit(500);
    account.withdraw(200);

    expect(account.getStatement()).toEqual("Account Number: 1 | Amount: 500 | Date: 01/02/2020, 00:00:00 | Operation: Deposit\nAccount Number: 1 | Amount: 200 | Date: 01/02/2020, 00:00:00 | Operation: Withdrawal\n");

    spy.mockRestore();
  });
});