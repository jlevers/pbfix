document.onload = $('img[src*=\'photobucket\'], input[src*=\'photobucket\']').each(function(element) {
    var src = $(this).attr('src');  // Get src attribute
    // Make sure fix isn't already applied, and that image isn't already working (contains imageproxy.php)
    if (src.indexOf('~original') === -1 && src.indexOf('imageproxy.php') === -1) {
        if (src.indexOf('?') !== -1) {  // Remove any parameters
            src = src.substring(0, src.indexOf('?'));
        }

        // Add ~original to src attribute
        src += '~original';
        $(this).attr('src', src);
    }
});
