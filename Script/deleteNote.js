
function deleteNote(e){
    const closeNote = document.querySelector('#closeNote')
    const localStorageTamanho = localStorage.length
    const keyAtualFun = () => {
        if(e.target.classList == 'gg-more-alt'){
            return e.target.parentNode.parentNode.id
        } else{
            return e.target.parentNode.id
        }
    }
    const keyAtual = keyAtualFun()
    for(let v1=1; v1 <= localStorageTamanho;v1++){
        if( v1 >= keyAtual){
            if(localStorage.length == 1){
                mesagemSemNote.style.display = 'block'
            }
            if(v1 == localStorageTamanho){
                localStorage.removeItem(`0${v1}`)
                break
            }
            const nextLocal = localStorage.getItem(`0${v1+1}`)
            localStorage.setItem(`0${v1}`, nextLocal)
        }
    }

    closeNote.classList.remove('onCloseNotes')
    closeNote.classList.add('offCloseNotes')

    deleteAllNotes()
    drawAllNotes()
}