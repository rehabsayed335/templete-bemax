/* global $,window */
$(function()
 {
    
    
    // scroll the navbar 
    
    $(window).scroll(function()
        {
            var navbar=$('.navbar');
            if($(window).scrollTop() >= navbar.height())
                {
                    navbar.addClass('navbar-fixed-top');
                    navbar.addClass('selected');
                    $('.navbar-inverse .navbar-nav li a').css('color','black');
                    $('.navbar-brand img').attr('src','images/logo-dark.png')
                }
            else
                {
                    navbar.removeClass('navbar-fixed-top');
                    navbar.removeClass('selected');
                    $('.navbar-inverse .navbar-nav li a').css('color','white');
                    $('.navbar-brand img').attr('src','images/logo-light.png')

                }
                
             var link = $('.navbar .nav li a');
             $(link).each(function()
              {
                 if($(window).scrollTop() >= $('#' + $(this).attr('data-scroll')).offset().top - '70')
                    {
                      $(this).addClass('special_color').parent().siblings().find('a').removeClass('special_color');
                    }
              })
             
        });
    
    /* add class active to the li */
    $('.navbar .nav li a').click(function(e)
    {
        e.preventDefault();
        $('html,body').animate(
        {
            scrollTop : $('#' + $(this).attr('data-scroll')).offset().top -'60'
            
        },1000);
        $(this).addClass('special_color').parent().siblings().find('a').removeClass('special_color');
        
    });
    /* start effect in buttons */
    $('.from_left').hover(function()
    {
        $(this).find('span').eq(0).animate({
            width : '100%'
        })
        $(this).css('color','black')
        
    },function(){
        
        $(this).find('span').eq(0).animate({
            width : '0'
        })
        $(this).css('color','white')
    });
    /* end effects in buttons*/
    
    /* start use type js */
    
    var typed = new Typed('#typed', {
        strings: ["SUCCESS","GROW UP","DREAM"],
        typeSpeed: 80,
        backSpeed: 40,
        loop: true,
        loopCount: Infinity
      });
    
    /* end use type js */
    
    /* start scroll to bottom */
    
    $(".fa-angle-down").click(function()
    {
        $('html,body').animate(
        {
            scrollTop : $('#about').offset().top - 50
        },1000)
        
    });
    /* end scroll to bottom */
    
    
    /* start work suffle */
    
    window.mixitup('#Container');
    $('.Portfolio ul li').click(function()
    {
        $(this).addClass('select').siblings().removeClass('select');
        
    })

    /* end work suffle */
    
    /* start counterup */
    $('.counter').counterUp({
    delay: 10,
    time: 1000
    });
    /* end counterup */
    
    /* start code jq of part of services */
    $('.thrid div').click(function()
    {
        $(this).css('backgroundColor','white')
        
        $(this).find('h3').css('color','black')
        
        $(this).siblings().css('backgroundColor','#181819')
        
        .stop().find('h3').css('color','white')
        
        $(this).parent().prev().fadeOut().delay().fadeIn();
        
    });
    /* end code jq of part of services */
    
    /* start popup */
    $('.fa-caret-right').click(function()
    {
        $('.popup').fadeIn(1000);
        
    });
    $('.popup').click(function()
    {
        $(this).fadeOut(1000);
        
    }); 
    
    /*$.scrollIt({
      upKey: 38,                // key code to navigate to the next section
      downKey: 40,              // key code to navigate to the previous section
      easing: 'swing',          // the easing function for animation
      scrollTime: 600,          // how long (in ms) the animation takes
      activeClass: 'active',    // class given to the active nav element
      onPageChange: null,       // function(pageIndex) that is called when page is changed
      topOffset: -80            // offste (in px) for fixed top navigation
    });*/
    $.scrollIt();
    
});
// loading screen 

$(window).on('load',function()
    {
        $('.load').fadeOut(1000,function()
        {
            $(this.remove());
        });
        $('body').css('overflow','auto');
    
    })