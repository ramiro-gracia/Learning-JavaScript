
document.getElementById('button-1').addEventListener('click', function(){

    if(this.textContent == "Hola"){

        this.textContent = "Chau";

    } else if(this.textContent == "Chau"){

        this.textContent = "Hola";
    }
});

let suma = 5 + 10;

if(suma == 15){
    console.log("La suma es de:", suma);
    suma += 20;
} else{
    console.log("Error");
}

if(suma >= 35){
    console.log("La suma fue correcta: ", suma);
} else{
    console.log("Error en la suma");
}

// == es distinto de === porque == verifica que el contenido sea el mismo sin importar el tipo de variable, mientras que === verifica que sea el mismod dato y tipo de variable. EJ:

let numero = 100;
let stringNumero = "100.00";
let numero1 = 100;

if(numero == stringNumero){

    console.log("Verifica que el contenido sea igual sin importar el tipo de dato (string, int, etc.) en este caso:", numero, "==", stringNumero);

}
if(numero === numero1){

    console.log("Verifica que sea el mismo tipo de dato. En este caso", numero, "===", numero1);
}
