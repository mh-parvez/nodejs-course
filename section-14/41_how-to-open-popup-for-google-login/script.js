const button = document.querySelector("button");

button.addEventListener("click", () => {
  window.open("http://127.0.0.1:5500/popup.html", "popup", "width=500,height=600");
});

window.addEventListener("message", ({ data }) => {
  console.log(data);
});
