const createCardHtml = (card_info) => {
  const card = document.createElement("div");
  card.classList.add("card");

  const card__title__line = document.createElement("div");
  card__title__line.classList.add("card__title-line");
  card.appendChild(card__title__line);

  const img = document.createElement("img");
  img.classList.add("profile-image");
  img.src = card_info.user.image.png;
  card__title__line.appendChild(img);

  const card__username = document.createElement("p");
  card__username.classList.add("card__username");
  card__username.innerText = card_info.user.username;
  card__title__line.appendChild(card__username);

  const created_at = document.createElement("p");
  created_at.innerText = card_info.createdAt;
  card__title__line.appendChild(created_at);

  const content = document.createElement("p");
  content.innerText = card_info.content;
  card.appendChild(content);

  const card__feedback_line = document.createElement("div");
  card__feedback_line.classList.add("card__feedback-line");
  card.appendChild(card__feedback_line);

  const vote_box = document.createElement("div");
  vote_box.classList.add("vote-box");
  card__feedback_line.appendChild(vote_box);

  const add_button = document.createElement("button");
  add_button.classList.add("vote-box__button");
  add_button.innerText = "+";
  vote_box.appendChild(add_button);

  const score = document.createElement("span");
  score.classList.add("vote-box__number");
  score.innerText = card_info.score;
  vote_box.appendChild(score);

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

  return card;
};

const createErrorHtml = (error) => {
  const p = document.createElement;
  p.innerText = `Sorry, there was an error loading the comments. The specific error message is ${error}. Please try again later.`;
};

export { createCardHtml, createErrorHtml };
