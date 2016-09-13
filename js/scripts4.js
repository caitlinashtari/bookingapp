$(document).ready(function(){
  $("#blanks form").submit(function(event){
    var personInput = $("input#person").val();
    var dateInput = $("input#date").val();
    var startTimeInput = $("input#startTime").val();
    var endTimeInput = $("input#endTime").val();

    $('.person').text(personInput);
    $('.date').text(dateInput);
    $('.startTime').text(startTimeInput);
    $('.endTime').text(endTimeInput);
    $('#confirmation').show();

    event.preventDefault();
  });

});
