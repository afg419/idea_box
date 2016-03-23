$(document).ready(function(){
  document.i = new Ideas();
  document.i.fetchIdeas();
  document.i.search();
  document.i.create();
})

class Ideas{
  constructor(){
    this.ideas = [];
    this.$el = $('.ideas')
  }

  create(){
    $('#submit-new-idea').on("click", createIdea);
  }

  search(){
    $('#search-idea').on('keyup', function(){
      filterIdeas(this.value.toLowerCase());
    });
  }

  fetchIdeas(){
    $.ajax({
      type: "GET",
      url: "/api/v1/ideas",
      success: function(msg){
        this.loadIdeas(msg);
        this.renderIdeas();
      }.bind(this),
      error: function(error_message){
        console.log(error_message.responseText)
      }
    });
  }

  loadIdeas(msg){
    msg.forEach(function(elt){
      this.ideas.push(msgToIdea(elt));
    }.bind(this));
  }

  renderIdeas(callback = identity){
    $('.ideas').empty();
    var filteredIdeas = this.ideas.filter(callback)
    filteredIdeas.forEach(function(idea){
      idea.render();
    });
  }

  findIdeaByID(id){
    return this.ideas.findIndex(function(idea){return idea.id == id})
  }

  removeIdeaByID(id){
    this.ideas = this.ideas.splice(this.findIdeaByID(id),1)
  }

  updateIdea(updated){
    this.ideas[this.findIdeaByID(updated.id)] = updated
  }
}

function msgToIdea(elt){
  return new Idea(elt.title, elt.body, elt.quality, elt.id);
}

function identity(idea){
  return true
}
