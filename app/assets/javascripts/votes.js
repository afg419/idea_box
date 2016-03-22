function vote(modifier, id){
  $.ajax({
      type: "POST",
      url: `/api/v1/ideas/${id}/vote`,
      data: {idea: {vote: modifier}},
      success: function(msg){
        msgToIdea(msg).reRender();
      },
      error: function(error_message){
        alert(error_message.responseText);
      }
  });
}
