const contOutput = document.querySelector(".container-principale");
const overlay = document.querySelector(".overlay");
const bottone = document.getElementById("bottone");
const overlayImmagine = document.getElementById("overlay-immagine"); // immagine dentro overlay

// API
axios.get("https://lanciweb.github.io/demo/api/pictures/").then((response) => {
    const posts = response.data;

    let postString = "";

    posts.forEach(post => {
        postString += `
        <div class="card">
            <img src="${post.url}" alt="immagine">
            <p>${post.date}</p>
            <h3>${post.title}</h3>
        </div>
        `;
    });

    contOutput.innerHTML = postString;

    // apparizione dell'overlay
    document.querySelectorAll(".card").forEach(card => {
        card.addEventListener("click", () => {

            //sistemazione foto specifiche
            const imgSrc = card.querySelector("img").src; 
            overlayImmagine.src = imgSrc; 
            
            //mostro l'overlay
            overlay.style.display = "flex";               
        });
    });

    // sparizione dell'overlay
    bottone.addEventListener("click", () => {
        overlay.style.display = "none";
    });
});