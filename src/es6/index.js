function newFunction(name,age,country){
    var name = name || 'oscar';
    var age = age || 24;
    var country = country || 'Cl';
    console.log(name,age,country);
}

// es6

function newFunction2(name = 'oscar',age = 24,country = 'Cl'){
    console.log(name,age,country);
}   

new Function2();
new Function2('ricardo',24,'CO');

let hello='Hello';
let world='World';
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

let epicPhrase2 = `${hello} ${world}`; //concatenacion de string es6
console.log(epicPhrase2);

let lorem = "Qui officia ea eiusmod.\n" + "otra frase epica que necesitamos";

let lorem2 = `otra frase epica 
ahora es otra frase epica`; // salto de linea es6
console.log(lorem); 
console.log(lorem2);

let person = {
    name: 'oscar',
    age: 24,
    country: 'CO'
}

console.log(person.name,person.age,person.country);

let {name,age,country} = person; //destructuracion de objetos es6
console.log(name,age,country);

let team1 = ['oscar','juan','pedro'];
let team2 = ['natalia','jesica','valeria'];

let education = ['David',...team1,...team2]; //spread operator es6
console.log(education);

{
    var globalVar = 'Global Var';
}
{
    let globalLet = 'Global Let';
    console.log(globalLet);
}

console.log(globalVar);

var a = 'b';

a='a';
console.log(a); 

let name = 'oscar';
let age = 24;

//es5
obj={name:name,age:age};
// es6
obj2={name,age};
console.log(obj2);

// es6
const names =[
    {name:'oscar',age:24},
    {name:'juan',age:24},
    {name:'yesica',age:20}
];

let listOfNames = names.map(function(item){
    console.log(item.name);
} 
);  

let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name,age,country) => {
    console.log(name,age,country);
}

const listOfNames4 = name => {

}

const square = num => num*num;

const helloPrimise= () =>{
    return new Promise((resolve,reject)=>{
        if(true){
            resolve('Hey');
        }else{
            reject('Ups');
        }
    });
}

helloPrimise().then(response => console.log(response))
.then(()=>console.log('hola'))
.catch(error => console.log(error));


// clases,modulos y generadores 
class calculator {
    constructor(){
        this.valueA=0;
        this.valueB=0;
    }
    sum(valueA,valueB){
        this.valueA=valueA;
        this.valueB=valueB;
        return this.valueA+this.valueB;
    }

}

const calc = new calculator();
console.log(calc.sum(2,2));

import {hello} from './module';

hello(); //llamada a la funcion hello del modulo

//generadores
function* helloWorld(){
    if(true)
    yield 'Hello, ';
    if(true)
    yield 'World';
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);