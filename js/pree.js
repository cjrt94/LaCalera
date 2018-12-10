jQuery(document).ready(function($) {  

// site preloader -- also uncomment the div in the header and the css style for #preloader
$(window).load(function(){
	$('#preloader').fadeOut('slow',function(){
		$(this).remove();
		new WOW ({callback: removeHead}).init();
        $(".cabecera").load('modulos/encabezado.html');
        $(".pie").load('modulos/pie.html');
      

	});
});

function removeHead(){
	$('#enca').removeClass('wow');
}

});