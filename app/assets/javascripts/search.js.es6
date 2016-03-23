function filterIdeas(searchingFor){
  document.i.renderIdeas(function(idea){
    return (idea.title.indexOf(searchingFor) >= 0) || (idea.body.indexOf(searchingFor) >= 0)
  })
}
