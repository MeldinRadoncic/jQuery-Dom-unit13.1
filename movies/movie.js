


// preventing defaule behavior
$('#form').on('submit',function(e) {
  e.preventDefault();
})

const movieArr=[];

// creating event on Add button when is clicked
$('#btn').on('click',function(e) {
  // Saving in the variable whatever is inserted in title input
  let title=$('#title').val();
  // inserted title has to contain 2+ charackters
  if(title.length <=2) {
    alert('Text should have more then 2 charackters')
    return;
  }

// Saving range in variable
  let range=$('#range').val();
  //creating paragraph which is going to contain title and range
  let movieData = $('<p>'+title+ " "+ range + '</p>');
  // Creating remove btn
  let removeBtn= $('<button>Remove</button>');
  $(movieData).append(removeBtn);
  // creating id fot each paragraph
  const movieID = Date.now();
  //Appending everything to DiV
  $('#div').append(movieData);
  // Pushing everything to movieArr
  movieArr.push({id:movieID , title:title , range:range});
  // Reset the title and range
  $('#title').val('');
  $('#range').val('5');
  console.log(movieArr);
  // Removing paragraphs
$(removeBtn).on('click', function(e) {
// Here we have to find the id of the item which we want to remove
///
/// removing paragraph
  $(this).parent().remove();
///
// Here we should update  movieArr we the paragraph is deletet

})

// Inside HTML are 2 buttons for sorting by title and by range
// When User press sort by title all titles should be sorted by alphabet
// User press on sort by range all movies should sorted by range



})
