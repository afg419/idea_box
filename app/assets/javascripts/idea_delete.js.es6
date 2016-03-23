class IdeaDelete{
  constructor(idea){
    this.id = idea.id;
    this.idea = idea
  }

  button(){
    return `<input id="delete-${this.id}" class="delete-idea" type="button" value="Delete">`
  }

  setListener(){
    $(`#delete-${this.id}`).on('click', () => {this.deleteIdea()})
  }

  removeIdea(){
    document.i.removeIdeaByID(this.id)
    this.idea.$el.remove();
  }

  deleteIdea(){
    $.ajax({
      type: "DELETE",
      url: `/api/v1/ideas/${this.id}`,
      success: function(msg){
        this.removeIdea();
      }.bind(this),
      error: function(error_message){
        alert(error_message.responseText);
      }
    });
  }
}
