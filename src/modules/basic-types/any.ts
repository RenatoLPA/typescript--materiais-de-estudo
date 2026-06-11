//não utilizar. O typescript tem como princípio fazer a tipagem estática. O Any tira essa característica da variável, fazendo com que
//o typescript perca esse controle.

export function handleFileUpload(file: any) {
    console.log(`Nome: ${file.name}`);
    console.log(`Tamanho: ${file.size}`);
}

const file = { 
    name: 'lista_de_funcionarios.txt',
    size: 45221747,        
 };
handleFileUpload(file);
