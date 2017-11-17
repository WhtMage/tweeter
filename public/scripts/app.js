//Prevents the Tweet button from redirecting you to another page


$(document).ready(function(){
  var $message = $('.message')
  $("#tweet-button").click(function(event){
    event.preventDefault();
    if ($('.message').val() === ''){
      alert('Your message has nothing in it!')
    } else if ($('.message').val().length > 140){
      alert('Your message is too long!')
      } else {
        $.ajax({
          url: "/tweets",
          method: "POST",
          data: $message.serialize(),
          success: function() {
            $('.message').val('');
            $('.tweetsSection').empty();
            $('.counter').text(140);
            loadTweets();
          }
        });
      };
  });
});

$(document).ready(function(){
    $("button").click(function(){
        $(".new-tweet").slideToggle();
        $(".message").focus();
    });
});

function loadTweets(tweet){
    $.ajax({
      url: "/tweets",
      method: "GET",
      success: renderTweets
    });
}

//This function will look through the data in our database, and renders the information through the createTweetElement function.
function renderTweets(tweets){
  for(var i = 0; i < tweets.length; i++){
    var createdTweet = createTweetElement(tweets[i]);
    $(".tweetsSection").prepend(createdTweet);
  }
}

//This function takes the data from our database and converts it into a article node on our html file, that node is appended (added to the parent of)
//the tweetsBox in the format we provide. (What's inside the brackets of $tweet.append) then returns the whole article node.
function createTweetElement(data){
  var name = data.user.name;
  var avatar = data.user.avatars.small;
  var handle = data.user.handle;
  var content = data.content.text;
  var createdOn = data.created_at;

  var $tweet = $("<article>").addClass("tweetsBox");
  $tweet.append(`
        <header>
            <img class="profilepic" src=${avatar}>
            <h5>${handle}</h5>
            <h2>${name}</h2>
          </header>
         <div class="body">
            <p> ${escape(content)} <p>
          </div>
          <footer>
            <span class="icons">
              <i class="fa fa-flag" aria-hidden="true"></i> <i class="fa fa-retweet" aria-hidden="true"></i> <i class="fa fa-heart" aria-hidden="true"></i>
            </span>
            <p>${createdOn}</p>
          </footer>
    `)
  return $tweet;
}

//This function renders the text within our tweets so that it cannot be used to invoke alerts or other javascript functions in the tweetbox.
function escape(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

//Calls jQuery to run the function renderTweets with the argument bring the data from our database.
$(document).ready(function() {
  loadTweets();
});

