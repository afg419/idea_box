class Idea{
  constructor(title, body, quality, id, ideas){
    this.id = id;
    this.title = title;
    this.body = body;
    this.quality = quality;
    this.active = false;
    this.ideas = ideas
    this.format = new IdeaFormat(this)
    this.edit = new IdeaEdit(this)
    this.delete = new IdeaDelete(id)
    this.voter = new IdeaVote(id)
    this.$el = this.createDiv();
  }

  render(){
    this.$el.html(this.ideaHtml());
    this.setEventListeners();
  }

  ideaHtml(){
    return (  this.voter.buttons() +
              `<div class='title'>${this.format.ideaTitle()}</div>` + ` ${this.format.ideaQuality()}` +
              `<p class='body'>Content: ${this.format.ideaBody()}</p>` +
              `${this.delete.button()} <span>${this.edit.button()}</span>` +
              `<br><br>`)
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
    this.render();
  }

  createDiv(){
    if($(`#idea-${this.id}`).val() === undefined){
      $('.ideas').prepend(`<li id="idea-${this.id}" class="idea"></li>`)
    }
    return this.$el = $('.ideas').find(`#idea-${this.id}`);
  }
}
