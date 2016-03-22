class Idea{
  constructor(title, body, quality){
    this.title = title;
    this.body = body;
    this.quality = quality;
  }

  render(){
    $('.ideas').prepend(this.domIdea());
    setDeleteListener(this.id);
    setVoteListener(this.id)
  }

  domIdea(){
    return (`<li id="idea-${this.id}" class="idea">` +
                voter() +
                `<div class=''>${this.ideaTitle()}</div>` + ` ${this.formatQuality()}` +
                `<p class=''>Content: ${this.ideaBody()}<\p>` +
                this.deleteButton() +
            `</li>`)
  }

  ideaTitle(){
    return this.title
  }

  formatQuality(){
    return {0: "swill", 1: "plausible", 2: "genius"}[this.quality]
  }

  ideaBody(){
    var index = this.body.split(" ").reduce(function(acc, word){
      if(acc + word.length < 100){
        return acc + word.length
      } else {
        return acc
      }
    }, 0)
    return this.body.substring(0,index)
  }

  deleteButton(){
    return `<input id="delete-${this.id}" class="delete-idea" type="button" value="Delete">`
  }
}





// function renderIdea(idea){
//   $('.ideas').prepend(domIdea(idea));
//   setDeleteListener(idea.id);
//   setVoteListener(idea.id)
// }
//
// function reRenderIdea(idea){
//   $('.ideas').find(`#idea-${idea.id}`).replaceWith(domIdea(idea))
//   setDeleteListener(idea.id);
//   setVoteListener(idea.id)
// }
//
// function domIdea(idea){
//   return (`<li id="idea-${idea.id}" class="idea">` +
//               voter() +
//               `<div class=''>${ideaTitle(idea)}</div>` + ` ${formatQuality(idea.quality)}` +
//               `<p class=''>Content: ${ideaBody(idea)}<\p>` +
//               deleteButton(idea.id) +
//           `</li>`)
// }
//
// function ideaTitle(idea){
//   return idea.title
// }
//
// function ideaBody(idea){
//   return formatBody(idea.body)
// }
//
// function formatQuality(quality){
//   return {0: "swill", 1: "plausible", 2: "genius"}[quality]
// }
//
// function formatBody(body){
//   var index = body.split(" ").reduce(function(acc, word){
//     if(acc + word.length < 100){
//       return acc + word.length
//     } else {
//       return acc
//     }
//   }, 0)
//   return body.substring(0,index)
// }
