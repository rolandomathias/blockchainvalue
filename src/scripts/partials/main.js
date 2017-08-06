$(function(){

    $('.input-subscribe').each(function() {
       var input = $(this).find('input[type="email"]');
       var placeholder = input.data('placeholder');
       input.focus(function(){
           if( $(this).val().length && $(this).val() === placeholder ) {
               $(this).val('');
           }
       });
       input.blur(function(){
           if( !$(this).val().length ) {
               $(this).val(placeholder);
           }
       });

       input.keyup(function(){
          if( $(this).val().length && $(this).val() !== placeholder ) {
              if( !$(this).hasClass('typed') ) {
                  $(this).addClass('typed');
              }
          }else{
              //$(this).val('Enter Your Email Address');
              $(this).removeClass('typed');
          }
       });
    });

});