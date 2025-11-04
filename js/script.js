// ! CARDS //

document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("cardList");

  try {
    const response = await fetch("../data/travels.json");
    const travels = await response.json();

    travels.forEach((t) => {
      const card = document.createElement("a");
      card.classList.add("card-item");
      card.href = "#";
      card.innerHTML = `
        <img src="${t.img}" alt="${t.city}">
        <span class="data">${t.date}</span>
        <h3>
          ${t.city}, <strong>${t.country}</strong>
        </h3>
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
