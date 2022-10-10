const colorInput = document.querySelector('#colorInput');
const btnVisualize = document.querySelector('#btnVisualize');
const paragraphExa = document.querySelector('#paragraphExa');
const cardColor = document.querySelector('#cardColor');

btnVisualize.addEventListener("click", ()=>{
    paragraphExa.textContent= colorInput.value;
    cardColor.style.backgroundColor= colorInput.value;

    navigator.clipboard
    .writeText(colorInput.value)
    .then(()=> console.log("copied text"))
    .catch((e) => console.log(e));
})

