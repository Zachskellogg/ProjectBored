// // Platform ID's
// // 1 = xboxone
// // 4 = pc
// // 7= switch
// // 18 = ps4

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

//randomGame();

function randomBook() {
	$.ajax( {
		async: true,
		crossDomain: true,
		url: "https://google-books.p.rapidapi.com/volumes",
		method: "GET",
		headers: {
			"x-rapidapi-host": "google-books.p.rapidapi.com",
			"x-rapidapi-key": "fba6195fe3mshbca51f81f996315p19a926jsne57c3064f574"
		}
	}).then(function(response) {
		console.log(response);
		var arraySearch = Math.floor(Math.random() * 10);
		console.log(arraySearch);
		console.log(response.items[arraySearch].volumeInfo.title)

	})
}

randomBook();

// var settings = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://google-books.p.rapidapi.com/volumes",
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "google-books.p.rapidapi.com",
// 		"x-rapidapi-key": "fba6195fe3mshbca51f81f996315p19a926jsne57c3064f574"
// 	}
// }

// $.ajax(settings).done(function (response) {
// 	console.log(response);
// });

	





























































































































// // function searchMovies(movie) {
    
// //     for(var i = 0; i<50; i++){
// //         pageNu = (Math.floor(Math.random() * 50));
// //     }  

// //     var queryURL = "https://www.omdbapi.com/?s=horror&page=" + pageNu + "&apikey=d9a4745e";
// //     console.log(queryURL);
    
   
// //     $.ajax({
// //       url: queryURL,
// //       method: "GET"
// //     }).then(function(response) {
// //         for(var i = 0; i<50; i++){
// //             arraySearch = (Math.floor(Math.random() * 10));
// //         }  
// //         console.log(arraySearch);
     
// //       console.log(response);

// //       var movieName = $("<h1>").text(response.Search[arraySearch].Title);
// //       var movieImage = $("<img>").attr("src", response.Search[arraySearch].Poster);
        
    

// //       $("#movieDiv").empty();
// //       $("#movieDiv").append(movieName, movieImage);
// //     });
// //   }
// //   $("#searchMovie").on("click", function(event) {
// //     event.preventDefault();
// //     var movieSearch = $('#movieInput').val().trim();

// //     searchMovies(movieSearch);
// // });
























