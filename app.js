$(document).ready(function(){
	$("#first_name, #last_name, #password, #confirm_password, #email").keyup(function(){

		
		
		
		var password = $("#password").val();
		var confirm_password = $("#confirm_password").val();

		


		if(password != confirm_password){
			$("#password, #confirm_password").css({
				border : "1px solid red"
			});
		}else{
			$("#password, #confirm_password").css({
				border : "1px solid #ccc"
			});
		}
	});



	$("#password").keyup(function(){
 		 var pass=$("#password").val();
  		if(pass.length<6){$("#result").text("your pass weak");
 		 $("#result").addClass(".red");
	}
	else{
  	$("#password").removeClass(".red");
  	$("#result").text("Your password is strong");
	}
 	
 	});
 	
 	$(".btn-success").click(function(){
   	$("#password").val("");
  	$("#name").val("");

 	});
 	
 	$('.btn').click(function () {
        var pass = $("#password").val();
        var name = $("#name").val();
        if (pass.length ==0 && name.length ==0){
        alert("please fillup the form");
                
       	}
            
        else{
            window.location.href = 'exam.html';
            }
        });

 	$("#reset").click(function(){
 		$("#name").val("");
 		$("#password").val("");
 		$("#confirm_password").val("");
 		

 	});




 	$("#changebg").click(function(){
		$(".profile-area").css({
			"background-color" : "coral"
		});
	});

	//datepicker

	$("#datepicker").datepicker();

	//textarea 

	var textCounter = 160;

	$("#text_counter").text(textCounter);


	$("#textarea").keyup(function(){

		var textChar = $("#textarea").val().length;
		var ramainingChar = textCounter - textChar;

		$("#text_counter").text(ramainingChar).addClass("green").re;


		if (ramainingChar<0) {
			$("#text_counter").addClass("red").removeClass("green");
		}
		else{
			$("#text_counter").addClass("green").removeClass("red");
		}
	});


	//parallax

	$('.parallax-window').parallax();

	//gallery

	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:3
			},
			1000:{
				items:5
			}
		}
	});

	//tabs

	$("#tabs").tabs();


	 $('.work-ul li').click(function(){
        $(".work-ul li").removeClass("active");
        $(this).addClass("active");
 
        var selector = $(this).attr('data-filter');
        $(".portfolio-items").isotope({
            filter: selector,
            animationOptions: {
                duration: 1000,
                easing: 'linear',
                queue: false,
            }
        });
        return false;
    });

});