$( () => {
  $(".devour").on("click", function(event) {
    var id = $(this).data("id");
    // devoured = 1;
    console.log(id)
    // $(`#${id}`).remove();
  })
})



$($("#submit").on("submit"), (event) => {
  event.preventDefault()
})

