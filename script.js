let nota = document.querySelector('#nota')
let btnCadastrar = document.querySelector('#btnCadastrar')

btnCadastrar.addEventListener('click', (e) => {
    e.preventDefault();
    alert(verificarMedia(nota.value));
})

function verificarMedia(nota){
    if (nota >= 60){
        return "Estudante aprovado"
    } else{
        return "Agora senta e chora"
    }
}