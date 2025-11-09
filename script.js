// Typing Animation
const textArray = ["💻 Front-End Developer", "⚖️ Law Student", "🌍 Tech Enthusiast"];
let textIndex = 0, charIndex = 0;
const typingSpeed = 100, eraseSpeed = 60, delay = 1500;
const typedText = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

function type() {
  if (charIndex < textArray[textIndex].length) {
    typedText.textContent += textArray[textIndex].charAt(charIndex++);
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(erase, delay);
  }
}

function erase() {
  if (charIndex > 0) {
    typedText.textContent = textArray[textIndex].substring(0, --charIndex);
    setTimeout(erase, eraseSpeed);
  } else {
    textIndex = (textIndex + 1) % textArray.length;
    setTimeout(type, typingSpeed + 300);
  }
}

document.addEventListener("DOMContentLoaded", () => setTimeout(type, 1000));

// Contact Form Toast (for demo)
document.querySelector("#contact-form").addEventListener("submit", e => {
  e.preventDefault();
  alert("✅ Message Sent Successfully!");
});