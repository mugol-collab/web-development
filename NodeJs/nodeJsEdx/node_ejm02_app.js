const sum = require('./node_ejm01_utility')
require('./node_ejm01_account-service')

let checkingAccountBalance = 200
let savingsAccountBalance = 1000
let retirementAccountBalance = 2000

retirementAccountBalance = 40000

let totalBalance = sum([checkingAccountBalance, savingsAccountBalance, retirementAccountBalance])
console.log(totalBalance)