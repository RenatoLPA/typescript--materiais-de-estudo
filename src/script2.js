function sum(a, b) {
    console.log("Dentro do escopo global")
    return { result: a + b };
}

export function sub(a, b) {
    console.log("Dentro do escopo de módulo");
    return a - b;
}