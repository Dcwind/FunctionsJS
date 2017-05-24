$(document).ready(function() {
   $('div').mouseenter(function() {
       $(this).animate({
           height: '+=10px'
       });
   });
   $('div').mouseleave(function() {
       $(this).animate({
           height: '-=10px'
       }); 
   });
   $('div').click(function() {
       $(this).toggle(1000);
   }); 
});

// $(document).ready(function() {
//     $("div").fadeOut(1000);
// });

<script type="text/javascript" src="script.js">
    $(document).ready(script.js);
</script>

$(document).ready(function() {
    $('button').click(function() {
        $('#blue').fadeOut('slow');
    });
});
