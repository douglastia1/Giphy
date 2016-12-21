$(document).ready(function() {
$("#Searchbutton").click(function(){
var tiagiphy =  $("#Searchfield").val()

    $.getJSON(
     
      "https://api.giphy.com/v1/gifs/search?q=" + tiagiphy + "&api_key=dc6zaTOxFJmzC",
     
     
      function(response) {
        console.log(response);
        $("#gif").append("<img src=" + response.data[0].images.fixed_width_downsampled.url + ">");
      });

});

    
});