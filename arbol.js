class Nodo {
    constructor(dato) {
      this.dato = dato;
      this.hijos = [];
    }
  }

// creando nodos ejemplos
let n0 = new Nodo('HTML');
let n1 = new Nodo('HEAD');
const n2 = new Nodo('TITLE');
let n3 = new Nodo('BODY');
const n4 = new Nodo('DIV');
const n5 = new Nodo('CANVAS');
const n6 = new Nodo('BUTTON1');
const n7 = new Nodo('BUTTON2');
const n8 = new Nodo('BUTTON3');
const n9 = new Nodo('BUTTON4');
const n10 = new Nodo('BUTTON5');

// ejemplo de la pagina de linea simple original
n0.hijos.push(n1,n3);//html es padre de head y body
n1.hijos.push(n2);//head contiene a title
n3.hijos.push(n4);//body contiene a div y 5 botones
n3.hijos.push(n6,n7,n8,n9,n10);
n4.hijos.push(n5);//div contiene a canvas

function preOrderTransversal(node){
  console.log(node.dato);
  preOrderTransversalAux(node, 0);
}

function preOrderTransversalAux(node,i) {
//el recorrido clasico de preorden no funciona aqui, ya que pueden ser mas de 2 hijos   
    while(node.hijos[i])//mientras tenga hijos que visitar
    {
      //console.log(node.hijos[i].dato);//muestralo
      preOrderTransversalAux(node.hijos[i],0);
      i++;
    }
}
//preOrderTransversal(n0);

//calcula la profundidad del arbol
function treeDepth(node) {
  if (node == undefined) {
      return (-1); // an empty tree  has height −1
  } else {
      // compute the depth of each subtree
      var j=0;
      var deep=0;
      while(node.hijos[j])//mientras tenga hijos que visitar
      {
        var actualdeep = treeDepth(node.hijos[j]);
       
        if(actualdeep > deep)
          deep = actualdeep;
    
        j++;
      } 
      return deep + 1;
  }
}
//console.log('Altura del arbol=',treeDepth(n0));


//dat es el archivo dot cargado
//retorna un objeto con la estructura de datos.js
function loadTree(dat){
  //Defaults de mi clase arbol
  var mylabel='Arbol';
  var mybgcolor='white';
  var myrankdir='LR';
  var myedgecolor='red';
  var mybordercolor='green';
  var myborderwidth='1';
  var mydescription='Ejemplo';
  var mydata=datos;

  //como dat es un string con todo el contenido del archivo dot
  //primero quito todo hasta que encuentre la palabra "digraph" que marca el inicio dela estructura
  //encuentro las d's las cuales marcan los inicios de donde estaria la palabra
  //ya que estamos en js, buscamos si esta la palabra directamente
  var inicio=dat.indexOf('digraph')
  if(inicio!=-1)
  {
    var ndat=dat.slice(inicio);//quito lo anterior a digraph

    var linea=(ndat.split('\n'));//separo el doc en lineas
    var restantes=linea.length;//numero de lineas restantes del doc

    for(var e=0;e<restantes;e++)
    {
      if(linea[e].indexOf('rankdir')!=-1)
        if(linea[e][8]+linea[e][9] =='LR')
          myrankdir='LR';//implementar en graficador
      //todo: dinamizar la lectura del color especifico
      if(linea[e].indexOf('edge')!=-1)
          if(linea[e][5]+linea[e][6]+linea[e][7]+linea[e][8]+linea[e][9] =='color')
            myedgecolor='blue'
      //todo:node

      if(linea[e].indexOf('bgcolor')!=-1)
        mybgcolor=linea[e][8]+linea[e][9]+linea[e][10]+linea[e][11]+linea[e][12]+linea[e][13]+linea[e][14];
    //aqui terminan las opciones generales ahora vienen los nodos
    //formato es: nodoA->nodoB
    //alert('nodoA->nodoB'.split('->'));
   }
  } 

  var misdatos = {
    datasets: [{
         label: mylabel,
         backgroundColor: mybgcolor,
         borderColor: mybordercolor,
         borderWidth: myborderwidth,
         treeDescription: mydescription,
         edgeColor: myedgecolor,
         data: mydata
     }
     ]
 };

  return datos;
}



//limpia el canvas
document.getElementById('limpiar').addEventListener('click', function () {
  info.datasets.pop();
  grafica1.update();
})   

