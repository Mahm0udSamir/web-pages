$(document).ready(function(){
   
     $('#en').click(function(){
         $('#wall').toggleClass('toggle')
     })
     
     $('#set').click(function(){
        
         var value = $('#data').val();
         var item = $('<option selected="selected">'+ value + '</option>');
         $('#speed').append(item)
     })
     
     
        
     
})