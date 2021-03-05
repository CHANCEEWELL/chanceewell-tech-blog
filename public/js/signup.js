const signUpHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector(".signupName").value.trim();
  const password = document.querySelector(".signupPass").value.trim();

  if (username && password) {
    const newUser = await fetch("/api/users/", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (newUser.ok) {
      document.location.replace("/login");
    }
  }
};

document
  .querySelector(".signup-form")
  .addEventListener("submit", signUpHandler);