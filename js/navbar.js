document.addEventListener("DOMContentLoaded", () => {
    const checkBtn = document.querySelector('.checkbtn');
    if (checkBtn) {
      const icon = checkBtn.querySelector('i');
      const body = document.body;
  
      checkBtn.addEventListener('click', () => {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
        body.classList.toggle('menu-open');
      });
    }
  });
  