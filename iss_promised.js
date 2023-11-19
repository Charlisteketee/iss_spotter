const request = require('request-promise-native');

// function that calls all three functions to return final results of flyover data
const nextISSTimesForMyLocation = function() {
  return fetchMyIP()
  .then(fetchCoordsByIP)
  .then(fetchISSFlyOVerTimes)
  .then((data) => {
    // takes the data from the ISS flyover times and parses it
    const { response } = JSON.parse(data);
    // returns promise for fly over data for users location
    return response;
  });
} 
/*
 * Requests user's ip address from https://www.ipify.org/
 * Input: None
 * Returns: Promise of request for ip data, returned as JSON string
 */
const fetchMyIP = function() {
  return request('https://api.ipify.org?format=json');
};

// parses the ip returned from fetchMyIP and uses it in the requested url to find the coordinates
const fetchCoordsByIP = function(body) {
  const ip = JSON.parse(body).ip;
  return request(`http://ipwho.is/${ip}`);
};

// takes the longtitude and latitude required from the previous fetchCoordsByIP function and uses them in the URL to find the flyover Times
const fetchISSFlyOVerTimes = function(body) {
  const { latitude, longitude } = JSON.parse(body); 
  return request(`https://iss-flyover.herokuapp.com/json/?lat=${latitude}&lon=${longitude}`);
}


module.exports = { nextISSTimesForMyLocation };