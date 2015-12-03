
$(document).ready(function(){
	cargaArbol();
	$('#getting_started').trigger( "click" );
});


function cargaArbol(){

$('#divMenu').jstree({
	"plugins":["wholerow"]
});

//	$('#divMenu').jstree({
//		core: { check_callback: true },
//		"plugins" : ["dnd"]
//	});


	//Eventos Click en el tree
	$('#divMenu').on('changed.jstree', function (e, data) {
    	var idli= ""; //Identificador asignado por jstree al li al que se le da click
    	var idNodo="";
		$('.jstree-clicked').each(function(){
			idli = $(this).parent().attr("id");
		});

		//Identifica por medio de la etiqueta span y su atributo 'class', a quién se le dio click?
		$('#'+idli+'>a>span').each(function(){
			idNodo = $(this).attr("id");
		});		
    		var idliPadre = $("#"+idli).parent().parent().attr("id");
    		var idPadre="";
    		//Id del Padre
	  		$('#'+idli+'>a>span').each(function(){
					idPadre = $(this).attr("id");
				});
				$('#contenido').html("");
				var url = '';
				switch (idPadre) {
					case 'icons':
						url = "guide/icons";
						break;
					case 'link_elements':
						url = "guide/link_elements";
						break;
					case 'typography':
						url = "guide/typography";
						break;
					case 'tables':
						url = "guide/tables";
						break;
						url: "guide/link_elements";
						break;
					case 'form_elements':
						url = "guide/form_elements";
						break;
					case 'buttons':
						url =  "guide/buttons";
						break;
					case 'pop-ups':
						url = "guide/popup";
						break;
					case 'validation':
						url = "guide/validations";
						break;
					case 'spinner':
						url = 'guide/spinner';
						break;
					case 'getting_started':
						url = 'guide/getting_started';
						break;
					case 'common_libraries':
						url = 'guide/common_libraries';
						break;
					case 'tabs':
						url = 'guide/tabs';
						break;
					case 'datepicker':
						url = 'guide/datepicker';
						break;
					case 'jsTree':
						url = "guide/jsTree";
						break;
					case 'tooltips':
						url = 'guide/tooltips';
				}
				$.ajax( {
					type : 'POST',
					url: url,
					dataType: 'html'
				} ).done( function( data ) {
					$('#contenido').html(data);
				});
  })
  // create the instance
  .jstree();
	
}