const counter = () => {
  let count = 0;
  return () => {
    count = count + 1;
    return count;
  };
};

const firstValues = [];
const firstCounter = counter();
for (let i = 0; i < 5; i++) {
  firstValues.push(firstCounter());
}
const secondValues = [];
const secondCounter = counter();
for (let i = 0; i < 3; i++) {
  secondValues.push(secondCounter());
}

console.log('firstValues array: ', firstValues);
console.log('secondValues array: ', secondValues);
