function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = numberGenerator();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value); //this will give undefined because in generator function have only 3 yeild and we try to get 4th yeild value which is not present that's why it will throw undefined

const genTwo = numberGenerator();

console.log(genTwo.next().value);
console.log(genTwo.next().value);
