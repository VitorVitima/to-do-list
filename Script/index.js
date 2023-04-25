let arrayComplete = []

function addSessionComplete(tag){
    const numeroDaNote = tag.target.parentNode.parentNode.parentNode.parentNode.id
    const spanInnerHTML = tag.target.parentNode.parentNode.children[1].innerHTML
    const valorSessionStorage = sessionStorage.getItem(`${numeroDaNote}Complete`)
    const valorLocalStorage = localStorage.getItem(`${numeroDaNote}`)
    
    let valorFinalLocalStorage = valorLocalStorage.replace(`,${spanInnerHTML}`, '')
    let valorFinalSessionStorage = `${valorSessionStorage},${spanInnerHTML}`
    
    sessionStorage.setItem(`${numeroDaNote}Complete`, valorFinalSessionStorage)
    localStorage.setItem(`${numeroDaNote}`, `${valorFinalLocalStorage}`)
    
}
function removeSessionComplete(tag){
    const numeroDaNote = tag.target.parentNode.parentNode.parentNode.parentNode.id
    const spanInnerHTML = tag.target.parentNode.parentNode.children[1].innerHTML
    const valorSessionStorage = sessionStorage.getItem(`${numeroDaNote}Complete`)
    const valorLocalStorage = localStorage.getItem(`${numeroDaNote}`)

    let valorFinalSessionStorage = valorSessionStorage.replace(`,${spanInnerHTML}`, '')
    let valorFinalLocalStorage = `${valorLocalStorage},${spanInnerHTML}`
    
    sessionStorage.setItem(`${numeroDaNote}Complete`, valorFinalSessionStorage)
    localStorage.setItem(`${numeroDaNote}`, `${valorFinalLocalStorage}`)

}
function inputFun2(e, determinante){
    if(determinante){
        e.target.style.color = 'black'
        e.target.parentNode.parentNode.parentNode.parentNode.children[5].appendChild(
            e.target.parentNode.parentNode
        )

    } else {
        e.target.style.color = 'transparent'
        e.target.parentNode.parentNode.parentNode.parentNode.children[4].appendChild(
           e.target.parentNode.parentNode
        )
    }
}
function inputFun(tag){
    let idPai = tag.target.parentNode.parentNode.id
    if(tag.target.parentNode.parentNode.id.indexOf('marcado') >= 1){
        removeSessionComplete(tag)
        idPai = idPai.replace('marcado', '')
        tag.target.parentNode.parentNode.id = `${idPai}`
        tag.target.parentNode.children[0].setAttribute("checked","checked");
        inputFun2(tag, false)
    } else {
        addSessionComplete(tag)
        tag.target.parentNode.parentNode.id = `${idPai}marcado`
        tag.target.parentNode.children[0].removeAttribute("checked");
        inputFun2(tag, true)
    }
}
function drawConteiner(v2){
    creatNote(v2)
}
function drawAllNotes(){
    const mesagemSemNote = document.querySelector('#mesagemSemNote')
    const tamanho = localStorage.length
    if(tamanho != 0){
        mesagemSemNote.style.display = 'none'

        for(let v2=1; v2 <= tamanho;v2++){
            drawConteiner(v2)
        }
    }
}
function deleteAllNotes(){
    const notes = [...document.querySelectorAll('.notes')]
    notes.map((element)=>{
        element.remove()
    })
}
drawAllNotes()