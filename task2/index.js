const dayTransactions = [
    { currency: 'USD', amount:60, operation: 'sell' },
    { currency: 'EUR', amount:160, operation: 'buy' },
    { currency: 'EUR', amount:90, operation: 'sell' },
];

function getTotalBalance(transactionsList) {
    const transformedTransactions = transactionsList.map(function(transactionObj) {
        const key = transactionObj.currency;
        const value = transactionObj.amount;

        const obj = {
            [key]: transactionObj.operation === 'sell' ? -value : value
        };
        return obj;
    });

    const result = transformedTransactions.reduce(function(acc, transactionObj) {
        const currency = Object.keys(transactionObj)[0];
        let amount = Object.values(transactionObj)[0];
        
        Object.assign(acc, transactionObj);
        return acc;
    },{});
    return result;
}

const result = getTotalBalance(dayTransactions);

console.log(result);