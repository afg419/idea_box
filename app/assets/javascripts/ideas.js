$(document).ready(function(){
  var i = new Ideas();
  i.fetchIdeas();
  i.search();
  i.create();
})

class Ideas{
  constructor(){
    this.ideas = [];
    this.$el = $('.ideas')
  }

  create(){
    $('#submit-new-idea').on("click", () => {createIdea(this)});
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
    $('.idea').empty();
    msg.forEach(function(elt){
      this.ideas.push(msgToIdea(elt,this));
    }.bind(this));
  }

  renderIdeas(){
    this.ideas.forEach(function(idea){
      idea.render();
    });
  }

  search(){
    $('#search-idea').on('keyup',function(){
      var searchingFor = this.value.toLowerCase();
      var filtered_ideas = this.ideas.filter(function(idea){
        (idea.title.indexOf(searchingFor) >= 0) || (idea.body.indexOf(searchingFor) >= 0)
      })
    })
  }
}

function msgToIdea(elt, i){
  var idea = new Idea(elt.title, elt.body, elt.quality, elt.id, i);
  i.ideas.push(idea)
  return idea
}
