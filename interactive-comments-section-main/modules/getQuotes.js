import key from "../key.js";

const url = "https://api.api-ninjas.com/v1/quotes?category=";

console.log(key);

const getQuotes = () => {
  console.log("getQuotes");
  fetch(url + "happiness")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
};

export default getQuotes;
