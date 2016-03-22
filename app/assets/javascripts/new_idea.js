$(document).ready(function(){
  $('#submit-new-idea').on("click", createIdea);
})

function createIdea(){
  var title = $('#new-idea-title').val()
  var desc = $('#new-idea-desc').val()
  var data = {idea: {title: title, body: desc, quality: 0}}
  $.ajax({
      type: "POST",
      url: "/api/v1/ideas",
      data: data,
      success: function(msg){
        renderIdea(msg);
      },
      error: function(error_message){
        alert(error_message.responseText)
        console.log(error_message.responseText)
      }
  });
}
