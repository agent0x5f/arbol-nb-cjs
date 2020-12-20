// Datos que tendrá el arbol
// Puedo agregar datos a data: y luego manejarlo desde la zona de dibujado
//X y Y debo de calcularlo primero, hacer funciones que se encargen de eso y generen data: automat.

var datos = {
   datasets: [{
        label: 'My First dataset',
        backgroundColor: 'red',
        borderColor: window.chartColors.red,
        borderWidth: 1,
        data: [{
            x: randomScalingFactor(),
            y: randomScalingFactor(),
            r: 15,
            d:'HTML'
        }, {
            x: randomScalingFactor(),
            y: randomScalingFactor(),
            r: 15,
            d:'head'
        }, {
            x: randomScalingFactor(),
            y: randomScalingFactor(),
            r: 15,
            d:'title'
        }, {
            x: randomScalingFactor(),
            y: randomScalingFactor(),
            r: 15,
            d:'div'
        }]
    }
    ]
};