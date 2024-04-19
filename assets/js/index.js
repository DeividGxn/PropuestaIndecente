const boton_si = document.querySelector(".boton_si");
const boton_no = document.querySelector(".boton_no");
const texto = document.getElementById("texto");
const imagen = document.getElementById("imagen");
const botones = document.getElementById("botones");
const contenedor = document.getElementById("contenedor");

console.log(boton_no.style.position);

boton_si.addEventListener("click", () => {
    if (boton_si.id === "propuestaIndecente") {
        propuestaIndecente();
    } else if (boton_si.id === "propuesta") {
        propuesta();
    } else {

    }
});

boton_no.addEventListener("click", () => {
    moverBoton();
});

boton_no.addEventListener("mouseover", () => {
    moverBoton();
});

function moverBoton() {
    var maxX = window.innerWidth - boton_no.offsetWidth;
    var maxY = window.innerHeight - boton_no.offsetHeight;
    
    var randomX = Math.floor(Math.random() * maxX);
    var randomY = Math.floor(Math.random() * maxY);

    boton_no.style.position = "absolute";
    boton_no.style.height = "42.39px";
    if (window.innerWidth < 600) {
        boton_no.style.width = "140px";
    } else {
        boton_no.style.width = "240px";
    }
    
    boton_no.style.left = randomX + 'px';
    boton_no.style.top = randomY + 'px';
}

function propuestaIndecente() {
    texto.innerText = "¿Quieres ser mi novia?"
    imagen.src = "./assets/img/levi_rosa.jpg"
    boton_no.style.position = "";
    boton_si.id = "propuesta";
}

function propuesta() {
    botones.style.display = "none";
    texto.innerText = "Ya es oficial, te quiero muchisimo mi ñina 🤍";
    texto.style.width = "640px";
    imagen.style.display = "none";
    let video = document.createElement("video");
    video.width = 640;
    video.height = 360;
    let sourceVideo = document.createElement("source");
    sourceVideo.src = "./assets/img/videoIndecente.mp4"
    sourceVideo.type = "video/mp4";
    video.appendChild(sourceVideo);
    contenedor.appendChild(video);

    video.addEventListener("loadedmetadata", function() {
        video.play();
    });
}
