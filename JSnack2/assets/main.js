$(document).ready(function() {

const array = ['a', 'b', 'c', 'd', 'e', 'f'];

var numero1 = parseInt(prompt("Inserisci il primo numero"));

var numero2 = parseInt(prompt("Inserisci il secondo numero"));

var valoriCompresi = [];

array.forEach((elementi, indice) => {
    if ((indice >= numero1) && (indice <= numero2)) {
        valoriCompresi.push(elementi);
    }
});

for (var i = 0; i < valoriCompresi.length; i++) {
    $('.elementi').append('<li>'+valoriCompresi[i]+'</li>');
}

});
