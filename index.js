let postInput = document.body.querySelector("#post-text")
let submitPostButton = document.body.querySelector("#submit-button-post")
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
    document.body.append(postContainer)
    postContainer.append(postInfo)
    postInfo.append(usernameContainer)
    usernameContainer.append(username)
    let timestampContainer = document.createElement("div")
    timestampContainer.setAttribute("class", "timestamp")
    let timestampText = document.createElement("p")
    timestampText.setAttribute("class", "timestamp-text")
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
}
submitPostButton.addEventListener("click", (event) => {
    event.preventDefault()
    renderPost(postInput.value)
})