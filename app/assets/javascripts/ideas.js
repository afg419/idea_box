$(document).ready(function(){
  fetchIdeas();
})

function fetchIdeas(){
  $.ajax({
      type: "GET",
      url: "/api/v1/ideas",
      success: function(msg){
        renderIdeas(msg);
      },
      error: function(error_message){
        console.log(error_message.responseText)
      }
  });
}

function renderIdeas(msg){
  $('.idea').empty();
  msg.forEach(function(elt){
    $('.ideas').append(domIdea(elt))
  })
}
