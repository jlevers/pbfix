document.onload = $('img[src*=\'photobucket\'], input[src*=\'photobucket\']').each(function(element) {
    if ($(this).attr('src').indexOf('~original') === -1) {
        var src = $(this).attr('src');
        src += '~original';
        $(this).attr('src', src);
    }
});
