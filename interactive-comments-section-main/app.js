import {
  createCardHtml,
  createErrorHtml,
  create_reply_html,
  create_reply_wrapper_html,
  create_comment_box_html,
} from "./modules/htmlGenerator.js";

import getQuotes from "./modules/getQuotes.js";

const card_wrapper = document.getElementById("card_wrapper");
const comment_box_wrapper = document.getElementById("comment-box-wrapper");

let currentUser;

let comments = localStorage.getItem("comments");

const fetchComments = () => {
  fetch("./data.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      currentUser = data.currentUser;
      data.comments.forEach((comment) => {
        const card = createCardHtml(comment, currentUser.username);
        card_wrapper.appendChild(card);

        if (comment.replies.length > 1) {
          const reply_wrapper = create_reply_wrapper_html();
          card_wrapper.appendChild(reply_wrapper);

          const reply_card_wrapper = reply_wrapper.lastChild;
          //display replies
          comment.replies.forEach((reply) => {
            const reply_element = create_reply_html(
              reply,
              currentUser.username
            );
            reply_card_wrapper.appendChild(reply_element);
          });
        }
      });

      const user_comment_area = create_comment_box_html(currentUser);
      comment_box_wrapper.appendChild(user_comment_area);
    })
    .catch((err) => {
      const error = createErrorHtml(err.message);
      card_wrapper.appendChild(error);
    });
};

if (!comments) {
  // fetchComments();
  getQuotes();
}
