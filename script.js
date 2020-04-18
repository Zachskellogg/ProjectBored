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
		console.log(response.results[arraySearch].name);

		var gameName = response.results[arraySearch].name;
		var gameImg = response.results[arraySearch].background_image;

    var newCard =`
      <div class="card-row">
        <div class="card">
          <div class="card-image">
            <div class="card-content">
              <div>${gameName}</div>
                <img src="${gameImg}">
            </div>
          </div>
        </div>
      </div>`;
    $('.card-container').append(newCard);
	});
}

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
    var bookName = response.items[arraySearch].volumeInfo.title
    var bookCover = response.items[arraySearch].volumeInfo.imageLinks.thumbnail;

    var newCard =`
      <div class="card-row">
        <div class="card">
          <div class="card-image">
            <div class="card-content">
              <div>${bookName}</div>
                <img src="${bookCover}">
            </div>
          </div>
        </div>
      </div>`;
    $('.card-container').append(newCard);
	})
}

function searchMovies() {
<<<<<<< HEAD

    var genre = $("#genreSelect :selected").text();
    var pageNu = (Math.floor(Math.random() * 80) + 1);
    var movieSearchURL = "https://www.omdbapi.com/?s=" + genre + "&page=" + pageNu + "&apikey=d9a4745e";
  //  console.log(movieSearchURL);
=======
    var genre = $("#genreSelect :selected").text();
    var pageNu = (Math.floor(Math.random() * 80) + 1);
    var movieSearchURL = "https://www.omdbapi.com/?s=" + genre + "&page=" + pageNu + "&apikey=d9a4745e";
   console.log(movieSearchURL);
>>>>>>> master
    $.ajax({
      url: movieSearchURL,
      method: "GET"
    }).then(function(response) {
      var arraySearch = (Math.floor(Math.random() * 9));
      // console.log(arraySearch);
      // console.log(response);  
       var movieSearch2URL = "https://www.omdbapi.com/?T=" + response.Search[arraySearch].Title + "&apikey=d9a4745e";
      movieDetail(movieSearch2URL);
      console.log(movieSearch2URL);
    });

   function movieDetail(movieSearch2URL) {
    $.ajax({
      url: movieSearch2URL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
      switch(response.Rated) {
          case'G':
          case'PG':
          case'PG-13':
          case'R':
          case'N/A':
          var movieName = response.Title,
              moviePoster = response.Poster
              movieActors = response.Actors
              var newCard =`   <div class="card-row">
              <div class="card col-md-2">
                <div class="card-image">
                  <div class="card-content">
                    <div><b>${movieName}</b></div>
                    <img src="${moviePoster}">
                    <div><b>Actors: </b> ${movieActors}</div>
                  </div>
                </div>
              </div>
            </div>`;
            $('.card-container').append(newCard);
          break;
          default: 
          searchMovies();
          break;
      }
     
    });
  }
}
// radio button checked and the button pushed
  $(".btn").on("click", function(event) {
    var checkMovie = document.querySelector('input[name="group1"]:checked');
    var checkGame = document.querySelector('input[name="group2"]:checked');
    var checkBook = document.querySelector('input[name="group3"]:checked');
    if (checkGame != null) {
      for (i=0; i<6; i++) {
        event.preventDefault();
        randomGame();
      }
    }
    else if (checkBook !=null) {
      for (i=0; i<6; i++) {
        event.preventDefault();
        randomBook();
      }
    }
    else if(checkMovie != null) { 
      for (i=0; i<6; i++) {
        event.preventDefault();
        searchMovies();
        // var movieSearch = $('#movieInput').val().trim();
      }  
    }
  });
      
// Poster
// name
// Rating 
// year 
	
