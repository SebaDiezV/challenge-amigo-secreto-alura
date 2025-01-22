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
        
        mostrarAmigos();
     return;   
 
     
}



function mostrarAmigos(){
    
    let listadoAmigos = document.getElementById("listaAmigos");
    listadoAmigos.innerHTML = '';
    
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li')
        li.textContent = amigos[i]
        listadoAmigos.appendChild(li);
        
    }
    return;
}

