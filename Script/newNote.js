const buttonTag = document.querySelector('.gg-add-r')
const newNoteBoxConfig = document.querySelector('#newNoteBoxConfig')
const closeConfig = document.querySelector('#closeConfig')

const closeNote = document.querySelector('#closeNote')
let notes = [...document.querySelectorAll('.notes')]

const inputTitulo = document.querySelector('#newNoteTitulo')
const allNotes = document.querySelector('#allNotes')

const listConfig = document.querySelector('#listConfig')

const buttonAddTask = document.querySelector('#buttonTag2')
const newNoteAdd = document.querySelector('#newNoteAdd')

const mesagemSemNote = document.querySelector('#mesagemSemNote')


let notesCriadas = []
let sy = 0
function buttonDeletFun(e){
    const numeroDaNote = e.target.parentNode.parentNode.parentNode.parentNode.id 
    const valorSpan = e.target.parentNode.parentNode.children[1].innerHTML
    const valorLocal = localStorage.getItem(`${numeroDaNote}`).split(',')
    const arrayList = [...e.target.parentNode.parentNode.parentNode.children]
    let determinante = true
    let concatenacao = ''
    arrayList.map((e)=>{
        if(e.children[1].innerHTML == valorSpan && determinante){
            e.remove()
            determinante = false
        }
    })
    for(let v1 = 2; v1 <= valorLocal.length;v1++){
        if(valorLocal[v1] == valorSpan){
            valorLocal.splice(v1, 1)
            break;
        }
    }
    for(let v2 = 1; v2<valorLocal.length;v2++){
        concatenacao += `,${valorLocal[v2]}`
    }
    localStorage.setItem(`${numeroDaNote}`, concatenacao)
}
function creatTasks(v3, list, values){
    const div = document.createElement('div')
            const conteinerInput = document.createElement('div')
            const span = document.createElement('span')
            const buttonTag2 = document.createElement('div')
            const iconTrash = document.createElement('i')
            const input = document.createElement('input')
            const iconCheck = document.createElement('i')
            
            div.id = `task${v3}`
            div.classList.add('tasks')
            span.innerHTML = values[v3]
    
            conteinerInput.classList.add('conteinerInput')
            conteinerInput.appendChild(input)
            conteinerInput.appendChild(iconCheck)
    
            input.type = 'checkbox'
            input.classList.add('checkTag')
    
            iconTrash.classList.add('gg-add')
    
            buttonTag2.classList.add('buttonDelet')
            buttonTag2.appendChild(iconTrash)
            buttonTag2.addEventListener('click', buttonDeletFun)

            iconCheck.classList.add('gg-check')
            iconCheck.addEventListener('click', iconFun)
    
    
            div.appendChild(conteinerInput)
            div.appendChild(span)
            div.appendChild(buttonTag2)
            list.appendChild(div)
}
function iconFun(e){
    inputFun(e)
}
function notesFun(e){
    const mainHeight = document.querySelector('main').clientHeight
    if(e.parentNode.classList.value.indexOf('focusNote') < 1){
        sy = window.scrollY
        window.scrollTo(0, 0)
        e.classList.remove('focusConfig')
        e.classList.add('focusConfigOcult')
        e.parentNode.classList.add('focusNote')
        closeNote.classList.remove('offCloseNotes')
        closeNote.classList.add('onCloseNotes')
        closeNote.style.height = `${mainHeight}px`
    } 
    
}
function addTaksList(tag, valorLocal){
    const listOfNote = tag.parentNode.parentNode.children[4]
    const tamanhoLocal = valorLocal.split(',')
    creatTasks(tamanhoLocal.length - 1, listOfNote, tamanhoLocal)
}
function buttonTagFun(tag){
    const numeroDaNote = tag.parentNode.parentNode.id
    const valorLocal = localStorage.getItem(`${numeroDaNote}`)
    const inputTag = tag.parentNode.children[0]
    const valorConcatenado = `${valorLocal},${inputTag.value}`
    if(inputTag.value != ''){
        localStorage.setItem(numeroDaNote, `${valorLocal},${inputTag.value}`)
        addTaksList(tag, valorConcatenado)
    }
    inputTag.value = ''
    inputTag.focus()
}
function listCompleteFun(e){
    if(e.target.classList[0] != undefined){
        if(e.target.classList.value.indexOf('listComplete') == 0){
            const iconTag = e.target.children[0].children[1]
            const listComplete = e.target
            const lineComplete = e.target.children[0].children[0]
            if(iconTag.classList.value.indexOf('ocult') >= 1){
                iconTag.classList.remove('ocult')
                iconTag.classList.add('view')
        
                listComplete.classList.remove('ocultList')
                listComplete.classList.add('viewList')
        
                lineComplete.classList.remove('ocultLine')
                lineComplete.classList.add('viewLine')
        
        
            } else {
                
                listComplete.classList.remove('viewList')
                listComplete.classList.add('ocultList')
                
                lineComplete.classList.remove('viewLine')
                lineComplete.classList.add('ocultLine')
        
                iconTag.classList.remove('view')
                iconTag.classList.add('ocult')
            }
        }
    }
}

function creatNote(v2){
    const allSaveNotes = [...document.querySelectorAll(`.tasks-0${localStorage.length+1}`)]
    const note = document.createElement('div')
    const h2Tag = document.createElement('h2')
    const addTask = document.createElement('div')
    const inputText = document.createElement('input')
    const buttonTag = document.createElement('button')
    const listComplete = document.createElement('div')
    const list = document.createElement('div')
    const focusConfig = document.createElement('div')
    const iconComplete = document.createElement('i')
    const conteinerIconComplete = document.createElement('div')
    const lineComplete = document.createElement('div')
    const buttonDeletNote = document.createElement('i')
    const conteinerButtonDelet = document.createElement('div')

    const values = localStorage.getItem(`0${v2}`).split(',')

    for(let v3 = 2; v3 < values.length;v3++){
        if(values[v3] != ''){
            creatTasks(v3, list, values)
        }
    }
    focusConfig.classList.add('focusConfig')

    h2Tag.innerHTML = values[1]
    list.id = `list-0${localStorage.length+1}`
    list.classList.add('list')
    allSaveNotes.map((e)=>{
        list.appendChild(e)
    })

    addTask.classList.add('addTask')
    inputText.classList.add('noteTextAdd')
    inputText.type = 'text'
    buttonTag.id = 'buttonTag'
    buttonTag.innerHTML = '+'
    addTask.appendChild(inputText)
    addTask.appendChild(buttonTag)

    buttonTag.addEventListener('click', e=>{
        buttonTagFun(e.target)
    })

    listComplete.classList.add('listComplete')
    listComplete.classList.add('ocultList')
    conteinerIconComplete.classList.add('conteinerIcon')
    lineComplete.classList.add('lineComplete')
    lineComplete.classList.add('ocultLine')
    iconComplete.classList.add('gg-arrow-down-r')
    iconComplete.classList.add('ocult')
    conteinerIconComplete.appendChild(lineComplete)
    conteinerIconComplete.appendChild(iconComplete)
    listComplete.appendChild(conteinerIconComplete)

    listComplete.addEventListener('click', listCompleteFun)

    buttonDeletNote.classList.add('gg-trash')
    conteinerButtonDelet.classList.add('conteinerButtonDelet')
    conteinerButtonDelet.appendChild(buttonDeletNote)
    conteinerButtonDelet.addEventListener('click', deleteNote)

    note.classList.add('notes')
    note.id = `0${v2}`

    note.addEventListener('keyup', event=>{
        const parametro = event.target.parentNode.children[1]
        if(event.key == 'Enter'){
            buttonTagFun(parametro)
        }
    })

    note.appendChild(focusConfig)
    note.appendChild(h2Tag)
    note.appendChild(conteinerButtonDelet)
    note.appendChild(addTask)
    note.appendChild(list)
    note.appendChild(listComplete)
    allNotes.appendChild(note)
    focusConfig.addEventListener('click', (e)=>{
        notesFun(e.target)
    })
    notes = [...document.querySelectorAll('.notes')]
}
inputTitulo.addEventListener('click', ()=>{
    if(inputTitulo.value == 'Titulo'){
        inputTitulo.value = ''
    }
})
buttonTag.addEventListener('click', ()=>{
    const focusConfig = [...document.querySelectorAll('.focusConfig')]
    const mainHeight = document.querySelector('main').clientHeight

    focusConfig.map((e)=>{
        e.classList.remove('focusConfig')
        e.classList.add('focusConfigOcult')
    })
    mesagemSemNote.style.display = 'none'

    sy = window.scrollY
    window.scrollTo(0, 0)
    
    inputTitulo.value = 'Titulo'
    newNoteBoxConfig.style.display = 'block'
    closeConfig.id = 'openConfig'
    closeConfig.style.height = `${mainHeight}px`

})
function saveLocalSorage(titulo){
    const tamanho = localStorage.length + 1
    notesCriadas.unshift(titulo)
    localStorage.setItem(`0${tamanho}`, `,${notesCriadas}`)
    sessionStorage.setItem(`0${tamanho}Complete`, ' ')
    
}
function deleteNotesAddConfig(){
    const listConfig = document.querySelector('#listConfig')
    const allChildren = [...listConfig.children]
    allChildren.map((e)=>{
        e.remove()
    })
}
closeConfig.addEventListener('click', ()=>{
    if(inputTitulo.value == ''){
        inputTitulo.value = 'Sem titulo'
    }
    
    saveLocalSorage(`${inputTitulo.value}`)
    creatNote(localStorage.length)

    const focusConfigOcult = [...document.querySelectorAll('.focusConfigOcult')]
    focusConfigOcult.map((e)=>{
        e.classList.remove('focusConfigOcult')
        e.classList.add('focusConfig')
    })

    window.scrollTo(0, sy)

    newNoteBoxConfig.style.display = 'none'
    closeConfig.id = 'closeConfig'
    for(let lpa =0; lpa <notesCriadas.length;lpa++){
        notesCriadas.pop()
    }
    newNoteAdd.value = ''
    deleteNotesAddConfig()
})

function buttonAddTaskFun(){
    if(newNoteAdd.value != ''){
        const listConfig = document.querySelector('#listConfig')
        notesCriadas.push(newNoteAdd.value)
    
        newNoteAdd.value = ''
        newNoteAdd.focus()
        
        creatTasks(notesCriadas.length - 1, listConfig, notesCriadas)
    }
}
newNoteBoxConfig.addEventListener('keyup', element=>{
    if(element.key == 'Enter'){
        buttonAddTaskFun()
    }
})

buttonAddTask.addEventListener('click', buttonAddTaskFun)
function closeNoteFun(){
    window.scrollTo(0, sy)
    notes.map((e)=>{
        if(e.classList.value.indexOf('focusNote')){
            e.children[0].classList.remove('focusConfigOcult')
            e.children[0].classList.add('focusConfig')
            e.classList.remove('focusNote')
            closeNote.classList.remove('onCloseNotes')
            closeNote.classList.add('offCloseNotes')
        }
    })
}
closeNote.addEventListener('click', closeNoteFun)
