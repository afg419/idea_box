class Idea{
  constructor(title, body, quality, id){
    this.id = id;
    this.title = title;
    this.body = body;
    this.quality = quality;
    this.active = false;
    this.format = new IdeaFormat(this)
    this.edit = new IdeaEdit(this)
    this.delete = new IdeaDelete(this)
    this.voter = new IdeaVote(this)
  }

  render(){
    this.createDiv();
    this.$el.html(this.ideaHtml());
    this.setEventListeners();
  }

  ideaHtml(){
    return (  this.voter.button() +
              ` <span class='title'>${this.format.ideaTitle()}</span>: ` + ` ${this.format.ideaQuality()}` +
              `<p class='body'>Details: ${this.format.ideaBody()}</p>` +
              `${this.delete.button()} <span>${this.edit.button()}</span>` +
              `<br><br>`)
  }

  setEventListeners(){
    this.voter.setListener();
    this.delete.setListener();
    this.edit.setListener();
  }

  reset(){
    document.i.updateIdea(this)
    document.i.renderIdeas();
  }

  createDiv(){
    if($(`#idea-${this.id}`).val() === undefined){
      $('.ideas').prepend(`<li id="idea-${this.id}" class="idea"></li>`)
    }
    return this.$el = $('.ideas').find(`#idea-${this.id}`);
  }
}
