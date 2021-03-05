var body = document.querySelector(".body");
var newDiv = document.createElement("div");
var headerDiv = document.createElement("div");
var contentDiv = document.createElement("div");
var titleInput = document.createElement("input");
var contentInput = document.createElement("input");
var submitBtn = document.createElement("button");

const submitPost = async () => {
  var title = titleInput.value;
  var content = contentInput.value;

  const response = await fetch("/api/posts/", {
    method: "POST",
    body: JSON.stringify({
      title: content,
      content: title,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    location.reload();
  } else {
    console.log("status text: ", response.statusText);
  }
};

const addPost = async () => {
  body.appendChild(newDiv);
  newDiv.appendChild(headerDiv);
  newDiv.appendChild(contentDiv);
  headerDiv.appendChild(titleInput);
  contentDiv.appendChild(contentInput);
  contentDiv.appendChild(submitBtn);

  submitBtn.addEventListener("click", submitPost);
};

const deletePost = async () => {
  var thisPost = document.querySelectorAll(".myPost");
  console.log("thisPost: ", thisPost);
  var id = thisPost.attributes[1].value;
  console.log(id);
  // const response = await fetch("/api/posts/" + id, {
  //   method: "DELETE",
  //   headers: { "Content-Type": "application/json" },
  // });

  // if (response.ok) {
  //   location.reload();
  // } else {
  //   console.log("status text: ", response.statusText);
  // }
};

function init() {
  document.querySelector(".addPost").addEventListener("click", addPost);
  var deleteBtns = document.querySelectorAll(".deletePost");
  deleteBtns.forEach(button => button.addEventListener("click", deletePost));
}
init();
