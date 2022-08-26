class Account {
  #balance;

  constructor() {
    this.#balance = 0;
    this.transactions = [];
  }

  #logTransaction(credit, debit) {
    this.transactions.push({
      date: new Date(),
      credit: credit.toFixed(2),
      debit: debit.toFixed(2),
      balance: this.#balance.toFixed(2),
    });
  }

  deposit(amount) {
    this.#balance += amount;
    this.#logTransaction(amount, 0);
  }

  withdraw(amount) {
    this.#balance -= amount;
    this.#logTransaction(0, amount);
  }
}

module.exports = Account;
