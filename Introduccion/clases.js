// Clases en JavaScript.

class Persona{

    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar(){
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`);
    }
}

const persona = new Persona("Ramiro", 22);
persona.saludar();

// Herencia

class Abuelo extends Persona{

    constructor(nombre, edad, sueldoJubilacion){
        super(nombre, edad); // Llamada al constructor de la clase persona.
        this.sueldoJubilacion = sueldoJubilacion;
    }

    jubilado(){
        console.log(`${this.nombre} está jubilado/a y tiene una jubilacion de: ${this.sueldoJubilacion}`);
    }
}

const personaJubilada = new Abuelo("Pedro", 75, 250000)
personaJubilada.saludar();
personaJubilada.jubilado();