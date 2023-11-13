// Put your solution here

const printArray = (arrayType, arr) => {
  if (arrayType === 'odd') {
    console.log('Odd numbers: ');
  } else if (arrayType === 'even') {
    console.log('Even numbers: ');
  }
  if (arr.length === 0) {
    console.log('None');
    return;
  }

  arr.forEach((num) => {
    console.log(num);
  });
};

const divideArray = (arr) => {
  const evenNums = [];
  const oddNums = [];
  arr.forEach((num) => {
    if (num % 2 === 0) {
      evenNums.push(num);
    } else {
      oddNums.push(num);
    }
  });
  evenNums.sort((a, b) => a - b);
  oddNums.sort((a, b) => a - b);
  printArray('even', evenNums);
  printArray('odd', oddNums);
};
