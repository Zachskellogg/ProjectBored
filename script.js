var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://rawg-video-games-database.p.rapidapi.com/developers/%7Bid%7D",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
		"x-rapidapi-key": "fba6195fe3mshbca51f81f996315p19a926jsne57c3064f574"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});






















































































































function searchMovies(movie) {
    
    for(var i = 0; i<50; i++){
        pageNu = (Math.floor(Math.random() * 50));
    }  

    var queryURL = "https://www.omdbapi.com/?s=horror&page=" + pageNu + "&apikey=d9a4745e";
    console.log(queryURL);
    
   
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
        for(var i = 0; i<50; i++){
            arraySearch = (Math.floor(Math.random() * 10));
        }  
        console.log(arraySearch);
     
      console.log(response);

      var movieName = $("<h1>").text(response.Search[arraySearch].Title);
      var movieImage = $("<img>").attr("src", response.Search[arraySearch].Poster);
        
    

      $("#movieDiv").empty();
      $("#movieDiv").append(movieName, movieImage);
    });
  }
  $("#searchMovie").on("click", function(event) {
    event.preventDefault();
    var movieSearch = $('#movieInput').val().trim();

    searchMovies(movieSearch);
});
























