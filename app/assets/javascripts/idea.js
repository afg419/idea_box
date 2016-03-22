// function Idea(){
//   renderIdea(){
//     $('.ideas').prepend(domIdea(this));
//     setDeleteListener(this.id);
//     setVoteListener(this.id)
//   }
//
//   domIdea(){
//     return (`<li id="idea-${this.id}" class="idea">` +
//                 voter() +
//                 `<div class=''>${ideaTitle(idea)}</div>` + ` ${formatQuality(idea.quality)}` +
//                 `<p class=''>Content: ${ideaBody(idea)}<\p>` +
//                 deleteButton(idea.id) +
//             `</li>`)
//   }
// }





function renderIdea(idea){
  $('.ideas').prepend(domIdea(idea));
  setDeleteListener(idea.id);
  setVoteListener(idea.id)
}

function reRenderIdea(idea){
  $('.ideas').find(`#idea-${idea.id}`).replaceWith(domIdea(idea))
  setDeleteListener(idea.id);
  setVoteListener(idea.id)
}

function domIdea(idea){
  return (`<li id="idea-${idea.id}" class="idea">` +
              voter() +
              `<div class=''>${ideaTitle(idea)}</div>` + ` ${formatQuality(idea.quality)}` +
              `<p class=''>Content: ${ideaBody(idea)}<\p>` +
              deleteButton(idea.id) +
          `</li>`)
}

function ideaTitle(idea){
  return idea.title
}

function ideaBody(idea){
  return formatBody(idea.body)
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
