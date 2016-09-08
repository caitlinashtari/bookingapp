$(document).ready(function(){
  $('#letterInput form').submit(function(event){

    var person = $("input#person").val();
    var address =$("input#address").val();

    $('.person1').text(person);
    $('.address1').text(address);

    $('#letter').show();
    $('#recipient').show();
    $('#message').show();

    event.preventDefault();
  });
});
