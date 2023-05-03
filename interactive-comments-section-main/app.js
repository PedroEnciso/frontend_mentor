const card_wrapper = document.getElementById("card_wrapper");

fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
