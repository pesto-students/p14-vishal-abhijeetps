const temperatureData = {
  'New York': 20,
  London: 18,
  Paris: 22,
  Tokyo: 25,
  Sydney: 28,
};

function getTemperatureForCityFirstCall(city) {
  return temperatureData[city];
}

function memoize(func) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    } else {
      const result = func.apply(this, args);
      cache[key] = result;
      return result;
    }
  };
}

const getTemperatureForCity = memoize(getTemperatureForCityFirstCall);

const temperature1 = getTemperatureForCity('New York');
console.log(temperature1);

const temperature2 = getTemperatureForCity('New York');
console.log(temperature2);

const temperature3 = getTemperatureForCity('London');
console.log(temperature3);

const temperature4 = getTemperatureForCity('London');
console.log(temperature4);
