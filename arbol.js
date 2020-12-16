
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
const n6 = new Nodo('BUTTON');
const n7 = new Nodo('BUTTON');
const n8 = new Nodo('BUTTON');
const n9 = new Nodo('BUTTON');
const n10 = new Nodo('BUTTON');

// ejemplo de la pagina de linea simple original
n0.hijos.push(n1,n3);//html es padre de head y body
n1.hijos.push(n2);//head contiene a title
n3.hijos.push(n4);//body contiene a div y 5 botones
n3.hijos.push(n6,n7,n8,n9,n10);
n4.hijos.push(n5);//div contiene a canvas

function preOrderTraversal(node = this.root,i) {
//el recorrido clasico de preorden no funciona aqui, ya que pueden ser mas de 2 hijos   
    console.log(node.dato);//imprimo al padre
    while(node.hijos[i])
    {
      console.log(node.hijos[i].dato);
      preOrderTraversal(node.hijos[i],i++);
    }
   
}

preOrderTraversal(n0,0);