class Account {
  constructor() {
    this.balance = 0;
    this.credit = 0;
    this.statement = [['date', 'credit', 'debit', 'balance']];
  }

  currentDate() {
    const date = new Date();
    return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
  }

  viewBalance() {
    return `Your balance is now ${this.balance}.`;
  }

  viewCredit() {
    return `Your credit is now ${this.credit}.`;
  }

  logTransaction(credit, debit, balance) {
    this.statement.push([this.currentDate(), credit, debit, balance]);
  }

  deposit(amount) {
    this.balance += amount;
    this.logTransaction(this.credit, amount, this.balance);

    return this.viewBalance();
  }

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      this.logTransaction(this.credit, -amount, this.balance);

      return this.viewBalance();
    } else {
      this.credit = Math.abs(this.balance - amount);
      this.balance = 0;

      this.logTransaction(this.credit, -amount, this.balance);

      return `${this.viewCredit()}\n${this.viewBalance()}`;
    }
  }

  printStatement() {
    let formattedStatement = '';

    for (let i = 0; i < this.statement.length; i++) {
      for (let j = 0; j < 4; j++) {
        if (j < 3) {
          formattedStatement = formattedStatement.concat(
            this.statement[i][j] + ' || '
          );
        } else {
          formattedStatement = formattedStatement.concat(
            this.statement[i][j] + '\n'
          );
        }
      }
    }

    return formattedStatement;
  }
}

module.exports = Account;
