(function(){
    let DOMStrings = {
        Mainbtn: document.getElementById("form-btn"),
        userAge: document.getElementById("age").value,
        userWeight: document.getElementById("weight").value,
        userSex: document.getElementById("sex").value,
        userHoursDrinking: document.getElementById("duration").value,
        bellyYes: document.getElementById("bellyYes"),
        bellyNo: document.getElementById("bellyNo"),
        hydrateYes: document.getElementById("hydrateYes"),
        hydrateSome: document.getElementById("hydrateSome"),
        hydrateNo: document.getElementById("hydrateNo"),
        result: document.getElementById("result-text"),
        img: document.getElementById("img")
    };

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
        };

    let drinkScores = {
        shotScore: document.getElementById("shot").value * drinks.shot,
        beerCanScore: document.getElementById("beerCan").value * drinks.beerCan,
        beerPintScore: document.getElementById("beerPint").value * drinks.beerPint,
        craftBeerCanScore: document.getElementById("craftBeerCan").value * drinks.craftBeerCan,
        craftBeerPintScore: document.getElementById("craftBeerPint").value * drinks.craftBeerPint,
        wineGlassScore: document.getElementById("wineGlass").value * drinks.wineGlass,
        mixedDrinkScore: document.getElementById("mixedDrink").value * drinks.mixedDrink,
        cocktailScore: document.getElementById("cocktail").value * drinks.cocktail,
        cocktailStrongScore: document.getElementById("cocktailStrong").value * drinks.cocktailStrong
        }

    let calculateHangover = () => {
        let total = 0;
        
        sexCalc(DOMStrings.userSex);
        console.log(total);
        console.log(DOMStrings.userAge);
        if (ageCalc(DOMStrings.userAge) == "invalid" || weightCalc(DOMStrings.userWeight) == "invalid" || timeCalc(DOMStrings.userHoursDrinking) == "invalid") {
            return;
        };

        if (DOMStrings.bellyYes.checked) {
        total += -150;
        } else {
            total = total;
        }; 

        if (DOMStrings.hydrateYes.checked) {
            total += -150;
        } else if (DOMStrings.hydrateSome.checked) {
            total += -50;
        } else {
            total = total;
        };

        console.log(total + " grandtotal")
        total = drinkScores.shotScore + drinkScores.beerCanScore + drinkScores.beerPintScore + drinkScores.craftBeerCanScore + drinkScores.craftBeerPintScore + drinkScores.wineGlassScore + drinkScores.mixedDrinkScore + drinkScores.cocktailScore + drinkScores.cocktailStrongScore + ageScore + weightScore + sexScore + timeScore;
        console.log(sexScore);
        
        if (total < 400) {
            console.log(total);
            DOMStrings.result.innerText = "Get off this website, you're not even drunk.  You go and have yourself a productive day tomorrow."
            return img.src = "https://i.giphy.com/media/OMK7LRBedcnhm/giphy.webp";

        } else if (total >= 400 && total < 600) {
            console.log(total);
            DOMStrings.result.innerText = "You're on the fence to being hungover- drink water and take 2 tylenol."
            DOMStrings.img.src = "https://media.giphy.com/media/acIy5aKe4nryg/giphy.gif";
        } else if (total >= 600 && total < 1000) {
            console.log(total);
            DOMStrings.result.innerText = "You're in trouble... Tomorrow is going to be rough.  Not much we can do at this point but glad you're coherent enough to fill out an online form."
            DOMStrings.img.src = "https://media.giphy.com/media/pcKnpFrumIM7TtzayE/giphy.gif";
        } 
        else {
            console.log(total);
            DOMStrings.result.innerText = "How did you even manage to use the internet in this state?  Tomorrow will be hell for you.  Best of luck.";
            DOMStrings.img.src = "https://media.giphy.com/media/o6xoGwmBIb32M/giphy.gif";
        }
    };

    // Supplementary functions

    function ageCalc(enterAge) {
        let ageScore;
        if (isNaN(enterAge) || enterAge < 21 || enterAge > 99) {
            // alert("Please input a valid age");
            console.log("invalid age");
            return "invalid";
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

    function weightCalc(enterWeight) {
        let weightScore;
        if (isNaN(enterWeight) || enterWeight < 50 || enterWeight > 1400) {
            // alert("Please input a valid weight.");
            console.log("invalid weight");
            return "invalid";
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

    function sexCalc(sex) {
        let sexScore;
        if (sex == "male") {
            sexScore = 0;
        } else if (sex == "female") {
            sexScore = 100
        }
        return sexScore;
    }

    function timeCalc(enterTime) {
        let timeScore;
        if (isNaN(enterTime) || enterTime < 0 || enterTime > 24) {
            // alert("Please input a valid amount of hours.");
            console.log("invalid time");
            return "invalid";
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
        DOMStrings.Mainbtn.addEventListener("click", calculateHangover);

})();
 
// let i = 0;
// do {
//     console.log("fuck " + i)
//     i++;
// } while (i < 5);

// let i = 0;
// while (i < 10) {
//     console.log("fuck " + i )
//     i++;
// }

// for (let i = 0; i < 10; i++) {
//     console.log("fuck " + i )
// }