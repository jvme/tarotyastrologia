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
	//aspects.LINE_COLOR = "#333";
	aspects.LINE_COLOR = "#000";

	
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
	aspects.SYMBOL_SCALE = 1.5;
		
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
	
	
	// ( radius / aspects.INNER_CIRCLE_RADIUS_RATIO ) / aspects.RULER_RADIUS 
	aspects.RULER_RADIUS = 4;
		
	// Points
	aspects.SYMBOL_SUN = "Sun";
	aspects.SYMBOL_MOON = "Moon";
	aspects.SYMBOL_MERCURY = "Mercury";
	aspects.SYMBOL_VENUS = "Venus";
	aspects.SYMBOL_MARS = "Mars";
	aspects.SYMBOL_JUPITER = "Jupiter";
	aspects.SYMBOL_SATURN = "Saturn";
	aspects.SYMBOL_URANUS = "Uranus";
	aspects.SYMBOL_NEPTUNE = "Neptune";
	aspects.SYMBOL_PLUTO = "Pluto";
	aspects.SYMBOL_CHIRON = "Chiron";
	aspects.SYMBOL_LILITH = "Lilith";
	aspects.SYMBOL_NNODE = "NNode";
	aspects.SYMBOL_SNODE = "SNode";
	
	// Axis
	aspects.SYMBOL_AS = "As";
	aspects.SYMBOL_DS = "Ds";
	aspects.SYMBOL_MC = "Mc";
	aspects.SYMBOL_IC = "Ic";
		
	aspects.SYMBOL_AXIS_FONT_COLOR = "#333";
	aspects.SYMBOL_AXIS_STROKE = 1.6;
		
	// Cusps
	aspects.SYMBOL_CUSP_1 = "1";
	aspects.SYMBOL_CUSP_2 = "2";
	aspects.SYMBOL_CUSP_3 = "3";
	aspects.SYMBOL_CUSP_4 = "4";
	aspects.SYMBOL_CUSP_5 = "5";
	aspects.SYMBOL_CUSP_6 = "6";
	aspects.SYMBOL_CUSP_7 = "7";
	aspects.SYMBOL_CUSP_8 = "8";
	aspects.SYMBOL_CUSP_9 = "9";
	aspects.SYMBOL_CUSP_10 = "10";
	aspects.SYMBOL_CUSP_11 = "11";
	aspects.SYMBOL_CUSP_12 = "12";
	
	// Cusps strength of lines
	aspects.CUSPS_STROKE = 1;
	aspects.CUSPS_FONT_COLOR = "#000";	
	
	//Signs
	aspects.SYMBOL_ARIES = "Aries";
	aspects.SYMBOL_TAURUS = "Taurus";
	aspects.SYMBOL_GEMINI= "Gemini";
	aspects.SYMBOL_CANCER = "Cancer"; 
	aspects.SYMBOL_LEO = "Leo"; 
	aspects.SYMBOL_VIRGO = "Virgo"; 
	aspects.SYMBOL_LIBRA = "Libra";  
	aspects.SYMBOL_SCORPIO = "Scorpio";  
	aspects.SYMBOL_SAGITTARIUS = "Sagittarius";
	aspects.SYMBOL_CAPRICORN = "Capricorn"; 
	aspects.SYMBOL_AQUARIUS = "Aquarius"; 
	aspects.SYMBOL_PISCES = "Pisces";
	aspects.SYMBOL_SIGNS = [aspects.SYMBOL_ARIES, aspects.SYMBOL_TAURUS, aspects.SYMBOL_GEMINI, aspects.SYMBOL_CANCER, aspects.SYMBOL_LEO, aspects.SYMBOL_VIRGO, aspects.SYMBOL_LIBRA, aspects.SYMBOL_SCORPIO, aspects.SYMBOL_SAGITTARIUS, aspects.SYMBOL_CAPRICORN, aspects.SYMBOL_AQUARIUS, aspects.SYMBOL_PISCES];
	
	
	
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
		   case aspects.SYMBOL_SUN:		        
		        return sun( x, y);		        
		        break;
		    case aspects.SYMBOL_MOON:		        
		        return moon( x, y);		        
		        break;
		   case aspects.SYMBOL_MERCURY:		        
		        return mercury( x, y);		        
		        break;     
		    case aspects.SYMBOL_VENUS:		        
		        return venus( x, y);		        
		        break;	
		    case aspects.SYMBOL_MARS:		        
		        return mars( x, y);		        
		        break;
		    case aspects.SYMBOL_JUPITER:		        
		        return jupiter( x, y);		        
		        break;
		    case aspects.SYMBOL_SATURN:		        
		        return saturn( x, y);		        
		        break; 
		    case aspects.SYMBOL_URANUS:		        
		        return uranus( x, y);		        
		        break;
		    case aspects.SYMBOL_NEPTUNE:		        
		        return neptune( x, y);		        
		        break;
		    case aspects.SYMBOL_PLUTO:		        
		        return pluto( x, y);		        
		        break;
		    case aspects.SYMBOL_CHIRON:		        
		        return chiron( x, y);		        
		        break;
		    case aspects.SYMBOL_LILITH:		        
		        return lilith( x, y);		        
		        break;
		    case aspects.SYMBOL_NNODE:		        
		        return nnode( x, y);		        
		        break;
		    case aspects.SYMBOL_SNODE:		        
		        return snode( x, y);		        
		        break;
		    case aspects.SYMBOL_ARIES:		        
		        return aries( x, y);		        
		        break; 
		    case aspects.SYMBOL_TAURUS:		        
		        return taurus( x, y);		        
		        break;
		    case aspects.SYMBOL_GEMINI:		        
		        return gemini( x, y);		        
		        break;
		    case aspects.SYMBOL_CANCER:		        
		        return cancer( x, y);		        
		        break;
		    case aspects.SYMBOL_LEO:		        
		        return leo( x, y);		        
		        break;
		    case aspects.SYMBOL_VIRGO:		        
		        return virgo( x, y);		        
		        break;
		    case aspects.SYMBOL_LIBRA:		        
		        return libra( x, y);		        
		        break;
		    case aspects.SYMBOL_SCORPIO:		        
		        return scorpio( x, y);		        
		        break;
		    case aspects.SYMBOL_SAGITTARIUS:		        
		        return sagittarius( x, y);		        
		        break;
		    case aspects.SYMBOL_CAPRICORN:		        
		        return capricorn( x, y);		        
		        break;
		    case aspects.SYMBOL_AQUARIUS:		        
		        return aquarius( x, y);		        
		        break; 
		    case aspects.SYMBOL_PISCES:		        
		        return pisces( x, y);		        
		        break;		        
		    case aspects.SYMBOL_AS:		        
		        return ascendant( x, y );		        
		        break;		    
		    case aspects.SYMBOL_DS:		        
		        return descendant( x, y );		        
		        break;
		    case aspects.SYMBOL_MC:		        
		        return mediumCoeli( x, y );		        
		        break;
		    case aspects.SYMBOL_IC:		        
		        return immumCoeli( x, y );		        
		        break;	
		    case aspects.SYMBOL_IC:		        
		        return immumCoeli( x, y );		        
		        break;		    
		    case aspects.SYMBOL_CUSP_1:		        
		        return number1( x, y );		        
		        break;
	        case aspects.SYMBOL_CUSP_2:		        
		        return number2( x, y );		        
		        break;
	        case aspects.SYMBOL_CUSP_3:		        
		        return number3( x, y );		        
		        break;
	        case aspects.SYMBOL_CUSP_4:		        
		        return number4( x, y );		        
		        break;
	        case aspects.SYMBOL_CUSP_5:		        
		        return number5( x, y );		        
		        break;
	        case aspects.SYMBOL_CUSP_6:		        
		        return number6( x, y );		        
		        break;
	        case aspects.SYMBOL_CUSP_7:		        
		        return number7( x, y );		        
		        break;
	        case aspects.SYMBOL_CUSP_8:		        
		        return number8( x, y );		        
		        break;
	        case aspects.SYMBOL_CUSP_9:		        
		        return number9( x, y );		        
		        break;
	        case aspects.SYMBOL_CUSP_10:		        
		        return number10( x, y );		        
		        break;
	        case aspects.SYMBOL_CUSP_11:		        
		        return number11( x, y );		        
		        break;
	        case aspects.SYMBOL_CUSP_12:		        
		        return number12( x, y );		        
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
	
	/*
	 * Sun path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVG g}
	 */
	function sun( x, y ){
		
		// center symbol
		var xShift = -1; //px						
		var yShift = -8; //px		
		x =  Math.round(x + (xShift * aspects.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * aspects.SYMBOL_SCALE));
					
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (aspects.SYMBOL_SCALE - 1)) + "," + (-y * (aspects.SYMBOL_SCALE - 1)) + ") scale(" + aspects.SYMBOL_SCALE + ")");
						
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m" + x + ", " + y + " -2.18182,0.727268 -2.181819,1.454543 -1.454552,2.18182 -0.727268,2.181819 0,2.181819 0.727268,2.181819 1.454552,2.18182 2.181819,1.454544 2.18182,0.727276 2.18181,0 2.18182,-0.727276 2.181819,-1.454544 1.454552,-2.18182 0.727268,-2.181819 0,-2.181819 -0.727268,-2.181819 -1.454552,-2.18182 -2.181819,-1.454543 -2.18182,-0.727268 -2.18181,0 m 0.727267,6.54545 -0.727267,0.727276 0,0.727275 0.727267,0.727268 0.727276,0 0.727267,-0.727268 0,-0.727275 -0.727267,-0.727276 -0.727276,0 m 0,0.727276 0,0.727275 0.727276,0 0,-0.727275 -0.727276,0");				
			node.setAttribute("stroke", aspects.POINTS_COLOR);		 
			node.setAttribute("stroke-width", aspects.POINTS_STROKE);					
			node.setAttribute("fill", "none");
			wrapper.appendChild(node);
																	
		return wrapper;
	};
	
	/*
	 * Moon path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function moon( x, y ){
		
		// center symbol
		var xShift = -2; //px						
		var yShift = -7; //px		
		x =  Math.round(x + (xShift * aspects.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * aspects.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (aspects.SYMBOL_SCALE - 1)) + "," + (-y * (aspects.SYMBOL_SCALE - 1)) + ") scale(" + aspects.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m" + x + ", " + y + " a 7.4969283,7.4969283 0 0 1 0,14.327462 7.4969283,7.4969283 0 1 0 0,-14.327462 z");				
			node.setAttribute("stroke", aspects.POINTS_COLOR);		 
			node.setAttribute("stroke-width", aspects.POINTS_STROKE);
			node.setAttribute("fill","none");			
			wrapper.appendChild(node);
											
		return wrapper;
	};
	
	/*
	 * Mercury path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function mercury( x, y ){
		
		// center symbol
		var xShift = -2; //px						
		var yShift = 7; //px		
		x =  Math.round(x + (xShift * aspects.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * aspects.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (aspects.SYMBOL_SCALE - 1)) + "," + (-y * (aspects.SYMBOL_SCALE - 1)) + ") scale(" + aspects.SYMBOL_SCALE + ")");
				
			var body = document.createElementNS( context.root.namespaceURI, "path");
			body.setAttribute("d", "m" + x + ", " + y + " 4.26011,0 m -2.13005,-2.98207 0,5.11213 m 4.70312,-9.7983 a 4.70315,4.70315 0 0 1 -4.70315,4.70314 4.70315,4.70315 0 0 1 -4.70314,-4.70314 4.70315,4.70315 0 0 1 4.70314,-4.70315 4.70315,4.70315 0 0 1 4.70315,4.70315 z");				
			body.setAttribute("stroke", aspects.POINTS_COLOR);		 
			body.setAttribute("stroke-width", aspects.POINTS_STROKE);
			body.setAttribute("fill","none");			
			wrapper.appendChild( body );
			
			var crownXShift = 6; //px						
			var crownYShift = -16; //px
			var crown = document.createElementNS( context.root.namespaceURI, "path");
			crown.setAttribute("d", "m" + (x + crownXShift) + ", " + (y + crownYShift) + " a 3.9717855,3.9717855 0 0 1 -3.95541,3.59054 3.9717855,3.9717855 0 0 1 -3.95185,-3.59445");				
			crown.setAttribute("stroke", aspects.POINTS_COLOR);		 
			crown.setAttribute("stroke-width", aspects.POINTS_STROKE);
			crown.setAttribute("fill", "none");			
			wrapper.appendChild( crown );
											
		return wrapper;

	};
		
	/*
	 * Venus path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function venus( x, y ){
		
		// center symbol
		var xShift = 2; //px						
		var yShift = 7; //px		
		x =  Math.round(x + (xShift * aspects.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * aspects.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (aspects.SYMBOL_SCALE - 1)) + "," + (-y * (aspects.SYMBOL_SCALE - 1)) + ") scale(" + aspects.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m" + x + ", " + y + " -4.937669,0.03973 m 2.448972,2.364607 0,-5.79014 c -3.109546,-0.0085 -5.624617,-2.534212 -5.620187,-5.64208 0.0044,-3.107706 2.526514,-5.621689 5.635582,-5.621689 3.109068,0 5.631152,2.513983 5.635582,5.621689 0.0044,3.107868 -2.510641,5.633586 -5.620187,5.64208");				
			node.setAttribute("stroke", aspects.POINTS_COLOR);		 
			node.setAttribute("stroke-width", aspects.POINTS_STROKE);
			node.setAttribute("fill","none");												
			wrapper.appendChild(node);
											
		return wrapper;
	};
	
	/*
	 * Mars path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function mars( x, y ){
		
		// center symbol
		var xShift = 2; //px						
		var yShift = -2; //px		
		x =  Math.round(x + (xShift * aspects.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * aspects.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (aspects.SYMBOL_SCALE - 1)) + "," + (-y * (aspects.SYMBOL_SCALE - 1)) + ") scale(" + aspects.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");								
			node.setAttribute("d", "m" + x + ", " + y + " c -5.247438,-4.150623 -11.6993,3.205518 -7.018807,7.886007 4.680494,4.680488 12.036628,-1.771382 7.885999,-7.018816 z m 0,0 0.433597,0.433595 3.996566,-4.217419 m -3.239802,-0.05521 3.295015,0 0.110427,3.681507");			
			node.setAttribute("stroke", aspects.POINTS_COLOR);		 
			node.setAttribute("stroke-width", aspects.POINTS_STROKE);
			node.setAttribute("fill", "none");			
			wrapper.appendChild(node);
											
		return wrapper;
	};
	
	/*
	 * Jupiter path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function jupiter( x, y ){
		
		// center symbol
		var xShift = -5; //px						
		var yShift = -2; //px		
		x =  Math.round(x + (xShift * aspects.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * aspects.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (aspects.SYMBOL_SCALE - 1)) + "," + (-y * (aspects.SYMBOL_SCALE - 1)) + ") scale(" + aspects.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m" + x + ", " + y + " c -0.43473,0 -1.30422,-0.40572 -1.30422,-2.02857 0,-1.62285 1.73897,-3.2457 3.47792,-3.2457 1.73897,0 3.47792,1.21715 3.47792,4.05713 0,2.83999 -2.1737,7.30283 -6.52108,7.30283 m 12.17269,0 -12.60745,0 m 9.99902,-11.76567 0,15.82279");				
			node.setAttribute("stroke", aspects.POINTS_COLOR);		 
			node.setAttribute("stroke-width", aspects.POINTS_STROKE);
			node.setAttribute("fill", "none");													
			wrapper.appendChild(node);
											
		return wrapper;
	};
	
	/*
	 * Saturn path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function saturn( x, y ){
		
		// center symbol
		var xShift = 5; //px						
		var yShift = 10; //px		
		x =  Math.round(x + (xShift * aspects.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * aspects.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (aspects.SYMBOL_SCALE - 1)) + "," + (-y * (aspects.SYMBOL_SCALE - 1)) + ") scale(" + aspects.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m" + x + ", " + y + " c -0.52222,0.52221 -1.04445,1.04444 -1.56666,1.04444 -0.52222,0 -1.56667,-0.52223 -1.56667,-1.56667 0,-1.04443 0.52223,-2.08887 1.56667,-3.13332 1.04444,-1.04443 2.08888,-3.13331 2.08888,-5.22219 0,-2.08888 -1.04444,-4.17776 -3.13332,-4.17776 -1.97566,0 -3.65555,1.04444 -4.69998,3.13333 m -2.55515,-5.87499 6.26664,0 m -3.71149,-2.48054 0,15.14438");				
			node.setAttribute("stroke", aspects.POINTS_COLOR);		 
			node.setAttribute("stroke-width", aspects.POINTS_STROKE);
			node.setAttribute("fill", "none");												
			wrapper.appendChild(node);
											
		return wrapper;
	};
	
	/*
	 * Uranus path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function uranus( x, y ){
		
		// center symbol
		var xShift = -5; //px						
		var yShift = -7; //px		
		x =  Math.round(x + (xShift * aspects.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * aspects.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (aspects.SYMBOL_SCALE - 1)) + "," + (-y * (aspects.SYMBOL_SCALE - 1)) + ") scale(" + aspects.SYMBOL_SCALE + ")");
			
			var horns = document.createElementNS( context.root.namespaceURI, "path");
			horns.setAttribute("d", "m" + x + ", " + y + "  0,10.23824 m 10.23633,-10.32764 0,10.23824 m -10.26606,-4.6394 10.23085,0 m -5.06415,-5.51532 0,11.94985");				
			horns.setAttribute("stroke", aspects.POINTS_COLOR);		 
			horns.setAttribute("stroke-width", aspects.POINTS_STROKE);
			horns.setAttribute("fill", "none");												
			wrapper.appendChild(horns);
								
			var bodyXShift = 7; //px						
			var bodyYShift = 14.5; //px
			var body = document.createElementNS( context.root.namespaceURI, "path");
			body.setAttribute("d", "m" + (x + bodyXShift) + ", " + (y + bodyYShift) + " a 1.8384377,1.8384377 0 0 1 -1.83844,1.83843 1.8384377,1.8384377 0 0 1 -1.83842,-1.83843 1.8384377,1.8384377 0 0 1 1.83842,-1.83844 1.8384377,1.8384377 0 0 1 1.83844,1.83844 z");				
			body.setAttribute("stroke", aspects.POINTS_COLOR);
			body.setAttribute("stroke-width", aspects.POINTS_STROKE); 			
			body.setAttribute("fill", "none");	 									
			wrapper.appendChild( body );
			
													
		return wrapper;
	};
	
	/*
	 * Neptune path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function neptune( x, y ){
		
		// center symbol
		var xShift = 3; //px						
		var yShift = -5; //px		
		x =  Math.round(x + (xShift * aspects.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * aspects.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (aspects.SYMBOL_SCALE - 1)) + "," + (-y * (aspects.SYMBOL_SCALE - 1)) + ") scale(" + aspects.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m" + x + ", " + y + " 1.77059,-2.36312 2.31872,1.8045 m -14.44264,-0.20006 2.34113,-1.77418 1.74085,2.38595 m -1.80013,-1.77265 c -1.23776,8.40975 0.82518,9.67121 4.95106,9.67121 4.12589,0 6.18883,-1.26146 4.95107,-9.67121 m -7.05334,3.17005 2.03997,-2.12559 2.08565,2.07903 m -5.32406,9.91162 6.60142,0 m -3.30071,-12.19414 0,15.55803");				
			node.setAttribute("stroke", aspects.POINTS_COLOR);		 
			node.setAttribute("stroke-width", aspects.POINTS_STROKE);
			node.setAttribute("fill", "none");														
			wrapper.appendChild(node);
											
		return wrapper;
	};
	
	/*
	 * Pluto path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function pluto( x, y ){
		
		// center symbol
		var xShift = 5; //px						
		var yShift = -5; //px		
		x =  Math.round(x + (xShift * aspects.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * aspects.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (aspects.SYMBOL_SCALE - 1)) + "," + (-y * (aspects.SYMBOL_SCALE - 1)) + ") scale(" + aspects.SYMBOL_SCALE + ")");
				
			var body = document.createElementNS( context.root.namespaceURI, "path");
			body.setAttribute("d", "m" + x + ", " + y + " a 5.7676856,5.7676856 0 0 1 -2.88385,4.99496 5.7676856,5.7676856 0 0 1 -5.76768,0 5.7676856,5.7676856 0 0 1 -2.88385,-4.99496 m 5.76771,13.93858 0,-8.17088 m -3.84512,4.32576 7.69024,0");				
			body.setAttribute("stroke", aspects.POINTS_COLOR);		 
			body.setAttribute("stroke-width", aspects.POINTS_STROKE);
			body.setAttribute("fill", "none");														
			wrapper.appendChild(body);
			
			var headXShift = -2.3; //px						
			var headYShift = 0; //px
			var head = document.createElementNS( context.root.namespaceURI, "path");
			head.setAttribute("d", "m" + (x + headXShift) + ", " + (y + headYShift) + " a 3.3644834,3.3644834 0 0 1 -3.36448,3.36449 3.3644834,3.3644834 0 0 1 -3.36448,-3.36449 3.3644834,3.3644834 0 0 1 3.36448,-3.36448 3.3644834,3.3644834 0 0 1 3.36448,3.36448 z");				
			head.setAttribute("stroke", aspects.POINTS_COLOR);		 
			head.setAttribute("stroke-width", aspects.POINTS_STROKE);
			head.setAttribute("fill", "none");														
			wrapper.appendChild(head);
														
		return wrapper;
	};
	
	/*
	 * Chiron path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function chiron( x, y ){
		
		// center symbol
		var xShift = 3; //px						
		var yShift = 5; //px		
		x =  Math.round(x + (xShift * aspects.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * aspects.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (aspects.SYMBOL_SCALE - 1)) + "," + (-y * (aspects.SYMBOL_SCALE - 1)) + ") scale(" + aspects.SYMBOL_SCALE + ")");
				
			var body = document.createElementNS( context.root.namespaceURI, "path");
			body.setAttribute("d", "m" + x + ", " + y + " a 3.8764725,3.0675249 0 0 1 -3.876473,3.067525 3.8764725,3.0675249 0 0 1 -3.876472,-3.067525 3.8764725,3.0675249 0 0 1 3.876472,-3.067525 3.8764725,3.0675249 0 0 1 3.876473,3.067525 z");
			body.setAttribute("stroke", aspects.POINTS_COLOR);		 
			body.setAttribute("stroke-width", aspects.POINTS_STROKE);
			body.setAttribute("fill", "none");												
			wrapper.appendChild( body );
			
			var headXShift = 0; //px						
			var headYShift = -13; //px
			var head = document.createElementNS( context.root.namespaceURI, "path");
			head.setAttribute("d", "m" + (x + headXShift) + ", " + (y + headYShift) + "   -3.942997,4.243844 4.110849,3.656151 m -4.867569,-9.009468 0,11.727251");
			head.setAttribute("stroke", aspects.POINTS_COLOR);		 
			head.setAttribute("stroke-width", aspects.POINTS_STROKE);
			head.setAttribute("fill", "none");												
			wrapper.appendChild( head );
			
											
		return wrapper;
	};
	
	/*
	 * Lilith path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function lilith( x, y ){
		
		// center symbol
		var xShift = 2; //px						
		var yShift = 4; //px		
		x =  Math.round(x + (xShift * aspects.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * aspects.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (aspects.SYMBOL_SCALE - 1)) + "," + (-y * (aspects.SYMBOL_SCALE - 1)) + ") scale(" + aspects.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m" + x + ", " + y + " -2.525435,-1.12853 -1.464752,-1.79539 -0.808138,-2.20576 0.151526,-2.05188 0.909156,-1.5389 1.010173,-1.02593 0.909157,-0.56427 1.363735,-0.61556 m 2.315327,-0.39055 -1.716301,0.54716 -1.7163,1.09431 -1.1442,1.64146 -0.572102,1.64146 0,1.64146 0.572102,1.64147 1.1442,1.64145 1.7163,1.09432 1.716301,0.54715 m 0,-11.49024 -2.2884,0 -2.288401,0.54716 -1.716302,1.09431 -1.144201,1.64146 -0.5721,1.64146 0,1.64146 0.5721,1.64147 1.144201,1.64145 1.716302,1.09432 2.288401,0.54715 2.2884,0 m -4.36712,-0.4752 0,6.44307 m -2.709107,-3.41101 5.616025,0");			
			node.setAttribute("stroke", aspects.POINTS_COLOR);		 
			node.setAttribute("stroke-width", aspects.POINTS_STROKE);
			node.setAttribute("fill", "none");															
			wrapper.appendChild(node);
											
		return wrapper;
	};
	
	/*
	 * NNode path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function nnode( x, y ){
		
		// center symbol
		var xShift = -2; //px						
		var yShift = 3; //px		
		x =  Math.round(x + (xShift * aspects.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * aspects.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (aspects.SYMBOL_SCALE - 1)) + "," + (-y * (aspects.SYMBOL_SCALE - 1)) + ") scale(" + aspects.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m" + x + ", " + y + " -1.3333334,-0.6666667 -0.6666666,0 -1.3333334,0.6666667 -0.6666667,1.3333333 0,0.6666667 0.6666667,1.3333333 1.3333334,0.6666667 0.6666666,0 1.3333334,-0.6666667 0.6666666,-1.3333333 0,-0.6666667 -0.6666666,-1.3333333 -2,-2.66666665 -0.6666667,-1.99999995 0,-1.3333334 0.6666667,-2 1.3333333,-1.3333333 2,-0.6666667 2.6666666,0 2,0.6666667 1.3333333,1.3333333 0.6666667,2 0,1.3333334 -0.6666667,1.99999995 -2,2.66666665 -0.6666666,1.3333333 0,0.6666667 0.6666666,1.3333333 1.3333334,0.6666667 0.6666666,0 1.3333334,-0.6666667 0.6666667,-1.3333333 0,-0.6666667 -0.6666667,-1.3333333 -1.3333334,-0.6666667 -0.6666666,0 -1.3333334,0.6666667 m -7.9999999,-6 0.6666667,-1.3333333 1.3333333,-1.3333333 2,-0.6666667 2.6666666,0 2,0.6666667 1.3333333,1.3333333 0.6666667,1.3333333");				
			node.setAttribute("stroke", aspects.POINTS_COLOR);		 
			node.setAttribute("stroke-width", aspects.POINTS_STROKE);
			node.setAttribute("fill", "none");	
			wrapper.appendChild(node);
											
		return wrapper;
	};
	
	/*
	 * NNode path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function snode( x, y ){
		
		// center symbol
		var xShift = -2; //px						
		var yShift = 3; //px		
		x =  Math.round(x + (xShift * aspects.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * aspects.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (aspects.SYMBOL_SCALE - 1)) + "," + (-y * (aspects.SYMBOL_SCALE - 1)) + ") scale(" + aspects.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("transform","matrix(-1,0,0,-1," + 2*x + "," + 2*y + ")");
			node.setAttribute("d", "m" + x + ", " + y + " -1.3333334,-0.6666667 -0.6666666,0 -1.3333334,0.6666667 -0.6666667,1.3333333 0,0.6666667 0.6666667,1.3333333 1.3333334,0.6666667 0.6666666,0 1.3333334,-0.6666667 0.6666666,-1.3333333 0,-0.6666667 -0.6666666,-1.3333333 -2,-2.66666665 -0.6666667,-1.99999995 0,-1.3333334 0.6666667,-2 1.3333333,-1.3333333 2,-0.6666667 2.6666666,0 2,0.6666667 1.3333333,1.3333333 0.6666667,2 0,1.3333334 -0.6666667,1.99999995 -2,2.66666665 -0.6666666,1.3333333 0,0.6666667 0.6666666,1.3333333 1.3333334,0.6666667 0.6666666,0 1.3333334,-0.6666667 0.6666667,-1.3333333 0,-0.6666667 -0.6666667,-1.3333333 -1.3333334,-0.6666667 -0.6666666,0 -1.3333334,0.6666667 m -7.9999999,-6 0.6666667,-1.3333333 1.3333333,-1.3333333 2,-0.6666667 2.6666666,0 2,0.6666667 1.3333333,1.3333333 0.6666667,1.3333333");			
			node.setAttribute("stroke", aspects.POINTS_COLOR);		 
			node.setAttribute("stroke-width", aspects.POINTS_STROKE);
			node.setAttribute("fill", "none");	
			wrapper.appendChild(node);
											
		return wrapper;
	};

	/*
	 * Aries symbol path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function aries( x, y ){
		
		// center symbol
		var xShift = -9; //px						
		var yShift = -2; //px		
		x =  Math.round(x + (xShift * aspects.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * aspects.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (aspects.SYMBOL_SCALE - 1)) + "," + (-y * (aspects.SYMBOL_SCALE - 1)) + ") scale(" + aspects.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m " + x + ", " + y + " -0.9,-0.9 0,-1.8 0.9,-1.8 1.8,-0.8999998 1.8,0 1.8,0.8999998 0.9,0.9 0.9,1.8 0.9,4.5 m -9,-5.4 1.8,-1.8 1.8,0 1.8,0.9 0.9,0.9 0.9,1.8 0.9,3.6 0,9.9 m 8.1,-12.6 0.9,-0.9 0,-1.8 -0.9,-1.8 -1.8,-0.8999998 -1.8,0 -1.8,0.8999998 -0.9,0.9 -0.9,1.8 -0.9,4.5 m 9,-5.4 -1.8,-1.8 -1.8,0 -1.8,0.9 -0.9,0.9 -0.9,1.8 -0.9,3.6 0,9.9");																						
			node.setAttribute("stroke", aspects.SIGNS_COLOR);		 
			node.setAttribute("stroke-width", aspects.SIGNS_STROKE);			
			node.setAttribute("fill", "none");	
			
			wrapper.appendChild(node);
											
		return wrapper;
	};
	
	/*
	 * Taurus symbol path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function taurus( x, y ){
		
		// center symbol
		var xShift = -9; //px						
		var yShift = -11; //px		
		x =  Math.round(x + (xShift * aspects.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * aspects.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (aspects.SYMBOL_SCALE - 1)) + "," + (-y * (aspects.SYMBOL_SCALE - 1)) + ") scale(" + aspects.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m " + x + ", " + y + " 1,4 1,2 2,2 3,1 4,0 3,-1 2,-2 1,-2 1,-4 m -18,0 1,3 1,2 2,2 3,1 4,0 3,-1 2,-2 1,-2 1,-3 m -11,8 -2,1 -1,1 -1,2 0,3 1,2 2,2 2,1 2,0 2,-1 2,-2 1,-2 0,-3 -1,-2 -1,-1 -2,-1 m -4,1 -2,1 -1,2 0,3 1,3 m 8,0 1,-3 0,-3 -1,-2 -2,-1");				
			node.setAttribute("stroke", aspects.SIGNS_COLOR);		 
			node.setAttribute("stroke-width", aspects.SIGNS_STROKE);			
			node.setAttribute("fill", "none");												
			wrapper.appendChild(node);
											
		return wrapper;
	};
	
	/*
	 * Gemini symbol path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function gemini( x, y ){
		
		// center symbol
		var xShift = -6; //px						
		var yShift = -6; //px		
		x =  Math.round(x + (xShift * aspects.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * aspects.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (aspects.SYMBOL_SCALE - 1)) + "," + (-y * (aspects.SYMBOL_SCALE - 1)) + ") scale(" + aspects.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m " + x + ", " + y + " 0,11.546414 m 0.9622011,-10.5842129 0,9.6220117 m 7.6976097,-9.6220117 0,9.6220117 m 0.962201,-10.5842128 0,11.546414 m -13.4708165,-14.4330172 1.9244023,1.924402 1.9244024,0.9622012 2.8866038,0.9622011 3.848804,0 2.886604,-0.9622011 1.924402,-0.9622012 1.924403,-1.924402 m -17.3196215,17.3196207 1.9244023,-1.9244024 1.9244024,-0.9622011 2.8866038,-0.9622012 3.848804,0 2.886604,0.9622012 1.924402,0.9622011 1.924403,1.9244024");				
			node.setAttribute("stroke", aspects.SIGNS_COLOR);		 
			node.setAttribute("stroke-width", aspects.SIGNS_STROKE);			
			node.setAttribute("fill", "none");												
			wrapper.appendChild(node);
											
		return wrapper;
	};
	
	/*
	 * Cancer symbol path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function cancer( x, y ){
		
		// center symbol
		var xShift = 9; //px						
		var yShift = -9; //px		
		x =  Math.round(x + (xShift * aspects.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * aspects.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (aspects.SYMBOL_SCALE - 1)) + "," + (-y * (aspects.SYMBOL_SCALE - 1)) + ") scale(" + aspects.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m " + x + ", " + y + " -15,0 -2,1 -1,2 0,2 1,2 2,1 2,0 2,-1 1,-2 0,-2 -1,-2 11,0 m -18,3 1,2 1,1 2,1 m 4,-4 -1,-2 -1,-1 -2,-1 m -4,15 15,0 2,-1 1,-2 0,-2 -1,-2 -2,-1 -2,0 -2,1 -1,2 0,2 1,2 -11,0 m 18,-3 -1,-2 -1,-1 -2,-1 m -4,4 1,2 1,1 2,1");				
			node.setAttribute("stroke", aspects.SIGNS_COLOR);		 
			node.setAttribute("stroke-width", aspects.SIGNS_STROKE);			
			node.setAttribute("fill", "none");												
			wrapper.appendChild(node);
											
		return wrapper;
	};
	
	/*
	 * Leo symbol path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function leo( x, y ){
		
		// center symbol
		var xShift = -3; //px						
		var yShift = 4; //px		
		x =  Math.round(x + (xShift * aspects.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * aspects.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (aspects.SYMBOL_SCALE - 1)) + "," + (-y * (aspects.SYMBOL_SCALE - 1)) + ") scale(" + aspects.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m " + x + ", " + y + " -2,-1 -1,0 -2,1 -1,2 0,1 1,2 2,1 1,0 2,-1 1,-2 0,-1 -1,-2 -5,-5 -1,-2 0,-3 1,-2 2,-1 3,-1 4,0 4,1 2,2 1,2 0,3 -1,3 -3,3 -1,2 0,2 1,2 2,0 1,-1 1,-2 m -13,-5 -2,-3 -1,-2 0,-3 1,-2 1,-1 m 7,-1 3,1 2,2 1,2 0,3 -1,3 -2,3");				
			node.setAttribute("stroke", aspects.SIGNS_COLOR);		 
			node.setAttribute("stroke-width", aspects.SIGNS_STROKE);			
			node.setAttribute("fill", "none");												
			wrapper.appendChild(node);
											
		return wrapper;
	};
	
	/*
	 * Virgo symbol path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function virgo( x, y ){
		
		// center symbol
		var xShift = -9; //px						
		var yShift = -5; //px		
		x =  Math.round(x + (xShift * aspects.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * aspects.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (aspects.SYMBOL_SCALE - 1)) + "," + (-y * (aspects.SYMBOL_SCALE - 1)) + ") scale(" + aspects.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m " + x + ", " + y + " 2.5894868,-2.5894868 1.7263245,2.5894868 0,9.4947847 m -2.5894868,-11.2211092 1.7263245,2.5894867 0,8.6316225 m 0.8631623,-9.4947847 2.5894867,-2.5894868 1.72632451,2.5894868 0,8.6316224 m -2.58948671,-10.3579469 1.72632447,2.5894867 0,7.7684602 m 0.86316224,-8.6316224 2.58948679,-2.5894868 1.7263244,2.5894868 0,13.8105959 m -2.5894867,-15.5369204 1.7263245,2.5894867 0,12.9474337 m 0.8631622,-13.8105959 2.5894868,-2.5894868 0.8631622,1.7263245 0.8631623,2.5894868 0,2.5894867 -0.8631623,2.58948673 -0.8631622,1.72632447 -1.7263245,1.7263245 -2.5894867,1.7263245 -4.3158113,1.7263245 m 7.7684602,-15.5369204 0.8631623,0.8631622 0.8631622,2.5894868 0,2.5894867 -0.8631622,2.58948673 -0.8631623,1.72632447 -1.7263245,1.7263245 -2.5894867,1.7263245 -3.452649,1.7263245");				
			node.setAttribute("stroke", aspects.SIGNS_COLOR);		 
			node.setAttribute("stroke-width", aspects.SIGNS_STROKE);			
			node.setAttribute("fill", "none");												
			wrapper.appendChild(node);
											
		return wrapper;
	};
	
	/*
	 * Libra symbol path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function libra( x, y ){
		
		// center symbol
		var xShift = -4; //px						
		var yShift = 3; //px		
		x =  Math.round(x + (xShift * aspects.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * aspects.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (aspects.SYMBOL_SCALE - 1)) + "," + (-y * (aspects.SYMBOL_SCALE - 1)) + ") scale(" + aspects.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m " + x + ", " + y + " -1.7142857,-0.8571429 -0.8571429,0 -1.7142857,0.8571429 -0.8571429,1.7142857 0,0.8571429 0.8571429,1.7142857 1.7142857,0.8571428 0.8571429,0 1.7142857,-0.8571428 0.8571428,-1.7142857 0,-0.8571429 -0.8571428,-1.7142857 -2.5714286,-3.42857143 -0.8571429,-2.57142857 0,-1.7142857 0.8571429,-2.5714286 1.7142857,-1.7142857 2.5714283,-0.8571429 3.428572,0 2.571428,0.8571429 1.714286,1.7142857 0.857143,2.5714286 0,1.7142857 -0.857143,2.57142857 -2.571429,3.42857143 -0.857142,1.7142857 0,0.8571429 0.857142,1.7142857 1.714286,0.8571428 0.857143,0 1.714286,-0.8571428 0.857143,-1.7142857 0,-0.8571429 -0.857143,-1.7142857 -1.714286,-0.8571429 -0.857143,0 -1.714286,0.8571429 m -10.2857139,-7.7142857 0.8571429,-1.7142857 1.7142857,-1.7142857 2.5714283,-0.8571429 3.428572,0 2.571428,0.8571429 1.714286,1.7142857 0.857143,1.7142857");				
			node.setAttribute("stroke", aspects.SIGNS_COLOR);		 
			node.setAttribute("stroke-width", aspects.SIGNS_STROKE);			
			node.setAttribute("fill", "none");												
			wrapper.appendChild(node);
											
		return wrapper;
	};
	
	/*
	 * Scorpio symbol path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function scorpio( x, y ){
		
		// center symbol
		var xShift = -9; //px						
		var yShift = -4; //px		
		x =  Math.round(x + (xShift * aspects.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * aspects.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (aspects.SYMBOL_SCALE - 1)) + "," + (-y * (aspects.SYMBOL_SCALE - 1)) + ") scale(" + aspects.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m " + x + ", " + y + " 2.3781101,-2.3781101 2.3781101,2.3781101 0,9.5124404 m -3.1708135,-11.0978471 2.3781101,2.3781101 0,8.719737 m 0.7927034,-9.5124404 2.3781101,-2.3781101 2.37811007,2.3781101 0,9.5124404 m -3.17081347,-11.0978471 2.3781101,2.3781101 0,8.719737 m 0.79270337,-9.5124404 2.37811013,-2.3781101 2.3781101,2.3781101 0,8.719737 1.5854067,1.5854068 m -4.7562202,-11.8905505 2.3781101,2.3781101 0,8.719737 1.5854067,1.5854067 2.3781101,-2.3781101");				
			node.setAttribute("stroke", aspects.SIGNS_COLOR);					
			node.setAttribute("stroke-width", aspects.SIGNS_STROKE);			
			node.setAttribute("fill", "none");													
			wrapper.appendChild(node);
													
		return wrapper;
	};
	
	/*
	 * Sagittarius symbol path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function sagittarius( x, y ){
		
		// center symbol
		var xShift = 7; //px						
		var yShift = -9; //px		
		x =  Math.round(x + (xShift * aspects.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * aspects.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (aspects.SYMBOL_SCALE - 1)) + "," + (-y * (aspects.SYMBOL_SCALE - 1)) + ") scale(" + aspects.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m " + x + ", " + y + " -17.11444,17.11444 m 17.11444,-17.11444 -3.2089575,1.0696525 -6.417915,0 m 7.4875675,1.0696525 -3.2089575,0 -4.27861,-1.0696525 m 9.6268725,-1.0696525 -1.0696525,3.2089575 0,6.41791504 m -1.0696525,-7.48756754 0,3.2089575 1.0696525,4.27861004 m -8.55722,0 -7.4875675,0 m 6.417915,1.06965246 -3.2089575,0 -3.2089575,-1.06965246 m 7.4875675,0 0,7.48756746 m -1.0696525,-6.417915 0,3.2089575 1.0696525,3.2089575");				
			node.setAttribute("stroke", aspects.SIGNS_COLOR);		 
			node.setAttribute("stroke-width", aspects.SIGNS_STROKE);			
			node.setAttribute("fill", "none");												
			wrapper.appendChild(node);	
											
		return wrapper;
	};
	
	/*
	 * Capricorn symbol path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function capricorn( x, y ){
		
		// center symbol
		var xShift = -9; //px						
		var yShift = -3; //px		
		x =  Math.round(x + (xShift * aspects.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * aspects.SYMBOL_SCALE));
				
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (aspects.SYMBOL_SCALE - 1)) + "," + (-y * (aspects.SYMBOL_SCALE - 1)) + ") scale(" + aspects.SYMBOL_SCALE + ")");		
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m " + x + ", " + y + " 1.8047633,-3.6095267 4.5119084,9.0238168 m -4.5119084,-7.2190534 4.5119084,9.0238167 2.707145,-6.3166717 4.5119084,0 2.707145,-0.9023817 0.9023817,-1.8047633 0,-1.8047634 -0.9023817,-1.8047633 -1.8047634,-0.9023817 -0.9023816,0 -1.8047634,0.9023817 -0.9023817,1.8047633 0,1.8047634 0.9023817,2.707145 0.9023817,1.80476336 0.9023817,2.70714504 0,2.707145 -1.8047634,1.8047633 m 1.8047634,-16.2428701 -0.9023817,0.9023817 -0.9023817,1.8047633 0,1.8047634 1.8047634,3.6095267 0.9023816,2.707145 0,2.707145 -0.9023816,1.8047634 -1.8047634,0.9023816");				
			//node.setAttribute("stroke", aspects.SIGNS_COLOR);		
			node.setAttribute("stroke", aspects.COLOR_BACKGROUND);			
			node.setAttribute("stroke-width", aspects.SIGNS_STROKE);			
			node.setAttribute("fill", "none");												
			wrapper.appendChild(node);
													
		return wrapper;
	};
	
	/*
	 * Aquarius symbol path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function aquarius( x, y ){
		
		// center symbol
		var xShift = -8; //px						
		var yShift = -2; //px		
		x =  Math.round(x + (xShift * aspects.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * aspects.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (aspects.SYMBOL_SCALE - 1)) + "," + (-y * (aspects.SYMBOL_SCALE - 1)) + ") scale(" + aspects.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m " + x + ", " + y + " 2.8866035,-2.8866035 3.8488047,1.9244023 m -4.8110059,-0.9622011 3.8488047,1.9244023 2.8866035,-2.8866035 2.8866035,1.9244023 m -3.84880467,-0.9622011 2.88660347,1.9244023 2.8866035,-2.8866035 1.9244024,1.9244023 m -2.8866035,-0.9622011 1.9244023,1.9244023 2.8866035,-2.8866035 m -17.319621,8.6598105 2.8866035,-2.88660348 3.8488047,1.92440238 m -4.8110059,-0.96220121 3.8488047,1.92440231 2.8866035,-2.88660348 2.8866035,1.92440238 m -3.84880467,-0.96220121 2.88660347,1.92440231 2.8866035,-2.88660348 1.9244024,1.92440238 m -2.8866035,-0.96220121 1.9244023,1.92440231 2.8866035,-2.88660348");				
			node.setAttribute("stroke", aspects.SIGNS_COLOR);		 
			node.setAttribute("stroke-width", aspects.SIGNS_STROKE);			
			node.setAttribute("fill", "none");													
			wrapper.appendChild(node);
													
		return wrapper;
	};
	
	/*
	 * Pisces symbol path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function pisces( x, y ){
		
		// center symbol
		var xShift = -8; //px						
		var yShift = -8; //px		
		x =  Math.round(x + (xShift * aspects.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * aspects.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (aspects.SYMBOL_SCALE - 1)) + "," + (-y * (aspects.SYMBOL_SCALE - 1)) + ") scale(" + aspects.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m " + x + ", " + y + " 4,2 2,2 1,3 0,3 -1,3 -2,2 -4,2 m 0,-17 3,1 2,1 2,2 1,3 m 0,3 -1,3 -2,2 -2,1 -3,1 m 16,-17 -3,1 -2,1 -2,2 -1,3 m 0,3 1,3 2,2 2,1 3,1 m 0,-17 -4,2 -2,2 -1,3 0,3 1,3 2,2 4,2 m -17,-9 18,0 m -18,1 18,0");				
			//node.setAttribute("stroke", aspects.SIGNS_COLOR);		
			node.setAttribute("stroke", aspects.COLOR_BACKGROUND);	
			node.setAttribute("stroke-width", aspects.SIGNS_STROKE);			
			node.setAttribute("fill", "none");												
			wrapper.appendChild(node);
													
		return wrapper;
	};
	
	/**
	 * Draw As symbol
	 */
	function ascendant( x, y ){
		// center symbol
		var xShift = 12; //px						
		var yShift = -2; //px		
		x =  Math.round(x + (xShift * aspects.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * aspects.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (aspects.SYMBOL_SCALE - 1)) + "," + (-y * (aspects.SYMBOL_SCALE - 1)) + ") scale(" + aspects.SYMBOL_SCALE + ")");
		
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m " + x + ", " + y + " -0.563078,-1.1261527 -1.689228,-0.5630765 -1.689229,0 -1.68923,0.5630765 -0.563076,1.1261527 0.563076,1.12615272 1.126154,0.56307636 2.815381,0.56307635 1.126152,0.56307647 0.563078,1.1261526 0,0.5630763 -0.563078,1.1261528 -1.689228,0.5630764 -1.689229,0 -1.68923,-0.5630764 -0.563076,-1.1261528 m -6.756916,-10.135374 -4.504611,11.8246032 m 4.504611,-11.8246032 4.504611,11.8246032 m -7.3199925,-3.94153457 5.6307625,0");									
			node.setAttribute("stroke", aspects.SYMBOL_AXIS_FONT_COLOR);		 
			node.setAttribute("stroke-width", (aspects.SYMBOL_AXIS_STROKE * aspects.SYMBOL_SCALE));			
			node.setAttribute("fill", "none");	
																			
			wrapper.appendChild(node);
													
		return wrapper;
	};
	
	/**
	 * Draw Ds symbol
	 */
	function descendant(x,y){
		// center symbol
		var xShift = 22; //px						
		var yShift = -1; //px		
		x =  Math.round(x + (xShift * aspects.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * aspects.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (aspects.SYMBOL_SCALE - 1)) + "," + (-y * (aspects.SYMBOL_SCALE - 1)) + ") scale(" + aspects.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m " + x + ", " + y + " -0.5625,-1.125 -1.6875,-0.5625 -1.6875,0 -1.6875,0.5625 -0.5625,1.125 0.5625,1.125 1.125,0.5625 2.8125,0.5625 1.125,0.5625 0.5625,1.125 0,0.5625 -0.5625,1.125 -1.6875,0.5625 -1.6875,0 -1.6875,-0.5625 -0.5625,-1.125 m -11.25,-10.125 0,11.8125 m 0,-11.8125 3.9375,0 1.6875,0.5625 1.125,1.125 0.5625,1.125 0.5625,1.6875 0,2.8125 -0.5625,1.6875 -0.5625,1.125 -1.125,1.125 -1.6875,0.5625 -3.9375,0");				
			node.setAttribute("stroke", aspects.SYMBOL_AXIS_FONT_COLOR);		 
			node.setAttribute("stroke-width", (aspects.SYMBOL_AXIS_STROKE * aspects.SYMBOL_SCALE));			
			node.setAttribute("fill", "none");											
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
		line.setAttribute("stroke", color);
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
												
		var drawAspects = new aspects.DrawAspects(this.paper, data);
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
	aspects.DrawAspects = function( paper, data ){
		
		// Validate data
		var status = aspects.utils.validate(data);		 		
		if( status.hasError ) {										
			throw new Error( status.messages );
		}
		
		this.data = data;								
		this.paper = paper; 
		
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
						
		var planets = ["Sun", "Moon", "Mercury", "Venus", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto", "NNode", "SNode"];		
		var divisiones = 13;
		var deltaY = Math.trunc((this.paper.height - 2* aspects.MARGIN) / divisiones);
		var deltaX = Math.trunc((this.paper.width - 2* aspects.MARGIN) / divisiones);
		var iniciX = aspects.MARGIN;
		var iniciY = aspects.MARGIN;
		//var fiX = this.paper.width - aspects.MARGIN;
		//var fiY = this.paper.height - aspects.MARGIN;
		var fiX = iniciY + deltaY * divisiones;
		var fiY = iniciX + deltaX * divisiones;

		//Eje X
		for (var i = 0; i < divisiones + 1; i++) {
			line = this.paper.line(iniciX + deltaX * i, iniciY, iniciX + deltaX * i,  fiY, aspects.LINE_COLOR);
			this.universe.appendChild(line);
			//this.paper.root.appendChild( line);		
		}		
		//Eje Y
		for (var i = 0; i < divisiones + 1; i++) {
			line = this.paper.line(iniciX, iniciY + deltaY * i, fiX,  iniciY + deltaY * i, aspects.LINE_COLOR);
			this.universe.appendChild(line);
			//this.paper.root.appendChild( line);		
		}
		//Símbolos eje X
		for (var i = 1; i < divisiones; i++) {
			symbol = this.paper.getSymbol(planets[i-1], Math.trunc(deltaX/2) + iniciX + Math.trunc(deltaX) * i, Math.trunc(deltaY/2) + iniciY);
			this.universe.appendChild(symbol);
			//this.paper.root.appendChild( symbol);		
		}		
		//Símbolos eje Y
		for (var i = 1; i < divisiones; i++) {
			symbol = this.paper.getSymbol(planets[i-1], Math.trunc(deltaX/2) + iniciX, Math.trunc(deltaY/2) + iniciY + Math.trunc(deltaY) * i);
			this.universe.appendChild(symbol);
			//this.paper.root.appendChild( symbol);		
		}		
			
		
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