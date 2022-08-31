//Crie a const para a frase aqui

const frase = "Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair\" "
const novaFrase = frase.replaceAll("verde","rosa").replaceAll("azul","laranja")

console.log (`${novaFrase}\n ${novaFrase.includes("verde") && novaFrase.includes("laranja")}`)

