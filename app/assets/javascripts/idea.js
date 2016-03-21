function domIdea(idea){
  return (`<li class='idea ${idea.id}'>${idea.title}: ${formatQuality(idea.quality)}` +
            `<p>Content: ${formatBody(idea.body)}<\p>`+
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
