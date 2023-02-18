import { send } from './request.mjs';
import { read } from './response/mjs';

function makerequest(url, data) {
    send(url, data);
    return read();
}
// makerequest('https://google.com', 'hello');
const responseData = makerequest('https://google.com');
console.log(responseData);

