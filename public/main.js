const bingoGame = document.querySelector('.bingo-game')
const gridSizeBtns = document.querySelectorAll('.grid-size-btn')

const generateGrid = (size, fontSize) => {
  bingoGame.style.gridTemplateColumns = `repeat(${size}, 1fr)`
  bingoGame.style.gridTemplateRows = `repeat(${size}, 1fr)`

  let gridItems = ''

  for(let i = 0; i < size * size; i++){
    gridItems += `<textarea class='grid-item' style='font-size: ${fontSize};'></textarea>`
  }

  console.log(fontSize)
  bingoGame.innerHTML = gridItems
}

gridSizeBtns.forEach((btn)=>{
  btn.addEventListener('click',e=>{
    const getClass = e.target.classList
    const size = getClass.contains('grid-three') ? 3 : 
    getClass.contains('grid-four') ? 4 :
    getClass.contains('grid-five') ? 5 : 0

    gridSizeBtns.forEach((btn)=>btn.classList.remove('active'))
    e.target.classList.add('active')

    const fontSize = 
    size === 3 ? '5rem' :
    size === 4 ? '3.5rem' :
    size === 5 ? '1rem' : '1.5rem'

    if(size) {
      generateGrid(size, fontSize)
    }
  })
})

