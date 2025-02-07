
/**
 * Logs the sum of 50 and 10 to the console.
 */
function sum() {
    console.log("la sommma è: " + ( 50 + 10) )
}

// Returns a random integer from 1 to 100:
function random(min, max){
    return Math.floor(Math.random() * max) + min;
}

// esportiamo sia la funzione 
// sum che la variabile user


// module.exports = {
//     sum,
//     random
// };


export {
    sum,
    random
};

