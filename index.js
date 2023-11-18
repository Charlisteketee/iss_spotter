const { nextISSTimesForMyLocation } = require('./iss');

// from the body of the response, find the risetime and duration of the next 5 passes
const flyOverTimes = function(passes) {
  for (const pass of passes) {
    // Date constructor - creates "date" value found into a string
    const datetime = new Date(0);
    // set the date into universal coordinated time
    datetime.setUTCSeconds(pass.risetime);
    // find the duration from the respone
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  flyOverTimes(passes);
});

/* This code is temporary - used to find the ip address
const { fetchMyIP } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
});

// fetch coordinates
const { fetchCoordsByIP } = require('./iss');

fetchCoordsByIP('162.245.144.188', (error, coordinates) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned coordinates:' , coordinates);
});


// fetch ISS pass times
const { fetchISSFlyOverTimes } = require('./iss');

const Coords = { latitude: '49.2827291', longitude: '-123.1207375' };

fetchISSFlyOverTimes(Coords, (error, flyOverTimes) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned flyover times:' , flyOverTimes);
});

*/