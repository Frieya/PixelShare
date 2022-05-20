$(document).ready(function () {
    var post;

    $('#continueDelete').click(function () { 
        $('#promptLayer').css('display', "none");
        post.closest('.posts').remove();
    });
    
    $('#cancelDelete').click(function () { 
        $('#promptLayer').css('display', "none");
     });

    $('.optionButton').click( function () {
        post = $(this);
        $('#promptLayer').css('display', "flex");
    });
   
});