$(document).ready(function() {

const array = ['a', 'b', 'c', 'd', 'e', 'f'];

var min = parseInt(prompt("Inserisci un numero compreso tra 0 e 5"));

var max = parseInt(prompt("Inserisci un numero compreso tra 0 e 5"));

var valoriCompresi = [];

array.forEach((elementi, indice) => {
    if ((indice >= min) && (indice <= max)) {
        valoriCompresi.push(elementi);
    }
});

for (var i = 0; i < valoriCompresi.length; i++) {
    $('.elementi').append('<li>'+valoriCompresi[i]+'</li>');
}

});
