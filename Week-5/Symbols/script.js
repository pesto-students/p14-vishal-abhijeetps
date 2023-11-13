let counter = 1;

const generateTransactionId = () => Symbol(`TRANSACTION_ID_${counter++}`);

const transaction1 = generateTransactionId();
console.log(transaction1);

const transaction2 = generateTransactionId();
console.log(transaction2);

const transaction3 = generateTransactionId();
console.log(transaction3);
