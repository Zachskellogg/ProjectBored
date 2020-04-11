



































































































  
function searchMovies(movie) {

    var queryURL = "https://www.omdbapi.com/?s=random&apikey=d9a4745e";
    var posterURL = "http://img.omdbapi.com/?t=" + movie + "&h=600&apikey=d9a4745e";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
     
      console.log(response);

      var movieName = $("<h1>").text(response.Title);
      var movieImage = $("<img>").attr("src", response.Poster);
        console.log(movieName);
        console.log(movieImage);
    

      $("#movieDiv").empty();
      $("#movieDiv").append(movieName, movieImage);
    });
  }
  $("#searchMovie").on("click", function(event) {
    event.preventDefault();
    var movieSearch = $('#movieInput').val().trim();

    searchMovies(movieSearch);
});










































