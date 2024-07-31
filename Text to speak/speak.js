const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  const textarea = document.querySelector("textarea").value.trim();
  if (textarea === "") return;
  const utterance = new SpeechSynthesisUtterance(textarea);
  speechSynthesis.speak(utterance);
});
