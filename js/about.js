// ! LINK ABOUTME
document.addEventListener("DOMContentLoaded", () => {
    const aboutLink = document.querySelector('a[href="#aboutme"]');
    if (aboutLink) {
      aboutLink.addEventListener("click", (e) => {
        e.preventDefault();
        window.location.href = "aboutme.html";
      });
    }
  });
  