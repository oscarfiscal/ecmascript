const data = {
    frontend: 'Oscar',
    backend: 'Ricardo',
    design: 'Alicia'
}

const entries = Object.entries(data);
console.log(entries);

console.log(entries.length);

const data = {
    frontend: 'Oscar',
    backend: 'Ricardo',
    design: 'Alicia'
}

const values  = Object.values(data);    // devuelve un array con los valores

console.log(values);
console.log(values.length);

//pad
const string = 'Hello';
console.log(string.padStart(7, 'hi'));  // devuelve 'hihello'
console.log(string.padEnd(12, '----')); // devuelve 'Hello----'
console.log('food'.padEnd(12, '----')); // devuelve 'food----'


const helloWorld = () => { 
    return new Promise((resolve, reject) => {   
        (true)  
        ? setTimeout(() => resolve('Hello world'), 3000)    
        : reject(new Error('Test error'))
    })  
}   // devuelve una promesa

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
};

helloAsync();


const anotherFunction = async () => {
    try {
        const hello = await helloWorld();   // espera a que se resuelva la promesa   
        console.log(hello);
    } catch (error) {
        console.log(error);  // si hay error, lo imprime
    }

}
anotherFunction();