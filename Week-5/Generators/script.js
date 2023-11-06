function* generate(array) {
  for (let s of array) {
    yield Symbol(s);
  }
  return;
}

const array = ['hello', 'world', 'test'];

console.log([...generate(array)]);
