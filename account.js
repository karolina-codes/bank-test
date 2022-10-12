class Account {
  constructor() {
    let _balance = 0;
    let _transactions = [];

    this.setBalance = (amount) => (_balance = amount);
    this.getBalance = () => _balance;

    this.addTransaction = (transactionObject) =>
      _transactions.push(transactionObject);
    this.getTransactions = () => _transactions;
  }

  get balance() {
    return this.getBalance();
  }

  get transactions() {
    return this.getTransactions();
  }

  #logTransaction(credit, debit) {
    this.addTransaction({
      date: new Date(),
      credit: credit,
      debit: debit,
      balance: this.getBalance(),
    });
  }

  deposit(amount) {
    this.setBalance(this.getBalance() + amount);
    this.#logTransaction(amount, 0);
  }

  withdraw(amount) {
    this.setBalance(this.getBalance() - amount);
    this.#logTransaction(0, amount);
  }
}

module.exports = Account;
