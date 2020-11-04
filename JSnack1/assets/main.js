$(document).ready(function() {
    const bici = [{
        nome : 'CANNONDALE',
        peso : 10
    },
    {
        nome : 'TREK',
        peso : 9
    },
    {
        nome : 'GIANT',
        peso : 11
    }
];

let biciLeggera = bici[0];

bici.forEach((elementi) => {
    if (elementi.peso < biciLeggera.peso) {
        biciLeggera = elementi;
    }
});

console.log(biciLeggera);

const {peso, nome} = biciLeggera;

$('.bici').append(`
    <ul>
        <li>Nome: ${nome}</li>
        <li>Peso: ${peso}</li>
    </ul>
`);

});
