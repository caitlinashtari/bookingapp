$(document).ready(function() {
  $("button#hello").click(function() {
    $("ul#user").prepend("<li>Hello!</li>");
    $("ul#webpage").prepend("<li>Hi!</li>");


    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#goodbye").click(function(){
    $("ul#user").prepend("<li>Goodbye!</li>")
    $("ul#webpage").prepend("<li>Bye!</li>");

    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#stop").click(function(){
    $("ul#user").prepend("<li>Stop Copying me!</li>")
    $("ul#webpage").prepend("<li>OK!</li>");

    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });
  });

});
