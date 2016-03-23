function sortIdeas(){
  document.i.order = sortFlipper(document.i.order);
  document.i.renderIdeas();
}

function sortFlipper(ordering){
  if(ordering === ascending || ordering === noSort){
    return descending
  } else if( ordering === descending){
    return ascending
  }
}

function noSort(idea1, idea2){
  return  idea1.updated_at - idea2.updated_at
}

function descending(idea1, idea2){
  var qual = idea1.quality - idea2.quality
  if (qual != 0){
    return  idea1.quality - idea2.quality
  } else {
    return noSort(idea1, idea2)
  }
}

function ascending(idea1, idea2){
  var qual = idea2.quality - idea1.quality
  if (qual != 0){
    return  idea2.quality - idea1.quality
  } else {
    return noSort(idea1, idea2)
  }
}
