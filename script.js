const mainContainer = document.querySelector(".main-container");
const thanksContainer = document.querySelector(".thank-you");
const submitButton = document.getElementById("submit");
const reSubmit = document.getElementById("re-submit");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".btn");

submitButton.addEventListener("click", (e) => {
  mainContainer.style.display = "none";
  thanksContainer.classList.remove("hidden");
});

reSubmit.addEventListener("click", () => {
  mainContainer.style.display = "flex";
  thanksContainer.classList.add("hidden");
});

rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    rating.innerHTML = rate.innerHTML;
  });
});
