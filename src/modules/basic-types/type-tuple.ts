let filmArray: (number | string | boolean)[] = [1, 'Ainda estou aqui', true]
let filmTuple: [number, string, boolean] = [2, 'Uma batalha após a outra', true]

//
const[idArr, titleArr, availableArr] = filmArray //passando o mouse em cima, o ts diz que a variável pode ser qualquer uma.
const[id, title, available] = filmTuple //tuplas ja são definidas certinhas.

console.log(id)