const textBox = document.querySelector("#textBox");
const characterDisplay = document.querySelector(".characters");
const copyText = document.querySelector(".copytext");

const charCount = document.createElement("span");
charCount.classList.add("charCount");
characterDisplay.appendChild(charCount); // Only append once

textBox.addEventListener("input", () => {
  charCount.textContent = textBox.value.length; // Directly use value.length
});

copyText.addEventListener("click", () => {
  navigator.clipboard
    .writeText(textBox.value)
    .then(() => alert("Copied"))
    .catch((err) => console.error("Clipboard error: ", err)); // Error handling
});
