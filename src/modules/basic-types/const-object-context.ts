/*const file = { 
    name: 'lista_de_funcionarios.txt',
    size: 45221747,        
 } as const;
*/

type File = {
    readonly name: string,
    readonly size: number
}

const file: File = { 
    name: 'lista_de_funcionarios.txt',
    size: 45221747,        
 };

 //file.name = 'lista_de_dependentes.txt'

export function handleFileUpload(file: any) {
    console.log(`Nome: ${file.name}`);
    console.log(`Tamanho: ${file.size}`);
}

handleFileUpload(file);
