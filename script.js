  function weather() {

  //variables for the API
      var location = document.getElementById("location");
      var apiKey = 'bfc4c57d1750f34f350613793fc83826';
      var url = 'https://api.forecast.io/forecast/';

  //Gets your current location
      navigator.geolocation.getCurrentPosition(success, error);

  //Makes your location to latitude & longitude which the API can read
      function success(position) {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
        //TEST THE API SOMEWHERE ELSE
        //longitude = 13.3736;
        //latitude = 49.7384;

  //Makes the loading text to work
        location.innerHTML = "";
  //Sends the URL to the API (or something)
         $.getJSON(url + apiKey + "/" + latitude + "," + longitude + "?callback=?", function(data) {
          $('#temp').html(data.hourly.summary);

          //Gets the weather data from the api
          var dailySummary = data.hourly.summary;

          //Used in the getElementById to display yes or no.
          var rainy = "";

          //TEXT TO TEST IF THE IF STATEMENT WORKS
          //var testRainy = "this text contains rain"

          //IF STATEMENT THAT LOOKS IF dailySummary VARIABLE CONTAINS THE WORD "rain". I
            if (dailySummary.includes("rain")||dailySummary.includes("Rain")) {
              rainy= "YES";
              document.getElementById("background").style.backgroundColor = '#3acfbd';
              document.getElementById("textcolor").style.color = '#335f62';
            } else if (dailySummary.includes("sun")||dailySummary.includes("Sun")){
              rainy= "NO";
              document.getElementById("background").style.backgroundColor = '#fef659';
              document.getElementById("textcolor").style.color = '#ecbb09';
            } else {
              rainy= "NO";
              document.getElementById("background").style.backgroundColor = '#e2e4e3';
              document.getElementById("textcolor").style.color = '#696969';
            }
          //Sends the rainy variable to the weather Id in index.html
          document.getElementById("weather").firstChild.nodeValue = rainy;
          console.log(dailySummary);
        });
      }

  //Error and searching function.
      function error() {
        location.innerHTML = "Unable to retrieve your location";
      }

      location.innerHTML = "Looking out the window...";
    }

    weather();



//api: https://darksky.net/dev
//tutorial
