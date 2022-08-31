const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

console.log (`Antes de remover os espaços a citação tinha ${minhaString.length} caracteres, e após remove-los sobrou ${minhaString.trim().length} caracteres.`)

const novaFrase = minhaString.replaceAll("________","sticioso")
console.log (novaFrase)



