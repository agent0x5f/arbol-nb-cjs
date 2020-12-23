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
function loadTree(dat){
  //como dat es un string con todo el contenido del archivo dot
  //primero quito todo hasta que encuentre la palabra "digraph" que marca el inicio dela estructura
  //encuentro las d's las cuales marcan los inicios de donde estaria la palabra
  //ya que estamos en js, buscamos si esta la palabra directamente
  var inicio=dat.indexOf('digraph')
  if(inicio!=-1)
  {
    var ndat=dat.slice(inicio);
   
    for(var x=0;x<30;x++)
    {
      console.log(ndat[x]);
      if(ndat[x]=='\n')
      alert('salto en '+ x);
    }
  } 
  //console.log(dat);
}

document.getElementById('inputfile') .addEventListener('change', function() { 
    var fr=new FileReader(); 
    fr.onload=function(){ 
        loadTree(fr.result);//llamamos al cargador del arbol pasandole el texto 
    }       
    fr.readAsText(this.files[0]); 
}) 

