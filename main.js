const generateGrid = (e) => {
  let gridSize;
  let fontSize;
  const getTarget = e.target.classList
  bingoGame.innerHTML = ''
  if(getTarget.contains('grid-three')) {
    gridSize = 3;
    fontSize = '2rem'
  }else if(getTarget.contains('grid-four')){
    gridSize = 4;
    fontSize = '1.8rem'
  }else if(getTarget.contains('grid-five')){
    gridSize = 5;
    fontSize = '1.5rem'
  }
  bingoGame.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
  bingoGame.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`
  const gridLayout = `<div class="grid-item" contenteditable="true" style='fontSize:${fontSize}'></div>`
  for(let i = 0; i < gridSize * gridSize; i++) {
    bingoGame.innerHTML += gridLayout
  } 
  const gridBtns = document.querySelectorAll('.grid-size-btn').forEach((btn)=>{
    btn.classList.remove('active')
    e.target.classList.add('active')
  })
}

const bingoGame = document.querySelector('.bingo-game')
const wrap = document.querySelector('.wrap').addEventListener('click', generateGrid)
const addWords = document.getElementById('addWords')

addWords.addEventListener('input',e=>{
  const getWord = addWords.value
  const gridItems = document.querySelectorAll('.grid-item')
  gridItems.forEach((item, index)=>{
    const findComma = getWord.split(',')
    item.textContent = findComma[index]
  })
})

const inputFile = document.querySelector('.inputFile')
const uploadedImages = document.querySelector('.uploadedImages')

inputFile.addEventListener('change',e=>{
  for (const file of inputFile.files) {
    const img_el = document.createElement('img')
    img_el.classList.add('uploadedImage')
    img_el.src = URL.createObjectURL(file)
    uploadedImages.append(img_el)
  }  
})

bingoGame.addEventListener('drop',e=>{
  e.preventDefault()
  const file = e.dataTransfer.files[0]
  const getGridItem = e.target;
  const url = URL.createObjectURL(file);
  getGridItem.style.backgroundImage = 
  `url(${url})`
  getGridItem.style.backgroundSize = 'contain'
  getGridItem.style.backgroundRepeat = 'no-repeat'
  getGridItem.style.backgroundPosition = 'center'
})

const numberOfPlayers = document.getElementById('numberOfPlayers')
const createSheetsBtn = document.getElementById('createSheets')

const shuffleCards = (turnToArray, createClone) => {
  const gameWrap = document.querySelector('.game-wrap')
  for (let i = turnToArray.length -1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i+1));
    let k = turnToArray[i];
    turnToArray[i] = turnToArray[j];
    turnToArray[j] = k;
  }
  createClone.innerHTML = ''
  turnToArray.forEach((shuffledItem)=>{
    createClone.append(shuffledItem)
  })
  gameWrap.append(createClone)
}

createSheetsBtn.addEventListener('click',e=>{
  const numOfPlayers = numberOfPlayers.value;
  const bingoGame = document.querySelector('.bingo-game')
  const getHTML = bingoGame
  for(let i=0; i<numOfPlayers;i++){
    const cloneSheet = getHTML.cloneNode(true)
    const createClone = cloneSheet;
    const turnToArray = Array.from(createClone.children)
    shuffleCards(turnToArray, createClone)
  }
})

const { jsPDF } = window.jspdf;
const printBtn = document.querySelector('#printBtn');
const buttonPrint = document.querySelector('.button-82-front')

printBtn.addEventListener('click', async (e) => {
  buttonPrint.textContent = 'Loading...'
  const bingoGames = document.querySelectorAll('.bingo-game');
  const pdf = new jsPDF({
    unit: 'in',
    format: 'a4',
    orientation: 'portrait',
  });
  const options = {
    margin: [0.5, 0.5, 0.5, 0.5], // Top, Left, Bottom, Right margins
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: {
      scale: 6,
      background: true,
      useCORS: true,
      allowTaint: true,
    },
  };
  for (let i = 0; i < bingoGames.length; i++) {
    const game = bingoGames[i];
    const clone = game.cloneNode(true);
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column'
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';
    container.style.height = '11in'; // was 10
    container.style.width = '8in'; // Letter page width
    container.style.position = 'relative';
    container.style.background = 'ghostwhite';
    container.innerHTML = `
    <div style="text-align: center; padding: 20px;">
      <h1 style="
      margin: 0;
      font-size: 5rem;
      font-family: 'Honk', serif;
      font-optical-sizing: auto;
      font-weight: 400;
      font-style: normal;
      font-variation-settings: 'MORF' 15, 'SHLN' 50;
    ">
      BINGO
    </h1>
    </div>
    <div style="padding: 10px; border: 1px solid #ddd; border-radius: 8px; background: #f9f9f9;">
      ${game.outerHTML}
    </div>
  `;
    document.body.appendChild(container); 
    const canvas = await html2canvas(container, options.html2canvas);
    const imgData = canvas.toDataURL('image/jpeg', options.image.quality);
    if (i > 0) {
      pdf.addPage(); 
    }
    pdf.addImage(imgData, 'JPEG', options.margin[1], options.margin[0], 8.5 - options.margin[1] * 2, 11 - options.margin[0] * 2);
    container.remove(); 
  }
  pdf.save('all-bingo-games.pdf');
  buttonPrint.textContent = 'Saved'
});






































// const gridSizeBtns = document.querySelectorAll('.grid-size-btn')
// const bingoGame = document.querySelector('.bingo-game')

// const generateGrid = (e) => {
//  bingoGame.innerHTML = ''
//  const getClass = e.target.className
//  let fontSize
//  if(getClass.includes('grid-three')){
//   bingoGame.style.gridTemplateColumns = 'repeat(3, 1fr)'
//   bingoGame.style.gridTemplateRows = 'repeat(3, 1fr)'
//   fontSize = '2.5rem'
//   bingoGame.innerHTML = `
//   <div class="grid-item" contenteditable="true"></div>
//   <div class="grid-item" contenteditable="true"></div>
//   <div class="grid-item" contenteditable="true"></div>

//   <div class="grid-item" contenteditable="true"></div>
//   <div class="grid-item" contenteditable="true"></div>
//   <div class="grid-item" contenteditable="true"></div>

//   <div class="grid-item" contenteditable="true"></div>
//   <div class="grid-item" contenteditable="true"></div>
//   <div class="grid-item" contenteditable="true"></div>
//   `
//  }else if(getClass.includes('grid-four')){
//   bingoGame.style.gridTemplateColumns = 'repeat(4, 1fr)'
//   bingoGame.style.gridTemplateRows = 'repeat(4, 1fr)'
//   fontSize = '1.8rem'
//   bingoGame.innerHTML = `
//   <div class="grid-item" contenteditable="true"></div>
//   <div class="grid-item" contenteditable="true"></div>
//   <div class="grid-item" contenteditable="true"></div>
//   <div class="grid-item" contenteditable="true"></div>

//   <div class="grid-item" contenteditable="true"></div>
//   <div class="grid-item" contenteditable="true"></div>
//   <div class="grid-item" contenteditable="true"></div>
//   <div class="grid-item" contenteditable="true"></div>

//   <div class="grid-item" contenteditable="true"></div>
//   <div class="grid-item" contenteditable="true"></div>
//   <div class="grid-item" contenteditable="true"></div>
//   <div class="grid-item" contenteditable="true"></div>

//   <div class="grid-item" contenteditable="true"></div>
//   <div class="grid-item" contenteditable="true"></div>
//   <div class="grid-item" contenteditable="true"></div>
//   <div class="grid-item" contenteditable="true"></div>
//   `
//  }else if(getClass.includes('grid-five')){
//   bingoGame.style.gridTemplateColumns = 'repeat(5, 1fr)'
//   bingoGame.style.gridTemplateRows = 'repeat(5, 1fr)'
//   fontSize = '1.5rem'
//   bingoGame.innerHTML = `
//   <div class="grid-item" contenteditable="true"></div>
//   <div class="grid-item" contenteditable="true"></div>
//   <div class="grid-item" contenteditable="true"></div>
//   <div class="grid-item" contenteditable="true"></div>
//   <div class="grid-item" contenteditable="true"></div>

//   <div class="grid-item" contenteditable="true"></div>
//   <div class="grid-item" contenteditable="true"></div>
//   <div class="grid-item" contenteditable="true"></div>
//   <div class="grid-item" contenteditable="true"></div>
//   <div class="grid-item" contenteditable="true"></div>

//   <div class="grid-item" contenteditable="true"></div>
//   <div class="grid-item" contenteditable="true"></div>
//   <div class="grid-item" contenteditable="true"></div>
//   <div class="grid-item" contenteditable="true"></div>
//   <div class="grid-item" contenteditable="true"></div>

//   <div class="grid-item" contenteditable="true"></div>
//   <div class="grid-item" contenteditable="true"></div>
//   <div class="grid-item" contenteditable="true"></div>
//   <div class="grid-item" contenteditable="true"></div>
//   <div class="grid-item" contenteditable="true"></div>
  
//   <div class="grid-item" contenteditable="true"></div>
//   <div class="grid-item" contenteditable="true"></div>
//   <div class="grid-item" contenteditable="true"></div>
//   <div class="grid-item" contenteditable="true"></div>
//   <div class="grid-item" contenteditable="true"></div>
//   `
//  } 
//  gridSizeBtns.forEach((btn)=>{
//   btn.classList.remove('active')
//  })
//  e.target.classList.add('active')
//  const gridItems = document.querySelectorAll('.grid-item').forEach((item)=>item.style.fontSize = fontSize)
// }

// gridSizeBtns.forEach((btn)=>{
//   btn.addEventListener('click', generateGrid)
// })