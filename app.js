// Déclaration des variables
var button = document.getElementById('convert'),
	input  = document.getElementById('input'),
	output = document.getElementById('output');


// Fonction de conversion
escapeHtmlEntities = function (txt) {

	// E
	txt = txt.replace(/é/g, '&eacute;');
	txt = txt.replace(/è/g, '&egrave;');
	txt = txt.replace(/ê/g, '&ecirc;');
	txt = txt.replace(/ë/g, '&euml;');

	// A
	txt = txt.replace(/à/g, '&agrave;');

	// I
	txt = txt.replace(/ï/g, '&iuml;');
	txt = txt.replace(/î/g, '&icirc;');

	// O
	txt = txt.replace(/ö/g, '&ouml;');
	txt = txt.replace(/ô/g, '&ocirc;');

	// C
	txt = txt.replace(/ç/g, '&ccedil;');

	return txt;
}

// Convertit les entités HTML
button.onclick = function() {	

	output.value = escapeHtmlEntities(input.value);

	return false;

}

// Selectionne tout le contenu au clic
output.onclick = function() {

	output.focus();
	output.select();

}