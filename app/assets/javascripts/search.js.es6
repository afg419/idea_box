// $('#developer_filter_name').on('keyup', function () {
//   var currentName = this.value.toUpperCase();
//   $developers.each(function (index, developer) {
//     var $developer = $(developer);
//     if ($developer.data('name').indexOf(currentName) >= 0) {
//       $developer.show();
//     }
//     else {
//       $developer.hide();
//     }
//   });
// });



function filterIdeas(searchingFor){
  document.i.renderIdeas(function(idea){
    return (idea.title.indexOf(searchingFor) >= 0) || (idea.body.indexOf(searchingFor) >= 0)
  })
}
