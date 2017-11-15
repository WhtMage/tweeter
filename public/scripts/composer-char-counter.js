function updateCountdown() {
  // 140 is the max message length
  // var remaining = 140 - $('.message').val().length;
  // var remaining = 140 - $(this).val().length;
  $('.message').on("keyup", function(){
    var remaining = 140 - $(this).val().length;
    $(this).parent('#tweet-button').children('.counter').text(remaining);

    if($(this).siblings('.counter').text() < 0) {
      $(this).siblings('.counter').css({'color': 'red'})
    } else {
      $(this).siblings('.counter').css({'color': 'black'})
    }
  });
}

$(document).ready(function() {
  updateCountdown();

});