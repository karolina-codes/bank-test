class StatementFormatter {
  #currentDate(date) {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  }

  printStatement(log) {
    let formattedStatement = 'date || credit || debit || balance\n';
    const transactions = log.reverse();

    for (let i = 0; i < transactions.length; i++) {
      if (transactions[i].credit === 0) {
        transactions[i].credit = '';
        transactions[i].debit = transactions[i].debit.toFixed(2);
        transactions[i].balance = transactions[i].balance.toFixed(2);
      } else if (transactions[i].debit === 0) {
        transactions[i].debit = '';
        transactions[i].credit = transactions[i].credit.toFixed(2);
        transactions[i].balance = transactions[i].balance.toFixed(2);
      }

      formattedStatement = formattedStatement.concat(
        this.#currentDate(transactions[i].date) +
          ' || ' +
          transactions[i].credit +
          ' || ' +
          transactions[i].debit +
          ' || ' +
          transactions[i].balance +
          '\n'
      );
    }

    return formattedStatement;
  }
}

module.exports = StatementFormatter;
