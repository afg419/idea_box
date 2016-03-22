$(document).ready(function(){
  $('#submit-new-idea').on("click", createIdea);
})

function createIdea(){
  $.ajax({
      type: "POST",
      url: "/api/v1/ideas",
      data: getNewIdeaFormData(),
      success: function(msg){
        renderIdea(msg);
        wipeNewIdeaFields();
      },
      error: function(error_message){
        alert(error_message.responseText);
        console.log(error_message.responseText);
      }
  });
}

function getNewIdeaFormData(){
  var title = $('#new-idea-title').val()
  var desc = $('#new-idea-desc').val()
  return data = {idea: {title: title, body: desc, quality: 0}}
}

function wipeNewIdeaFields(){
  $('#new-idea-title').val("")
  $('#new-idea-desc').val("")
}
