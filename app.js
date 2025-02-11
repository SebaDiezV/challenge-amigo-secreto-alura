// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let listaSorteados = [];
let sorteoAleatorio =0;

function registrarAmigo() {
    let ingresaAmigos = document.querySelector('input').value;
    let regex = /^[a-zA-Z\s]+$/; //Esta expresion regular asegura que solo se permitan letras (mayúsculas y minúsculas) y espacios
    if (ingresaAmigos =='') {
        alert('Por favor ingresa un nombre');
        } else if (amigos.includes(ingresaAmigos)){
            alert('Ese nombre ya fue ingresado, por favor ingresa un nombre distinto');
        } else if (!regex.test(ingresaAmigos)){ 
            alert('Por favor, ingresa un nombre válido. No se permiten números ni símbolos');
                
        } else {
        amigos.push(ingresaAmigos);
        }
    
    limpiarCaja('amigo');
    mostrarAmigos();
    return;
}


//Muestra los amigos agregados
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
    //Revisar que array amigos no está vacío
    if (amigos =='') {
        alert ('Debes ingresar personas para el sorteo de Amigo Secreto');

    //Agregar minimo de 3 amigos ingresados para sorteo
    } else if (amigos.length < 3){
        alert('Debes ingresar un mínimo de 3 amigos para el sorteo')
    } else {

        sorteoAleatorio = amigos[numeroAleatorio()];
        
        //Comparar lista de amigos con lista de sorteados
        if (amigos.length == listaSorteados.length){
            alert ('Ya se sortearon todos los amigos, ¡gracias por participar!')
            reiniciarSorteo();
        } else { 
            
            //Revisar si amigo ya fue sorteado
            while(listaSorteados.includes(sorteoAleatorio)){
                sorteoAleatorio = amigos[numeroAleatorio()];
            }
            //Mostrar amigo sorteado
            asignarTextoElemento('resultado', `El amigo secreto sorteado es: ${sorteoAleatorio}`);
            
            listaSorteados.push(sorteoAleatorio);
            
        }
        
        //Limpiar listado de amigos
        asignarTextoElemento('listaAmigos', '');        
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