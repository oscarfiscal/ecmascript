//operador de reposo el cual puede extraer las propiedades de un objeto que aun no se ha contruido

const obj = {
    name: 'oscar',
    age: 24,
    country: 'CO'
};

let {country, ...all} = obj;
console.log (all); 

//propiedades de propagacion

const obj = {
    name: 'oscar',
    age: 24,
}  


const obj1 = {
    ...obj,
    country:'CO',
}   


console.log(obj1);

//finally
const helloWorld = () => {
    return new Promise((resolve, reject)=>{
        (true)
        ? setTimeout(()=> resolve('Hello world'), 3000)
        : reject(new Error('Test error'))
    })
}

helloWorld()
.then(response => console.log(response))
.catch(error => console.log(error))
.finally(() => console.log('Finalizo')); 

//regex
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2020-04-20');
const year = match[1];
const month = match[2];
const day = match[3];
console.log(year, month, day);