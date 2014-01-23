$(function(){

	console.log("HELLLLLOOOOOOO")
	// rad code but the animation is a bit too much
		// $(".picture").hover(function(){
		//     $(this).animate({ width: "500px" });
		//     $(this).animate({ height: "500px" });
		// }, function() {
		//     $(this).animate({ width: "200px" });
		//     $(this).animate({ height: "200px" });
		// });
   // end of rad code I cant use because it it too buggy

	$(".picture").mouseover(function() {
	    $(this).height(function(i, h) { return h * 1.2; })
	           .width(function(i, w) { return w * 1.2; });
		}, function() {
	    $(this).height(function(i, h) {
	        return h / 1.2;
	    }).width(function(i, w) {
	        return w / 1.2;
	})
	console.log("HELLLLLOOOOOOO 22222")
});


	



