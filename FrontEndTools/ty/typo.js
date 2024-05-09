$(document).ready(function() {
    $.getJSON("https://www.googleapis.com/webfonts/v1/webfonts?key=YOUR_API_KEY", function(data) {
      var items = [];
      $.each(data.items, function(index, font) {
        items.push("<option value='" + font.family + "'>" + font.family + "</option>");
      });
      $("#font-select").append(items.join(""));
    });
    $("#font-select").change(function() {
      var font = $(this).val();
      $(".preview").css("font-family", font);
    });
    $("#preview-text").keyup(function() {
      var text = $(this).val();
      $(".preview").text(text);
    });
  });
 
  