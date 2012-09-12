/*
 * Cycle through the pages <time> elements, parse out the datetime attribute, and insert the proper <span> elements with jQuery
 */
$(document).ready(function() {
    
    $('#test-js time').each(function() {
    
        //if( $(this).hasAttribute("datetime") ) {
        // datetime="2012-03-15 11:32:00"
        
            var time = $(this).attr("datetime"); 
            var date = new Date( time ); 
            var hour = date.getHours();
            var minute = date.getMinutes();
            
            console.log( date ); 
            
            $(this).prepend( '<span class="hour-' + hour + '"><span class="minute-' + minute + '"></span></span> ' ); 
        //}
    }); 
}); 


/*
 * Cycle through the pages <time> elements, parse out the datetime attribute, and insert the proper <span> elements
 * All without jQuery! 
 

document.addEventListener("DOMContentLoaded", function() {
    
    for ( var time = document.getElementsByTagName("time"), l = time.length, i = 0; i < l && (r[i].style.border = 'solid 1px red') == 'solid 1px red'; ++i);
}
var time = document.getElementsByTagName("time")[0].attributes[0].value;
document.write(time);
date = new Date(time);
document.write('<br>');
document.write(date.getHours());
document.write('<br>');
document.write(date.getMinutes());

*/