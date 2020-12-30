//Heredamos de la clase bubble para crear nuestra nueva clase arbol
Chart.defaults.arbol = Chart.defaults.bubble;

// I think the recommend using Chart.controllers.bubble.extend({ extensions here });
var custom = Chart.controllers.bubble.extend({
    draw: function(ease) {
        // Call super method first
        Chart.controllers.bubble.prototype.draw.call(this, ease);
        //AQUI SE HACE LA MAGIA
        var meta = this.getMeta();
        var dataset = this.getDataset().data;
        //console.log(this.getDataset().treeDescription);
		var pt0 = meta.data[0];
        var radius = pt0._view.radius;//todos los nodos tienen el mismo tamaño en la clase default
        var ctx = this.chart.chart.ctx;//obtengo el canvas 
        var ctx_ancho = ctx.canvas.clientWidth;
        var ctx_alto = ctx.canvas.clientHeight;
        ctx.save();
        //primero limpio el canvas
        ctx.fillStyle = this.getDataset().backgroundColor;
        ctx.fillRect(0,0,ctx_ancho,ctx_alto);
        //pinto las ramas
        ctx.strokeStyle = this.getDataset().edgeColor;    
        var k=0;
        var t=0;  
        while(t<dataset.length)
        {
           
            while(dataset[t].hijos[k]!=undefined)
            {
                
                var pos_final = meta.data[dataset[t].hijos[k]];  
                if(dataset[t].hijos.length!=0)
                // console.log('dibujando de',dataset[t].label);
                dibujaRama(meta.data[t],pos_final,ctx);
                k++;
            }
        k=0;
        t++;      
        }
        
        //pinto los nodos
        ctx.fillStyle = "black";
        var e=0;
        while(dataset[e]!=undefined)
        {
            var margen=10;
            var px=meta.data[e]._view.x;
            var py=meta.data[e]._view.y;
            //dibujo los nodos
            if(dataset[e].label!="")//para no dibujar el que estira el canvas, ya que se estira si el nodo existe, no el importa si esta dibujado!
              ctx.fillRect(px-radius-margen,py-radius-margen,2*radius+margen+50,2*radius+margen);
            
            ctx.save();
            //rotulo los nodos
            ctx.font = "12px Arial";
    		ctx.fillStyle = "white";
            ctx.fillText(dataset[e].label,px,py);
            ctx.restore();
            e++;
        }
       
		ctx.restore();
    },
    
});
//a y b son 2 puntos, el padre y su hijo
function dibujaRama(A,B,ctx){
    ctx.beginPath();
    ctx.moveTo(A._view.x,A._view.y);
    ctx.lineTo(B._view.x,B._view.y);
    ctx.stroke();
}

// Stores the controller so that the chart initialization routine can look it up with
// Chart.controllers[type]
Chart.controllers.arbol = custom;
