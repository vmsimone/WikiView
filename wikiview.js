$(document).ready(function() {
  $(".srch").on("click", function() {
    var lookUp = $("#userInput").val();
    var wiki =
      "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search=" +
      lookUp;
    var postMe = "";
    $.ajax(wiki, {
      dataType: "json",
      type: "GET",
      success: function(data) {
        $(".results").html(data[3][0]);
        for (x = 0; x < 10; x++) {
          //separated for easier readability
          //class and link
          postMe +=
            "<a href=" +
            "'" +
            data[3][x] +
            "'" +
            "target='_blank'><div class='artcl'>";
          //title
          postMe += "<h2>" + data[1][x] + "</h2>";
          //description
          postMe += "<p>" + data[2][x] + "</p></div></a>";
          $(".results").html(postMe);
        }
        $(".artcl").animate({'opacity':1}, 1000);
        $('html, body').animate({
      scrollTop: $('input').offset().top
    }, 500);
      }
    });
  });
});
