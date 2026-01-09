//let films = ['Duna: Parte 2', 'Ainda Estou Aqui', 'Divertidamente 2'];
//let films2: string[] = ['Duna: Parte 2', 'Ainda Estou Aqui', 'Divertidamente 2'];
//let numbers: number[] = [1, 2, 3, 4, 5, 6];
let films2 = ['Duna: Parte 2', 'Ainda Estou Aqui', 'Divertidamente 2'];
let numbers = [1, 2, 3, 4, 5, 6];
export function toUpperCaseStrings(arr) {
    return arr.map(value => value.toUpperCase());
}
console.log(toUpperCaseStrings(films2));
