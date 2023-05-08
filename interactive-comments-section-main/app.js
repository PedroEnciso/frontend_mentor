import { createCardHtml, createErrorHtml } from "./modules/htmlGenerator.js";

const card_wrapper = document.getElementById("card_wrapper");

fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data.comments.forEach((comment) => {
      const card = createCardHtml(comment);
      card_wrapper.appendChild(card);
    });
  })
  .catch((err) => {
    const error = createErrorHtml(err.message);
    card_wrapper.appendChild(error);
  });
