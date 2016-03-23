function createIdea(){
  $.ajax({
      type: "POST",
      url: "/api/v1/ideas",
      data: getNewIdeaFormData(),
      success: function(msg){
        var newIdea = msgToIdea(msg);
        document.i.ideas.push(newIdea)
        document.i.renderIdeas();
        wipeNewIdeaFields();
      },
      error: function(error_message){
        alert(error_message.responseText);
      }
  });
}

function getNewIdeaFormData(){
  var title = $('#new-idea-title').val()
  var desc = $('#new-idea-desc').val()
  return {idea: {title: title, body: desc, quality: 0}}
}

function wipeNewIdeaFields(){
  $('#new-idea-title').val("")
  $('#new-idea-desc').val("")
}
