const card_wrapper = document.getElementById("card_wrapper");

const comment = () => {
  // Step 1: create the comment object:
  // {
  //     "id"
  //     "content"
  //     "createdAt'
  //     "score"
  //     "user"
  //     "replies": []
  //   },
  // get the content from the textarea
  // generate id, createdAt, score = 0, replies = []
  // get the user from htmlGenerator, can pass in as   parameter
  /** Step 2: add the comment object to the localStorage data structure
   * ** get data, convert from string to json
   * ** use the spread operator to create a copy with the newest comment at the very end. Find the id by getting the id if the last object
   * ** save the new data object to localStorage
   */
  /** Step 3: display the new comment on the screen
   * ** call the htmlGenerator method for creating a comment createCardHtml, pass in the comment object and the user from the parameters
   * ** add the new card component to card_wrapper
   */
};

export default comment;
