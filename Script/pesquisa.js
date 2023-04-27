const inputPesquisa = document.querySelector('#inputPesquisa')
let tamanhoLocal = localStorage.length
let determinante = false
function returnPesquisa(array){
    array.map((e)=>{
        drawConteiner(e)
    })
}
function changePesquisa(e){
    if(e.target.value != ''){
        let lSReturn = []
        determinante = true
        for(let v1 = 1; v1 <= tamanhoLocal;v1++){
            if(localStorage.getItem(`0${v1}`).indexOf(e.target.value) >= 1){
                lSReturn.push(v1)
            }
        }
        deleteAllNotes()
        if(lSReturn.length != 0){
            returnPesquisa(lSReturn)
        } else {
            
        }
    } else if(e.target.value == '' && determinante == true){
        determinante = false
        deleteAllNotes()
        drawAllNotes()
    }
}
function clickInputPesquisa(input){
    tamanhoLocal = localStorage.length
    input.target.value = ''
}

inputPesquisa.addEventListener('click', clickInputPesquisa)
inputPesquisa.addEventListener('keyup', changePesquisa)