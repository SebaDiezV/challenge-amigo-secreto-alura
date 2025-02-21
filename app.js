// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let listaSorteados = [];
let sorteoAleatorio =0;

function registrarAmigo() {
    let ingresaAmigos = document.querySelector('input').value;
    let regex = /^[a-zA-Z\s]+$/; //Esta expresion regular asegura que solo se permitan letras (mayúsculas y minúsculas) y espacios
    if (ingresaAmigos =='') {
        alert('Por favor, ingresa un nombre para agregar al sorteo de Amigo Secreto');
        } else if (amigos.includes(ingresaAmigos)){
            alert('Ese nombre ya fue ingresado al sorteo de Amigo Secreto, por favor ingresa un nombre distinto');
        } else if (!regex.test(ingresaAmigos)){ 
            alert('Por favor, ingresa un nombre válido. No se permiten números, símbolos, acentos y la letra "ñ"');
                
        } else {
        amigos.push(ingresaAmigos);
        }
    
    limpiarCaja('amigo');
    mostrarAmigos();
    return;
}


// Muestra los amigos agregados
function mostrarAmigos(){   
    let listadoAmigos = document.getElementById('listaAmigos');
    listadoAmigos.innerHTML = '';
    
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        listadoAmigos.appendChild(li);  
    }
    return;
}

function sortearAmigo() {
    // Revisar que array amigos no está vacío
    if (amigos =='') {
        alert ('Debes añadir amigos para el sorteo de Amigo Secreto');

    // Agregar minimo de 3 amigos ingresados para sorteo
    } else if (amigos.length < 3){
        alert('Debes añadir un mínimo de 3 amigos para el sorteo de Amigo Secreto')
    } else {
        // Deshabilitar ingreso de amigos en el campo de texto y botón añadir cuando inicia el sorteo
        document.querySelector('input').setAttribute('disabled', 'true');
        document.getElementById('boton-amigo').setAttribute('disabled', 'true');
        
        // Limpiar listado de amigos agregados
        asignarTextoElemento('listaAmigos', '');  

        // Comparar lista de amigos con lista de sorteados
        if (amigos.length == listaSorteados.length){
            alert ('Ya se sortearon todos los amigos, ¡gracias por participar!')
            alert ('El juego de Amigo Secreto se reiniciará automáticamente')
            reiniciarSorteo();
        } else { 
            
            sorteoAleatorio = amigos[numeroAleatorio()];
            // Revisar si amigo ya fue sorteado
            while(listaSorteados.includes(sorteoAleatorio)){
                sorteoAleatorio = amigos[numeroAleatorio()];
            }
            // Mostrar amigo sorteado
            asignarTextoElemento('resultado', `El amigo secreto sorteado es: ${sorteoAleatorio}`);
            
            listaSorteados.push(sorteoAleatorio);
            
        }
        
             
    } 

    return;
}

function numeroAleatorio() {
    let aleatorio = Math.floor(Math.random() * amigos.length);
    return aleatorio;
}

function limpiarCaja(elemento){
    document.getElementById(elemento).value =''; 
    return;
}

function reiniciarSorteo() {
    amigos = [];            // Limpiar la lista de amigos
    listaSorteados = [];    // Limpiar la lista de sorteados

    // Habilitar ingreso de amigos en el campo de texto y botón añadir
    document.querySelector('input').removeAttribute('disabled');
    document.getElementById('boton-amigo').removeAttribute('disabled');

    // Limpiar la interfaz para que quede vacía
    asignarTextoElemento('listaAmigos', '');
    asignarTextoElemento('resultado', '');
    return;
}


function asignarTextoElemento(elemento, texto) { 
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
    return;
}