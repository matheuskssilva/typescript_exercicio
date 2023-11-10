function multiplicacaoDeNumeros(numero1: number, numero2: number): number {

    return numero1 * numero2;
}

const resultadoDaMultiplicacao = multiplicacaoDeNumeros(2, 7)

console.log(resultadoDaMultiplicacao);

function saudacao(nome: string): string {
    return `Olá ${nome}`;
}

const pessoa = saudacao('João');
console.log(pessoa);