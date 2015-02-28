$(function() {
	var rolstoel = $("#draggable"), 
	img = "img/bedankt_kid-04.png",
	img2 = "img/logo_beeldmerk.png";
	
	rolstoel.draggable({
    	stop: function() { 
    		
    		var rolX = rolstoel.offset().left;
    		console.log(rolX);

    		if(rolX >= 800){
    			console.log("DIE!!@! ~(0.0)~ ");
    			rolstoel.attr("src", img);
    			rolstoel.addClass("active");
    		}else {
    			rolstoel.attr("src", img2);
    		}
    	}
	});

 });