const Account = require('./bank.js');

describe('Account', () => {
  beforeAll(() => {
    jest.useFakeTimers('modern');
    jest.setSystemTime(new Date('2022-02-07'));
  });

  describe('new account has been made, no deposits/withdrawals', () => {
    const account = new Account();

    it('returns the current date in a string format', () => {
      expect(account.currentDate()).toEqual('7-2-2022');
    });

    it('returns balance as 0', () => {
      expect(account.balance).toEqual(0);
    });

    it('user can view balance', () => {
      expect(account.viewBalance()).toEqual('Your balance is now 0.');
    });

    it('returns creidt as 0', () => {
      expect(account.credit).toEqual(0);
    });

    it('user can view credit', () => {
      expect(account.viewCredit()).toEqual('Your credit is now 0.');
    });

    it('prints a statement', () => {
      expect(account.printStatement()).toEqual(
        'date || credit || debit || balance\n'
      );
    });
  });

  describe('user makes deposits, withdrawals and prints statement', () => {
    const account = new Account();

    it('allows a user to make a deposit', () => {
      expect(account.deposit(50)).toEqual('Your balance is now 50.');
    });

    it('allows a user to make a withdrawal that is less than their balance', () => {
      expect(account.withdraw(10)).toEqual('Your balance is now 40.');
    });

    it('allows a user to make a withdrawal that is greater than their balance', () => {
      expect(account.withdraw(50)).toEqual(
        'Your credit is now 10.\nYour balance is now 0.'
      );
    });

    it('allows a user to print a statement', () => {
      expect(account.printStatement()).toEqual(
        'date || credit || debit || balance\n7-2-2022 || 0 || 50 || 50\n7-2-2022 || 0 || -10 || 40\n7-2-2022 || 10 || -50 || 0\n'
      );
    });
  });
});
