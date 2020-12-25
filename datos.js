// Datos que tendrá el arbol
// Puedo agregar datos a data: y luego manejarlo desde la zona de dibujado
//X y Y debo de calcularlo primero, hacer funciones que se encargen de eso y generen data: automat.
//X y Y las toma el graficador y realiza la escala dinamicamente
//inserte un nodo en 100,100 para observar el comportamiento :D
var datos = {
   datasets: [{
        label: 'My First dataset',
        backgroundColor: 'grey',
        borderColor: window.chartColors.red,
        borderWidth: 1,
        treeDescription: 'Hola',
        edgeColor: 'blue',
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
            label:'head',
            hijos:[3]
        }, {
            x: 15,
            y: 25,
            r: 10,
            label:'body',
            hijos:[4,6,7,8,9,10]
        }, {
            x: 20,
            y: 90,
            r: 10,
            label:'title',
            hijos:[]
        },{
            x: 20,
            y: 60,
            r: 10,
            label:'div',
            hijos:[5]
        }, {
            x: 25,
            y: 75,
            r: 10,
            label:'canvas',
            hijos:[]
        }, {
            x: 20,
            y: 10,
            r: 25,
            label:'b1',
            hijos:[]
        }, {
            x: 20,
            y: 20,
            r: 10,
            label:'b2',
            hijos:[]
        }, {
            x: 20,
            y: 30,
            r: 10,
            label:'b3',
            hijos:[]
        }, {
            x: 20,
            y: 40,
            r: 10,
            label:'b4',
            hijos:[]
        }, {
            x: 20,
            y: 50,
            r: 10,
            label:'b5',
            hijos:[]
        }]
    }
    ]
};


// Datos que tendrá el arbol
// Puedo agregar datos a data: y luego manejarlo desde la zona de dibujado
//X y Y debo de calcularlo primero, hacer funciones que se encargen de eso y generen data: automat.
//X y Y las toma el graficador y realiza la escala dinamicamente
//inserte un nodo en 100,100 para observar el comportamiento :D
var datos2 = {
    datasets: [{
         label: 'My First dataset',
         backgroundColor: 'white',
         borderColor: window.chartColors.red,
         borderWidth: 1,
         treeDescription: 'Hola',
         edgeColor: 'blue',
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
             label:'head',
             hijos:[3]
         }, {
             x: 15,
             y: 25,
             r: 10,
             label:'body',
             hijos:[4,6,7,8,9,10]
         }, {
             x: 20,
             y: 90,
             r: 10,
             label:'title',
             hijos:[]
         },{
             x: 20,
             y: 60,
             r: 10,
             label:'div',
             hijos:[5]
         }, {
             x: 25,
             y: 75,
             r: 10,
             label:'canvas',
             hijos:[]
         }, {
             x: 20,
             y: 10,
             r: 25,
             label:'b1',
             hijos:[]
         }, {
             x: 20,
             y: 20,
             r: 10,
             label:'b2',
             hijos:[]
         }, {
             x: 20,
             y: 30,
             r: 10,
             label:'b3',
             hijos:[]
         }, {
             x: 20,
             y: 40,
             r: 10,
             label:'b4',
             hijos:[]
         }, {
             x: 20,
             y: 50,
             r: 10,
             label:'b5',
             hijos:[]
         }]
     }
     ]
 };