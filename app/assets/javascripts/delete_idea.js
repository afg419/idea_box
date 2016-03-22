function deleteButton(id){
  return `<input id="delete-${id}" class="delete-idea" type="button" value="Delete">`
}

function setDeleteListener(id){
  $(`#delete-${id}`).on('click', () => {deleteIdea(id)})
}

function deleteIdea(id){
  $.ajax({
      type: "DELETE",
      url: `/api/v1/ideas/${id}`,
      success: function(msg){
        removeIdeaFromDom(msg.id);
      },
      error: function(error_message){
        alert(error_message.responseText);
      }
  });
}

function removeIdeaFromDom(id){
  $(`#idea-${id}`).remove();
}
