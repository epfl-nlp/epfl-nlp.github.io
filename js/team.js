$(document).ready(function() {
	// everytime page is resized (and on load)
	var resize_team_imgs = function(){
		$("section#team img.member-photo").each(function() {
			$(this).height($(this).parent().width());
		});
	};
	resize_team_imgs();


	$(window).resize(function () {
	   resize_team_imgs();
	});
});
