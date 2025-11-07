// ! CARDS //
document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("cardList");

  try {
    const response = await fetch("./data/travels.json");
    const travels = await response.json();

    travels.forEach((t) => {
      const card = document.createElement("a");
      card.classList.add("card-item");
      card.href = `place.html?city=${encodeURIComponent(t.city)}`;
      card.innerHTML = `
        <img src="${t.img}" alt="${t.city}">
        <span class="data">${t.date}</span>
        <h3>${t.city}, <span class="country">${t.country}</span></h3>
        <p class="text-secondary fw-bold">${t.description}</p>
        <div class="arrow">
          <i class="fas fa-arrow-right card-icon"></i>
        </div>
      `;
      container.appendChild(card);
    });
  } catch (error) {
    console.error("Errore nel caricamento del JSON:", error);
  }
});

// ! SCRIPT BURGER MENU // 
const checkBtn = document.querySelector('.checkbtn');
const icon = checkBtn.querySelector('i');

checkBtn.addEventListener('click', () => {
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-times');
});

// ! SCRIPT FADE IN HOMEPAGE TITLE // 

document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector(".typewriter h1");
  const text = title.textContent;
  title.textContent = ""; 
  [...text].forEach((letter, i) => {
    const span = document.createElement("span");
    span.textContent = letter;
    span.style.animationDelay = `${i * 50}ms`;
    title.appendChild(span);
  });
});

