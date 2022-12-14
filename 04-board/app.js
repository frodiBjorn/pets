const board = document.querySelector('#board')
const colors = ['#20dad8','#ffd257','#ff72ae','#fffb6e', '#b7ffc5','#ff7677']
const SQUARES_NUMBER = 1500

for (let i = 0; i < SQUARES_NUMBER; i++){
    const square = document.createElement('div')
    square.classList.add('square')
    
    square.addEventListener('mouseover', ()=>
        setColor(square)
    ) 
    square.addEventListener('mouseleave', ()=>
        removeColor(square)
    )

    board.append(square)
}

function setColor(element){
    const color = getRandomColor()
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}
function removeColor(element) {
    element.style.background = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
   return colors[Math.floor(Math.random() * colors.length)]
}