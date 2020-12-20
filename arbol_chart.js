//Heredamos de la clase bubble para crear nuestra nueva clase arbol
Chart.defaults.arbol = Chart.defaults.bubble;

// I think the recommend using Chart.controllers.bubble.extend({ extensions here });
var custom = Chart.controllers.bubble.extend({
    draw: function(ease) {
        // Call super method first
        Chart.controllers.bubble.prototype.draw.call(this, ease);
        //AQUI SE HACE LA MAGIA
        var meta = this.getMeta();
        var info = this.getDataset().data[0].d;//cambiar a funcion
		var pt0 = meta.data[0];
        var pt1 = meta.data[1];
        var pt2 = meta.data[2];
        var radius = pt0._view.radius;//todos los nodos tienen el mismo tamaño

        var ctx = this.chart.chart.ctx;
        
        ctx.save();
       ctx.strokeStyle = 'black';
		ctx.lineWidth = 1;
		ctx.fillStyle = "black";//con esto repinto el nodo
		ctx.fillRect(pt0._view.x - radius - 1, pt0._view.y - radius - 1, 2 * radius + 1, 2 * radius + 1);
		//con esto conecto los 2 nodos
		ctx.moveTo(pt0._view.x,pt0._view.y);
		ctx.lineTo(pt1._view.x,pt1._view.y);
		ctx.stroke();
		//poniendo el letrero
		ctx.font = "12px Georgia";
		ctx.fillStyle = "white";
        ctx.fillText(info , pt0._view.x, pt0._view.y);

		ctx.restore();
    }
});

// Stores the controller so that the chart initialization routine can look it up with
// Chart.controllers[type]
Chart.controllers.arbol = custom;
