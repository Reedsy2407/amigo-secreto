// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];


function agregarAmigo(){
    let añadirAmigo = document.getElementById('amigo').value
    if(añadirAmigo == ''){
        alert('Por favor, inserte un nombre');
    }
    else{
        amigos.push(añadirAmigo);
        console.log(amigos);
        limpiarCampo();
        actualizarLista();
    }
}

function actualizarLista(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    for(let i = 0; i < amigos.length; i++){
        let elemento = document.createElement('li');
        elemento.textContent = amigos[i];
        lista.appendChild(elemento);
    }
}

function sortearAmigo() {
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = "";

    if (amigos.length === 0) {
        let mensaje = document.createElement('p');
        mensaje.textContent = "No agregaste ningún amigo";
        resultado.appendChild(mensaje);
    } else {
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);

        let amigoSorteado = amigos[indiceAleatorio];
        console.log(amigoSorteado);

        let mensaje = document.createElement('p');
        mensaje.textContent = `El amigo sorteado es: ${amigoSorteado}`;
        resultado.appendChild(mensaje);
    }
}


function limpiarCampo(){
    document.getElementById("amigo").value = '';
}