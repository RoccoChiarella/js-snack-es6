$(document).ready(function() {

const array = ['a', 'b', 'c', 'd', 'e', 'f'];

var arrayClone = [...array];

array.forEach((elementi, indice) => {
    if ((indice >= min) && (indice <= max)) {
        valoriCompresi.push(elementi);
    }
});

for (var i = 0; i < valoriCompresi.length; i++) {
    $('.elementi').append('<li>'+valoriCompresi[i]+'</li>');
}

});
