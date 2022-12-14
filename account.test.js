/* eslint-disable no-undef */
const Account = require('./account.js');

describe('Account', () => {
  beforeAll(() => {
    jest.useFakeTimers('modern');
    jest.setSystemTime(new Date('2022-08-20'));
  });

  describe('user makes an account, deposits and withdraws', () => {
    const account = new Account();

    it('allows a user to make a deposit', () => {
      account.deposit(20.5);

      expect(account.balance).toEqual(20.5);
    });

    it('allows a user to make a withdrawal', () => {
      account.withdraw(10);

      expect(account.balance).toEqual(10.5);
    });

    it('logs the transactions', () => {
      const expectedArray = [
        {
          credit: 20.5,
          date: new Date('2022-08-20T00:00:00.000Z'),
          debit: 0,
        },
        {
          credit: 0,
          date: new Date('2022-08-20T00:00:00.000Z'),
          debit: 10,
        },
      ];
      expect(account.transactions).toEqual(expectedArray);
    });
  });
});
