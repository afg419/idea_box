class Idea{
  constructor(title, body, quality, id){
    this.title = title;
    this.body = body;
    this.quality = quality;
    this.id = id;
  }

  render(){
    $('.ideas').prepend(this.domIdea());
    this.setEventListeners();
  }

  reRender(){
    $('.ideas').find(`#idea-${this.id}`).replaceWith(this.domIdea());
    this.setEventListeners();
  }

  domIdea(){
    return (`<li id="idea-${this.id}" class="idea">` +
                this.voter() +
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

  voter(){
    return (`<input class="upvote" type="button" value="^">` +
           `<input class="downvote" type="button" value="v">`)
  }

  setVoteListener(){
    $(`#idea-${this.id}`).find('.upvote').on('click', () => vote(1,this.id))
    $(`#idea-${this.id}`).find('.downvote').on('click', () => vote(-1,this.id))
  };

  setDeleteListener(){
    $(`#delete-${this.id}`).on('click', () => {deleteIdea(this.id)})
  }

  setEventListeners(){
    this.setVoteListener();
    this.setDeleteListener();
  }
}





// function renderIdea(idea){
//   $('.ideas').prepend(domIdea(idea));
//   setDeleteListener(idea.id);
//   setVoteListener(idea.id)
// }
//

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
