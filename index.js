let occasion = [];
function writeCards(names, event) {
    for (let i = 0; i < names.length; i++) {
        occasion.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`, ); 
    }
    return occasion;
}

function countDown(x){
    let y = parseInt(x);
    while (y >= 0) {
        console.log(y);
        y--;
    }
}
