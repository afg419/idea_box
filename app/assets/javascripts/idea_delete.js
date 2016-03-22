class IdeaDelete{
  constructor(id){
    this.id = id;
  }

  button(){
    return `<input id="delete-${this.id}" class="delete-idea" type="button" value="Delete">`
  }

  setListener(){
    $(`#delete-${this.id}`).on('click', () => {this.deleteIdea()})
  }

  removeIdea(){
    $(`#idea-${this.id}`).remove();
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
