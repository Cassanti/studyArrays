// Estudo Sobre Arrays

const numbers = [10, 20, 30, 40, 50];

const frutas = ['maça', 'banana', 'laranja', 'uva'];

const pessoas = [
    {nome: 'Marcelo', idade: 32},
    {nome: 'Maria', idade: 26},
    {nome: 'Marcia', idade: 84}
];

//metodo push()

numbers.push(60, 70, 80);

frutas.push('amora', 'melancia', 'jaca');

pessoas.push(
    {nome: 'Amanda', idade: 44},
    {nome: 'Carlos Alberto', idade: 96}
);

console.log(numbers);
console.log(frutas);
console.log(pessoas);

// metodo pop()

const removeUltimoNumber = numbers.pop();
const removeUltimaFruta = frutas.pop();
const removeUltimaPessoa = pessoas.pop();

console.log(numbers);
console.log(frutas);
console.log(pessoas);

console.log(removeUltimoNumber);
console.log(removeUltimaFruta);
console.log(removeUltimaPessoa);


// método shift()

const removePrimeiroNumber = numbers.shift();
const removePrimeiraFruta = frutas.shift();
const removePrimeiraPessoa = pessoas.shift();

console.log(numbers);
console.log(frutas);
console.log(pessoas);

console.log(removePrimeiroNumber);
console.log(removePrimeiraFruta);
console.log(removePrimeiraPessoa);

// método unshift()


const addNumber = numbers.unshift(90, 100, 110);
const addFruta = frutas.unshift('carambola', 'morango');
const addPessoa = pessoas.unshift(
    {nome: 'Raimundo', idade: 59},
    {nome: 'Gatusa', idade: 56}
)

console.log(numbers);
console.log(frutas);
console.log(pessoas);

console.log(addNumber);
console.log(addFruta);
console.log(addPessoa); 

// metodo splice()

const removeNumber = numbers.splice(2, 2);
const removeFrutas = frutas.splice(2, 2);
const removePessoas = pessoas.splice(2, 2);

console.log(numbers);
console.log(frutas);
console.log(pessoas);

console.log(removeNumber);
console.log(removeFrutas);
console.log(removePessoas);

const alteraNumber = numbers.splice(1, 0, 120, 130);
const alteraFruta = frutas.splice(1, 0, 'pera', 'kywi');
const alteraPessoa = pessoas.splice(1, 0, 'Evaristo', 'Gloria');

console.log(numbers);
console.log(frutas);
console.log(pessoas);

// metodo contact()

const novoArray = numbers.concat(frutas);

console.log(novoArray);

// indexOf()

const numberIndexOf = numbers.indexOf(90);
const frutaIndexOf = frutas.indexOf('pera');
const pessoaIndexOf = pessoas.indexOf('marcelo');

console.log(numberIndexOf);
console.log(frutas);
console.log(pessoas);

// map()

const numeros = [1, 2, 3, 4, 5];

const numerosMap = numeros.map( (numero) => {
    return numero ** 2;
})

console.log(numerosMap);
console.log(numeros);

// reduce()

const soma = numeros.reduce(function(acumulador, numero) {
    return acumulador + numero;
}, 0);
  
console.log(soma);

// filter()

const numerosPares = numeros.filter(function(numero) {
    return numero % 2 === 0;
});
  
console.log(numerosPares);