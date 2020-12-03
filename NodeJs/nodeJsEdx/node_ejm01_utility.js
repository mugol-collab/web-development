/**
 *  @brief: The node_ejm01_utility.js file has some generic methods and objects
 *          which we use in many projects and applications.
 *          In this example, we will import those generic methods into 
 *          node_ejm01_account-service.js
 */

 module.exports = function(numbersToSum)
 {
     let sum = 0,
        i = 0,
        l = numbersToSum.length;

        while (i < l)
        {
            sum += numbersToSum[i++]
        }
        return sum
 }