const request = require('./request')
const response = require('./response')

function makerequest(url, data) {
    request.send(url, data);
    return response.read();
}
// makerequest('https://google.com', 'hello');
const responseData = makerequest('https://google.com');
console.log(responseData);