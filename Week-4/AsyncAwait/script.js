// Get Free Key from https://exchangerate.host/ ,
// and replace the string below with the API_KEY.
const API_KEY = 'enterYourApiKey';

const getExchangeRate = async (currency) => {
  const url = `http://api.exchangerate.host/live?access_key=${API_KEY}&format=1&currencies=${currency}`;
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    if (data.quotes) {
      return Number.parseFloat(Object.values(data.quotes).shift()).toFixed(4);
    }
  }
  return null;
};

const fun = (currency) => {
  getExchangeRate(currency)
    .then((rate) => {
      console.log(rate);
    })
    .catch((error) => {
      console.log(error);
    });
};

fun('AUD');
fun('XYZ');
