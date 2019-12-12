var button = document.getElementById("form-btn").addEventListener("click", calculateHangover);

 function calculateHangover() {

    const drinks = {
        shot: 100,
        beerCan: 100,
        beerPint: 125,
        craftBeerCan: 125,
        craftBeerPint: 150,
        wineGlass: 100,
        mixedDrink: 100,
        cocktail: 100,
        cocktailStrong: 150
        }
    

    var userAge = document.getElementById("age").value
    function ageCalc(enterAge) {

        if (isNaN(enterAge) || enterAge < 21 || enterAge > 99) {
            // alert("Please input a valid age");
            return "mofo";
        } 
        
        if (enterAge >= 21 && enterAge < 26) {
            ageScore = -100; 
        } else if (enterAge >= 26 && enterAge < 35) {
            ageScore = 0;
        } else if (enterAge >= 35 && enterAge < 55) {
            ageScore = 50;
        } else {
            ageScore = 100;
        }
        console.log("age score is " + ageScore)
        return ageScore;
    };
  

    var userWeight = document.getElementById("weight").value
    function weightCalc(enterWeight) {

        if (isNaN(enterWeight) || enterWeight < 50 || enterWeight > 1400) {
            // alert("Please input a valid weight.");
            return "mofo";
        }

        if (enterWeight < 125) {
            weightScore = 200; 
        } else if (enterWeight >= 125 && enterWeight < 150) {
            weightScore = 100;
        } else if (enterWeight >= 150 && enterWeight <= 200) {
            weightScore = 0;
        } else {
            weightScore = -100;
        }
        console.log("weight score is " + weightScore)
        return weightScore;
    };   

    var userSex = document.getElementById("sex").value;
    function sexCalc(sex) {
        if (sex == "male") {
            sexScore = 0;
        } else if (sex == "female") {
            sexScore = 100
        }
        return sexScore;
    }

    var userHoursDrinking = document.getElementById("duration").value;
    function timeCalc(enterTime) {

        if (isNaN(enterTime) || enterTime < 0 || enterTime > 24) {
            // alert("Please input a valid amount of hours.");
            return "mofo";
        }

        if (enterTime < 1) {
            timeScore = 400; 
        } else if (enterTime == 1 || enterTime == 2) {
            timeScore = 300;
        } else if (enterTime == 2) {
            timeScore = 200  
        } else if (enterTime > 2 && enterTime <= 4) {
            timeScore = 100;
        } else if (enterTime > 4 && enterTime <= 6) {
            timeScore = 50;   
        } else {
            timeScore = 0;
        }
        console.log("time score is " + timeScore);
            return timeScore;
    }; 
    
    sexCalc(userSex);
    console.log("user sex is " + userSex);
    console.log("sex score is " + sexScore);
    

    if (ageCalc(userAge) == "mofo" || weightCalc(userWeight) == "mofo" || timeCalc(userHoursDrinking) == "mofo") {
        return;
    }

    var shotScore = document.getElementById("shot").value * drinks.shot;
    var beerCanScore = document.getElementById("beerCan").value * drinks.beerCan;
    var beerPintScore = document.getElementById("beerPint").value * drinks.beerPint;
    var craftBeerCanScore = document.getElementById("craftBeerCan").value * drinks.craftBeerCan;
    var craftBeerPintScore = document.getElementById("craftBeerPint").value * drinks.craftBeerPint;
    var wineGlassScore = document.getElementById("wineGlass").value * drinks.wineGlass;
    var mixedDrinkScore = document.getElementById("mixedDrink").value * drinks.mixedDrink;
    var cocktailScore = document.getElementById("cocktail").value * drinks.cocktail;
    var cocktailStrongScore = document.getElementById("cocktailStrong").value * drinks.cocktailStrong;

    var total = shotScore + beerCanScore + beerPintScore + craftBeerCanScore + craftBeerPintScore + wineGlassScore + mixedDrinkScore + cocktailScore + cocktailStrongScore + ageScore + weightScore + sexScore + timeScore;

    if (document.getElementById("bellyYes").checked) {
    total += -150;
    } else if (document.getElementById("bellyNo").checked) {
        total = total;
    } else {
        return;
    }
    if(document.getElementById("hydrateYes").checked) {
        total += -150;
    } else if (document.getElementById("hydrateSome").checked) {
        total += -50;
    }
    else if(document.getElementById("hydrateNo").checked) {
        total = total;
    } else {
        return;
    }

    var result = document.getElementById("result-text");
    var img = document.getElementById("img");
    
    if (total < 400) {
        console.log(total);
        result.innerText = "Get off this website, you're not even drunk.  You go and have yourself a productive day tomorrow."
        return img.src = "sober.gif";

    } else if (total >= 400 && total < 600) {
        console.log(total);
        result.innerText = "You're on the fence to being hungover- drink water and take 2 tylenol."
        return img.src = "tipsy.gif";
    } else if (total >= 600 && total < 1000) {
        console.log(total);
        result.innerText = "You're in trouble... Tomorrow is going to be rough.  Not much we can do at this point but glad you're coherent enough to fill out an online form."
        return img.src = "drunk.gif";
    } 
    else {
        console.log(total);
        result.innerText = "How did you even manage to use the internet in this state?  Tomorrow will be hell for you.  Best of luck.";
        return img.src = "wasted.gif";
    }
};