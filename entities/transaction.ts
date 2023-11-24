class Transaction {
  private accountNumber: number;
  private amount: number;
  private date: Date;
  private operation: string;

  constructor(accountNumber: number, amount: number, operation: string) {
    this.accountNumber = accountNumber;
    this.amount = amount;
    this.date = new Date();
    this.operation = operation;
  }

  public toString() {
    return `Account Number: ${this.accountNumber} - Amount: ${this.amount} - Date: ${this.date.toString()} - Operation: ${this.operation}`;
  }
}

export default Transaction;