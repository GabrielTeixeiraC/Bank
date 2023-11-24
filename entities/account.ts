import Transaction from "./transaction";

class BankAccount {
  private accountNumber: number;
  private balance: number;
  private statement: Transaction[];

  constructor(initialBalance: number, accountNumber: number) {
    this.balance = initialBalance;
    this.accountNumber = accountNumber;
    this.statement = [];
  }

  public deposit(amount: number) {
    this.balance += amount;
    this.statement.push(new Transaction(this.accountNumber, amount, "Deposit"));
  }

  public withdraw(amount: number) {
    this.balance -= amount;
    this.statement.push(new Transaction(this.accountNumber, amount, "Withdrawal"));
  }

  public getBalance() {
    return this.balance;
  }

  public getStatement() {
    let statement = "";
    for (let transaction of this.statement) {
      statement += transaction.toString() + "\n";
    }

    return statement;
  }

  public getNumber() {
    return this.accountNumber;
  }
}

export default BankAccount;