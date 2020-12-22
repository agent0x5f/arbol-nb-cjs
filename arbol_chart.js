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
		var pt0 = meta.data[0];
        var radius = pt0._view.radius;//todos los nodos tienen el mismo tamaño en la clase default
        var ctx = this.chart.chart.ctx;//obtengo el canvas 
        var ctx_ancho = ctx.canvas.clientWidth;
        var ctx_alto = ctx.canvas.clientHeight;
        ctx.save();
        //primero limpio el canvas
        ctx.fillStyle = "gray";
        ctx.fillRect(0,0,ctx_ancho,ctx_alto);
        //pinto los nodos
        ctx.fillStyle = "black";
        var e=0;
        while(dataset[e]!=undefined)
        {
            var margen=10;
            var px=meta.data[e]._view.x;
            var py=meta.data[e]._view.y;
            //dibujo los nodos
            ctx.fillRect(px-radius-margen,py-radius-margen,2*radius+margen,2*radius+margen);
            ctx.save();
            //rotulo los nodos
            ctx.font = "8px Georgia";
    		ctx.fillStyle = "white";
            ctx.fillText(dataset[e].d,px,py);
            ctx.restore();
            e++;
        }
        ctx.strokeStyle = "green";       
        dibujaRama(meta.data[0],meta.data[1],ctx);
        dibujaRama(meta.data[0],meta.data[2],ctx);
        dibujaRama(meta.data[1],meta.data[3],ctx);
        dibujaRama(meta.data[2],meta.data[4],ctx);
        dibujaRama(meta.data[4],meta.data[5],ctx);
        dibujaRama(meta.data[2],meta.data[6],ctx);
        dibujaRama(meta.data[2],meta.data[7],ctx);
        dibujaRama(meta.data[2],meta.data[8],ctx);
        dibujaRama(meta.data[2],meta.data[9],ctx);
        dibujaRama(meta.data[2],meta.data[10],ctx);


        

		ctx.restore();
    }
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
