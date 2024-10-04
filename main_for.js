/* En este .js utilizamos un for en caso que se desee agregar sonidos a la lista anterior */


function playSonido (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

/* Se crea una lista que almacena todos los sonidos */
const listaDeTeclas = document.querySelectorAll('.tecla');

/* Accede a un elemento en la lista de teclas */
 

for (let contador = 0; contador < listaDeTeclas.length; contador++){

    const tecla = listaDeTeclas[contador]; /* Se declara la variable tecla, para no repetir código */
    const instrumento = tecla.classList[1]; /* Se asigna a la variable instrumento, el valor de la classList de la posición 1 */  
    const idAudio = `#sonido_${instrumento}`; /* Se asigna a la variable idAudio una cadena de caracteres o tipo String el nombre del sonido */
    console.log(idAudio);
 
    /* Esta función reproduce el sonido al hacer click sobre cada botón */
    tecla.onclick = function(){ /* Se utiliza una función anónima */
        playSonido(idAudio); 
    }
        tecla.onkeydown = function(evento) {
            if (evento.code === 'Space' || evento.code === 'Enter') {
                tecla.classList.add('activa')
            }
            console.log(evento.code === 'Space' || evento.code === 'Enter')
        }
            tecla.onkeyup = function() {   
                tecla.classList.remove('activa');
            }
}


