let container = document.querySelector(".container")

for(let i= 0; i <= 80; i++){
    let bloques = document.createElement('div');
    bloques.classList.add('bloque');
    container.appendChild(bloques);
}

const circulos = () => {
    // let btnCirculo = document.querySelector('.btnCirculo');
    container.classList.toggle('circulo');
}

const generate = () => {
    anime({
        targets: '.bloque',
        translateX: () => {
            return anime.random(-700, 700)
        },
        translateY: () => {
            return anime.random(-500, 500)
        },
        scale: () => {
            return anime.random(1,5)
        }
    })
}

generate()