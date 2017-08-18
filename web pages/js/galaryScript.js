$(document).ready(function(){
   
    $('.images img').hover(
        function(){
            var src = $(this).attr('src');
            $('#image img').attr('src',  src);
            $(this).mousemove(function(e){
                $('#image').css({
                 'left'   : e.pageX+10,
                 'top'    : e.pageY+10,
                 'display': 'block',
                 'z-index': '1'
                });
            });
        },
        function(){
            $('#image').css('display','none');
        }
    );
    
    
    /* $('.images img').mousemove(function(e){
            var src = $(this).attr('src');
            $('#image img').attr('src',  src);
            
                $('#image').css({
                 'left'   : e.pageX,
                 'top'    : e.pageY,
                 'display': 'block',
                 'z-index': '1'
                });
        });
     $('.images img').mouseout(function(){
         $('#image').css('display','none');
     });*/
    
    
    //pop function
    var id;
    $('.images img').click(function(){    
       id = $(this).attr('id');
       var src = $(this).attr('src');
         $('#slider div.image img').attr('src',  src);
        $('#slider').css({
             'display':'block',
             'z-index':'1'
        });
    });
    
    
    /*start slider*/
    
    
    var slider   = $('#slider');
    var close    = $('<span>X</span>');
    var left     = $('<div id="left"> &lt; </div>"');
    var right    = $('<div id="right"> &gt; </div>');
    var play_btn = $('<button >PLAY</button>');
    var stop_btn = $('<button >STOP</button>');
                                                                    
    slider.append(close);
    slider.prepend(left);
    slider.append(right);
    slider.append('<div class="btn"></div>');
    $('#slider .btn').append(stop_btn);
    $('#slider .btn').append(play_btn);
    
    for(var i=1; i<$('div.images img').length+1; i++){
       $('div.images img:nth-child('+ i +')').attr('id', i);
       console.log( $('div.images img:nth-child('+ i +')'));
    }
    
    
    //play slider
    var interval;
    play_btn.click(function(){
        interval = setInterval(function(){
           console.log(id)
           if(id == $('div.images img').length) id = 0;
           var src = $('div.images img:nth-child('+ ++id +')').attr('src');
           $('#slider div.image img').attr('src',  src);  
        },1000)
    });
   
    
    //stop slider
    stop_btn.click(stop_slider);
    
    function stop_slider(){
        clearInterval(interval);
    }
    
    
    //close slider
    close.click(function(){
        stop_slider();
        slider.css('display', 'none')
    });
    
    
    //right
    right.click(function(){
        if(id >= $('div.images img').length) id = 0;
        var src = $('div.images img:nth-child('+ ++id +')').attr('src');
        $('#slider div.image img').attr('src',  src);
    });
    
    
    //left
    left.click(function(){
        if(id <= 1) id = $('div.images img').length;
        var src = $('div.images img:nth-child('+ --id +')').attr('src');
        $('#slider div.image img').attr('src',  src); 
    });
    
    
});