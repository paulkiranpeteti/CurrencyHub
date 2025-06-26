const apiKey = API.apiKey;
const apiUrl = API.apiUrl;

const symbols = [];
const fetchSymbols = async () => {
  const data = await fetch(apiUrl + "symbols" + "?access_key=" + apiKey);
  const response = await data.json();
  for(let key in response.symbols){
    symbols.push(key);
  }
};

fetchSymbols();
console.log(symbols);