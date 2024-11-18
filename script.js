
document.getElementById('button-1').addEventListener('click', function(){

    if(this.textContent == "Hola"){

        this.textContent = "Chau";

    } else if(this.textContent == "Chau"){

        this.textContent = "Hola";
    }
});

