document.addEventListener("DOMContentLoaded", function () {
  console.log("Ready");

const button = document.querySelector('.button')

button.addEventListener('click', function() {
    
  const randomgen = document.getElementById('randomgen').value

  function getRandom() {
    fetch(`https://numbersapi.p.rapidapi.com/random/${randomgen}?json=true&fragment=true&max=20&min=10`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "b3777a1acbmshd4c9e28ae2798ddp115066jsnddeea8e270ee",
        "x-rapidapi-host": "numbersapi.p.rapidapi.com"
      }
    }).then((response) => response.json())
    .then(response => {
      console.log(response);

      const displayData = document.getElementById('dataDisplay')
        displayData.innerHTML = `
        <div class="fact_container">
        <table class="details" id="fact_table">
            <tr>
            <th class="year">Year</th>
            <td>${response.year}</td>
            </tr>
            <tr>
            <th class="fact">Fact</th>
            <td>${response.text}</td>
            </tr>
            <br/>
            <tr>
            <th class="number">Number</th>
            <td>${response.number}</td>
            </tr>
        </table>
        `
    })
    .catch(err => {
      console.error(err);
    });
    }
    getRandom();
  });
});
