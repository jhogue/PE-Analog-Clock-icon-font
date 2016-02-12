/*
 * Cycle through the pages <time> elements, parse out the datetime attribute, and insert the proper <span> elements with jQuery
 */

$(document).ready(function() {
    
    // for our sample we only apply it to the #test-js div. 
    //Remove this and the closing notation if you want it applied across the entire page
    $('#test-js time').each(function() {
    
        var attr = $(this).attr('datetime');
        
        if( typeof attr !== 'undefined' && attr !== false ) {
    
            var datetimeParts = $(this).attr("datetime").split(" ");
            var timeParts = datetimeParts[1]; 
            var time = timeParts.split(":");     
            var hour = time[0]; 
            var minute = time[1];     
            
            $(this).prepend( '<span class="hour-' + hour + '"><span class="minute-' + minute + '"></span></span> ' ); 
        }
    }); // Remove this if you remove line 9 above. 
}); 


/*
 * Wishlist: An optional way to do this with vanilla JS and without the jQuery library (or any library). 
 */