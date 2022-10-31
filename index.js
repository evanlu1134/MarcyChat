let postInput = document.body.querySelector("#post-text")
let commentInput = document.body.querySelector("#comment-text")
let submitPostButton = document.body.querySelector("#submit-button-post")
let submitCommentButton = document.body.querySelector(".submit-comment-button")

const renderPost = (post) => {
  // Post Info Section
  let postContainer = document.createElement("div")
  postContainer.setAttribute("class", "post")
  let postInfo = document.createElement("div")
  postInfo.setAttribute("class", "post-info")
  let usernameContainer = document.createElement("div")
  usernameContainer.setAttribute("class", "username")
  let username = document.createElement("p")
  username.setAttribute("class", "username-text")
  username.innerText = `${post["first_name"]} ${post["last_name"]}`
  let submitForm = document.querySelector("#submit-form")
  submitForm.insertAdjacentElement('afterend', postContainer)
  postContainer.append(postInfo)
  postInfo.append(usernameContainer)
  usernameContainer.append(username)
  let timestampContainer = document.createElement("div")
  timestampContainer.setAttribute("class", "timestamp")
  let timestampText = document.createElement("p")
  timestampText.setAttribute("class", "timestamp-text")
  timestampText.innerText = `${post["creation_Date"].slice(5, 10)} at ${post["creation_Date"].slice(11, 16)}`
  timestampContainer.append(timestampText)
  postInfo.append(timestampContainer)

  //Post Content section
  let postContentContainer = document.createElement("div")
  postContentContainer.setAttribute("class", "post-content")
  postContainer.append(postContentContainer)
  let postContentText = document.createElement("p")
  postContentText.setAttribute("class", "post-content-text")
  postContentText.innerText = post["post_description"]
  postContentContainer.append(postContentText)

  // like and comment button section
  let likeCommentButtonSection = document.createElement("div")
  likeCommentButtonSection.setAttribute("class", "like-comment-button-section")
  let likeButtonContainer = document.createElement("div")
  likeButtonContainer.setAttribute("class", "like-button-container")
  postContainer.append(likeCommentButtonSection)
  likeCommentButtonSection.append(likeButtonContainer)
  let likeButton = document.createElement("img")
  likeButton.setAttribute("class", "like-button")
  likeButton.src = "homeAssests/like_logo.png"
  likeButtonContainer.append(likeButton)
  let commentButtonContainer = document.createElement("div")
  commentButtonContainer.setAttribute("class", "comment-button-container")
  likeCommentButtonSection.append(commentButtonContainer)
  let commentButton = document.createElement("img")
  commentButton.setAttribute("class", "comment-button")
  commentButton.src = "homeAssests/comment_logo.png"
  commentButtonContainer.append(commentButton)

  //comment section
  let commentSection = document.createElement("div")
  commentSection.setAttribute("class", "comments-section")
  commentSection.setAttribute("id", `comment-section-${post["post_id"]}`)
  postContainer.append(commentSection)

  //Write comments section
  let writeCommentSection = document.createElement("div")
  writeCommentSection.setAttribute("class", "write-comment-section")
  postContainer.append(writeCommentSection)
  let commentForm = document.createElement("form")
  writeCommentSection.append(commentForm)
  let commentBar = document.createElement("div")
  commentBar.setAttribute("class", "comment-bar")
  commentForm.append(commentBar)
  let commentInput = document.createElement("input")
  commentInput.setAttribute("type", "text")
  commentInput.setAttribute("class", "comment-text")
  commentInput.setAttribute("name", "search")
  commentInput.setAttribute("size", "35")
  commentInput.setAttribute("placeholder", "     Write a comment...")
  commentInput.setAttribute("autocomplete", "off")
  commentBar.append(commentInput)
  let commentButtonSubmit = document.createElement("button")
  commentButtonSubmit.setAttribute("class", "submit-comment-button")
  commentButtonSubmit.innerText = ("Post Comment")
  commentBar.append(commentButtonSubmit)
  commentButtonSubmit.addEventListener("click", async (event) => {
    event.preventDefault()
    const input = commentInput.value;
    commentInput.value = ""
    const body = { commentary: input, post_id: post['post_id'], user_id: welcome.id };
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }
    let response = await fetch(`http://localhost:3000/comments`, options);
    let postList = await response.json();
    let newPost = postList[postList.length - 1];

    let commentBox = document.createElement("div")
    commentBox.setAttribute("class", "comment-box")
    commentSection.append(commentBox)
    let commenterName = document.createElement("div")
    commenterName.setAttribute("class", "commenter-name")
    commentBox.append(commenterName)
    let commenterNameText = document.createElement("p")
    commenterNameText.setAttribute("class", "commenter-name-text")
    commenterName.append(commenterNameText)
    commenterNameText.innerText = `${newPost['first_name']} ${newPost['last_name']}`
    let commentersComment = document.createElement("div")
    commentersComment.setAttribute("class", "commenter-comment")
    commentBox.append(commentersComment)
    let commenterCommentText = document.createElement("p")
    commenterCommentText.setAttribute("class", "commenter-comment-text")
    commenterCommentText.innerText = newPost["commentary"]
    commentersComment.append(commenterCommentText)
  })
}
const welcome = document.getElementById("welcome");
console.log(welcome)
const username = document.querySelector(".username-text");

// Will get all posts from DB and render to DOM
const url = "http://localhost:3000";
async function getPosts() {
  let res = await fetch(`${url}/posts`);
  let data = await res.json();
  let todoData = await data;
  console.log(todoData)
  todoData.forEach(post => renderPost(post))
}
getPosts();



//Users Post
submitPostButton.addEventListener("click", async (event) => {
  event.preventDefault()
  const input = postInput.value;
  let id = parseInt(welcome.id)
  const body = { post_description: `${input}`, user_id: id };
  console.log(body)
  const post = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  }
  let response = await fetch(`${url}/posts`, post);
  let postList = await response.json();
  console.log(postList)
  let newPost = postList[postList.length - 1];
  console.log(newPost)
  renderPost(newPost);
});

//Render All commentPost to DOM
async function getComments() {
  let res = await fetch(`${url}/comments`);
  let data = await res.json();
  let commentData = await data;
  console.log(commentData)
  commentData.forEach((x) => {
    let commentBox = document.createElement("div")
    commentBox.setAttribute("class", "comment-box")
    let postId = x.post_id
    let commentSection = document.querySelector(`#comment-section-${postId}`)
    commentSection.append(commentBox)
    let commenterName = document.createElement("div")
    commenterName.setAttribute("class", "commenter-name")
    commentBox.append(commenterName)
    let commenterNameText = document.createElement("p")
    commenterNameText.setAttribute("class", "commenter-name-text")
    commenterName.append(commenterNameText)
    commenterNameText.innerText = `${x['first_name']} ${x['last_name']}`
    let commentersComment = document.createElement("div")
    commentersComment.setAttribute("class", "commenter-comment")
    commentBox.append(commentersComment)
    let commenterCommentText = document.createElement("p")
    commenterCommentText.setAttribute("class", "commenter-comment-text")
    commenterCommentText.innerText = x["commentary"]
    commentersComment.append(commenterCommentText)
  })
}
getComments();


//rendering user's welcome
async function welcomeUser() {
  const response = await fetch(`${url}/users`);
  const result = await response.json();
  console.log(result)
  let welcomer = await result.first_name;
  let welcome_id = await result.user_id;
  console.log(welcome_id)
  console.log(welcomer)
  welcome.id = welcome_id
}
welcomeUser();


//logout button
const logout = document.querySelector("#logout");

logout.addEventListener("click", () => {
  window.location.href = "./login.html";
});