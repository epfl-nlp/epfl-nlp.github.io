$(document).ready(function() {
	// everytime page is resized (and on load)
	var resize_team_imgs = function(){
		// get max-width
		var max_width = $("section#team div.container img").first().width();

		// set max-height to same value
		$("section#team div.container img").height(max_width);
	};
	resize_team_imgs();


	$(window).resize(function () {
	   resize_team_imgs();
	});
});