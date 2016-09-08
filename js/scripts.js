$(document).ready(function(){
  $("#blanks form").submit(function(event){
    var personInput = $("input#person").val();
    var animalInput = $("input#animal").val();
    var verbInput = $("input#verb").val();
    var placeInput = $("input#place").val();

    $('.person').text(personInput);
    $('.animal').text(animalInput);
    $('.verb').text(verbInput);
    $('.place').text(placeInput);
    $('#story').show();

    event.preventDefault();
  });

});
