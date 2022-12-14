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
    const accountInterface = new AccountInterface(
      new Account(),
      new StatementFormatter()
    );

    it('returns balance as 0', () => {
      expect(accountInterface.viewBalance()).toEqual('Your balance is 0.');
    });

    it('prints a statement', () => {
      expect(accountInterface.printStatement()).toEqual([
        'date || credit || debit || balance',
      ]);
    });
  });

  describe('user makes deposits, withdrawals and prints statement', () => {
    const accountInterface = new AccountInterface(
      new Account(),
      new StatementFormatter()
    );

    it('allows a user to make a deposit', () => {
      accountInterface.credit(50);

      expect(accountInterface.viewBalance()).toEqual('Your balance is 50.');
    });

    it('allows a user to make a withdrawal that is greater than their balance', () => {
      accountInterface.debit(20);

      expect(accountInterface.viewBalance()).toEqual('Your balance is 30.');
    });

    it('allows a user to print a statement', () => {
      expect(accountInterface.printStatement()).toEqual([
        'date || credit || debit || balance',
        '7/2/2022 ||  || 20.00 || 30.00',
        '7/2/2022 || 50.00 ||  || 50.00',
      ]);
    });
  });
});
