async function fetchData(){
    const URL_TO_FETCH = 'https://api.adviceslip.com/advice'
    fetch(URL_TO_FETCH).then(function(response) {
        response.json().then(function(data) {
          let advice = data.slip.advice
          const conselhoContainer = document.getElementById('conselho');
          const conselho = document.createElement('span');
          conselho.innerText = advice;
          conselhoContainer.appendChild(conselho)
        });
      }).catch(function(err) {
        console.error('Failed retrieving information', err);
      });
      
}

fetchData();
