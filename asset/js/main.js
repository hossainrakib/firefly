$(document).ready(function(){

    //hero active
    $('.hero-active').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        autoplay: false,
        autoplaySpeed: 2000,
        accessibility: false,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: 'linear'
      });

	//counter
    $('.count').each(function () {
		$(this).prop('Counter',0).animate({
			Counter: $(this).text()
		}, {
			duration: 4000,
			easing: 'swing',
			step: function (now) {
				$(this).text(Math.ceil(now));
			}
		});
	});
	//loging box
	
    $("#submit").click(function(e){
        var inValid = true;
        $("input[type='text']#requered").each(function(){
            if($(this).val()==''){
                inValid = false;
                $(this).css({
                    "border":"1px solid red",
                    "background":'#eae3d675'
                });
            }else{
                $(this).css({
                    "border":"",
                    "background":''
                });
            }
        });
        $("input[type='email']#requered").each(function(){
            if($(this).val()==''){
                inValid = false;
                $(this).css({
                    "border":"1px solid red",
                    "background":'#eae3d675'
                });
            }else{
                $(this).css({
                    "border":"",
                    "background":''
                });
            }
        });
        if(inValid == false){
            e.preventDefault();
        }else{
            clear();
            document.getElementById("reply") .innerHTML = "THANK FOR SUBMITING DEAR";
            return false;
        }
    });
	   //costomar function

	   function clear(){
        $('#myaction :input').each(function(){
            $(this).val('');
        });
    };

    $(".fa-bars").click(function(){

        
        $(this).toggleClass("fa fa-times");
        $(this).toggleClass("fa fa-bars");


        $(".main-header .main-menu nav").toggleClass("nav-toggle");

    });
    $('nav ul li a').click(function(){
        
        $('.menu-icon i').removeClass("fa-times");

        $('nav').removeClass("nav-toggle");

        $('.menu-icon i').toggleClass("fa-bars");
    });
});