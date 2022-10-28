let postInput = document.body.querySelector("#post-text")
let commentInput = document.body.querySelector("#comment-text")
let submitPostButton = document.body.querySelector("#submit-button-post")
let submitCommentButton= document.body.querySelector("#submit-comment-text")


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
    username.innerText = "username"
    document.body.append(postContainer)
    postContainer.append(postInfo)
    postInfo.append(usernameContainer)
    usernameContainer.append(username)
    let timestampContainer = document.createElement("div")
    timestampContainer.setAttribute("class", "timestamp")
    let timestampText = document.createElement("p")
    timestampText.setAttribute("class", "timestamp-text")
    timestampText.innerText = "10 hours ago"
    timestampContainer.append(timestampText)
    postInfo.append(timestampContainer)
    
    //Post Content section
    let postContentContainer = document.createElement("div")
    postContentContainer.setAttribute("class", "post-content")
    postContainer.append(postContentContainer)
    let postContentText = document.createElement("p")
    postContentText.setAttribute("class", "post-content-text")
    postContentText.innerText = post
    postContentContainer.append(postContentText)

    // like and comment button section
    let likeCommentButtonSection = document.createElement("div")
    likeCommentButtonSection.setAttribute("class", "like-comment-button-section")
    let likeButtonContainer = document.createElement("div")
    likeButtonContainer.setAttribute("class", "like-button-container")
    postContainer.append(likeCommentButtonSection)
    likeCommentButtonSection.append(likeButtonContainer)
    let likeButton = document.createElement("p")
    likeButton.setAttribute("class", "like-button")
    likeButton.innerText = "likeButton"
    likeButtonContainer.append(likeButton)
    let commentButtonContainer = document.createElement("div")
    commentButtonContainer.setAttribute("class", "comment-button-container")
    likeCommentButtonSection.append(commentButtonContainer)
    let commentButton = document.createElement("p")
    commentButton.setAttribute("class", "comment-button")
    commentButton.innerText = "commentButton"
    commentButtonContainer.append(commentButton)

    //comment section
    let commentSection = document.createElement("div")
    commentSection.setAttribute("class", "comments-section")
    postContainer.append(commentSection)
    let commentBox = document.createElement("div")
    commentBox.setAttribute("class", "comment-box")
    commentSection.append(commentBox)
    let commenterName = document.createElement("div")
    commenterName.setAttribute("class", "commenter-name")
    commentBox.append(commenterName)
    let commenterNameText = document.createElement("p")
    commenterNameText.setAttribute("class", "commenter-name-text")
    commenterName.append(commenterNameText)
    commenterNameText.innerText = "username"
    let commentersComment = document.createElement("div")
    commentersComment.setAttribute("class", "commenter-comment")
    commentBox.append(commentersComment)
    let commenterCommentText = document.createElement("p")
    commenterCommentText.setAttribute("class", "commenter-comment-text")
    commenterCommentText.innerText = "This is my comment"
    commentersComment.append(commenterCommentText)

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
    commentBar.append(commentInput)
    let commentButtonSubmit = document.createElement("button")
    commentButtonSubmit.setAttribute("class", "submit-comment-button")
    commentButtonSubmit.innerText = ("Post Comment")
    commentBar.append(commentButtonSubmit)
}
const welcome = document.getElementById("welcome");
const username = document.querySelector(".username-text");


const url = "http://localhost:3000";

async function getPosts() {
  let res = await fetch(`${url}/posts`);
  let data = await res.json();
  let todoData = await data;
  for (const items of todoData) {
    console.log(items)
    let postTimes = items.post_description
    renderPost(postTimes);
  }
}
getPosts();


//Users Post
submitPostButton.addEventListener("click", async(event) => {
    const input = postInput.value;
    const body = { post_description: `${input}`, user_id: welcome.id};
    const post = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }
    let response = await fetch(`${url}/posts`, post);
    let postList = await response.json();
    console.log(postList)
    let newPost = postList[postList.length - 1];
    renderPost(newPost);
  });

// //Comment post
//   submitCommentButton.addEventListener("click", async(event) => {
//     const input = commentInput.value;
//     const body = { commentary: `${input}`, user_id: welcome.id};
//     const post = {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(body),
//     }
//     let response = await fetch(`${url}/posts`, post);
//     let postList = await response.json();
//     console.log(postList)
//     let newPost = postList[postList.length - 1];
//     renderPost(newPost);
//   });


//rendering user's welcome
// async function welcomeUser() {
//   const response = await fetch(`${url}/users`);
//   const result = await response.json();
//   console.log(result)
//   let welcomer = await result.first_name;
//   let welcome_id = await result.user_id;
//   console.log(welcome_id)
//   welcome.id = welcome_id
//   welcome.innerText = `Welcome to Marcy Chat ${welcomer}`;
//   username.innerText = welcomer;
// }
// welcomeUser();


// async function loadAll() {
//   const response = await fetch(`${url}/users/all`);
//   const data = await response.json();
//   console.log(data)
// }
// loadAll()


//logout button
const logout = document.querySelector("#logout");

logout.addEventListener("click", () => {
  window.location.href = "./login.html";
});
