class IdeaVote{
  constructor(idea){
    this.id = idea.id;
  }

  button(){
    return (`<input class="upvote" type="button" value="^">` +
           `<input class="downvote" type="button" value="v">`)
  }

  setListener(){
    $(`#idea-${this.id}`).find('.upvote').on('click', () => this.vote(1))
    $(`#idea-${this.id}`).find('.downvote').on('click', () => this.vote(-1))
  };

  vote(modifier){
    $.ajax({
        type: "POST",
        url: `/api/v1/ideas/${this.id}/vote`,
        data: {idea: {vote: modifier}},
        success: function(msg){
          msgToIdea(msg).reset();
        },
        error: function(error_message){
          alert(error_message.responseText);
        }
    });
  }
}
