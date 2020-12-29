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


function convetirNodos(dat){
  var nodos_convetidos=[];
  
  var inicio=dat.indexOf('bgcolor')
  var ndat=dat.slice(inicio);//quito lo anterior a bgcolor
  var linea=(ndat.split('\n'));//separo el doc en lineas
  var restantes=linea.length;//numero de lineas restantes del doc

  //console.log(ndat);

  //nodos contiene a todos los nodos del arbol, aun no tienen hijos
  var nodos=[];
  var lin=[];
  var izq=[];
  var der=[];
  for(var e=1;e<restantes;e++)
    {
      if(linea[e].indexOf('}')==-1)
      {
        //separo
        var a = linea[e].split('->');
        lin.push(a);
        //console.log(a);
        nodos.push(a[0]);
        nodos.push(a[1]);
        
        izq.push(a[0]);
        der.push(a[1]);
      }
    }
   // console.log(lin);
    for(var d=0;d<nodos.length;d++)
    {
      if(nodos[d].indexOf(';')!=-1)
       nodos[d]=nodos[d].slice(0,nodos[d].length-2)
    }//ahora tengo en nodos, los nodos sin ';'

    for(var d=0;d<der.length;d++)
    {
      if(der[d].indexOf(';')!=-1)
       der[d]=der[d].slice(0,der[d].length-2)
    }//ahora tengo en nodos, los nodos sin ';'

    //en unique estan los nodos sin repetir
    var unique = nodos.filter((v, i, a) => nodos.indexOf(v) === i);
    var izqunique = izq.filter((v, i, a) => izq.indexOf(v) === i);
   // console.log(izqunique);
   // console.log(der);
    
    //asignando los hijos
    //para cada uno en la lista izq unica, si aparece en izq agregarle como hijo su der 
    
  //para cada uno en la lista unica

    for(var j=0;j<unique.length;j++)
    {
      var temp=[{
        x: 20,
        y: 30,
        r: 10,
        label:unique[j],
        hijos:[]
    }];
  
      //cada vez que aparece en la lista izq, agrego como su hijo der
      for(var g=0;g<izq.length;g++)
      {
        if(izqunique[j]==izq[g])
          temp[0].hijos.push(der[g]);        
      }

      //agrego el nodo a la lista final
      nodos_convetidos.push(temp);
    }
  
console.log("nuevo arbol");
console.log(nodos_convetidos);
return nodos_convetidos;
}

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
 
  //var mydata=datos2.datasets[0].data;
  var mydata=convetirNodos(dat);
  console.log("datos originales");
  console.log(mydata);
  //como dat es un string con todo el contenido del archivo dot
  //primero quito todo hasta que encuentre la palabra "digraph" que marca el inicio dela estructura
  //encuentro las d's las cuales marcan los inicios de donde estaria la palabra
  //ya que estamos en js, buscamos si esta la palabra directamente
  var inicio=dat.indexOf('digraph')
  if(inicio!=-1)
  {
    var ndat=dat.slice(inicio);//quito lo anterior a digraph
    grafica1.config.data = datos2; 
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

  return misdatos;
}

   
var reader = new XMLHttpRequest();
var info=datos;
var grafica1 = new Chart(canvas2, {
  type: 'arbol',
  data: info,
  options: {
      responsive: true
  }
  });

function loadFile() {
    reader.open('get', 'notas.txt', true); 
    reader.onreadystatechange = displayContents;
    reader.send(null);
}

function displayContents() {
    if(reader.readyState==4) {
  //var info=loadTree(reader.responseText);
 // console.log(reader.responseText);
 grafica1.config.data = loadTree(reader.responseText);
  grafica1.update();
    }
}

function cambio(){
   //alert(grafica1);
   // console.log(grafica1.config.data.datasets[0].data);
   // alert(datos2.datasets[0].data.pop());
 //  alert(grafica1.config.data.datasets[0].data.pop());
  
    grafica1.config.data = datos2;
//cuando cambie los datos, debo tener en cuenta a los hijos en caso de cambiarlos
//por que a la hora de graficar las lineas, necesito la referencia del hijo
//y si no esta, lanzara un error de __view super obscuro!!!
    grafica1.update();
}


//limpia el canvas
document.getElementById('limpiar').addEventListener('click', function () {
  
  grafica1.clear();
})   

