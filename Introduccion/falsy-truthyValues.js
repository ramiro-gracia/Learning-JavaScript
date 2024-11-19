// Los falsy o truthy values son valores por ejemplo: false, 0, '', NaN (not a number), undefined y null

const carritoProductos = 5;

// Se comporta como true es lo mismo q poner carritoProductos > 0
if (carritoProductos){ 
    console.log("El carrito tiene productos");
}

// 0 se comporta como un falsy value 0 == false. Entonces esto devuelve true
console.log(!0);

// Devuelve NaN (not a number)
console.log('texto' / 5);

// Undefined = variable q no tiene dato
let variable1;
console.log(variable1);

const variable2 = undefined;
console.log(variable2)

// null 

/*
if(true){
    console.log("truthy");
}else{
    console.log("falsy");
}
*/

// Shortcut. ? se comporta como if y : como else. En vez de true puedo poner 1 o si quiero el segundo valor ('falsy') puedo poner 0 o false
const result = true ? 'truthy' : 'falsy';
console.log(result);

// && statement

/*
let message;

if(true){
    message = 'hola';
    console.log(message);
}
*/

// Shortcut...

const message1 = 5 && 'hola';
console.log(message1);

// Or operator ||

const moneda = 'EUR' || 'USD';
console.log(moneda); // toma el 1er valor

const moneda1 = undefined || 'USD';
console.log(moneda1);
