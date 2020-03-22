$(document).ready(function(){

$("html").mousemove(function(event){
	var pageCoords = "( " + event.pageX + ", " + event.pageY + " )";

	var box = $("body");
	var boxCenter=[685,340];
	var angle = Math.atan2(event.pageX - boxCenter[0], - (event.pageY - boxCenter[1]) )*(180/Math.PI);  
	console.log(boxCenter);

	$("h1").text( "( X, Y ) : " + pageCoords );
	$(".image").css("rotate",angle + "deg");
});

// origem 680,366
// > 680 && < 366


});