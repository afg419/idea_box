class Idea{
  constructor(title, body, quality, id){
    this.id = id;
    this.format = new IdeaFormat(title, body, quality, id)
    this.delete = new IdeaDelete(id)
    this.voter = new IdeaVote(id)
  }

  render(){
    $('.ideas').prepend(this.ideaHtml());
    this.setEventListeners();
  }

  reRender(){
    $('.ideas').find(`#idea-${this.id}`).replaceWith(this.ideaHtml());
    this.setEventListeners();
  }

  ideaHtml(){
    return (`<li id="idea-${this.id}" class="idea">` +
                this.voter.buttons() +
                `<div class=''>${this.format.ideaTitle()}</div>` + ` ${this.format.ideaQuality()}` +
                `<p class=''>Content: ${this.format.ideaBody()}<\p>` +
                this.delete.button() +
            `</li>`)
  }

  setEventListeners(){
    this.voter.setListener();
    this.delete.setListener();
  }
}
