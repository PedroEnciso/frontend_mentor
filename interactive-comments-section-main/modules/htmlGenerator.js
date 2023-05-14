// card_info: object, holds all the info of the comment
const createCardHtml = (card_info, user) => {
  const card = document.createElement("div");
  card.classList.add("card");

  const card_title_line = create_title_line(
    card_info.user.image.png,
    card_info.user.username,
    card_info.createdAt,
    user
  );
  card.appendChild(card_title_line);

  const content = document.createElement("p");
  content.innerText = card_info.content;
  card.appendChild(content);

  const card_feedback_line = create_feedback_line(card_info.score);
  card.appendChild(card_feedback_line);

  return card;
};

const create_reply_wrapper_html = () => {
  const reply_wrapper = document.createElement("div");
  reply_wrapper.classList.add("reply-wrapper");

  const hr = document.createElement("hr");
  hr.classList.add("reply-line");
  reply_wrapper.appendChild(hr);

  const reply_cards = document.createElement("div");
  reply_cards.classList.add("reply-cards");
  reply_wrapper.appendChild(reply_cards);

  return reply_wrapper;
};

const create_reply_html = (reply_info, user) => {
  const card = document.createElement("div");
  card.classList.add("card", "card-reply");

  const card_title_line = create_title_line(
    reply_info.user.image.png,
    reply_info.user.username,
    reply_info.createdAt,
    user
  );
  card.appendChild(card_title_line);

  const reply_to = document.createElement("span");
  reply_to.classList.add("reply-to");
  reply_to.innerText = `@${reply_info.replyingTo} `;

  const comment = document.createElement("span");
  comment.innerText = reply_info.content;

  const content = document.createElement("div");
  content.appendChild(reply_to);
  content.appendChild(comment);
  card.appendChild(content);

  const card_feedback_line = create_feedback_line(reply_info.score);
  card.appendChild(card_feedback_line);

  return card;
};

const create_comment_box_html = (user) => {
  const card = document.createElement("div");
  card.classList.add("card");

  const card__comment = document.createElement("textarea");
  card__comment.name = "comment";
  card__comment.rows = "3";
  card__comment.placeholder = "Add a comment...";
  card__comment.classList.add("card__comment");
  card.appendChild(card__comment);

  const div = document.createElement("div");
  div.classList.add("card__feedback-line");
  card.appendChild(div);

  const img = document.createElement("img");
  img.classList.add("profile-image");
  img.src = user.image.png;
  img.alt = "user profile pic.";
  div.appendChild(img);

  const button = document.createElement("button");
  button.classList.add("button");
  button.innerText = "send";
  div.appendChild(button);

  return card;
};

const createErrorHtml = (error) => {
  const p = document.createElement("p");
  p.innerText = `Sorry, there was an error loading the comments. The specific error message is ${error}. Please try again later.`;

  return p;
};

// supporting methods for creating re-used card components

// first line in each card
const create_title_line = (img_src, username, time_elapsed, user) => {
  const card__title__line = document.createElement("div");
  card__title__line.classList.add("card__title-line");

  const img = document.createElement("img");
  img.classList.add("profile-image");
  img.src = img_src;
  card__title__line.appendChild(img);

  const card__username = document.createElement("p");
  card__username.classList.add("card__username");
  card__username.innerText = username;
  card__title__line.appendChild(card__username);

  if (user === username) {
    const p = document.createElement("p");
    p.classList.add("card__you-tag");
    p.innerText = "you";
    card__title__line.appendChild(p);
  }

  const created_at = document.createElement("p");
  created_at.innerText = time_elapsed;
  card__title__line.appendChild(created_at);

  return card__title__line;
};

// vote/reply section in each card
const create_feedback_line = (score) => {
  const card__feedback_line = document.createElement("div");
  card__feedback_line.classList.add("card__feedback-line");

  const vote_box = document.createElement("div");
  vote_box.classList.add("vote-box");
  card__feedback_line.appendChild(vote_box);

  const add_button = document.createElement("button");
  add_button.classList.add("vote-box__button");
  add_button.innerText = "+";
  vote_box.appendChild(add_button);

  const score_number = document.createElement("span");
  score_number.classList.add("vote-box__number");
  score_number.innerText = score;
  vote_box.appendChild(score_number);

  const sub_button = document.createElement("button");
  sub_button.classList.add("vote-box__button");
  sub_button.innerText = "-";
  vote_box.appendChild(sub_button);

  const card__reply_wrapper = document.createElement("div");
  card__reply_wrapper.classList.add("card__reply-wrapper");
  card__feedback_line.appendChild(card__reply_wrapper);

  const reply_icon = document.createElement("img");
  reply_icon.src = "./images/icon-reply.svg";
  reply_icon.alt = "reply icon.";
  card__reply_wrapper.appendChild(reply_icon);

  const card__reply = document.createElement("span");
  card__reply.innerText = "reply";
  card__reply.classList.add("card__reply");
  card__reply_wrapper.appendChild(card__reply);

  return card__feedback_line;
};

export {
  createCardHtml,
  createErrorHtml,
  create_reply_html,
  create_reply_wrapper_html,
  create_comment_box_html,
};
