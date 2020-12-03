/**
 *  @brief: The node_ejm01_account_service.js main program imports the utility 
 *          module and executes it to find out the total balance
 */

 const sum = require('./node_ejm01_utility.js')

 let checkingAccountBalance = 200
 let savingsAccountBalance = 1000
 let retirementAccountBalance = 20000

 let totalBalance = sum([checkingAccountBalance, savingsAccountBalance, retirementAccountBalance])
 console.log(totalBalance)