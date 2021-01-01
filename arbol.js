class Nodo {
    constructor(dato) {
      this.dato = dato;
      this.hijos = [];
      this.altura = 0;
    }
  }

// creando nodos ejemplos
let n0 = new Nodo('HTML');
let n1 = new Nodo('HEAD');
let n2 = new Nodo('TITLE');
let n3 = new Nodo('BODY');
let n4 = new Nodo('DIV');
let n5 = new Nodo('CANVAS');
let n6 = new Nodo('BUTTON1');
let n7 = new Nodo('BUTTON2');
let n8 = new Nodo('BUTTON3');
let n9 = new Nodo('BUTTON4');
let n10 = new Nodo('BUTTON5');

// ejemplo de la pagina de linea simple original
n0.hijos.push(n1,n3);//html es padre de head y body
n1.hijos.push(n2);//head contiene a title
n3.hijos.push(n4);//body contiene a div y 5 botones
n3.hijos.push(n6,n7,n8,n9,n10);
n4.hijos.push(n5);//div contiene a canvas

function preOrderTransversal(node){
  //console.log(node.dato);
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

//nodeHeight(n0,0);
//calcula el nivel del nodo
//que tan lejos de la raiz esta?
//la raiz tiene nivel 0
function nodeHeight(node,h){
  
  node.hijos.forEach(element => {
    nodeHeight(element,h+1);
  });
  node.altura=h;
  //console.log(node);
  //console.log("altura de "+node.dato+" es: "+altura);
  return h;
}

//console.log('Altura del arbol=',treeDepth(n0));

//calcula el ancho del arbol
//siendo el ancho la cantidad de nodos de el nivel con mas nodos
//supone que el arbol tiene almenos a la raiz 
function treeWide(node){
  return treeWideAux(node,1);
}

function treeWideAux(node,resp){
  var suma=0;
  //la raiz tiene ancho 1, al contar a sus hijos obtengo el ancho del sig nivel
  node.hijos.forEach(i => {
  //  console.log("Soy "+i.dato+", Tengo "+i.hijos.length+" hijos");
    suma=suma+i.hijos.length;
    if(suma>resp)
      resp=suma;
      
    treeWideAux(i);
  });
  //console.log("ancho del arbol: "+resp);
  return resp;
}
//treeWide(n0);
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
      var temp={
        x: 100,
        y: 100,
        r: 10,
        label:unique[j],
        hijos: []
        };

   
      //cada vez que aparece en la lista izq, agrego como su hijo der
      for(var g=0;g<izq.length;g++)
      {
        if(unique[j]==izq[g]) {
          //  console.log("al nodo "+unique[j]+"se add id"+(g+1));

            temp.hijos.push(g + 1);

        }
      }

      //agrego el nodo a la lista final
      nodos_convetidos.push(temp);
    }
    //para estirar el canvas, agregar en el graficador una forma de borrarlo con la etiqueta nula
    var temp={
      x: 100,
      y: 100,
      r: 10,
      label:'',
      hijos: []
  };
  nodos_convetidos.push(temp);
//console.log("nuevo arbol");
/*
var prototipo= [{
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
  hijos:[]
},{
  x: 15,
  y: 25,
  r: 10,
  label:'title',
  hijos:[]
}]
//console.log(prototipo);
//console.log(nodos_convetidos);
*/


//AHORA DEBO DE CALCULAR LA POSICIóN DE LOS NODOS
//para lograr eso debo de generar un arbol con la clase arbol.js
//y realizar los calculos de alto y ancho, y en base a eso coordenar
// ejemplo de la pagina de linea simple original
//n0.hijos.push(n1,n3);//html es padre de head y body
//n1.hijos.push(n2);//head contiene a title
//n3.hijos.push(n4);//body contiene a div y 5 botones
//n3.hijos.push(n6,n7,n8,n9,n10);
//n4.hijos.push(n5);//div contiene a canvas
//let n0 = new Nodo('HTML');
let arbol=[];
nodos_convetidos.forEach(element => {
  arbol.push(new Nodo(element.label));
  //console.log(element.label);
});
var ptr=0;
nodos_convetidos.forEach(element => {
 // console.log(element.hijos);
  //arbol[ptr].hijos=element.hijos;
  element.hijos.forEach(hijos => {
    arbol[ptr].hijos.push(arbol[hijos]);
   // arbol[ptr].hijos.shift();
  });
 
  ptr++;
});

//ahora arbol contiene a la estructura a dibujar en formato de arbol
//puedo llamar a las funciones de alto y ancho para calcular las posiciones de dibujado
//console.log(arbol);
//console.log(treeWide(arbol[0]));
//console.log(treeDepth(arbol[0]));
//calculando las posiciones a las que iran los nodos
nodos_convetidos[0].x=10;
nodos_convetidos[0].y=50;
var iter=0;
nodeHeight(arbol[0],0);


//console.log(arbol);
//console.log("su padre es: ");
//encuentraPadre(arbol[5],arbol[0],false);
//console.log(arbol[0].hijos[0]);
//nodo a buscar su padre, raiz del arbol, false <--func aux para ocultarlo luego
//console.log(encuentraPadre(arbol[0].hijos[0],arbol[0],false));

nodos_convetidos.forEach(element => {
  //arbol es la estructura de datos con los nodos en los hijos
  //el cuarto parametro son los hijos del nodo a dibujar, no los hermanos!
  ponhijos(arbol,element,nodos_convetidos,arbol[iter].altura+1);
  iter++;
});

return nodos_convetidos;
}

//me dice cuantos hijos tiene el nodo dado
function hijos_nivel(nodo,arbol){
  var total=0;
  nodo.hijos.forEach(e => {
    total++;
  });

  return total;
}

//encuentra el padre del nodo
//no usar en la raiz!!
var ptr_padre;
function encuentraPadre(nodo,r,found){
  
  r.hijos.forEach(element => {
 //   console.log(element);
 if(found==false)
    if(element==nodo)
    {
    //  console.log("->nodo: "+nodo.dato);
    //  console.log("->r: "+r.dato);
      ptr_padre=r;
     
    }
    else if(found==false)
      encuentraPadre(nodo,element,found);
  });
}


//me dice cuantos hermanos tiene el nodo dado
//no aplica con la raiz 
function cuantosHermanos(nodo,arbol){
  var padre=encuentraPadre(nodo,arbol[0],false);
 // console.log(padre.hijos.length-1);
  return padre.hijos.length-1;
}

//le doy al padre, al og, regreso a los hermanos
function Hermanos(padre,yo){
  H = padre.hijos.filter(h => h!=yo);
  //console.log(H);
  return H;
}


//raiz no es la raiz del arbol, sino una lista con los nodos!
var agujaY=10;
var nivelX=1;
function ponhijos(fullarbol,raiz,narbol,nivel){
  //console.log(fullarbol[0].hijos[0]);
 // console.log(fullarbol);
 //console.log("Soy: "+fullarbol[5].dato);
 //console.log(hermanos);
  if(raiz.hijos!=undefined)
  {
   
  var t=raiz.hijos.length-1;//cuantos hijos tiene? 
  var hijosdir=raiz.hijos;//cual es el indice de los hijos?
  agujaY*=t;
  var margen=100/(t+1);
  for(t;t>=0;t--)
  {
  //  var yo=fullarbol[t];
  //  var r=fullarbol[0];
  //  var padre=encuentraPadre(yo,r,false);
  //  var hermanos=Hermanos(ptr_padre,yo);
  narbol[hijosdir[t]].x=(nivel*20)+10;
  agujaY=agujaY+30;

  narbol[hijosdir[t]].y=100-agujaY;
 
    agujaY-=10;
  }
  
  
  }
}

var dat;
var ndat;
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
  var mydata=datos2;
  //como dat es un string con todo el contenido del archivo dot
  //primero quito todo hasta que encuentre la palabra "digraph" que marca el inicio dela estructura
  //encuentro las d's las cuales marcan los inicios de donde estaria la palabra
  //ya que estamos en js, buscamos si esta la palabra directamente
  var inicio=dat.indexOf('digraph')
  if(inicio!=-1)
  {
    ndat=dat.slice(inicio);//quito lo anterior a digraph

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
// grafica1.config.data = loadTree(reader.responseText);

     //   console.log(grafica1.config.data.datasets[0].data);
     //   console.log('nuevo');
    //    console.log(convetirNodos(reader.responseText));
        grafica1.config.data.datasets[0].data = convetirNodos(reader.responseText);
     
      //  console.log(grafica1.config.data.datasets[0].data);
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

