let shareButton = document.querySelector(".share-icon");
let shareBox = document.querySelector(".share-box");

shareButton.addEventListener("click", () => {
  shareBox.classList.toggle("hidden");
  shareButton.classList.toggle("dark-icon");
});