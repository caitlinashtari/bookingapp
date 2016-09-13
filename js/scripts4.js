$(document).ready(function(){
  $("#blanks form").submit(function(event){
    var personInput = $("input#person").val();
    var startTimeInput = $("input#startTime").val();
    var endTimeInput = $("input#endTime").val();
    var day = $("#day").val();
    var service = $("input:radio[name=service]:checked").val();
    var date = $("#appointment").val();
    var color = $("#color").val();

    $('.person').text(personInput);
    $('.startTime').text(startTimeInput);
    $('.endTime').text(endTimeInput);
    $('#confirmation').show();

    event.preventDefault();
  });

});
