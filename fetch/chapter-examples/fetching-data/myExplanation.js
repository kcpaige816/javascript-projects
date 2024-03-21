const fetchPromise = fetch("https://handlers.education.launchcode.org/static/weather.json");//requesting that the data from the URL be fetched & stored in promise variable
fetchPromise.then( function(response) {//once fetched data is rcvd, pass into response handler function as a parameter
    const jsonPromise = response.json();//assign the response data that was passed in, to a new promise variable and apply the json() function to turn into JavaScript Object Notation format
    jsonPromise.then( function(json) {//pass newly json formatted data into 2nd response handler function which-(pt1.)
    console.log("temp", json.temp);//(pt.2)-then prints the temp value of the json object applying dot notation
    });
} );

