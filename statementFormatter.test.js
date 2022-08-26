/* eslint-disable no-undef */
const StatementFormatter = require('./statementFormatter');

describe('StatementFormatter', () => {
  it('formats the transaction log into a statement', () => {
    const statementFormatter = new StatementFormatter();
    const transactionLog = [
      {
        balance: '20.50',
        credit: '20.50',
        date: new Date('2022-02-07T00:00:00.000Z'),
        debit: '0.00',
      },
      {
        balance: '10.50',
        credit: '0.00',
        date: new Date('2022-02-07T00:00:00.000Z'),
        debit: '10.00',
      },
    ];

    expect(statementFormatter.printStatement(transactionLog)).toEqual(
      'date || credit || debit || balance\n7/2/2022 ||  || 10.00 || 10.50\n7/2/2022 || 20.50 ||  || 20.50\n'
    );
  });
});
