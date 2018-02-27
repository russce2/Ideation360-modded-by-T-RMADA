$(document).ready(function(){
    
    $("i.menu").on("click", function(){
        $("header nav ul").toggleClass("open");
        });
    
    
    
    
     $(window).scroll(function(){ 
        if ($(this).scrollTop() > 700) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    });
    
    
    
    
    });