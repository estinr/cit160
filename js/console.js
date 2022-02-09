function ticketPrice() {
    var age = 38;
    var gamesAttended = 6;
    
    var price = 0;
    if (age < 18) {
        if (gamesAttended < 6)
            price = 8.0;
        else if (gamesAttended < 11)
            price = 6.0;
        else
            price = 5.0;
    }
    else if (age < 55) {
        if (gamesAttended < 11)
            price = 10.0;
        else
            price = 8.0;
    }
    else {
        if (gamesAttended < 11)
            price = 8.0;
        else
            price = 6.0;
    }

    console.log(price);
}
