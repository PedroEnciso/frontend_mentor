import {
  createCardHtml,
  createErrorHtml,
  create_reply_html,
  create_reply_wrapper_html,
} from "./modules/htmlGenerator.js";

const card_wrapper = document.getElementById("card_wrapper");

let currentUser;

fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data.comments.forEach((comment) => {
      const card = createCardHtml(comment);
      card_wrapper.appendChild(card);

      if (comment.replies.length > 1) {
        const reply_wrapper = create_reply_wrapper_html();
        card_wrapper.appendChild(reply_wrapper);

        const reply_card_wrapper = reply_wrapper.lastChild;
        //display replies
        comment.replies.forEach((reply) => {
          const reply_element = create_reply_html(reply);
          reply_card_wrapper.appendChild(reply_element);
        });
      }
    });
  })
  .catch((err) => {
    const error = createErrorHtml(err.message);
    card_wrapper.appendChild(error);
  });
