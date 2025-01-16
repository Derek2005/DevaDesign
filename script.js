// Page Transition
document.addEventListener("click", (e) => {
  const target = e.target.closest("a");
  if (target && target.getAttribute("href") !== "#") {
    e.preventDefault();
    document.body.classList.add("fade-out");
    setTimeout(() => {
      window.location.href = target.getAttribute("href");
    }, 300);
  }
});

// Dark Mode Toggle
const toggle = document.createElement("button");
toggle.textContent = "Toggle Dark Mode";
toggle.style.position = "fixed";
toggle.style.bottom = "20px";
toggle.style.right = "20px";
toggle.style.padding = "10px";
toggle.style.background = "#00C6FF";
toggle.style.color = "white";
toggle.style.border = "none";
toggle.style.cursor = "pointer";
toggle.style.borderRadius = "10px";
document.body.appendChild(toggle);

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
