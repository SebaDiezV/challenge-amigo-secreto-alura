// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];



function registrarAmigo() {
    let ingresaAmigos = String(document.getElementById('amigo').value);
        if (ingresaAmigos =='') {
        alert('Por favor ingresa un nombre')
        } else {
        amigos.push(ingresaAmigos);
        }
        document.getElementById('amigo').value ='';
     return;   
 
}

function mostrarAmigos(){
    let listadoAmigos =String(document.getElementById('amigo').value);
    listadoAmigos.innerHTML='';

}