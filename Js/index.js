<<<<<<< HEAD
$(document).ready(function) {
	// body...
	
});
=======

$(document).ready(function () {
    // the path for the css file that is going to appended has to be relative to the index file
   $('head').append('<link rel="stylesheet" href="Css/index.css" type="text/css">');


   //BREATHING NAME ANIMATION
    $('#breathing_name').ready(function () {

        var unevennumbers = 1;
        for (var counter = 0; counter <=10; counter++){
            $('.breather2').fadeOut(1000, function () {});
            $('.breather2').fadeIn(1000, function () {});

            }
    });

    // MAKE NAVIGATION ANIMATED
        $('.navigation-list-item').mouseover(function () {
            $(this).animate({
                //background: 'rgba(0,0,0,0.20)'
                opacity: 0.7
            },200, function () {
                
            });
        });
             $('.navigation-list-item').mouseout(function () {
               $(this).animate({
                     //background: 'rgba(0,0,0,0.850)'
                     opacity: 0.95,
                 },200, function () {

                 });
             });

             //MAKE NAVIGATION LINK TO OTHER PAGES
            //getting text from the clicked element
         $('.navigation-list-item').click(function () {
             var pagename = $(this).text().toLowerCase();
             $('body').load("Views/"+pagename+".html");
        });




});
>>>>>>> 1679c3f74b1467c7e5f81ba9d14a2e07c3dcee03
