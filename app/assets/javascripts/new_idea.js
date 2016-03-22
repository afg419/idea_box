$(document).ready(function(){
  $('#submit-new-idea').on("click", createIdea);
})

function createIdea(){
  debugger
  var title = $('#new-idea-title').val()
  var desc = $('#new-idea-desc').val()
  $.ajax({
      type: "POST",
      url: "/api/v1/ideas",
      data: {idea: {title: title, body: desc}},
      success: function(msg){
        
        renderIdea(msg);
      },
      error: function(error_message){
        console.log(error_message.responseText)
      }
  });
}
