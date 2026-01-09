let shoppingCart = [200.75, 150.12, '33.30', '44', 'not defined']

export function totalize(valores: (string | number)[]) { //queremos retornar o total
    return valores
        .map(valores => typeof valores === 'number' ? valores : parseFloat(valores) )  //converter todos os valores para numeros
        .filter(valores => !isNaN(valores)) //filtrar os valores válidos
        .reduce((acc, curr) => acc + curr, 0) //totalizar
 } 

 console.log(totalize(shoppingCart))