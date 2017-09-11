		
$( document ).ready(function() {
		
		var password = "evrendemir";
		var ifWrong = false;
		var counter = 0;

		$('#submit_button').click(function(){
  				
  				$(this).data('clicked', true);
  				if($('#submit_button').data('clicked') && $('#enter_input').val() == password) {
		   				window.location.href="Views/homepage.html";
		   		} else if ($('#submit_button').data('clicked') && $('#enter_input').val() != password){
		 		ifWrong = true;
		 		$('#wrong_input').fadeIn(700);
		 	}
			});

		$('#submit_button').hover(function() {
  			$(this).css('border-color', 'grey');
		});

		$('#enter_input').keyup(function(e){
		 	counter++;

		 	//	multiple backgrounds
		 	/*$('input').css({
		 		'background-image': $('input').css('background-image') + ', url("Images/grey_arrow.png")',
		 		'background-repeat': $('input').css('background-repeat') + ', no-repeat',
		 		'background-position':$('input').css('background-position') +  ', right',
		 	
		 	});*/

		 	// if input value is not empty make button else delete button
		 	if( $('#enter_input').val() != ""){
		 		$('#submit_button').css({
		 			'background-color': 'white',
		 			'color': 'white',
		 			'height': '46px',
		 			'width': '40px',
		 			'border': 'none',
		 			'border-bottom-right-radius': '2px',
		 			'border-top-right-radius': '2px',
		 			'margin-bottom': '0px',
		 			'background-image': 'url("Images/black_arrow.png")',
		 			'background-repeat': 'no-repeat',
		 			'background-position': '6px 10px',
		 			'float': 'left'
		 		});
		 		$('#submit_button').fadeIn(600);
		 	} else{
		 		$('#submit_button').fadeOut(600);
		 		}
		 	

		 	// if submit button is clicked make that true
		 	
		 	var code = e.which; // no more e.keycode
		 	if(code == 13 && $("#enter_input").val() == password) { //Enter keycode 13 is keycode for the enter button
		   		window.location.href="Views/homepage.html";
		  
		 	} else if (code == 13 && $("#enter_input").val() != password){ // if password is wrong 
		 		ifWrong = true;
		 		$('#wrong_input').fadeIn(700);
		 	}
		 	if(code == 8 && ifWrong == true){
		 		$('#wrong_input').fadeOut(700);
		 	}

			
		 	// not doing anything
		 // 	$("#enter_input").css({
		 //   		'background-image' : '../Images/grey_arrow.png',
		 //   		'background-repeat': 'no-repeat',
		 //   		'background-position' : '2px 10px right'
			// });
});
				
				$(".navigation_element").mouseover(function() {
   					 $(this).css("background-color","rgba(255, 255, 255, 0.5)");
				}).mouseout(function() {
    				$(this).css("background-color","rgba(255, 255, 255, 0.3)");   				
				});


				// animate scrolling 
				$('.a_element').click(function(e){

					var href = $(this).attr('href');
				$('html , body').animate({
					scrollTop: $(href).offset().top // top is the value of elemt starting from the top
				},1000); 

				e.preventDefault(); // default is direkt naar de href gaan van het geklikte element
			});
});