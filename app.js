let obj = {
    nombre: 'Leonel',
    edad: 19,
    apellido: 'Ceballos',
    keypress: function(){
        return 'Se ha presionada una tecla';
    },
    mouseOver: function(){
        return 'El puntero del mouse esta arriba';
    }
}

/*console.log(obj.nombre);
console.log(obj['nombre']);

let myKey = 'nombre';
console.log(obj[myKey]);

myKey = 'keypress';
console.log(obj[myKey]());
myKey = 'mouseOver';
console.log(obj[myKey]());*/

/*let myArray = [];

myArray.push(4);
myArray.push('una cadena');
myArray.push(obj);
myArray.push(function(){
    console.log("Hola desde el array");
})

console.log(myArray);
let myKey = 'mouseOver';
(obj[myKey]());*/

/*let funcArray = [];

funcArray.push(()=>{
    console.log("Function 1");
})

funcArray.push(()=>{
    console.log("Function 2");
})

funcArray.push(()=>{
    console.log("Function 3");
})

funcArray.forEach((item) =>{
    item();
})*/

var Emitter = require('./emitter');

var emtr = new Emitter();

emtr.on('greet', ()=>{
    console.log('Somewhere, someone said hello.');
})

emtr.on('greet', ()=>{
    console.log('A greet ocurred!');
})

console.log("Hello!");
emtr.emit('greet');

emtr.on('jump', ()=>{
    console.log('Someone jumped!');
})

console.log(emtr);
emtr.emit('jump');