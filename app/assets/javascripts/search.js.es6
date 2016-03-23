function filterIdeas(searchingFor){
  document.i.filter = function(idea){
    return (idea.title.indexOf(searchingFor) >= 0) || (idea.body.indexOf(searchingFor) >= 0)
  };
  document.i.renderIdeas();
}
