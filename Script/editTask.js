function editTasksFun(e){
    const main = document.querySelector('main')
    const taskDiv = e.target.parentNode.parentNode
    const numeroDaNote = e.target.parentNode.parentNode.parentNode.parentNode.id
    const spanValue = e.target.parentNode.parentNode.children[1].innerHTML
    const valoresDolS = localStorage.getItem(numeroDaNote).split(',')

    let posi = 0
    let valorLocalFinal= ''

    const closeInputConteiner = document.createElement('div')
    const inputConteiner = document.createElement('div')
    const input = document.createElement('input')
    closeInputConteiner.id = 'closeInputConteiner'
    inputConteiner.id = 'editTaskConteiner'
    input.id = 'inputEditTask'
    input.type = 'text'

    for(let v1 = 2; v1 < valoresDolS.length; v1++){
        if(spanValue == valoresDolS[v1]){
            posi = v1
        }
    }
    
    function inputFunEditTask(){
        inputConteiner.remove()
        main.removeEventListener('click', closeConfigFun)
        if(input.value != ''){
            valoresDolS[posi] = input.value
                for(let v2 = 1; v2 < valoresDolS.length; v2++){
                    valorLocalFinal += `,${valoresDolS[v2]}`
                }
                localStorage.setItem(numeroDaNote, valorLocalFinal)
            }
        
    }
    function closeConfigFun(e){
        if(e.target.classList.value == '' || e.target.classList.value != 'pencil'){
            inputFunEditTask()       
        }
    }
    main.addEventListener('click', closeConfigFun)
    input.addEventListener('keyup', input=>{
        if(input.key == 'Enter'){
            inputFunEditTask()
        } else{
            taskDiv.children[1].innerHTML = input.target.value
        }
    })
    
    inputConteiner.appendChild(input)
    e.target.parentNode.appendChild(inputConteiner)
    input.focus()
}

function editTitulo(e){
    const numeroDaNote = e.target.parentNode.id
    const LS = localStorage.getItem(`${numeroDaNote}`).split(',')
    LS[1] = e.target.value
    let concatenacao = ''
    for(let v1 = 1;v1 != LS.length; v1++){
        concatenacao += `,${LS[v1]}`
    }
    const valorLocalFinal = concatenacao
    localStorage.setItem(`${numeroDaNote}`, valorLocalFinal)
}