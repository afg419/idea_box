function renderIdea(idea){
  $('.ideas').prepend(domIdea(idea));
  setDeleteListener(idea.id);
  setVoteListener(idea.id)
}

function domIdea(idea){
  return (`<li id="idea-${idea.id}" class="idea">` +
              voter() +
              `  ${idea.title}: ${formatQuality(idea.quality)}` +
              `<p>Content: ${formatBody(idea.body)}<\p>`+
              deleteButton(idea.id) +
          `</li>`)
}

function formatQuality(quality){
  return {0: "swill", 1: "plausible", 2: "genius"}[quality]
}

function formatBody(body){
  var index = body.split(" ").reduce(function(acc, word){
    if(acc + word.length < 100){
      return acc + word.length
    } else {
      return acc
    }
  }, 0)
  return body.substring(0,index)
}
