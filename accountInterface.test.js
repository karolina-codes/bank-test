/* eslint-disable no-undef */
const AccountInterface = require('./accountInterface');
const Account = require('./account');
const StatementFormatter = require('./statementFormatter');

describe('AccountInterface', () => {
  beforeAll(() => {
    jest.useFakeTimers('modern');
    jest.setSystemTime(new Date('2022-02-07'));
  });

  describe('new account has been made, no deposits/withdrawals', () => {
    const account = new Account();
    const statementFormatter = new StatementFormatter();
    const accountInterface = new AccountInterface(account, statementFormatter);

    it('returns balance as 0', () => {
      expect(accountInterface.getBalance()).toEqual('Your balance is now 0.');
    });

    it('prints a statement', () => {
      expect(accountInterface.printStatement()).toEqual(
        'date || credit || debit || balance\n'
      );
    });
  });

  describe('user makes deposits, withdrawals and prints statement', () => {
    const accountInterface = new AccountInterface(
      new Account(),
      new StatementFormatter()
    );

    it('allows a user to make a deposit', () => {
      accountInterface.credit(50);

      expect(accountInterface.getBalance()).toEqual('Your balance is now 50.');
    });

    it('allows a user to make a withdrawal that is greater than their balance', () => {
      accountInterface.debit(20);

      expect(accountInterface.getBalance()).toEqual('Your balance is now 30.');
    });

    it('allows a user to print a statement', () => {
      expect(accountInterface.printStatement()).toEqual(
        'date || credit || debit || balance\n7/2/2022 ||  || 20.00 || 30.00\n7/2/2022 || 50.00 ||  || 50.00\n'
      );
    });
  });
});
