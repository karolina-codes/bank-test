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

  printStatement(log) {
    let formattedStatement = ['date || credit || debit || balance'];
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
          this.#formatTransaction(transaction.balance)
      );
    }

    return formattedStatement;
  }
}

module.exports = StatementFormatter;
