$(document).ready(function() {
    show_hide = function() {
        $(this).toggleClass('showing')
        $(this).toggleClass('not-showing')
    }
	$('span.showing').click(show_hide)
	$('span.not-showing').click(show_hide)
});