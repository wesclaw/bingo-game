// const bingoGame = document.querySelector('.bingo-game')
// const gridSizeBtns = document.querySelectorAll('.grid-size-btn')

// const generateGrid = (size, fontSize) => {
//   bingoGame.style.gridTemplateColumns = `repeat(${size}, 1fr)`
//   bingoGame.style.gridTemplateRows = `repeat(${size}, 1fr)`

//   let gridItems = ''

//   for(let i = 0; i < size * size; i++){
//     gridItems += `<textarea class='grid-item' style='font-size: ${fontSize};'></textarea>`
//   }

//   bingoGame.innerHTML = gridItems
// }

// gridSizeBtns.forEach((btn)=>{
//   btn.addEventListener('click',e=>{
//     const getClass = e.target.classList
//     const size = getClass.contains('grid-three') ? 3 : 
//     getClass.contains('grid-four') ? 4 :
//     getClass.contains('grid-five') ? 5 : 0

//     gridSizeBtns.forEach((btn)=>btn.classList.remove('active'))
//     e.target.classList.add('active')

//     const fontSize = 
//     size === 3 ? '3rem' :
//     size === 4 ? '2.6rem' :
//     size === 5 ? '2rem' : '2rem'

//     if(size) {
//       generateGrid(size, fontSize)
//     }
//   })
// })

// const inputFile = document.querySelector('.inputFile').addEventListener('change',e=>{
//   const files = Array.from(e.target.files); 
//   files.forEach((file) => {
//     const image = URL.createObjectURL(file); 
//     uploadImages(image); 
//   });
// })

// const uploadImages = (image) => {
//   const img_el = document.createElement('img')
//   img_el.classList.add('uploadedImage')
//   img_el.draggable = 'true'
//   img_el.src = image
//   uploadedImages.append(img_el)
// }


// const uploadedImages = document.querySelector('.uploadedImages')

// bingoGame.addEventListener('dragover', (e) => {
//   e.preventDefault(); // Required to allow dropping
// });

// bingoGame.addEventListener('drop', (e) => {
//   e.preventDefault();
//   const file = e.dataTransfer.files[0]; // Get the dropped file
//   if (file && file.type.startsWith('image/')) {
//     const blobURL = URL.createObjectURL(file); // Create blob URL for the image
//     const target = e.target;
//     if (target.tagName === 'TEXTAREA') {
//       // Insert the image into the textarea's background
//       target.style.backgroundImage = `url(${blobURL})`;
//       target.style.backgroundSize = 'cover';
//       target.style.backgroundRepeat = 'no-repeat';
//       target.style.backgroundPosition = 'center';
//       target.value = ''; // Clear text to avoid overlap
//     }
//   }
// });

// const clearGridBtn = document.getElementById('clearGridBtn').addEventListener('click',e=>{
//   bingoGame.innerHTML = 'Select a grid size'
// })

// const createWordsInGrid = (getInputValue) => {
//   const gridItems = document.querySelectorAll('.grid-item');
  
//   // Split the input value by commas to get an array of words
//   const words = getInputValue.split(',').map(word => word.trim()); // Trim to remove any leading/trailing spaces
  
//   // Loop through each word and set it in the corresponding grid item
//   gridItems.forEach((item, index) => {
//     // If the index is within the bounds of the words array, set the word to the grid item
//     if (words[index]) {
//       item.textContent = words[index];
//     } else {
//       item.textContent = ''; // Clear grid item if there are no more words
//     }
//   });
// };

// const addWords = document.getElementById('addWords').addEventListener('input', e => {
//   const getInputValue = e.target.value;
//   createWordsInGrid(getInputValue);
// });









































































































































































const gridSizeBtns = document.querySelectorAll('.grid-size-btn')
const bingoGame = document.querySelector('.bingo-game')

const generateGrid = (e) => {
 bingoGame.innerHTML = ''
 const getClass = e.target.className
 let fontSize
 if(getClass.includes('grid-three')){
  bingoGame.style.gridTemplateColumns = 'repeat(3, 1fr)'
  bingoGame.style.gridTemplateRows = 'repeat(3, 1fr)'
  fontSize = '2.5rem'
  bingoGame.innerHTML = `
  <div class="grid-item" contenteditable="true"></div>
  <div class="grid-item" contenteditable="true"></div>
  <div class="grid-item" contenteditable="true"></div>

  <div class="grid-item" contenteditable="true"></div>
  <div class="grid-item" contenteditable="true"></div>
  <div class="grid-item" contenteditable="true"></div>

  <div class="grid-item" contenteditable="true"></div>
  <div class="grid-item" contenteditable="true"></div>
  <div class="grid-item" contenteditable="true"></div>
  `
 }else if(getClass.includes('grid-four')){
  bingoGame.style.gridTemplateColumns = 'repeat(4, 1fr)'
  bingoGame.style.gridTemplateRows = 'repeat(4, 1fr)'
  fontSize = '1.8rem'
  bingoGame.innerHTML = `
  <div class="grid-item" contenteditable="true"></div>
  <div class="grid-item" contenteditable="true"></div>
  <div class="grid-item" contenteditable="true"></div>
  <div class="grid-item" contenteditable="true"></div>

  <div class="grid-item" contenteditable="true"></div>
  <div class="grid-item" contenteditable="true"></div>
  <div class="grid-item" contenteditable="true"></div>
  <div class="grid-item" contenteditable="true"></div>

  <div class="grid-item" contenteditable="true"></div>
  <div class="grid-item" contenteditable="true"></div>
  <div class="grid-item" contenteditable="true"></div>
  <div class="grid-item" contenteditable="true"></div>

  <div class="grid-item" contenteditable="true"></div>
  <div class="grid-item" contenteditable="true"></div>
  <div class="grid-item" contenteditable="true"></div>
  <div class="grid-item" contenteditable="true"></div>
  `
 }else if(getClass.includes('grid-five')){
  bingoGame.style.gridTemplateColumns = 'repeat(5, 1fr)'
  bingoGame.style.gridTemplateRows = 'repeat(5, 1fr)'
  fontSize = '1.5rem'
  bingoGame.innerHTML = `
  <div class="grid-item" contenteditable="true"></div>
  <div class="grid-item" contenteditable="true"></div>
  <div class="grid-item" contenteditable="true"></div>
  <div class="grid-item" contenteditable="true"></div>
  <div class="grid-item" contenteditable="true"></div>

  <div class="grid-item" contenteditable="true"></div>
  <div class="grid-item" contenteditable="true"></div>
  <div class="grid-item" contenteditable="true"></div>
  <div class="grid-item" contenteditable="true"></div>
  <div class="grid-item" contenteditable="true"></div>

  <div class="grid-item" contenteditable="true"></div>
  <div class="grid-item" contenteditable="true"></div>
  <div class="grid-item" contenteditable="true"></div>
  <div class="grid-item" contenteditable="true"></div>
  <div class="grid-item" contenteditable="true"></div>

  <div class="grid-item" contenteditable="true"></div>
  <div class="grid-item" contenteditable="true"></div>
  <div class="grid-item" contenteditable="true"></div>
  <div class="grid-item" contenteditable="true"></div>
  <div class="grid-item" contenteditable="true"></div>
  
  <div class="grid-item" contenteditable="true"></div>
  <div class="grid-item" contenteditable="true"></div>
  <div class="grid-item" contenteditable="true"></div>
  <div class="grid-item" contenteditable="true"></div>
  <div class="grid-item" contenteditable="true"></div>
  `
 } 
 gridSizeBtns.forEach((btn)=>{
  btn.classList.remove('active')
 })
 e.target.classList.add('active')
 const gridItems = document.querySelectorAll('.grid-item').forEach((item)=>item.style.fontSize = fontSize)
}

gridSizeBtns.forEach((btn)=>{
  btn.addEventListener('click', generateGrid)
})

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

printBtn.addEventListener('click', async (e) => {
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
      scale: 3,
      background: true,
      useCORS: true,
      allowTaint: true,
    },
  };

  for (let i = 0; i < bingoGames.length; i++) {
    const game = bingoGames[i];

    // Create a container to ensure proper centering and layout
    const clone = game.cloneNode(true);
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column'
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';
    container.style.height = '9.5in'; // Letter page height
    container.style.width = '7.5in'; // Letter page width
    container.style.position = 'relative';
    container.style.background = 'white';
    // container.appendChild(clone);


    container.innerHTML = `
    <div style="text-align: center; padding: 20px;">
      <h1 style="margin: 0; font-size: 18px;">Bingo Game</h1>
    </div>
    <div style="padding: 10px; border: 1px solid #ddd; border-radius: 8px; background: #f9f9f9;">
      ${game.outerHTML}
    </div>
  `;

    document.body.appendChild(container); // Temporarily add to DOM

    // Convert the DOM content to an image
    const canvas = await html2canvas(container, options.html2canvas);
    const imgData = canvas.toDataURL('image/jpeg', options.image.quality);

    if (i > 0) {
      pdf.addPage(); // Add a new page for each game
    }
    pdf.addImage(imgData, 'JPEG', options.margin[1], options.margin[0], 8.5 - options.margin[1] * 2, 11 - options.margin[0] * 2);

    container.remove(); // Clean up
  }

  pdf.save('all-bingo-games.pdf');
});



