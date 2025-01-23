const bingoGame = document.querySelector('.bingo-game')
const gridSizeBtns = document.querySelectorAll('.grid-size-btn')

const generateGrid = (size, fontSize) => {
  bingoGame.style.gridTemplateColumns = `repeat(${size}, 1fr)`
  bingoGame.style.gridTemplateRows = `repeat(${size}, 1fr)`

  let gridItems = ''

  for(let i = 0; i < size * size; i++){
    gridItems += `<textarea class='grid-item' style='font-size: ${fontSize};'></textarea>`
  }

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
    size === 3 ? '3rem' :
    size === 4 ? '2.6rem' :
    size === 5 ? '2rem' : '2rem'

    if(size) {
      generateGrid(size, fontSize)
    }
  })
})

const inputFile = document.querySelector('.inputFile').addEventListener('change',e=>{
  const files = Array.from(e.target.files); 
  files.forEach((file) => {
    const image = URL.createObjectURL(file); 
    uploadImages(image); 
  });
})

const uploadImages = (image) => {
  const img_el = document.createElement('img')
  img_el.classList.add('uploadedImage')
  img_el.draggable = 'true'
  img_el.src = image
  uploadedImages.append(img_el)
}


const uploadedImages = document.querySelector('.uploadedImages')

bingoGame.addEventListener('dragover', (e) => {
  e.preventDefault(); // Required to allow dropping
});

bingoGame.addEventListener('drop', (e) => {
  e.preventDefault();
  const file = e.dataTransfer.files[0]; // Get the dropped file
  if (file && file.type.startsWith('image/')) {
    const blobURL = URL.createObjectURL(file); // Create blob URL for the image
    const target = e.target;
    if (target.tagName === 'TEXTAREA') {
      // Insert the image into the textarea's background
      target.style.backgroundImage = `url(${blobURL})`;
      target.style.backgroundSize = 'cover';
      target.style.backgroundRepeat = 'no-repeat';
      target.style.backgroundPosition = 'center';
      target.value = ''; // Clear text to avoid overlap
    }
  }
});

const clearGridBtn = document.getElementById('clearGridBtn').addEventListener('click',e=>{
  bingoGame.innerHTML = 'Select a grid size'
})

const createWordsInGrid = (getInputValue) => {
  const gridItems = document.querySelectorAll('.grid-item');
  
  // Split the input value by commas to get an array of words
  const words = getInputValue.split(',').map(word => word.trim()); // Trim to remove any leading/trailing spaces
  
  // Loop through each word and set it in the corresponding grid item
  gridItems.forEach((item, index) => {
    // If the index is within the bounds of the words array, set the word to the grid item
    if (words[index]) {
      item.textContent = words[index];
    } else {
      item.textContent = ''; // Clear grid item if there are no more words
    }
  });
};

const addWords = document.getElementById('addWords').addEventListener('input', e => {
  const getInputValue = e.target.value;
  createWordsInGrid(getInputValue);
});