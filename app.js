// Déclaration des variables
var button = document.getElementById('convert'),
	input  = document.getElementById('input'),
	output = document.getElementById('output');


// Fonction de conversion avec highlight
escapeHtmlEntitiesSpan = function (txt) {
	var txt = txt;
	
	txt = txt.replace(/</g, '&lt;');
	txt = txt.replace(/>/g, '&gt;');

	chars = {
		'<' : '&lt;',
		'>' : '&gt;',

		// E
		'é' : '&amp;eacute;',
		'É' : '&amp;Eacute;',
		'è' : '&amp;egrave;',
		'È' : '&amp;Egrave;',
		'ê' : '&amp;ecirc;',
		'Ê' : '&amp;Ecirc;',
		'ë' : '&amp;euml;',
		'Ë' : '&amp;Euml;',
		// A
		'à' : '&amp;agrave;',
		'À' : '&amp;Agrave;',
		'â' : '&amp;acirc;',
		'Â' : '&amp;Acirc;',
		'ä' : '&amp;auml;',
		'Ä' : '&amp;Auml;',
		'æ' : '&amp;aelig;',
		'Æ' : '&amp;AElig;',
		// I
		'ï' : '&amp;iuml;',
		'Ï' : '&amp;Iuml;',
		'î' : '&amp;icirc;',
		'Î' : '&amp;Icirc;',
		// O
		'ö' : '&amp;ouml;',
		'Ö' : '&amp;Ouml;',
		'ô' : '&amp;ocirc;',
		'Ô' : '&amp;Ocirc;',
		'œ' : '&amp;oelig;',
		'Œ' : '&amp;OElig;',
		// C
		'ç' : '&amp;ccedil;',
		'Ç' : '&amp;Ccedil;',
		// U
		'û' : '&amp;ucirc;',
		'Û' : '&amp;Ucirc;',
		'ù' : '&amp;ugrave;',
		'ü' : '&amp;uuml;',
		'Ü' : '&amp;Uuml;',
		// Speciaux
		'ß' : '&amp;szlig;',
		'«' : '&amp;laquo;',
		'»' : '&amp;raquo;',
		'‹' : '&amp;lsaquo;',
		'›' : '&amp;rsaquo;',
		'©' : '&amp;copy;',
		'®' : '&amp;reg;',
		'®' : '&amp;reg;',
		'€' : '&amp;euro;',
		'£' : '&amp;pound;',


		// Echappe les entité HTML déjà en place

		// E
		'&eacute;' : '&amp;eacute;',
		'&Eacute;' : '&amp;Eacute;',
		'&egrave;' : '&amp;egrave;',
		'&Egrave;' : '&amp;Egrave;',
		'&ecirc;' : '&amp;ecirc;',
		'&Ecirc;' : '&amp;Ecirc;',
		'&euml;' : '&amp;euml;',
		'&Euml;' : '&amp;Euml;',
		// A
		'&agrave;' : '&amp;agrave;',
		'&Agrave;' : '&amp;Agrave;',
		'&acirc;' : '&amp;acirc;',
		'&Acirc;' : '&amp;Acirc;',
		'&auml;' : '&amp;auml;',
		'&Auml;' : '&amp;Auml;',
		'&aelig;' : '&amp;aelig;',
		'&AElig;' : '&amp;AElig;',
		// I
		'&iuml;' : '&amp;iuml;',
		'&Iuml;' : '&amp;Iuml;',
		'&icirc;' : '&amp;icirc;',
		'&Icirc;' : '&amp;Icirc;',
		// O
		'&ouml;' : '&amp;ouml;',
		'&Ouml;' : '&amp;Ouml;',
		'&ocirc;' : '&amp;ocirc;',
		'&Ocirc;' : '&amp;Ocirc;',
		'&oelig;' : '&amp;oelig;',
		'&OElig;' : '&amp;OElig;',
		// C
		'&ccedil;' : '&amp;ccedil;',
		'&Ccedil;' : '&amp;Ccedil;',
		// U
		'&ucirc;' : '&amp;ucirc;',
		'&Ucirc;' : '&amp;Ucirc;',
		'&ugrave;' : '&amp;ugrave;',
		'&uuml;' : '&amp;uuml;',
		'&Uuml;' : '&amp;Uuml;',
		// Speciaux
		'&szlig;' : '&amp;szlig;',
		'&laquo;' : '&amp;laquo;',
		'&raquo;' : '&amp;raquo;',
		'&lsaquo;' : '&amp;lsaquo;',
		'&rsaquo;' : '&amp;rsaquo;',
		'&copy;' : '&amp;copy;',
		'&reg;' : '&amp;reg;',
		'&reg;' : '&amp;reg;',
		'&euro;' : '&amp;euro;',
		'&pound;' : '&amp;pound;'
	}

	for(var i in chars) {
		//var re = new RegExp(i,"g");
		//txt = txt.replace(re, '<span class="hl">' + chars[i] + '</span>');

		txt = txt.split(i).join('<span class="hl">' + chars[i] + '</span>');
	}

	return txt;
}


// Fonction qui convertit les entités HTML
function convert() {	
	output.innerHTML = escapeHtmlEntitiesSpan(input.value);
	return false;
}


// Lancement de la fonction de conversion

// bouton
button.onclick = function() {
	convert();
	return false;
}


// Clavier (ctrl+> ou ctrl+space)
var isCtrl = false;

document.onkeyup=function(e) {
	if( e.which == 17 ) isCtrl = false;
}
document.onkeydown=function(e) {
	if( e.which == 17 ) isCtrl = true;
	if( e.which == 32 && isCtrl == true || e.which == 39 && isCtrl == true ) {
		convert();
		return false;
	}
}

// Selectionne tout le contenu au clic
output.onclick = function() {

	document.execCommand('selectAll',false,null);

}