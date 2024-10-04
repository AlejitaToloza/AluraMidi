/* En este .js utilizamos un while ya que son 9 teclas de sonido, fijas */


function playSonido (idElementoAudio) {
     document.querySelector(idElementoAudio).play();
}

/* Se crea una lista que almacena todos los sonidos */
const listaDeTeclas = document.querySelectorAll('.tecla');

/* Accede a un elemento en la lista de teclas */


let contador = 0;


while (contador < 9) {
    const tecla = listaDeTeclas[contador]; /* Se declara la variable tecla, para no repetir código */
    const instrumento = tecla.classList[1]; /* Se asigna a la variable instrumento, el valor de la classList de la posición 1 */ 
    console.log(instrumento); 

    const idAudio = `#sonido_${instrumento}`; /* Se asigna a la variable idAudio una cadena de caracteres o tipo String el nombre del sonido */
    console.log(idAudio);

    /* Esta función reproduce el sonido al hacer click sobre cada botón */
    tecla.onclick = function(){ /* Se utiliza una función anónima */
        playSonido(idAudio); 
    }
    contador = contador + 1;
    console.log('vuelta' + contador);
}



// Así se declara cada una de las funciones de forma individual

// function playSonidoClap () {
//     document.querySelector('#sonido_tecla_clap').play();
// }

// document.querySelector('.tecla_clap').onclick = playSonidoClap;

