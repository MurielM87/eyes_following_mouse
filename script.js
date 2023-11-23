// On selectionne les éléments du DOM

const container = document.querySelector(".container");
const balls = document.querySelectorAll(".ball");

// On écoute l'évenement mousemove sur l'élément container

container.addEventListener("mousemove", (e) => {

    /* On initialise deux constante x et y et on utilise les méthodes clientX et ClientY associées à l'objet d'évenement e pour donner à x et y une valeur en % */
    
    const x = `${e.clientX * 100 / window.innerWidth}%`
    const y = `${e.clientY * 100 / window.innerHeight}%`

    // On donne une position à chaque pupille en fonction de x et y

    for(let i = 0; i < 2; i++){
        balls[i].style.left = x;
        balls[i].style.top = y;
        balls[i].style.transform = `translate(-${x}, -${y})`;
    }
})

