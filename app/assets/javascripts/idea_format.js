class IdeaFormat{
  constructor(idea){
    this.title = idea.title;
    this.body = idea.body;
    this.quality = idea.quality;
    this.id = idea.id;
    this.idea = idea
  }

  ideaTitle(){
    if(!this.idea.active){
      return this.title
    } else {
      return `<input class="edit-idea-title" type="text" value="${this.title}">`
    }
  }

  ideaQuality(){
    return {0: "swill", 1: "plausible", 2: "genius"}[this.quality]
  }

  ideaBody(){
    var content = this.truncatedBody()
    if(!this.idea.active){
      return content
    } else {
      return `<input class="edit-idea-desc" type="text-field"  value="${content}" size=100>`
    }
  }

  truncatedBody(){
    var finished = false;
    var index = this.body.split(" ").reduce(function(acc, word){
      if(acc+word.length > 100){
        finished = true
      }

      if(!finished){
        return acc + word.length + 1
      }else{
        return acc
      }

    }, 0)
    return this.body.substring(0,index)
  }
}
