$(document).ready(function(){
  document.i = new Ideas();
  document.i.fetchIdeas();
  document.i.search();
  document.i.sort();
  document.i.create();
})

class Ideas{
  constructor(){
    this.ideas = [];
    this.order = noSort;
    this.filter = identity;
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

  sort(){
    $('#submit-sort-idea').on('click', function(){
      sortIdeas();
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

  renderIdeas(){
    $('.ideas').empty();

    var sortedFilteredIdeas = this.ideas.filter(this.filter).sort(this.order)
    sortedFilteredIdeas.forEach(function(idea){
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

function noSort(idea1, idea2){
  return  1
}

function descending(idea1, idea2){
  return  idea1.quality - idea2.quality
}

function ascending(idea1, idea2){
  return  - idea1.quality + idea2.quality
}
