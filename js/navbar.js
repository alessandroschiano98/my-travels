// ! SCRIPT BURGER MENU // 
const checkBtn = document.querySelector('.checkbtn');
const icon = checkBtn.querySelector('i');

checkBtn.addEventListener('click', () => {
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-times');
});
