## Install dependencies
npm install

## Run Test
npm test

## Start Server
node index.js

## Poker API can be accessed by 
POST http://localhost:8080/evaluatePokerHands
The body of the request should be a JSON array with the following format:
[
    { "Angel": "2H 3D 5S 9C KD", "Bodhi": "2C 3H 4S 8C AH" },
    {"Cacey": "2H 3H 4H 5H 6H", "Dominique": "2C 2H 3H 3C KH"}
]

## Example cURL request
curl -X POST \
  http://localhost:8080/evaluatePokerHands \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 381e77d8-86df-87fa-870d-2c049821b0d1' \
  -d '[{ "Angel": "2H 3D 5S 9C KD", "Bodhi": "2C 3H 4S 8C AH" },
{"Cacey": "2H 3H 4H 5H 6H", "Dominique": "2C 2H 3H 3C KH"}]'