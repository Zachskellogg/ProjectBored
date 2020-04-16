// Platform ID's
// 1 = xboxone
// 4 = pc
// 7= switch
// 18 = ps4


function randomGame() {
	var pageNumber = Math.floor(Math.random() * 18881) + 1;
	var gamesUrl = "https://rawg-video-games-database.p.rapidapi.com/games?page="
	var combUrl = gamesUrl + pageNumber;
	console.log("Random Page Number: " + pageNumber);
	console.log(combUrl);

	$.ajax( {
		async: true,
		crossDomain: true,
		url: combUrl,
		method: "GET",
		headers: {
			"x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
			"x-rapidapi-key": "fba6195fe3mshbca51f81f996315p19a926jsne57c3064f574"
		}
	}).then(function(response) {
		console.log(response);
		var arraySearch = Math.floor(Math.random() * 19);
		console.log(arraySearch);
		console.log(response.results[arraySearch].name);
		var gameDiv = $("<div>");
		var gameName = response.results[arraySearch].name;
		var gameHeading = $("<h2>").text(gameName);
		gameDiv.append(gameHeading);
		var imgSrc = response.results[arraySearch].background_image;
		var image = $("<img>").attr("src", imgSrc);
		gameDiv.append(image);

		$("#game-div").append(gameDiv);
	});
}

// randomGame();























































































































































function searchMovies() {
    pageNu = (Math.floor(Math.random() * 60) + 1);
    var movieSearchURL = "https://www.omdbapi.com/?s=horror&page=" + pageNu + "&apikey=d9a4745e";
   
    $.ajax({
      url: movieSearchURL,
      method: "GET"
    }).then(function(response) {
        arraySearch = (Math.floor(Math.random() * 10));
      
      console.log(arraySearch);
     
      console.log(response);
      if (response.Search[arraySearch].Poster === 'N/A') {
        searchMovies();
      }
      else if (response === 'false') {
        searchMovies();
      }
      else {
      var movieSearch2URL = "https://www.omdbapi.com/?T=" + response.Search[arraySearch].Title + "&apikey=d9a4745e";
      movieDetail(movieSearch2URL);
      }
    });

   function movieDetail(movieSearch2URL) {
    $.ajax({
      url: movieSearch2URL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
      if (response.Rated === 'Unrated') {
        searchMovies();
      }
      else if (response.Rated === 'N/A') {
        searchMovies();
      }
      else if (response.Rated === 'UNRATED') {
        searchMovies();
      }
      else if (response.Rated === 'Not Rated') {
        searchMovies();
      }
      else if (response.Rated === 'NOT RATED') {
        searchMovies();
      }
      
    var movieDiv = response.Title
        $(movieDiv).append('#zachsCard');
    
      });
      }
    }
  

  $("#searchMovie").on("click", function(event) {
    event.preventDefault();
    // var movieSearch = $('#movieInput').val().trim();
    searchMovies();
  });
      
// Poster
// name
// Rating 
// year 
