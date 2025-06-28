const apiKey = window.ENV.API_KEY;
const apiUrl = window.ENV.API_URL;
const exchangeApiUrl = window.ENV.EXCHANGE_API_URL;

const fromSelection = document.querySelector("#from");
const toSelection = document.querySelector("#to");

const fetchSymbols = async () => {
  const data = await fetch(apiUrl + "symbols" + "?access_key=" + apiKey);
  const response = await data.json();
  for (let key in response.symbols) {
    const option1 = document.createElement("option");
    option1.value = key;
    option1.textContent = key;
    fromSelection.appendChild(option1);

    const option2 = document.createElement("option");
    option2.value = key;
    option2.textContent = key;
    toSelection.appendChild(option2);
  }
};

fetchSymbols();

const exchangeCurrency = async(amount,from,to) =>{
  const data = await fetch(exchangeApiUrl + 'latest/' + from);
  const result = await data.json();

  const rate = result.conversion_rates[to];

  const result_card = document.querySelector("#result-card");

  document.querySelector(".result").style.display = "flex";

  result_card.innerHTML = `Currency Exchange of ${amount} ${from} is ${rate * amount} ${to}`;
  // console.log(rate*amount, to);

}

const btn = document.querySelector('#button');

btn.addEventListener('click',()=>{
  let amount = document.getElementById('amount').value;
  let from = document.querySelector('#from').value;
  let to = document.querySelector('#to').value;

  console.log(amount, from, to);
  exchangeCurrency(amount,from,to);
});