/**
 * 
 */
(function(aspects) {
	aspects.CONJUNCTION = "Conjunction";
	aspects.SEXTILE = "Sextile";
	aspects.SQUARE = "Square";
	aspects.TRINE = "Trine";
	aspects.OPPOSITION = "Opposition";
	
	// Color of lines in charts
	aspects.LINE_COLOR = "#333";

	
	// Module wrapper element ID
	aspects.ID_CHART = "aspects";
	
	// Radix chart element ID
	aspects.ID_ASPECT_GRID = "aspectGrid";
	
	aspects.ID_BG = "background";
	
	// Transit chart element ID
	aspects.ID_TRANSIT = "transit";
	
	// Aspects wrapper element ID
	aspects.ID_ASPECTS = "aspects";
	
	//Scale of symbols	 
	aspects.SYMBOL_SCALE = 1;
		
	// BG color
	aspects.COLOR_BACKGROUND = "#fff";		 
				
	// Color of planet's symbols
	aspects.POINTS_COLOR = "#000";
	
	// Size of description text next to the planet: angle, retrograde, dignities, ...
	aspects.POINTS_TEXT_SIZE = 8;
	
	// Points strength of lines
	aspects.POINTS_STROKE = 1.8;
		
	// Font color of signs symbols
	aspects.SIGNS_COLOR = "#000"; 
	
	// Signs strength of lines
	aspects.SIGNS_STROKE = 0.5; //1.5
		
	
	// Chart margin
	aspects.MARGIN = 50; //px
		
	// Chart Padding  
	aspects.PADDING = 18; //px
	

	aspects.createGrid = function(idGrid) {
		this.idGrid = idGrid;
		return this;
	};
	
	
	var context;
	
	/**
	 * SVG tools.
	 * 
	 * @class
	 * @public
	 * @constructor
	 * @param {String} elementId - root DOM Element 
	 * @param {int} width
	 * @param {int} height 
	 */
	aspects.SVG = function( elementId, width, height){		
		var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");		
		svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
		svg.setAttribute('style', "position: relative; overflow: hidden;");		
		svg.setAttribute('version', "1.1");						 				
		svg.setAttribute('width', width);
		svg.setAttribute('height', height);	
		svg.setAttribute('viewBox', "0 0 " + width + " " + " " + height);
		document.getElementById( elementId ).appendChild( svg );
		
		var wrapper = document.createElementNS(svg.namespaceURI, "g");
		wrapper.setAttribute('id', aspects.ID_CHART);
		svg.appendChild( wrapper );
						
		this.DOMElement = svg;				
		this.root = wrapper;
		this.width = width;
		this.height = height;
						
		context = this;
	};	
	
	/**
	 * Get a required symbol. 
	 * 
	 * @param {String} name
	 * @param {int} x
	 * @param {int} y
	 * 
	 * @return {SVG g}
	 */

	aspects.SVG.prototype.getSymbol = function( name, x, y){		
		
		switch(name) {
			case aspects.CONJUNCTION:		        
		        return conjunction( x, y);		        
		        break;
		    case aspects.SEXTILE:		        
		        return sextile( x, y);		        
		        break;
		   case aspects.SQUARE:		        
		        return square( x, y);		        
		        break;     
		   case aspects.TRINE:		        
		        return trine( x, y);		        
		        break;	
		   case aspects.OPPOSITION:		        
		        return opposition( x, y);		        
		        break;
		    default:
		    	var unknownPoint = this.circle(x, y, 8);
		    	unknownPoint.setAttribute("stroke", "#ffff00");		 
				unknownPoint.setAttribute("stroke-width", 1);
		    	unknownPoint.setAttribute("fill", "#ff0000");		    							    			    			    			    		
		    	return unknownPoint;	 
		}			
	};

	/*
	 * Square path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function square( x, y ){
		
		// center symbol
		var xShift = -2; //px						
		var yShift = -7; //px		
		x =  Math.round(x + (xShift * aspects.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * aspects.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (aspects.SYMBOL_SCALE - 1)) + "," + (-y * (aspects.SYMBOL_SCALE - 1)) + ") scale(" + aspects.SYMBOL_SCALE + ")");
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m" + x + ", " + y + " H 45.911341 V 46.134005 H 4.0886593 Z");				
			node.setAttribute("stroke", aspects.POINTS_COLOR);		 
			node.setAttribute("stroke-width", aspects.POINTS_STROKE);
			node.setAttribute("fill","none");			
			wrapper.appendChild(node);
											
		return wrapper;
	};

	/*
	 * Sextile path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function sextile( x, y ){
		
		// center symbol
		var xShift = -2; //px						
		var yShift = -7; //px		
		x =  Math.round(x + (xShift * aspects.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * aspects.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (aspects.SYMBOL_SCALE - 1)) + "," + (-y * (aspects.SYMBOL_SCALE - 1)) + ") scale(" + aspects.SYMBOL_SCALE + ")");
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m" + x + ", " + y + " h -44 m 11,-19 22,37.999998 m 0,-37.999998 -22,37.999998");
			node.setAttribute("stroke", aspects.POINTS_COLOR);		 
			node.setAttribute("stroke-width", aspects.POINTS_STROKE);
			node.setAttribute("fill","none");			
			wrapper.appendChild(node);
											
		return wrapper;
	};
	
	/*
	 * Trine path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function trine( x, y ){

		// center symbol
		var xShift = -2; //px						
		var yShift = -7; //px		
		x =  Math.round(x + (xShift * aspects.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * aspects.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (aspects.SYMBOL_SCALE - 1)) + "," + (-y * (aspects.SYMBOL_SCALE - 1)) + ") scale(" + aspects.SYMBOL_SCALE + ")");
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "M" + x + ", " + y + " H 45 L 25,7 Z");		
			node.setAttribute("stroke", aspects.POINTS_COLOR);		 
			node.setAttribute("stroke-width", aspects.POINTS_STROKE);
			node.setAttribute("fill","none");			
			wrapper.appendChild(node);
											
		return wrapper;
	};

	/*
	 * Conjunction path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function conjunction( x, y ){
		
		// center symbol
		var xShift = -2; //px						
		var yShift = -7; //px		
		x =  Math.round(x + (xShift * aspects.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * aspects.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (aspects.SYMBOL_SCALE - 1)) + "," + (-y * (aspects.SYMBOL_SCALE - 1)) + ") scale(" + aspects.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m" + x + ", " + y + " a 11,11 0 1 0 2,2 z m 1,1 22,-22");	
			node.setAttribute("stroke", aspects.POINTS_COLOR);		 
			node.setAttribute("stroke-width", aspects.POINTS_STROKE);
			node.setAttribute("fill","none");			
			wrapper.appendChild(node);
											
		return wrapper;
	};	

	
	/*
	 * Opposition path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function opposition( x, y ){
		
		// center symbol
		var xShift = -2; //px						
		var yShift = -7; //px		
		x =  Math.round(x + (xShift * aspects.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * aspects.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (aspects.SYMBOL_SCALE - 1)) + "," + (-y * (aspects.SYMBOL_SCALE - 1)) + ") scale(" + aspects.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m" + x + ", " + y + " a 9,9 0 1 0 2,2 z m 1,1 12,-12 m 1,1 a 9,9 0 1 0 -2,-2 z");	
			node.setAttribute("stroke", aspects.POINTS_COLOR);		 
			node.setAttribute("stroke-width", aspects.POINTS_STROKE);
			node.setAttribute("fill","none");			
			wrapper.appendChild(node);
											
		return wrapper;
	};	
	
	/**
	 * Draw line in circle
	 * 
	 * @param {int} x1
	 * @param {int} y2
	 * @param {int} x2
	 * @param {int} y2 
	 * @param {String} color - HTML rgb	 
	 * 
	 * @return {SVGElement} line
	 */  
	aspects.SVG.prototype.line = function line( x1, y1, x2, y2, color){									            	 	            	
		var line = document.createElementNS( context.root.namespaceURI, "line");
		line.setAttribute("x1", x1);
		line.setAttribute("y1", y1);	
  	    line.setAttribute("x2", x2);
		line.setAttribute("y2", y2);											
		return line;
	};
	
	/*
	 * grid path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	aspects.SVG.prototype.gridAspects = function gridAspects( x, y ){
		
		// center symbol
		var xShift = -2; //px						
		var yShift = -7; //px		
		x =  Math.round(x + (xShift * aspects.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * aspects.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		//wrapper.setAttribute("transform", "translate(" + ( -x * (aspects.SYMBOL_SCALE - 1)) + "," + (-y * (aspects.SYMBOL_SCALE - 1)) + ") scale(" + aspects.SYMBOL_SCALE + ")");
		wrapper.setAttribute("transform", "translate(0,-147)");
			
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m 0.22556077,286.85895 129.99986923,-0.098 v 0");	
			node.setAttribute("stroke", aspects.POINTS_COLOR);		 
			node.setAttribute("stroke-width", aspects.POINTS_STROKE);
			node.setAttribute("fill","none");			
			wrapper.appendChild(node);
			
			node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m 0.13384884,186.85895 129.99987116,-0.098 v 0");	
			node.setAttribute("stroke", aspects.POINTS_COLOR);		 
			node.setAttribute("stroke-width", aspects.POINTS_STROKE);
			node.setAttribute("fill","none");			
			wrapper.appendChild(node);
			
			node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m 0.14302003,196.85895 129.99986997,-0.098 v 0");	
			node.setAttribute("stroke", aspects.POINTS_COLOR);		 
			node.setAttribute("stroke-width", aspects.POINTS_STROKE);
			node.setAttribute("fill","none");			
			wrapper.appendChild(node);

			node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m 0.15219123,206.85895 129.99986877,-0.098 v 0");	
			node.setAttribute("stroke", aspects.POINTS_COLOR);		 
			node.setAttribute("stroke-width", aspects.POINTS_STROKE);
			node.setAttribute("fill","none");			
			wrapper.appendChild(node);

			node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m 0.16136243,216.85895 129.99986757,-0.098 v 0");	
			node.setAttribute("stroke", aspects.POINTS_COLOR);		 
			node.setAttribute("stroke-width", aspects.POINTS_STROKE);
			node.setAttribute("fill","none");			
			wrapper.appendChild(node);

			node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m 0.1705336,226.85895 129.9998664,-0.098 v 0");	
			node.setAttribute("stroke", aspects.POINTS_COLOR);		 
			node.setAttribute("stroke-width", aspects.POINTS_STROKE);
			node.setAttribute("fill","none");			
			wrapper.appendChild(node);

			node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m 0.1797048,236.85895 129.9998652,-0.098 v 0");	
			node.setAttribute("stroke", aspects.POINTS_COLOR);		 
			node.setAttribute("stroke-width", aspects.POINTS_STROKE);
			node.setAttribute("fill","none");			
			wrapper.appendChild(node);

			node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m 0.188876,246.85895 129.999864,-0.098 v 0");	
			node.setAttribute("stroke", aspects.POINTS_COLOR);		 
			node.setAttribute("stroke-width", aspects.POINTS_STROKE);
			node.setAttribute("fill","none");			
			wrapper.appendChild(node);

			node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "M 0.19804719,256.85895 130.19791,256.76102 v 0");	
			node.setAttribute("stroke", aspects.POINTS_COLOR);		 
			node.setAttribute("stroke-width", aspects.POINTS_STROKE);
			node.setAttribute("fill","none");			
			wrapper.appendChild(node);

			node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m 0.20721838,266.85895 129.99987162,-0.098 v 0");	
			node.setAttribute("stroke", aspects.POINTS_COLOR);		 
			node.setAttribute("stroke-width", aspects.POINTS_STROKE);
			node.setAttribute("fill","none");			
			wrapper.appendChild(node);

			node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m 0.13384884,176.85895 129.99987116,-0.098 v 0");	
			node.setAttribute("stroke", aspects.POINTS_COLOR);		 
			node.setAttribute("stroke-width", aspects.POINTS_STROKE);
			node.setAttribute("fill","none");			
			wrapper.appendChild(node);
			
			node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "M 0.13384858,166.85898 130.13372,166.76126 v 0");	
			node.setAttribute("stroke", aspects.POINTS_COLOR);		 
			node.setAttribute("stroke-width", aspects.POINTS_STROKE);
			node.setAttribute("fill","none");			
			wrapper.appendChild(node);

			node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "M 0.13384855,156.85898 130.13371,156.76124 v 0");	
			node.setAttribute("stroke", aspects.POINTS_COLOR);		 
			node.setAttribute("stroke-width", aspects.POINTS_STROKE);
			node.setAttribute("fill","none");			
			wrapper.appendChild(node);

			node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m 10.290291,157 v 130 0");	
			node.setAttribute("stroke", aspects.POINTS_COLOR);		 
			node.setAttribute("stroke-width", aspects.POINTS_STROKE);
			node.setAttribute("fill","none");			
			wrapper.appendChild(node);

			node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m 20.290291,157.00017 v 130 0");	
			node.setAttribute("stroke", aspects.POINTS_COLOR);		 
			node.setAttribute("stroke-width", aspects.POINTS_STROKE);
			node.setAttribute("fill","none");			
			wrapper.appendChild(node);

			node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m 120.29029,157 v 130 0");	
			node.setAttribute("stroke", aspects.POINTS_COLOR);		 
			node.setAttribute("stroke-width", aspects.POINTS_STROKE);
			node.setAttribute("fill","none");			
			wrapper.appendChild(node);

			node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m 110.29029,157 v 130 0");	
			node.setAttribute("stroke", aspects.POINTS_COLOR);		 
			node.setAttribute("stroke-width", aspects.POINTS_STROKE);
			node.setAttribute("fill","none");			
			wrapper.appendChild(node);

			node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m 90.290291,157 v 130 0");	
			node.setAttribute("stroke", aspects.POINTS_COLOR);		 
			node.setAttribute("stroke-width", aspects.POINTS_STROKE);
			node.setAttribute("fill","none");			
			wrapper.appendChild(node);

			node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m 80.290291,157 v 130 0");	
			node.setAttribute("stroke", aspects.POINTS_COLOR);		 
			node.setAttribute("stroke-width", aspects.POINTS_STROKE);
			node.setAttribute("fill","none");			
			wrapper.appendChild(node);

			node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m 70.290291,157 v 130 0");	
			node.setAttribute("stroke", aspects.POINTS_COLOR);		 
			node.setAttribute("stroke-width", aspects.POINTS_STROKE);
			node.setAttribute("fill","none");			
			wrapper.appendChild(node);

			node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m 60.290291,157.00017 v 130 0");	
			node.setAttribute("stroke", aspects.POINTS_COLOR);		 
			node.setAttribute("stroke-width", aspects.POINTS_STROKE);
			node.setAttribute("fill","none");			
			wrapper.appendChild(node);

			node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m 50.290291,157 v 130 0");	
			node.setAttribute("stroke", aspects.POINTS_COLOR);		 
			node.setAttribute("stroke-width", aspects.POINTS_STROKE);
			node.setAttribute("fill","none");			
			wrapper.appendChild(node);

			node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m 40.290291,157.00017 v 130 0");	
			node.setAttribute("stroke", aspects.POINTS_COLOR);		 
			node.setAttribute("stroke-width", aspects.POINTS_STROKE);
			node.setAttribute("fill","none");			
			wrapper.appendChild(node);

			node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m 40.290291,157.00017 v 130 0");	
			node.setAttribute("stroke", aspects.POINTS_COLOR);		 
			node.setAttribute("stroke-width", aspects.POINTS_STROKE);
			node.setAttribute("fill","none");			
			wrapper.appendChild(node);

			node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m 30.290291,157 v 130 0");	
			node.setAttribute("stroke", aspects.POINTS_COLOR);		 
			node.setAttribute("stroke-width", aspects.POINTS_STROKE);
			node.setAttribute("fill","none");			
			wrapper.appendChild(node);

			node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m 0.2902913,157 v 130 0");	
			node.setAttribute("stroke", aspects.POINTS_COLOR);		 
			node.setAttribute("stroke-width", aspects.POINTS_STROKE);
			node.setAttribute("fill","none");			
			wrapper.appendChild(node);

			node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m 130.29029,157 v 130 0");	
			node.setAttribute("stroke", aspects.POINTS_COLOR);		 
			node.setAttribute("stroke-width", aspects.POINTS_STROKE);
			node.setAttribute("fill","none");			
			wrapper.appendChild(node);
											
		return wrapper;
	};	

}( window.aspects = window.aspects || {}));

//## CHART ###################################
(function( aspects ) {
    
	
	/**
	 * Displays aspects charts.
	 * 
	 * @class
	 * @public
	 * @constructor
 	 * @param {String} elementId - root DOMElement 
	 * @param {int} width
	 * @param {int} height
	 * @param {Object} settings
	 */
	aspects.GridAspects = function( elementId, width, height, settings ){
		
		if(settings){
			Object.assign(aspects, settings);
		}
		
		if (elementId && !document.getElementById( elementId )){
			var paper = document.createElement('div');					
			paper.setAttribute('id', elementId);			
			document.body.appendChild( paper );
		}
										
		this.paper = new aspects.SVG( elementId, width, height); 
		this.cx = this.paper.width/2;
		this.cy = this.paper.height/2;
		this.radius = this.paper.height/2 - aspects.MARGIN;
						
		return this;
	};
	

	 
	/**
	 * Display radix horoscope
	 * 
	 * @param {Object} data
	 * @example
	 *	{
	 *		"points":{"Moon":[0], "Sun":[30],  ... },
	 *		"cusps":[300, 340, 30, 60, 75, 90, 116, 172, 210, 236, 250, 274] 
	 *	}
	 * 
	 * @see https://github.com/Kibo/AstroWebService 
	 * 
	 * @return {aspects.Radix} radix
	 */
	aspects.GridAspects.prototype.draw = function( data ){
												
		var drawAspects = new aspects.DrawAspects(this.paper, this.cx, this.cy, this.radius, data);
		drawAspects.drawGrid();									
										 							
		return drawAspects;
	 };
	 	
	 /**
	 * Scale chart
	 * 
	 * @param {int} factor 
	 */
	 aspects.GridAspects.prototype.scale = function( factor ){			
		this.paper.root.setAttribute("transform", "translate(" + ( -this.cx * (factor - 1)) + "," + (-this.cy * (factor - 1)) + ") scale(" + factor + ")");		
	};
	
	/**
	 * Draw the symbol on the axis.
	 * For debug only.
	 * 	
	 */
	aspects.GridAspects.prototype.calibrate = function calibrate(){
		var positions, circle, line;
		var startRadius = 60;
		
		var planets = ["Sun", "Moon", "Mercury", "Venus", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto", "Chiron", "Lilith", "NNode"];
		
		for(var i = 0; i < planets.length; i++){		
			positions = aspects.utils.getPointPosition(this.cx, this.cy, this.radius*2, i * 30 );
			
			line = this.paper.line(this.cx, this.cy, positions.x, positions.y);
			line.setAttribute("stroke", aspects.LINE_COLOR);	
			this.paper.root.appendChild( line);
			
			circle = this.paper.circle(this.cx, this.cy, startRadius + startRadius * i );
			circle.setAttribute("stroke", aspects.LINE_COLOR);		 
			circle.setAttribute("stroke-width", 1);
			this.paper.root.appendChild( circle );
						
		}
						
		for(var n = 0, ln = planets.length; n < ln; n++){
			
			var radius = startRadius + startRadius*n; 
			
			for(var i = 0; i < 12; i++){
				positions = aspects.utils.getPointPosition(this.cx, this.cy, radius, i * 30 );
			
				circle = this.paper.circle(positions.x, positions.y, aspects.COLLISION_RADIUS *aspects.SYMBOL_SCALE );
				circle.setAttribute("stroke", "red");		 
				circle.setAttribute("stroke-width", 1);
				this.paper.root.appendChild( circle );
							
				this.paper.root.appendChild( this.paper.getSymbol( planets[n], positions.x, positions.y));	
			}
		
		}
											
		return this;		
	};
		 		  
}( window.aspects = window.aspects || {}));

//## Radix chart ###################################
(function( aspects ) {
	
	var context;
    
	/**
	 * Radix charts.
	 * 
	 * @class
	 * @public
	 * @constructor
 	 * @param {aspects.SVG} paper 
	 * @param {int} cx
	 * @param {int} cy
	 * @param {int} radius
	 * @param {Object} data
	 */
	aspects.DrawAspects = function( paper, cx, cy, radius, data ){
		
		// Validate data
		var status = aspects.utils.validate(data);		 		
		if( status.hasError ) {										
			throw new Error( status.messages );
		}
		
		this.data = data;								
		this.paper = paper; 
		this.cx = cx;
		this.cy = cy;
		this.radius = radius;
		
		// after calling this.drawPoints() it contains current position of point
		this.locatedPoints = [];
		this.rulerRadius = ((this.radius/aspects.INNER_CIRCLE_RADIUS_RATIO)/aspects.RULER_RADIUS);
		this.pointRadius = this.radius - (this.radius/aspects.INNER_CIRCLE_RADIUS_RATIO + 2*this.rulerRadius + (aspects.PADDING * aspects.SYMBOL_SCALE));
					
		//@see aspects.Radix.prototype.aspects()
		//@see aspects.Radix.prototype.setPointsOfInterest() 
        this.toPoints = JSON.parse(JSON.stringify(this.data)); // Clone object
 		
		this.universe = document.createElementNS(this.paper.root.namespaceURI, "g");
		this.universe.setAttribute('id', aspects.ID_CHART + "-" + aspects.ID_ASPECT_GRID);
		this.paper.root.appendChild( this.universe );
						
		var incY = this.paper.height / 10;
		line = this.paper.line(0, 0, this.paper.width, 0);
		line.setAttribute("stroke", aspects.LINE_COLOR);	
		this.paper.root.appendChild( line);
		line = this.paper.line(0, incY, this.paper.width, incY);
		line.setAttribute("stroke", aspects.LINE_COLOR);	
		this.paper.root.appendChild( line);
		line = this.paper.line(0, incY*2, this.paper.width, incY*2);
		line.setAttribute("stroke", aspects.LINE_COLOR);	
		this.paper.root.appendChild( line);

		
		context = this;
			
		return this;
	};
	
	/**
	 * Draw background
	 */
	
	aspects.DrawAspects.prototype.drawGrid = function(){				
		var universe = this.universe;	
		var wrapper = aspects.utils.getEmptyWrapper( universe, aspects.ID_CHART + "-" + aspects.ID_BG);	
		var gaspects = this.paper.gridAspects(this.cx, this.cy);
		wrapper.appendChild( gaspects );					
	};
	
}( window.aspects = window.aspects || {}));

//## UTILS #############################
(function( aspects ) {
	
	aspects.utils = {};
	
	/**
	 * Calculate position of the point on the circle.
	 * 
	 * @param {int} cx - center x 
	 * @param {int} cy - center y
	 * @param {int} radius
	 * @param {double} angle - degree			
	 * 
	 * @return {Object} - {x:10, y:20}
	 */	
	aspects.utils.getPointPosition = function( cx, cy, radius, angle ){		
		var angleInRadius = (astrology.SHIFT_IN_DEGREES - angle) * Math.PI / 180;
		var xPos = cx + radius * Math.cos( angleInRadius );
		var yPos = cy + radius * Math.sin( angleInRadius );							  		  			
		return {x:xPos, y:yPos};
	};
	
	aspects.utils.degreeToRadians = function( degree ){
		return degrees * Math.PI / 180;
	};

	aspects.utils.radiansToDegree = function( radians ){
		return radians * 180 / Math.PI;
	};
	
	/**
	 * Calculates positions of the point description
	 * 
	 * @param {Object} point
	 * @param {Array<String>} texts
	 * 
	 * @return {Array<Object>} [{text:"abc", x:123, y:456}, {text:"cvb", x:456, y:852}, ...]
	 */
	aspects.utils.getDescriptionPosition = function( point, texts ){
		var RATION = 1.4;
		var result = [];		
		var posX = point.x + (astrology.COLLISION_RADIUS/RATION * astrology.SYMBOL_SCALE)  ;
		var posY = point.y - (astrology.COLLISION_RADIUS * astrology.SYMBOL_SCALE);
		
		texts.forEach(function(text, idx){						
			result.push({text:text, x:posX, y:posY + (astrology.COLLISION_RADIUS/RATION * astrology.SYMBOL_SCALE * idx)});					
		}, this);
						
		return result;
	};
	
	/**
	 * Checks a source data
	 * @private
	 * 
	 * @param {Object} data
	 * @return {Object} status
	 */
	aspects.utils.validate = function( data ){
		var status = {hasError:false, messages:[]};
		
		if( data == null ){			
			status.messages.push( "Data is not set." );
			status.hasError = true;
			return status;
		}

		if(!Array.isArray(data)){
			status.messages.push( "The data has to be Array." );
			status.hasError = true;	
		}
		
		if(data.length == undefined || data.length == null || data.length == 0){					
			status.messages.push( "There is not array of aspects." );
			status.hasError = true;
		}
		

		if(data[0].aspect == null){					
			status.messages.push( "There is not property 'aspect'." );
			status.hasError = true;
		}
		
		if(data[0].point == null){					
			status.messages.push( "There is not property 'point'." );
			status.hasError = true;
		}

		if(data[0].toPoint == null){					
			status.messages.push( "There is not property 'point'." );
			status.hasError = true;
		}
									
		return status;		
	};
	
	/**
	 * Get empty DOMElement with ID
	 * 
	 * @param{String} elementID
	 * @param{DOMElement} parent
	 * @return {DOMElement}
	 */
	aspects.utils.getEmptyWrapper = function( parent, elementID ){
		
		var wrapper = document.getElementById( elementID );		
		if(wrapper){
			astrology.utils.removeChilds( wrapper );
		}else{					
			wrapper = document.createElementNS( document.getElementById(aspects.ID_CHART).namespaceURI, "g");
			wrapper.setAttribute('id', elementID);
			parent.appendChild( wrapper );			
		} 
		
		return wrapper;
	};
	
}( window.aspects = window.aspects || {}));