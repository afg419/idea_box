function voter(){
  return (`<input class="upvote" type="button" value="^">` +
         `<input class="downvote" type="button" value="v">`)
}

function setVoteListener(id){
  $(`#idea-${id}`).find('.upvote').on('click', () => vote(1,id))
  $(`#idea-${id}`).find('.downvote').on('click', () => vote(-1,id))
};

function vote(modifier, id){
  $.ajax({
      type: "POST",
      url: `/api/v1/ideas/${id}/vote`,
      data: {idea: {vote: modifier}},
      success: function(msg){
        reRenderIdea(msg)
      },
      error: function(error_message){
        alert(error_message.responseText);
      }
  });
}
