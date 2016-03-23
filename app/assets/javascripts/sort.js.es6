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
