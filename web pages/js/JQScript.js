$(document).ready(function(){
   
   
    
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
    var id=0;
    $('.images img').click(function(){    
       id = $(this).attr('id');
       var src = $(this).attr('src');
         $('#slider div.image img').attr('src',  src);
        
    });
    
    
    /*start slider*/
    
    
    var slider   = $('#slider');
    var left     = $('<div id="left"> &lt; </div>"');
    var right    = $('<div id="right"> &gt; </div>');
                              
    slider.prepend(left);
    slider.append(right);
  
    for(var i=1; i<$('div.images img').length+1; i++){
       $('div.images img:nth-child('+ i +')').attr('id', i);
       console.log( $('div.images img:nth-child('+ i +')'));
    }
    
    
    //play slider
    var interval;
  (function slideShow(){
         interval= setInterval(function(){
           if(id == $('div.images img').length) id = 0;
           var src = $('div.images img:nth-child('+ ++id +')').attr('src');
           $('#slider div.image img').attr('src',  src);  
           $('#slider div.image img').attr('id',  id);  
        },2000)
  })();
    

    //right
    right.click(function(){
       // clearInterval(interval);
        id = $('#slider div.image img').attr('id');
        if(id >= $('div.images img').length) id = 0;
        var src = $('div.images img:nth-child('+ ++id +')').attr('src');
        $('#slider div.image img').attr('src',  src);
        $('#slider div.image img').attr('id',  id); 
       // setTimeout(slideShow, 1000)
    });
    
    
    //left
    left.click(function(){
        //clearInterval(interval);
        id = $('#slider div.image img').attr('id');
        if(id <= 1) id = $('div.images img').length;
        var src = $('div.images img:nth-child('+ --id +')').attr('src');
        $('#slider div.image img').attr('src',  src); 
        $('#slider div.image img').attr('id',  id); 
        //setTimeout(slideShow, 1000)
    });
    
    
});