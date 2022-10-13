class Account {
  constructor() {
    let _transactions = [];

    this.addTransaction = (transactionObject) =>
      _transactions.push(transactionObject);
    this.getTransactions = () => _transactions;
  }

  get balance() {
    let balance = 0;

    for (let i = 0; i < this.transactions.length; i++) {
      balance += this.transactions[i].credit - this.transactions[i].debit;
    }

    return balance;
  }

  get transactions() {
    return this.getTransactions();
  }

  #logTransaction(credit, debit) {
    this.addTransaction({
      date: new Date(),
      credit: credit,
      debit: debit,
    });
  }

  deposit(amount) {
    this.#logTransaction(amount, 0);
  }

  withdraw(amount) {
    this.#logTransaction(0, amount);
  }
}

module.exports = Account;
