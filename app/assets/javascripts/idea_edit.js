class IdeaEdit{
  constructor(idea){
    this.id = idea.id;
    this.idea = idea;
  }

  button(){
    if(!this.idea.active){
      return ""
    }else{
      return `<input class="submit-edit-idea" type="button" value="Submit Edit">`
    }
  }

  setListener(){
    if(!this.idea.active){
      $(`#idea-${this.id}`).find('.title').on('click', () => {this.revealEdit()})
      $(`#idea-${this.id}`).find('.body').on('click', () => {this.revealEdit()})
    } else {
      $(`#idea-${this.id}`).find('.submit-edit-idea').on('click', () => {this.editIdea()})
    }
  }

  revealEdit(){
    this.idea.active = true;
    this.idea.reset();
  }

  getEditIdeaFormData(){
    var title = $(`#idea-${this.id}`).find('.edit-idea-title').val()
    var desc = $(`#idea-${this.id}`).find('.edit-idea-desc').val()
    return {idea: {title: title, body: desc}}
  }

  editIdea(){
    $.ajax({
        type: "PUT",
        url: `/api/v1/ideas/${this.id}`,
        data: this.getEditIdeaFormData(),
        success: function(msg){
          msgToIdea(msg).render();
        },
        error: function(error_message){
          alert(error_message.responseText);
        }
    });
  }
}
