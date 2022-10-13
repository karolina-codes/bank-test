# bank-test

This my solution to the bank test from the Makers Bootcamp which simulates a bank account. The requirements were: 

1. You should be able to interact with your code via a REPL like IRB or Node. (You don't need to implement a command line interface that takes input from STDIN.)
2. Deposits, withdrawal.
3. Account statement (date, amount, balance) printing.
4. Data can be kept in memory (it doesn't need to be stored to a database or anything).

I used a TDD process when building this and it was a lot of fun!

## How to run the code

Firstly, clone the repo and then from the directory run this in the terminal.

    nvm use node
    npm install
    
Now you will need to enter the node REPL and execute the following code.

    node
    > const AccountInterface = require('./accountInterface');
    undefined
    > const Account = require('./account');
    undefined
    > const StatementFormatter = require('./statementFormatter');
    undefined
    > const bank = new AccountInterface(
        new Account(),
        new StatementFormatter()
        );
    undefined
    
Now you can execute 4 functions to simulate a bank account. You can credit, debit, viewBalance and printStatement. For example:

    > bank.credit(200)
    undefined
    > bank.credit(1000)
    undefined
    > bank.debit(700)
    undefined
    > bank.viewBalance()
    'Your balance is 500.'
    > bank.printStatement()
    [
      'date || credit || debit || balance',
      '12/10/2022 ||  || 700.00 || 500.00',
      '12/10/2022 || 1000.00 ||  || 1200.00',
      '12/10/2022 || 200.00 ||  || 200.00'
    ]
    
## How to run the tests

    npx jest
    
## Future features

To improve this I would ensure that the user is not able to withdraw more than they have in their account.
