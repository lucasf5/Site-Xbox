const titulos = document.querySelectorAll(".perguntas__h3")
const p = document.querySelectorAll(".perguntas__p")

for (let i = 0; i < titulos.length; i++){
    titulos[i].addEventListener("click", () => {
        titulos[i].classList.toggle("perguntas__h3-alterado")
        p[i].classList.toggle("displayNone")
    })
}