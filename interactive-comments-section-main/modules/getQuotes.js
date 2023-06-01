import key from "../key.js";

const url = "https://api.api-ninjas.com/v1/quotes?category=";

const getQuotes = async () => {
  return fetch(url + "happiness", {
    headers: {
      "X-Api-Key": key,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

export default getQuotes;
