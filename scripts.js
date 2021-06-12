document.addEventListener('DOMContentLoaded', function(){
    console.log('Ready')

    const form = document.querySelector('.form');
    const button = document.querySelector('.button')
    const year = document.querySelector('.year');
    const trivia = document.querySelector('.trivia');
    const fact = document.querySelector('.fact');
    
   button.addEventListener('click', function() {

    let selectYear = document.querySelector('#year').value
    function getYear(){
        fetch(`https://numbersapi.p.rapidapi.com/${selectYear}/year/?json=true&fragment=true`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "b3777a1acbmshd4c9e28ae2798ddp115066jsnddeea8e270ee",
        "x-rapidapi-host": "numbersapi.p.rapidapi.com"
	}
    }).then((response) => response.json())
    .then(response => {
        console.log(response);

        const yearFact = response[`${selectYear}`]['Year'];
        year.innerHTML = `<h2>Year</h2> ${yearFact}`;

    })
    .catch(err => {
        console.error(err);
    });
    }
    getYear()
    function getTrivia() {

        let triviaSelect = document.querySelector(`#trivia`).value
        fetch(`https://numbersapi.p.rapidapi.com/${triviaSelect}/trivia/?json=true&notfound=floor&fragment=true`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "b3777a1acbmshd4c9e28ae2798ddp115066jsnddeea8e270ee",
        "x-rapidapi-host": "numbersapi.p.rapidapi.com"
	}
        }).then((response) => response.json())
        .then(response => {
            console.log(response);

            const triviaFact = response[`${triviaSelect}`]['Trivia'];
            trivia.innerHTML = `<h3>Trivia</h3> ${triviaFact}`;
        })
        .catch(err => {
            console.error(err);
        });
    }
    getTrivia()
    
    function getFact() {

        let valueFact = document.querySelector(`#fact`).value
        fetch("https://numbersapi.p.rapidapi.com/random/{valueRand}/?json=true&fragment=true&max=20&min=10", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "b3777a1acbmshd4c9e28ae2798ddp115066jsnddeea8e270ee",
        "x-rapidapi-host": "numbersapi.p.rapidapi.com"
	}
        }).then((response) => response.json())
        .then(response => {
            console.log(response);

            const factType = response[`${valueFact}`]['fact'];
            fact.innerHTML = `<h3>Fact</h3> ${factType}`;
        })
        .catch(err => {
            console.error(err);
        });
    }

    getFact()
   })
    
})