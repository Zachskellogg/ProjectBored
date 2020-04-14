






















































































































































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

