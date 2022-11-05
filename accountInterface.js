class AccountInterface {
  constructor(account, formatter) {
    this.account = account;
    this.formatter = formatter;
  }

  viewBalance() {
    return `Your balance is ${this.account.balance}.`;
  }

  credit(amount) {
    this.account.deposit(amount);
  }

  debit(amount) {
    return this.account.withdraw(amount);
  }

  printStatement() {
    return this.formatter.printStatement(this.account.transactions);
  }
}

module.exports = AccountInterface;
