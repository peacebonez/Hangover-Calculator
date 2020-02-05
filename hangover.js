(function(){

    let result = document.querySelector('#result-text');
    let img = document.querySelector('#img');

    function calculateHangover() {
        
        // let userAge = document.getElementById("age");

        // userAge.name = `${ageCalc(userAge.value)}`;
        let userAge = document.getElementById("age").value
        let userWeight = document.getElementById("weight").value
        let userSex = document.getElementById("sex").value;
        let userHoursDrinking = document.getElementById("duration").value;
        let userFull = document.getElementById("bellyYes");
        let userHungry = document.getElementById("bellyNo");
        let userHydrated = document.getElementById("hydrateYes");
        let userHydrateMid = document.getElementById("hydrateSome");
        let userParched = document.getElementById("hydrateNo");

        sexCalc(userSex);
        console.log("user sex is " + userSex);
        console.log("sex score is " + sexScore);
        
        if (ageCalc(userAge) == "invalid" || weightCalc(userWeight) == "invalid" || timeCalc(userHoursDrinking) == "invalid") {
            return;
        }

        let total = drinksTotal() + weightScore + sexScore + timeScore;
        // console.log(total + " TEST");

        if (userFull.checked) {
            total += -150;
        } else if (userHungry.checked) {
            total = total;
        } else {
            return;
        }

        if (userHydrated.checked) {
            total += -150;
        } else if (userHydrateMid.checked) {
            total += -50;
        } else if (userParched.checked) {
            total = total;
        } else {
            return;
        };

        calcTotal(total);
    };   


    function ageCalc(enterAge) {
        if (isNaN(enterAge) || enterAge < 21 || enterAge > 99) {
            // alert("Please input a valid age");
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
        if (isNaN(enterWeight) || enterWeight < 50 || enterWeight > 1400) {
            // alert("Please input a valid weight.");
            return "invalid";
        };

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
        if (sex == "male") {
            sexScore = 0;
        } else if (sex == "female") {
            sexScore = 100
        }
        return sexScore;
    };

    function timeCalc(enterTime) {
        if (isNaN(enterTime) || enterTime < 0 || enterTime > 24) {
            // alert("Please input a valid amount of hours.");
            return "invalid";
        };

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

    function drinksTotal() {
        const drinkInput = Array.from(document.querySelectorAll('[class="drink-input drink-adder"]'))
        .filter(amount => amount.value !== "")
        .map(num => parseInt(num.value * num.name))
        .reduce((prev, curr) => parseInt(prev + curr));
        return drinkInput;
    };

    function calcTotal(total) {
        if (total < 400) {
            console.log(total);
            result.innerText = "Get off this website, you're not even drunk.  You go and have yourself a productive day tomorrow.";
            return img.src = "https://i.giphy.com/media/OMK7LRBedcnhm/giphy.webp";

        } else if (total >= 400 && total < 600) {
            console.log(total);
            result.innerText = "You're on the fence to being hungover- drink water and take 2 tylenol.";
            return img.src = "https://media.giphy.com/media/acIy5aKe4nryg/giphy.gif";

        } else if (total >= 600 && total < 1000) {
            console.log(total);
            result.innerText = "You're in trouble... Tomorrow is going to be rough.  Not much we can do at this point but glad you're coherent enough to fill out an online form.";
            return img.src = "https://media.giphy.com/media/pcKnpFrumIM7TtzayE/giphy.gif";
        } 
        else {
            console.log(total);
            result.innerText = "How did you even manage to use the internet in this state?  Tomorrow will be hell for you.  Best of luck.";
            return img.src = "https://media.giphy.com/media/o6xoGwmBIb32M/giphy.gif";
        }
    }
    document.querySelector("#form-btn").addEventListener("click", calculateHangover);  
})();