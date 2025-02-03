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
    let sorteo = document.getElementById('resultado');
    sorteo.innerHTML = '';
    
    if (amigos =='') {
        alert ('Debes ingresar personas para el sorteo de Amigo Secreto');
    } else {

        sorteoAleatorio = amigos[numeroAleatorio()];
        

        if (amigos.length == listaSorteados.length){
            alert ('Ya se sortearon todos los amigos, ¡gracias por participar!')
            reiniciarSorteo();
        } else { 
            
            while(listaSorteados.includes(sorteoAleatorio)){
                sorteoAleatorio = amigos[numeroAleatorio()];
            }
            
            let amigoSorteado = (`El amigo secreto sorteado es: ${sorteoAleatorio}`);
            let li = document.createElement('li');
            li.textContent = amigoSorteado
            sorteo.appendChild(li);
            listaSorteados.push(sorteoAleatorio);
            
        }
        
        let listadoAmigos = document.getElementById('listaAmigos');
        listadoAmigos.innerHTML = '';

        
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
    let listadoAmigos = document.getElementById('listaAmigos');
    listadoAmigos.innerHTML = '';

    let sorteoResultado = document.getElementById('resultado');
    sorteoResultado.innerHTML = '';
    return;
}