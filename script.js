const contOutput = document.querySelector(".container-principale");

axios.get("https://lanciweb.github.io/demo/api/pictures/").then((response) => {
    const posts = response.data;

    let postString = "";

    posts.forEach(post => {
        postString += `
        <div class="card">
            <img src="${post.url}" alt="Immagine 1">
            <p>${post.title}</p>
        </div>
        `;
    });

    contOutput.innerHTML = postString;
});


