document.addEventListener("DOMContentLoaded", async () => {
    const params = new URLSearchParams(window.location.search);
    const city = params.get("city");

    if (!city) return;

    const title = document.getElementById("place-title");
    const desc = document.getElementById("place-description");
    const gallery = document.getElementById("photoGallery");

    try {
        const response = await fetch("./data/travels.json");
        const travels = await response.json();
        const travel = travels.find(t => t.city === city);

        if (!travel) {
            title.textContent = "Destination not found.";
            return;
        }

        // ! Titolo e descrizione dinamici
        title.textContent = `${travel.city}, ${travel.country}`;
        desc.textContent = travel.description;

        // ! Galleria dinamica
        if (travel.gallery && travel.gallery.length > 0) {
            travel.gallery.forEach(photo => {
                const img = document.createElement("img");
                img.src = photo;
                img.alt = `${travel.city} photo`;
                gallery.appendChild(img);
            });
        } else {
            // ! Se non c'è la gallery, mostra solo l'immagine principale
            const img = document.createElement("img");
            img.src = travel.img;
            img.alt = `${travel.city}`;
            gallery.appendChild(img);
        }
    } catch (err) {
        console.error("Errore nel caricamento delle foto:", err);
    }
});
