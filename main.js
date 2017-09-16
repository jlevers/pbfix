document.onload = $('img[src*=\'photobucket\']').each(function(element) {
    var src = $(this).attr('src');
    src += '~original';
    $(this).attr('src', src);
});
