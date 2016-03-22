class Idea{
  constructor(title, body, quality, id){
    this.id = id;
    this.title = title;
    this.body = body;
    this.quality = quality;
    this.active = false;
    this.format = new IdeaFormat(this)
    this.edit = new IdeaEdit(this)
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
                `<div class='title'>${this.format.ideaTitle()}</div>` + ` ${this.format.ideaQuality()}` +
                `<p class='body'>Content: ${this.format.ideaBody()}</p>` +
                `${this.delete.button()} <span>${this.edit.button()}</span>` +
            `<br><br></li>`)
  }

  setEventListeners(){
    this.voter.setListener();
    this.delete.setListener();
    this.edit.setListener();
  }

  resetHelpers(){
    this.format = new IdeaFormat(this);
    this.edit = new IdeaEdit(this);
  }

  reset(){
    this.setEventListeners();
    // this.resetHelpers();
    this.reRender();
  }
}
