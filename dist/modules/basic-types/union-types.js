let shoppingCart = [200.75, 150.12, '33.30', '44', 'not defined'];
export function totalize(values) {
    return values
        .map(value => typeof value === 'number' ? value : parseFloat(value)) //converter todos os valores para numeros
        .filter(value => !isNaN(value)) //filtrar os valores válidos
        .reduce((acc, curr) => acc + curr, 0); //totalizar
}
console.log(totalize(shoppingCart));
