import Transaction from './transaction';

describe('Transaction', () => {
  it('should return the correct string representation of the transaction', () => {
    const date = new Date(2020, 1, 1);
    const spy = jest.spyOn(global, 'Date').mockImplementation(() => date);
    const transaction = new Transaction(1, 500, 'Deposit');
  
    expect(transaction.toString()).toBe(
      `Account Number: 1 | Amount: 500 | Date: 01/02/2020, 00:00:00 | Operation: Deposit`,
    );
    
    spy.mockRestore();
  });
});
