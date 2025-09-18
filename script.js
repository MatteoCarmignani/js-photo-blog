const contOutput = document.querySelector(".container-principale");
const overlay = document.querySelector(".overlay");
const button = document.getElementById("bottone");
const overlayImmagine = document.getElementById("overlay-immagine")

// API
axios.get("https://lanciweb.github.io/demo/api/pictures/").then((response) => {

    const posts = response.data;

    //Stringa vuota dove inserire card
    let postString = "";

    posts.forEach(post => {
        postString += `
        <div class="card">
            <img src="${post.url}" alt="immagine">
            <p>${post.date}</p>
            <h3>${post.title}<h3>
        </div>
        `;
    });

    //sposto tutto in html
    contOutput.innerHTML = postString;

    // PARTE 2
    
    document.querySelectorAll(".card").forEach(card => {
        card.addEventListener("click", () => {
        //alert("Funziona!")
        overlay.style.display = "flex";
    });

    bottone.addEventListener("click", () => {
    overlay.style.display = "none";
    });
    
    });
});

