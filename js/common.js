$(function() {

    $(function()
    {
        $('.scroll_p').jScrollPane();
         
    });
jQuery('.scroll_p').jScrollPane(
    function()
    {
        getContentWidth();
    }
)

$('.flip_btn').click(function(){
  $(this).parents('.flipper').toggleClass('rotate');
});


$(".popup_content").click(function() {
    $(".portfolio_item_cont , .form").animated("flipInY");
})

	$(".toggle_mnu").click(function() {
		$(".sandwich").toggleClass("active");
	});



	$(".toggle_mnu").click(function() {
		if ($(".top_mnu").is(":visible")) {
			$(".top_text").css("opacity", "1");
			$(".top_mnu").fadeOut(600);
			$(".top_mnu li a").removeClass("fadeInUp animated");
		} else {
			$(".top_text").css("opacity", ".1");
			$(".top_mnu").fadeIn(600);
			$(".top_mnu li a").addClass("fadeInUp animated");
		};
	});

$(".popup").magnificPopup({type:"image"});
	$(".popup_content").magnificPopup({
		type:"inline",
		midClick: true
	});

$(".portfolio .tab").click(function() {
	$(".portfolio .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".portfolio .tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");


$('.slide-zero').owlCarousel({
      loop:true,
    responsive:{
        0:{
            items:1,
            nav:true   
        }
    },
    navText : "", 
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    transitionStyle : "fade"     
});



$('.slide-one').owlCarousel({
      loop:true,
    responsive:{
        0:{
            items:1,
            nav:true   
        },
        600:{
            items:2,
            nav:true   
        },
        1200:{
            items:1,
            nav:true   
        }
    },
    navText : ""
});
$('.slide-two').owlCarousel({
      loop:true,
    responsive:{
        0:{
            items: 1,
            nav:true   
        },
        768:{
                items: 2,
                nav:true    
            },
        1200:{
                items: 1,
                nav:true   
            }  

    },
    navText : ""
});
$('.slide-three').owlCarousel({
      loop:true,
    responsive:{
        0:{
            items: 1,
            nav:true   
        },
        568:{
                items: 2,
               nav:true      
            },
        992:{
                items: 3,
               nav:true      
            },            
        1200:{
                items: 1,
                nav:true   
            }
    },
    navText : ""
});
$('.slide-four').owlCarousel({
      loop:true,
    responsive:{
        0:{
            items:2,
            nav:true   
        },        
        620:{
            items:3, 
            nav:true      
        },       
        870:{
            items:4, 
            nav:true      
        }, 
        1200:{
                items:1,
                nav:true     
            }  

    },
    navText : ""
});



	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

