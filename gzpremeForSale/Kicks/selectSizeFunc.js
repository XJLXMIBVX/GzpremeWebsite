
function goToSelectedSize() {
	var sel = document.getElementById('sneakerSizes');
    var opt;

    // GOES THROUGH THE OPTIONS 
    for ( var i = 0, len = sel.options.length; i < len; i++ ) {

    	// IF THE CURRENT OPTION WAS SELECTED BY THE USER, BREAK
        opt = sel.options[i];
        if ( opt.selected === true ) {
            break;
        }
    }

    // IF THE SHOE SIZE IS A WHOLE NUMBER 
    if( opt.value % 1 == 0 ) {
		window.location.href = "https://www.instagram.com/explore/tags/gzpreme_kicks_" + opt.value;
    } 
    // IF THE SHOES SIZE INCLUDES A HALF 
    else {
    	window.location.href = "https://www.instagram.com/explore/tags/gzpreme_kicks_" +(opt.value-0.5)+ "_5";
    }
}