class IdeaFormat{
  constructor(title, body, quality, id){
    this.title = title;
    this.body = body;
    this.quality = quality;
    this.id = id;
  }

  ideaTitle(){
    return this.title
  }

  ideaQuality(){
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
}
