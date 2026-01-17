//let numbers: readonly number[] = [10, 20, 30, 40, 50];
//let numbers: ReadonlyArray<number> = [10, 20, 30, 40, 50]; //apenas leitura
let numbers = [10, 20, 30, 40, 50]; //tupla
//numbers[0] = 30;
let numbersCopy = numbers.map((item) => item * 2);
console.log(numbers);
console.log(numbersCopy);
export default () => { };
