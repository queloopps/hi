console.log('Work')
const cols =document.querySelectorAll('.col')
document.addEventListener('keydown', event=>{
    event.preventDefault()
    if(event.code.toLowerCase() =='space'){
        randomColors()
    }
})
document.addEventListener('click', event=>{
    const type=event.target.dataset.type
    if(type=='lock'){
         const node =
         event.target.tagName.toLowerCase()=='i'
         ? event.target
         : event.target.children[0]

         node.classList.toggle('fa-lock-open')
         node.classList.toggle('fa-lock')
    }else if(type=='copy'){
copyToClick(event.target.textContent)
    }
})

function generateRandomColor() {
    // rgb
    const hexCodes ='1234567890ABCDEF'
    let color=''
    for(let i=0;i<6;i++){
        color+=hexCodes[Math.floor(Math.random()*hexCodes.length)]
    }
    return '#'+ color
}

function randomColors(isInitial){
    const colors= isInitial? getHash():[]
    cols.forEach((col, index)=>{
        const isLocked=col.querySelector('i').classList.contains('fa-lock')

    const text=col.querySelector('h2')
    const button=col.querySelector('button')
   
    if(isLocked){
        colors.push(text.textContent)
        return
    }
    const color=isInitial?
     colors[index]?
     colors[index]:chroma.random()
     :chroma.random()
    if(!isInitial){
    colors.push(color)}
        text.textContent=color
        col.style.background = color
setTextColor(text,color)
setTextColor(button, color)
// console.log(col)
    })
    updatrLocstionHash(colors)
}
function setTextColor(text,color){
   const luminance= chroma(color).luminance()
   text.style.color= luminance>0.5? 'black': 'while'
   console.log(luminance )
 //  button.style.color= luminance>0.5? 'black': 'while'

}
function copyToClick(text){
return navigator.clipboard.writeText(text)
}
function updatrLocstionHash(colors = []){
    document.location.hash=colors.map(col=>{
        return col.toString().substring(1)
    }).join('-')
}
function getHash(){
    if(document.location.hash.length>1){

        return document.location.hash.substring(1).split('-').map(color=>'#'+color)
    }
    return []
}

randomColors(true)