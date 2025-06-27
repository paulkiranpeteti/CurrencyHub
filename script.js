const apiKey = API.apiKey;
const apiUrl = API.apiUrl;

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
