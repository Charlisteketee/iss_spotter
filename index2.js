const { nextISSTimesForMyLocation } = require('./iss_promised');

// rather than exporting and using all three functions (see below) we are only using one final function
nextISSTimesForMyLocation()
  .then((body) => {
    console.log(body)
  })
  .catch((error) => {
    console.log("It didn't work!: ", error.message);
  });

  /*
  Use all three functions in the promise chain to console.log the body of the flyover times

  fetchMyIP()
  .then(fetchCoordsByIP)
  .then(fetchISSFlyOverTimes)
  .then(body => console.log(body));

  */