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
    }
}

function limpiarCampo(){
    document.getElementById("amigo").value = '';
}