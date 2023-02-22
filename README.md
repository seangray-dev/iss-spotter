# ISS Spotter

This command line application provides the user with information about when the International Space Station (ISS) will pass overhead their location. It makes use of three APIs to retrieve the necessary data:

- [ipify](https://www.ipify.org/) is used to fetch the user's IP address.
- [ipwhois](https://ipwhois.io/) is used to fetch the latitude and longitude coordinates of the user's location based on their IP address.
- [iss-flyover](https://iss-flyover.herokuapp.com/json/?lat=YOUR_LAT_INPUT_HERE&lon=YOUR_LON_INPUT_HERE) is used to fetch the next times that the ISS will pass over the user's location based on their latitude and longitude coordinates.

_Note that the `iss-flyover` API used in this project is actually a third-party API that is built on top of the [Where the ISS at?](https://wheretheiss.at/w/developer) API._

The application is designed to run on the command line and is implemented in JavaScript using Node.js. The user is provided with an estimated time and date for the next five times that the ISS will pass over their location.

## Prerequisites

To run this tool, you will need to have Node.js installed on your machine. You can download [Node.js](https://nodejs.org/).

## Installation

To install the required dependencies, run the following command in your terminal:

```
npm install
```

## Usage

### Option 1: Using the Callbacks Implementation

To use the tool with the callbacks implementation, run the following command in your terminal:

```
node index.js
```

### Option 2: Using the Promises Implementation

To use the tool with the Promises implementation, run the following command in your terminal:

```
node index2.js
```

This will fetch the user's IP address, latitude and longitude coordinates, and the next times the ISS will pass over their location. The results will be displayed in the terminal.

This tool is implemented using both callbacks and Promises, providing an example of how to work with asynchronous code in Node.js using two different approaches.
