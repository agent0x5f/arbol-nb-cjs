// Datos que tendrá el arbol
// Puedo agregar datos a data: y luego manejarlo desde la zona de dibujado
//X y Y debo de calcularlo primero, hacer funciones que se encargen de eso y generen data: automat.

var datos = {
   datasets: [{
        label: 'My First dataset',
        backgroundColor: 'red',
        borderColor: window.chartColors.red,
        borderWidth: 1,
        treeDescription: 'Hola',
        edgeColor: 'Green',
        data: [{
            x: 10,
            y: 50,
            r: 10,
            label:'HTML',
            hijos:[1,2]
        }, {
            x: 15,
            y: 75,
            r: 10,
            label:'head'
        }, {
            x: 15,
            y: 25,
            r: 10,
            label:'body'
        }, {
            x: 20,
            y: 90,
            r: 10,
            label:'title'
        },{
            x: 20,
            y: 60,
            r: 10,
            label:'div'
        }, {
            x: 25,
            y: 75,
            r: 10,
            label:'canvas'
        }, {
            x: 20,
            y: 10,
            r: 25,
            label:'b1'
        }, {
            x: 20,
            y: 20,
            r: 10,
            label:'b2'
        }, {
            x: 20,
            y: 30,
            r: 10,
            label:'b3'
        }, {
            x: 20,
            y: 40,
            r: 10,
            label:'b4'
        }, {
            x: 20,
            y: 50,
            r: 10,
            label:'b5'
        }]
    }
    ]
};