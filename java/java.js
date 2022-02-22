$(window).scroll(function(){
    if($(window).scrollTop()> 150){
        $('.nav').css({'background-color':'white','height':'80px'});
        $('.tex').css({'color':'black'});
        // $('.tex:hover').css({'color': 'slategray'});
        $('.nav img').attr({'src':'img/bakery-color.png'})

    }else{
        $('.nav').css({'background-color':'initial','height':'90px'});
        $('.tex').css({'color':'white'});
        // $('.tex:hover').css({'color': 'slategray'});
        $('.nav img').attr({'src':'img/bakery-light-1.png'})

        
    }
    // $('.tex:hover').css({'color': 'slategray'});
})