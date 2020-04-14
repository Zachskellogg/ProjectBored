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

randomGame();























































































































































function searchMovies() {
    
        pageNu = (Math.floor(Math.random() * 50) + 1);
     

    var queryURL = "https://www.omdbapi.com/?s=horror&page=" + pageNu + "&apikey=d9a4745e";
    console.log(queryURL);
    
   
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
        arraySearch = (Math.floor(Math.random() * 10));
      
      console.log(arraySearch);
     
      console.log(response);
      if (response.Search[arraySearch].Poster === 'N/A') {
        searchMovies();
      }

      var movieName = $("<h1>").text(response.Search[arraySearch].Title);
      var movieImage = $("<img>").attr("src", response.Search[arraySearch].Poster);
        
      // $("#movieDiv").empty();
      // $("#movieDiv").append(movieName, movieImage);
      for ( i=0; i<6; i++) {
      var newImg = `<div class=col-md-4 col-sm-6>
      <div class=portfolio-item>
          <h1> ${response.Search[arraySearch].Title}</h1>
          <div class=image>
              <img src=${response.Search[arraySearch].Poster}>
          </div>
      </div>
    </div>`
      
    $('#movieDiv').append(newImg);
      }
    });
  }

  
  $("#searchMovie").on("click", function(event) {
    event.preventDefault();
    var movieSearch = $('#movieInput').val().trim();

    searchMovies(movieSearch);

      });
      
      // <div class=hover-effect>
      //     <div class=hover-content>
      //         <h1>${albumName}</h1></a>
      //         <p id=clickInfo${albumCount}>click track to listen to sample audio</p>
      //         <div class=tracks id=album${albumCount}>
      //         </div>
      //     </div>
      // </div>
// Poster
// name
// Rating 
// year 
// plot 

