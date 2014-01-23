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
   	
   	// refactored previous code and it runs alot smoother/ less bouncing

  //  	 $(".picture").hover(function(){
		//     $(this).animate({height: "500px",width: "500px" });
		 
		// }, function() {
		//     $(this).animate({ height: "200px", width: "200px" });
		// });


	// changed from .animate to .jqGalScroll

   	 $(".picture").hover(function(){
		    $(this).jqGalScroll({height: "500px",width: "500px" });
		 
		}, function() {
		    $(this).jqGalScroll{ height: "200px", width: "200px" });
		});






	// $(".picture").mouseover(function() {
	//     $(this).height(function(i, h) { return h * 1.2; })
	//            .width(function(i, w) { return w * 1.2; });
	// 	}, function() {
	//     $(this).height(function(i, h) {
	//         return h / 1.2;
	//     }).width(function(i, w) {
	//         return w / 1.2;
	// })

	// $(document).ready(function() {
	//     $("#companyGallery").jqGalScroll({height:300,width:1000});
	//     $("#imageGallery").jqGalScroll({height:300,width:1000});
	//  });





	console.log("HELLLLLOOOOOOO 22222")
});


	



