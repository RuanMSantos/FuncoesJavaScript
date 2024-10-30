// function declaration
function funcao1(){
    console.log("Você executou a função 1!");
}

// function expression
let funcao2 = function(){
    console.log("Você executou a função 2!");
}; // forma de atribuir uma função a uma variavel

funcao1();
funcao2(); // é camada da mesma forma

let copiaFuncao1 = funcao1; // da mesma forma que acontece nos objetos, aqui ocorre uma referência ao mesmo espaço
// de memória, com isso, alterar o valor de um altera o do outro

let mensagem = "Olá"; // global 

/*
let exibeMensagem = function(){
    mensagem = "Mensagem alterada";
    console.log(mensagem);
}; // tome muito cuidado pois em js as variaveis globais podem ser acessadas de dentro das function
// e tem funcionalidades ilimitadas, como sua própria alteração */

let exibeMensagem = function(){
    let mensagem = "Mensagem alterada"; // local (sombreamento)
    console.log(mensagem);
}; // é possível criar uma variavel dentro da function com o mesmo nome de uma variavel global
// desde que ela seja declarada novamente, com isso a variavel global não é alterada

let exibeMensagem2 = function(mensagem, gritar = false){ // dessa forma é possível passar um valor default
    if (gritar){
        mensagem = mensagem.toUpperCase();
    }
    console.log(mensagem);
}; // forma correta de utilizar valores de fora dentro da função, na maioria das vezes não é bom depender das
// variaveis globais

exibeMensagem2("Tchau!", true); // não é obrigatório passar o valor de gritar, porém se não passado
// ele virá com false como padrão

let verificaParidade = function(numero){
    if (numero % 2 == 0){
        return "par";
    } else {
        return "ímpar";
    }
};

console.log(verificaParidade(7));

let p1 = verificaParidade(200);
console.log(p1);

// arrow function
let soma = (a, b) => a + b; // valores de um lado e retorno do outro, muito útil pra functions pequenas

let quadrado = x => x ** 2; // se for necessário só um parametro, não precisa declarar entre parenteses

console.log(soma(7, 3));
console.log(quadrado(5));

let caraOuCoroa = () => { // parenteses sem valor pois não necessita de nenhum parametro e chaves pois irá receber
                         // mais de um comadando
    if (Math.random() > 0.5){
        return "cara";
    }
    return "coroa";
};

let caraOuCoroa2 = () => Math.random() > 0.5 ? "cara" : "coroa"; // fazendo com operador ternário

console.log(caraOuCoroa2());

let dado6Lados = () => Math.floor(Math.random() * 6) + 1; // o floor retorna o primeiro número inteiro tirando
// as casas decimais

// MELHOR OPÇÃO = ARROW FUNCTION > FUNCTION EXPRESSION > FUNCTION DECLARATION

// LINGUAGEM FUNCIONAL = Linguagem onde as funções são as estruturas mais importantes

let valoresInformados = [ 2, 36, -27, 35.98 ];

quadrado(valoresInformados); // se tentar operar um array, de forma diferente da soma, irá retornar NaN 

// valoresInformados.forEach(alert); // o foreach em js executa o comando passado como parametro para cada elemento
// do indice no array, neste caso, exibirá com alert todos os elementos, um de cada vez

let exibeNumero = (n, i) => `O ${i + 1} número é ${n}`; // também é possível usar uma function no forEach
// chamando ela, ou declarando diretamente

valoresInformados.forEach( (n, i) => {
    console.log(`O número ${i + 1} é ${n}`)
}); // declaração direta
// isso seria a mesma coisa que usar um for com of, porém usar forEach é preferível

let craques = [
    { nome: "Ryan Riquelme", esporte: "futebol" },
    { nome: "Will", esporte: "vôlei" },
    { nome: "Brenio", esporte: "MMA" },
    { nome: "Gabrel", esporte: "futebol" },
];

// let ryan = craques.find(() => {}); forma de passar o comando sem dar erro, uma function vazia que não retorna nada
// o comando find vai procurar para cada elemento que você passar, o elemento que retorne true em sua
// comparação lógica, e irá guardá-lo na variavel

let ryan = craques.find(craques => craques.nome == "Ryan Riquelme");

console.log(ryan);

let nenhumTenista = !craques.find(craques => craques.esporte == "tênis");
// quando usamos a inversão, um valor é convertido para boolean primeiro, com isso, se for encontrado um valor
// ele sará convertido como true pois booleanos são verdadeiros quando o valor existe, e depois disso
// será invertido para false. o mesmo acontece no caso contrário
// o find retorna retorna o objeto

let algumFutebolista = !!craques.find(craques => craques.esporte == "futebol");
// usa-se duas negações, a primeira converte o valor para boolean, e o segundo inverte o valor

let indiceBRE = craques.findIndex(craque => craque.nome == "Brenio"); // funciona da mesma forma, porém ele
// retorna o índice do elemento

let craquesFutebol = craques.filter(craque => craque.esporte == "futebol"); // filtra as instancias que 
// correspondem a comparação em true, retorna um array com toda a instancia dos encontrados
// muito poderoso para manipular seus elementos

console.log(craquesFutebol);

let numeros = [ 2, -5, 0, 4.75, -3, 5 ];

let quadrados = numeros.map(quadrado); // map é o mesmo que o forEach, porém, ele retorna um array com
// a mesma quantidade do índice do array base e com todos os valores alterados 

let dobro = numeros.map(n => n * 2); // outra forma de escrever 

let soma2 = numeros.reduce((parcial, atual) => parcial + atual); // o reduce opera todos os valores do indice e 
// retorna um unico valor, nesse caso o valor parcial começa valendo zero e no fim é ele quem retorna

let max = numeros.reduce((ant, atual) => ant > atual ? ant : atual);
let min = numeros.reduce((ant, atual) => ant < atual ? ant : atual);

let soma3 = numeros.reduce((parcial, atual) => parcial + atual, 1000); // é possível passar um valor inicial

// é possível usar várias dessas funções em conjunto

let latir = () => console.log("AuAuAuAuAuAuAu!!!!");

let cao = {
    nome: "Tobias",
    raca: "Poodle",
    latir,
    // latir: latir,
}; // formas de referenciar uma função

let pessoa = {
    nome: "Guilhemer",
    dizerOlaAF: () => console.log("Olá!"),
    dizerOlaFX: function(){
        console.log("Olá!");
    },
    dizerOlaFD(){
        console.log("Olá!");
    },
}; // tres formas de declarar function em um objeto
// quando um objeto em JavaScript tem dados e funções, torna-se POO

// dados = estado => se chama estado porque o estado pode ser alterado assim como o valor da chave
// funções = ação

let goku = {
    nome: "Kakaroto",
    Ola: function(){
        console.log(`Oi! Eu sou ${this.nome}!`) // é necessario utilizar this para pegar um campo dentro do obj
    },
}; // não é possível acessar this com arrow function

goku.Ola();
goku.nome = "GOKU";
goku.Ola(); // na segunda execução o valor mudará