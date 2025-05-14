document.addEventListener("click", () => {
  window.opener.postMessage(
    { message: "Hello World" },
    "http://localhost:5500"
  );
  //   window.close();
  console.log("Popup clicked");
});
