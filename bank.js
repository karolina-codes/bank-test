const AccountInterface = require('./accountInterface');
const Account = require('./account');
const StatementFormatter = require('./statementFormatter');

const accountInterface = new AccountInterface(
  new Account(),
  new StatementFormatter()
);

module.exports = accountInterface;
