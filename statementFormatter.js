class StatementFormatter {
  #formatDate(date) {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  }

  #formatTransaction(transaction) {
    if (transaction === 0) {
      return '';
    }

    return transaction.toFixed(2);
  }

  #calculateBalance(transactions) {
    const balances = [];

    for (let i = 0; i < transactions.length; i++) {
      const currentBalance = balances[0] || 0;
      const newBalance =
        currentBalance + (transactions[i].credit - transactions[i].debit);

      balances.unshift(newBalance);
    }

    return balances;
  }

  printStatement(log) {
    let formattedStatement = ['date || credit || debit || balance'];

    const balances = this.#calculateBalance(log);
    const transactions = log.reverse();

    for (let i = 0; i < transactions.length; i++) {
      const transaction = transactions[i];

      formattedStatement.push(
        this.#formatDate(transaction.date) +
          ' || ' +
          this.#formatTransaction(transaction.credit) +
          ' || ' +
          this.#formatTransaction(transaction.debit) +
          ' || ' +
          this.#formatTransaction(balances[i])
      );
    }

    return formattedStatement;
  }
}

module.exports = StatementFormatter;
