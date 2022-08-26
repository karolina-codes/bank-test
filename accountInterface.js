class AccountInterface {
  constructor(account, formatter) {
    this.account = account;
    this.formatter = formatter;
  }

  credit(amount) {
    this.account.deposit(amount);
  }

  debit(amount) {
    this.account.withdraw(amount);
  }

  getBalance() {
    return `Your balance is now ${this.account.balance}.`;
  }

  printStatement() {
    return this.formatter.printStatement(this.account.transactions);
  }
}

module.exports = AccountInterface;
