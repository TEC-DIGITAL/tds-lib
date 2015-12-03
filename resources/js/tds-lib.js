/*
 * TEC-Digital Developer Service Library v0.1.1
 * http://www.tec-digital.itcr.ac.cr:8082
 *
 * Date: 2014-08-20
 */
(function() {
	//Define namespace
	var tds_lib;
	if (window.tds_lib) {
		throw new TDSLibRedifinedError();
	}
	else {
		tds_lib = window.tds_lib = {};
	}

	/*****************************************************************************
	 *
	 * Widgets.
	 *  
	 ****************************************************************************/
	
	/**
	 * Spinner widget.
	 * @param {Object} elem
	 * @returns {Object}
	 */
	tds_lib.Spinner = function(elem) {
		this._element = elem;
		var self = this;
		var spinnerValue;
		this._maxValue = 10000000;
		this._minValue = 0;
		this._timer;
		this._isHoldUp = 0;
		this._isHoldDown = 0;
		if (this._element) {

			if ( !this._element.children[0].value || isNaN(this._element.children[0].value) || this._element.children[0].value<this._minValue || this._element.children[0].value>this._maxValue ) {
				this.spinnerValue = this._minValue;
				this._element.children[0].value = this.spinnerValue;
			}
			else{
				this.spinnerValue = parseInt(this._element.children[0].value);

			}
			
			this._element.children[0].onkeydown = funcDelegate(this, "validateActionDown");
			this._element.children[0].onkeyup = funcDelegate(this, "validateActionUp");
			this._element.children[1].children[0].onmousedown = funcDelegate(this, "_upButtonMouseDown");

			
			this._element.children[1].children[0].onmouseup = funcDelegate(this, "_upButtonMouseUp");
			this._element.children[1].children[1].onmousedown = funcDelegate(this, "_downButtonMouseDown");
			this._element.children[1].children[1].onmouseup = funcDelegate(this, "_downButtonMouseUp");						
			
			//If mouse pointer moves out of the up/down buttons, spinner increasing/decreasing have to stops.
			document.body.addEventListener("mouseover",function(){
				self._stopSpinner();
			});

			
		}


	};
	tds_lib.Spinner.prototype = {
		constructor: tds_lib.Spinner,

		getSpinnerValue: function(){
			return this.spinnerValue;
		},

		setSpinnerValue: function(spinnerValueParam){

			if( spinnerValueParam<this._minValue || spinnerValueParam>this._maxValue){
				this.spinnerValue = this._minValue;
			}
			else{
				this.spinnerValue = spinnerValueParam;
			}


			if(this.spinnerValue >=0 && this.spinnerValue <=9){
				this._element.children[0].value  = "0" + this.spinnerValue;
			}else{
				this._element.children[0].value = this.spinnerValue;
		}
		},

		setMaxValue: function(maxValueParam){
			this._maxValue = maxValueParam;

			/*Check if actual spinner number is between the new range*/
			if( this.spinnerValue<this._minValue || this.spinnerValue>this._maxValue){
				this.spinnerValue = this._minValue;
				this._element.children[0].value = this.spinnerValue;
			}
		},
		setMinValue: function(minValueParam){
			this._minValue = minValueParam;
			/*Check if actual spinner number is between the new range*/
			if( this.spinnerValue<this._minValue || this.spinnerValue>this._maxValue){
				this.spinnerValue = this._minValue;
				this._element.children[0].value = this.spinnerValue;
			}
		},
		validateActionUp: function(obj,e){
				if(this._element.children[0].value !=""){
					if (this._element.children[0].value > this._maxValue) {
					this._element.children[0].value = this._maxValue;
					}
					if (this._element.children[0].value < this._minValue) {
						this._element.children[0].value = this._minValue;
					}

					this.spinnerValue = parseInt(this._element.children[0].value);
				}
				else{
					//Only asign the min value but it's not necessary to show in the input
					this.spinnerValue = this._minValue;
				}
		},
		validateActionDown: function(obj,e){
			
			/*Increase with arrow up*/
			if(e.keyCode == 38 ){
				if(this.spinnerValue<this._maxValue){
					if(this.spinnerValue+1 >=0 && this.spinnerValue+1 <=9){
						++this.spinnerValue;
						this._element.children[0].value  = "0" + this.spinnerValue;
					}else{
						this._element.children[0].value = ++ this.spinnerValue;
				}
				}
				return;
			}
			/*Decrease with arrow down*/
			else if(e.keyCode == 40){
				if(this.spinnerValue>this._minValue){
					if(this.spinnerValue-1 >=0 && this.spinnerValue-1 <=9){
						this._element.children[0].value  = "0" + (--this.spinnerValue);
					}else{
					this._element.children[0].value = --this.spinnerValue;
				}
				}
				return;
			}
            // Allow: backspace, delete, tab, escape, enter and .
            else if ( [46,8,9,27,13].indexOf(e.keyCode)  !== -1 ||
                 // Allow: Ctrl+A
                (e.keyCode == 65 && e.ctrlKey === true) || 
                 // Allow: home, end, left, right
                (e.keyCode >= 35 && e.keyCode <= 39)) {
                     // let it happen, don't do anything
                     return;
            }
            else {
                // Ensure that it is a number and stop the keypress
                if (e.shiftKey || (e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105 )) {
				this._element.children[0].value = this.spinnerValue;
				e.preventDefault();
			}
            }

		},

		_upButtonMouseDown: function() {
			this.increaseAction();
			var self = this;
			self._isHoldUp = 1;
			self._timer = setInterval(function() {
		       if(self._isHoldUp){
			       	self.increaseAction();
		       }
		    }, 250);
		},

		_upButtonMouseUp: function() {
			this._isHoldUp = 0;
			clearInterval(this._timer);
		},

		_downButtonMouseDown: function() {
			this.decreaseAction();
			var self = this;
			self._isHoldDown = 1;
			self._timer = setInterval(function() {
		       if(self._isHoldDown){
			       	self.decreaseAction();
		       }
		    }, 250);
			
		},
		_downButtonMouseUp: function() {
			this._isHoldDown = 0;
			clearInterval(this._timer);
		},

		_stopSpinner: function() {
			this._isHoldUp = 0;
			this._isHoldDown = 0;
			clearInterval(this._timer);
		},


		increaseAction: function() {
	       	if (this.spinnerValue < this._maxValue){
				this._element.children[0].value = ++this.spinnerValue;
				if(this.spinnerValue >=0 && this.spinnerValue <=9){
					this._element.children[0].value  = "0"+this.spinnerValue;
			}
			}
		},
		decreaseAction: function() {
			if (this.spinnerValue > this._minValue) {
				this._element.children[0].value = --this.spinnerValue;
				if(this.spinnerValue >=0 && this.spinnerValue <=9){
					this._element.children[0].value  = "0"+this.spinnerValue;
			}
		}
		}
	};
	
		/**
	 * Select widget.
	 * @param {Object} elem
	 * @returns {Object}
	 */
	tds_lib.Select = function(elem) {
		this._element = elem;
		var self = this;
		this.onChangeFunction = function(){};

		if (this._element) {

	    	this._element.children[0].onclick =  function(event) { showSelectOptions(event.target)}; 

	    	this._element.children[1].onclick =  function(event) { showSelectOptions(event.target)}; 
			
			var selectOptions = this._element.children[2].children;
		
			//Set option click events
    	for (var j= 0; j< selectOptions.length; j++) {
		
	    		selectOptions[j].onclick = function(event){ self.asignOptionValue(event.target)};
	    	};
		
	    	//Set default active option if it doesn't exist.
	    	if (selectOptions.length>0){
	    		self.setActiveOption(this._element.children[2].children[0].getAttribute("value"))
	    	}

	    	/*Hide options on click out*/
	    	document.getElementsByTagName("HTML")[0].addEventListener("click",function(e){ 
	    		if(!(e.target == self._element.children[0] || e.target == self._element.children[1] || e.target == self._element.children[1].children[0])){
	    			self._element.children[2].style.display = "none";
    			}
	    	});

    	}
    	

    	function showSelectOptions(clikedElement){
    		var selectElement;
    		/*if(clikedElement.tagName.toLowerCase() == "span"){
    			selectElement=clikedElement.parentNode();
    		}else{
    			selectElement=clikedElement.parentNode().parentNode();
    		}
    		*/
    		if(!self._element.children[2].style.display  || self._element.children[2].style.display == "none" ){
    			self._element.children[2].style.display = "block";
    		}else{
    			self._element.children[2].style.display = "none";
    	}
    	}

    	
	};
    		
	tds_lib.Select.prototype = {
		constructor: tds_lib.Select,

		asignOptionValue: function (option){
		    option.parentNode.style.display = "none";
		    this._setActiveOption(option.getAttribute("value"));
		},

		getSelectValue: function(obj,e){
			return this._element.getAttribute("value");
		},

		getSelectText: function(obj,e){
			return this._element.children[0].innerHTML;
		},

		getTextByValue: function(value){
			if(value){
				var optionList = this._element.children[2];
				for (var i = 0; i < optionList.children.length; i++) {
					//Remove option acording its value
					if(optionList.children[i].getAttribute("value")==value){
						//If option value exist, so we get the option index and apply the same process like "removeAt()"
						
						return optionList.children[i].innerHTML;
						break;
					}
				};
			}
			return "";
		},

		getAllValues: function(obj,e){
			var optionValues = [];
			var optionList = this._element.children[2];
				for (var i = 0; i < optionList.children.length; i++) {
					optionValues.push(optionList.children[i].getAttribute("value"));
				};
			return optionValues;
		},

		getAllTexts: function(obj,e){
			var optionTexts = [];
			var optionList = this._element.children[2];
				for (var i = 0; i < optionList.children.length; i++) {
					optionTexts.push(optionList.children[i].innerHTML);
				};
			return optionTexts;
		},

		setActiveOption: function(value){
			if(value){
				var optionList = this._element.children[2];
				for (var i = 0; i < optionList.children.length; i++) {
					//Set active option acording its value
					if(optionList.children[i].getAttribute("value")==value){

								
						var currentValue = this._element.getAttribute("value");
	
						this._element.setAttribute("value",optionList.children[i].getAttribute("value"));
						this._element.children[0].innerHTML = optionList.children[i].innerHTML;
						
					
						break;
					}
				};
			}
		},

		/*Same to setActiveOption it runs onchageFunction*/
		_setActiveOption: function(value){
			if(value){
				var optionList = this._element.children[2];
				for (var i = 0; i < optionList.children.length; i++) {
					//Set active option acording its value
					if(optionList.children[i].getAttribute("value")==value){
	

						var currentValue = this._element.getAttribute("value");
	
						this._element.setAttribute("value",optionList.children[i].getAttribute("value"));
						this._element.children[0].innerHTML = optionList.children[i].innerHTML;
						if (currentValue!=value){
					    	this.onChangeFunction();
					    }

						break;
					}
				};
			}
		},

		addOption: function(value,text){

			if(value!="" && text !=0){
				var spanNode=document.createElement("span");

				var valueAtt=document.createAttribute("value");
				valueAtt.value=value;
				spanNode.setAttributeNode(valueAtt);

				var textNode=document.createTextNode(text);
				spanNode.appendChild(textNode);

				/*To call a prototype function from a another prototype function
				 it is necessary to add the object "this". For Example "this.myFunction()"
				 In this case we call a prototype function from a event, so it's necessary
				 to "backup" the "this" object in the variable "self" to use it inside the event
				 because the object "this" in the event is the element that is associated to the event*/
				var self = this;
				spanNode.addEventListener("click",function(){
															/*Here we use "self" because it contains the "this" object that we need*/
	    													self.asignOptionValue(this);
	    													},false);

				this._element.children[2].appendChild(spanNode);
				//if only cotains one option, set it as active.
				if(this._element.children[2].children){
					if(this._element.children[2].children.length==1){
						
						this.setActiveOption(value);

    		}
			}
		    }
		},
   
		removeByValue: function(value){
			if(value){
				var optionList = this._element.children[2];
				for (var i = 0; i < optionList.children.length; i++) {
					//Remove option acording its value
					if(optionList.children[i].getAttribute("value")==value){
						//If option value exist, so we get the option index and apply the same process like "removeAt()"
						this.removeAt(i);
						break;
    	}
				};
			}

		},
    		
		removeAt: function(index){
			//Check if there are options to be deleted
			if(this._element.children[2].children.length>0 && this._element.children[2].children[index]){

				
				var optionList = this._element.children[2];
				//If option to be deleted is the current select value
				if(this._element.getAttribute("value")==optionList.children[index].getAttribute("value")){						
					//Remove option
					optionList.removeChild(optionList.children[index]);
					//Set the first option value to the select value
					if(this._element.children[2].children.length>0){
						this.setActiveOption(optionList.children[0].getAttribute("value"));
					}else{
						//No option, so empty select value
						this._element.setAttribute("value","");
						this._element.children[0].innerHTML = "";
    	}
	
				}else{
					//If option to be deleted is not the current select value
					optionList.removeChild(optionList.children[index]);

		}
			}
		},

		removeAll: function(){

			var optionList = this._element.children[2];
			while (optionList.firstChild) {
			    optionList.removeChild(optionList.firstChild);
			}
			this._element.setAttribute("value","");
			this._element.children[0].innerHTML = "";
			
		},

		onChangeOption: function(func){
			this.onChangeFunction = func;
		},

		runOnChange: function(){
			this.onChangeFunction();
		}
	};


		/**
	 * NumberInput widget.
	 * @param {Object} elem
	 * @returns {Object}
	 */
	tds_lib.NumberInput = function(elem) {
		this._element = elem;
		this._inputValue = "";
		this._maxValue = 10000000;
		this._minValue = 0;

		if (this._element) {
			
			if ( !this._element.value || isNaN(this._element.value.replace(",",".")) || parseFloat(this._element.value)<this._minValue || parseFloat(this._element.value)>this._maxValue ) {
				this._inputValue = this._minValue;
				this._element.value = this._inputValue;
			}
			else{
				this._inputValue = this._element.value.replace(".",",");
			}
			
			this._element.onkeydown =
							funcDelegate(this, "validateActionDown");
			this._element.onkeyup =
							funcDelegate(this, "validateActionUp");
		}

		this.setInputValue = function(inputValueParam){

			if( inputValueParam<this._minValue || inputValueParam>this._maxValue){
				this._inputValue = this._minValue;
			}
			else{
				this._inputValue = inputValueParam;
			}
			this._element.value =this._inputValue;
		}

		this.setMaxValue = function(maxValueParam){
			this._maxValue = maxValueParam;

			/*Check if actual input number is between the new range*/
			if( this._inputValue<this._minValue || this._inputValue>this._maxValue){
				this._inputValue = this._minValue;
				this._element.value = this._inputValue;
			}
		}

		this.setMinValue = function(minValueParam){
			this._minValue = minValueParam;
			/*Check if actual input number is between the new range*/
			if( this._inputValue<this._minValue || this._inputValue>this._maxValue){
				this._inputValue = this._minValue;
				this._element.value = this._inputValue;
			}
		} 
	};
	tds_lib.NumberInput.prototype = {
		constructor: tds_lib.input,

		validateActionUp: function(obj,e){
				var floatInputValue = this._element.value.replace(",",".");
				//alert(this._maxValue);

				if(this._element.value !=""){
					if (floatInputValue > this._maxValue) {
					this._element.value = this._maxValue;
					}
					if (floatInputValue < this._minValue) {
						this._element.value = this._minValue;
					}
					this._inputValue = this._element.value;
				}
				else{
					//Only asign the min value but it's not necessary to show in the input
					this._inputValue = this._minValue;
				}
		},
		validateActionDown: function(obj,e){
			/*Accepts one comma character*/
			if (e.keyCode == 188 ){
				if(this._inputValue.toString().indexOf(",")>-1){
					e.preventDefault();
					this._inputValue = this._element.value ;
				}
				return;
			}
			//Allow: minus symbol
			else if(this._element.value=="" && (e.keyCode == 173 || e.keyCode == 189 || e.keyCode == 109)){
				return;
			}
            // Allow: backspace, delete, tab, escape, enter and .
            else if ( [46,8,9,27,13].indexOf(e.keyCode)  !== -1 ||
                 // Allow: Ctrl+A
                (e.keyCode == 65 && e.ctrlKey === true) || 
                 // Allow: home, end, left, right
                (e.keyCode >= 35 && e.keyCode <= 39)) {
                     // let it happen, don't do anything
                     return;
            }
            else {
                // Ensure that it is a number and stop the keypress
                if (e.shiftKey || (e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105 )) {
				e.preventDefault();
			}
            }

		}
	};
	
	/**
	* Tab widget.
	* @param {Object} elem
	* @returns {Object}
	*/
tds_lib.Tab = function(elem, confObject){
	//alert(confObject['openAttr']);
	var defaultValues = { openAttr: false };
	var llave;
	for(llave in confObject) {
		defaultValues[llave] = confObject[llave];	
	}
	this._element = elem;
	this.openAttr = defaultValues.openAttr;
	if (this._element) {
		this.createTab();
		this._element.className = 'tds-lib-accordion-header';
		this._element.onclick = funcDelegate(this, "onclickDisplay");
	}
};

tds_lib.Tab.prototype = {
	constructor: tds_lib.Tab,
	onclickDisplay: function(){
		var imageTab = this._element.querySelectorAll('i')[0];
    var classString = imageTab.className;
		var resultado = toggleClass(classString, 'tds-lib-tab-active', 'tds-lib-tab-inactive');
		resultado = toggleClass(resultado, 'tds-lib-icon-expand', 'tds-lib-icon-collapse');
		imageTab.className = resultado;
		
		var contenedor = this._element;
		classString = contenedor.nextElementSibling.className;
		resultado = toggleClass(classString, 'accordion-content-close', 'accordion-content-open');
		contenedor.nextElementSibling.className = resultado;
	},
	createTab: function() {
		var contenedor = this._element;
		if (contenedor.nextElementSibling && contenedor.nextElementSibling.nodeName == "DIV") {
			var claseIcono = 'tds-lib-icon-collapse tds-lib-16x tds-lib_active';
			if (this.openAttr != null && this.openAttr) {
				this._element.className = "active-header";
				contenedor.nextElementSibling.className = "accordion-content-open";
				claseIcono += ' tds-lib-tab-active';
			} else {
				contenedor.nextElementSibling.className = "accordion-content-close";
				this._element.className = "inactive-header";
				claseIcono += ' tds-lib-tab-inactive';
			}
			var tabLinesCont = this._element.querySelectorAll('.td-tabs-line');
			if (tabLinesCont.length < 1) {
				var divTabLines = document.createElement('div');
				divTabLines.className = "td-tabs-line";

				this._element.appendChild(divTabLines);

				var spanArrows = document.createElement('i');
				spanArrows.className = claseIcono;
				this._element.appendChild(spanArrows);
			}
		}
	}
};

	/**
	* Pop-up widget.
	* @elem DOM Object
	* @confObject DOM Object
	*/
tds_lib.PopUp = function(elem, confObject){
	this._element = elem;
	if (this._element) {
		this.createPopUp( confObject );
	}
};

tds_lib.PopUp.prototype = {
	constructor: tds_lib.PopUp,
	createPopUp: function( confObject ) {
		this._element.className = 'overlay';
		var titulo = this._element.getAttribute("title");
		var body = this._element.innerHTML;
		this._element.innerHTML = "";
		
		var popUpDelimeter = document.createElement("div");
		popUpDelimeter.className = "tds-lib-pop-up-delimeter";
		
		popUpDelimeter.appendChild ( document.createElement("div") );
		
		var popUpWrapper = document.createElement("div");
		popUpWrapper.className = "tds-lib-pop-up-wrapper";
		
		var popUpHead = document.createElement("div");
		popUpHead.className = "tds-lib-pop-up-head";
		
		var h1Title = document.createElement("h1");
		h1Title.className = "tds-lib-pop-up-title";
		h1Title.innerHTML = titulo;
		popUpHead.appendChild( h1Title );
		
		var popUpBody = document.createElement("div");
		popUpBody.className = "tds-lib-pop-up-body";
		popUpBody.innerHTML = body;
		
		var popUpFoot = document.createElement("div");
		popUpFoot.className = "tds-lib-pop-up-foot";
		for(var llave in confObject) {
			var boton = document.createElement("button");
			boton.llave = llave;
			boton.className = "tds-lib_form tds-lib-pop-up-button";
			boton.setAttribute('type','submit');
			var textoBoton = '';
			if ( llave === 'accept' ) {
				textoBoton = "Aceptar";
			} else if (llave === 'cancel') {
				textoBoton = "Cancelar";
			} else {
				textoBoton = llave;
			}
			boton.innerHTML = textoBoton;
			boton.onclick = function(e){
				if ( confObject[this.llave]() ) {
					var idPopUp = e.target.parentNode.parentNode.parentNode.parentNode.getAttribute('id');
					togglePopUp(idPopUp);
				}
			};
			popUpFoot.appendChild( boton );
		}
		
		popUpWrapper.appendChild ( popUpHead );
		popUpWrapper.appendChild ( popUpBody );
		popUpWrapper.appendChild ( popUpFoot );
		
		popUpDelimeter.appendChild ( popUpWrapper );
		this._element.appendChild(popUpDelimeter);
	}
};

/**
	* Button widget.
	* @elem DOM Object
	*/
	tds_lib.Button = function(elem){
		this._element = elem;
		this.label = this._element.innerHTML || "Button";
		this.action = function(){
			alert("Default action of this button");
		};
		
		if (this._element) {
			this._element.innerHTML = this.label;
			this._element.onclick = funcDelegate(this, "clickAction");
		}
		
		this.activate();
	};
	tds_lib.Button.prototype = {
		constructor: tds_lib.Button,
		activate: function() {
			this._element.disabled = false;
		},
		deactivate: function() {
			this._element.disabled = true;
		},
		clickAction: function(){
			this.action();
		}
	};

	/*****************************************************************************
	 *
	 * Auxiliar functions.
	 *  
	 ****************************************************************************/
	
	/**
	 * Asociates an object with a custom event.
	 * @param {Object} obj
	 * @param {string} methodName
	 * @param {Object} params
	 * @returns {Function}
	 */
	function funcDelegate(obj, methodName, params) {
		params = params || {};
		return function(e) {
			e = e || window.event;
			return obj[methodName](this, e, params);
		};
	}
	
	/**
	 * Asociates an object with a custom event.
	 * @param {Object} obj
	 * @param {string} methodName
	 * @param {Object} params
	 * @returns {Function}
	 */
	function toggleClass(classString, className1, className2) {
    var nameIndex = classString.indexOf(className1);
    if (nameIndex != -1) {
			classString = classString.replace(className1, className2);
			//classString = classString.substr(0, nameIndex) + newClass + classString.substr(nameIndex+className1.length);
		} else {
			classString = classString.replace(className2, className1);
		}
    return classString;
	}
	/*****************************************************************************
	 *
	 * Custom errors.
	 *  
	 ****************************************************************************/
	
	/**
	 * Create a new object, that prototypally inherits from the Error constructor.
	 * @param {type} message
	 * @returns {_L11.MyError}
	 */
	function TDSLibRedifinedError(message) {
		this.name = "TDSLibRedifinedError";
		this.message = message || "window.tds_lib object already exists.";
	}
	TDSLibRedifinedError.prototype = new Error();
	TDSLibRedifinedError.prototype.constructor = TDSLibRedifinedError;

})();

/**
 * Change the style.visibility of the id of the parameter
 * @param	idContainer  string	It's the id html attribute of the container that you want as pop-up
 */
function togglePopUp(idContainer) {
	var el = document.getElementById(idContainer);
	if (el.style.visibility == "visible") {
		el.style.visibility = "hidden";
		document.body.style.overflow = "visible";
	} else {
		el.style.visibility = "visible";
		document.body.style.overflow = "hidden";
	}
}