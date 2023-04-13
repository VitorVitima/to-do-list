const button = document.querySelector('#buttonTag')
const list = document.querySelector('#list')
const text = document.querySelector("input[type='text']")
console.log(text)

function drawTaks(e){
    const div = document.createElement('div')
    div.classList.add('tasks')
    div.id = `task${e}`
    eval(`div.innerHTML = localStorage.task${e}`)
    list.appendChild(div)
}
function drawAllTaks(){
    for(let v1=0; v1 < localStorage.length; v1++){
        drawTaks(v1)
    }
}
function keyStorage(){
    const tamanho = localStorage.length
    return `task${tamanho}`
}
function taskRepetida(e){
    
}
function addNewTask(e){
    if(text.value == eval(`localStorage.task${e}`) || taskRepetida(e)){
        drawTaks(e)
    }
}
function addTaks(){
    localStorage.setItem(keyStorage(), text.value)
    for(let v1=0; v1 < localStorage.length; v1++){
        addNewTask(v1)
    }
}
function textNull(){
    text.style.borderColor = 'red'
    setTimeout(()=>{
        text.style.borderColor = '#F7ECE1'
    }, 1000)
    console.log('foi')
}
button.addEventListener('click', ()=>{
    console.log(localStorage)
    if(text.value != ''){
        addTaks()
    } else {
        textNull()
    }
})
drawAllTaks()