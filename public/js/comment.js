const submitComment = async () => {
  var content = contentInput.value;
  const response = await fetch("/api/posts/:id", {
    method: "PUT",
    body: JSON.stringify({
      comments: {
        content: content,
      },
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    location.reload();
  } else {
    console.log("status text: ", response.statusText);
  }
};
// var commentDiv = document.querySelector(".comments");
// var comment = contentInput.value;
// comments.push(comment);
// commentDiv.appendChild(newDiv);
// newDiv.appendChild(contentDiv);

// contentDiv.innerHTML += comment;
// document.querySelector(".newComment").remove();
// };

//Function to comment on post
const postComment = async () => {
  body.appendChild(newDiv);
  //username in header
  newDiv.appendChild(headerDiv);
  newDiv.appendChild(contentDiv);
  contentDiv.appendChild(contentInput);
  contentDiv.appendChild(submitBtn);

  newDiv.classList.add("newComment");
  submitBtn.addEventListener("click", submitComment);
};

document.querySelector(".commentBtn").addEventListener("click", postComment);
