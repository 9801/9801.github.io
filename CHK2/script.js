function hideHelp() {
  document.querySelector(".help").style.display = "none";
  window.removeEventListener("mousedown", hideHelp);
  window.removeEventListener("touchstart", hideHelp);
}
window.addEventListener("mousedown", hideHelp);
window.addEventListener("touchstart", hideHelp);