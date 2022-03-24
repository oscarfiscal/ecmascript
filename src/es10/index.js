let array = [1,2,3,[1,2,3,[1,2,3]]];
console.log(array.flat(2))

let array = [1,2,3,4,5];
console.log(array.flatMap(value=>[value, value *2])); //flatMap

//trimStart eliminar espacios al principio de un string
let hello = '  hello world';
console.log(hello);
console.log(hello.trimStart());

//trimEnd eliminar espacios al final de un string
let hello = 'hello world     ';
console.log(hello);
console.log(hello.trimEnd());

try {

}catch{ 
    error
}

let entries =[
    ['name', 'oscar'],  ['age', 32], ['job', 'developer'] // array de arrays
]

console.log(Object.fromEntries(entries)); //convertir array de arrays a objeto

let mySymbl =  `My Symbol`;
let symbol = Symbol(mySymbl);   
console.log(symbol.description); //description