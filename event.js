const EventEmitter = require('events');
const celebrity = new EventEmitter();

celebrity.on('race', (result) => {
    if (result === 'win') {
        console.log("Congratulations! You are the best.")
    }
});

celebrity.on('race', (result) => {

    if (result === 'lost') {
        console.log("You Lost")
    }
});

celebrity.on('race', (result) => {
    if (result === 'win') {
        console.log("I could have better than that.")
    }
});

celebrity.emit('race', 'win');
celebrity.emit('race', 'lost');
celebrity.emit('race', 'win');
