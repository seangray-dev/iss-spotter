const request = require("request");

const fetchMyIP = function (cb) {
  const API = "https://api.ipify.org?format=json";

  request(API, (error, response, body) => {
    if (error) {
      cb(error, null);
      return;
    }

    if (response.statusCode !== 200) {
      cb(
        Error(
          `Status Code ${response.statusCode} when fetching IP. Response: ${body}`
        ),
        null
      );
      return;
    }

    const ip = JSON.parse(body).ip;
    cb(null, ip);
  });
};

const fetchCoordsByIp = function (ip, cb) {
  const API = `http://ipwho.is/${ip}`;

  request(API, (error, response, body) => {
    if (error) {
      cb(error, null);
      return;
    }

    const parsedBody = JSON.parse(body);

    const { latitude, longitude } = parsedBody;

    cb(null, { latitude, longitude });
  });
};

const fetchISSFlyOverTimes = function (coords, cb) {
  const { latitude, longitude } = coords;
  const API = `https://iss-flyover.herokuapp.com/json/?lat=${latitude}&lon=${longitude}`;

  request(API, (error, response, body) => {
    if (error) {
      cb(error, null);
      return;
    }

    if (response.statusCode !== 200) {
      cb(
        Error(
          `Status Code ${response.statusCode} when fetching ISS pass times: ${body}`
        ),
        null
      );
      return;
    }

    const passes = JSON.parse(body).response;
    cb(null, passes);
  });
};

module.exports = { fetchMyIP, fetchCoordsByIp, fetchISSFlyOverTimes };
