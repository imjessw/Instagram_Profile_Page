$(document).ready(function(){

	// $("picture").mouseover(function(){
	// 	var $("picture")= $(this)
	// 	$(this).animate({ width: "600px" });
	// 	}
	// $("picture").mouseleave(function() {
 //    	$(this).animate({ width: "100px" });
	// 	});
	// }

	
	$("img").hover(function() {
    $(this).height(function(i, h) { return h * 3; })
           .width(function(i, w) { return w * 3; });
}, function() {
    $(this).height(function(i, h) {
        return h / 3;
    }).width(function(i, w) {
        return w / 3;
    })
});


	



