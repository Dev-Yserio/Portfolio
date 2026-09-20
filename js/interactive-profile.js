// ===== Profile picture 3x3 grid ===== //

const container = document.querySelector('#portrait');
const images = document.querySelectorAll('.img');

// We keep the same 3x3 map
const gridMap = [
  ['img-tl', 'img-tc', 'img-tr'], // Row 0: Top
  ['img-ml', 'img-mc', 'img-mr'], // Row 1: Middle
  ['img-bl', 'img-bc', 'img-br']  // Row 2: Bottom
];

// Listen to the ENTIRE document, not just the container
document.addEventListener('mousemove', (e) => {
  // 1. Get the current position of the image container on the screen
  const rect = container.getBoundingClientRect();
  
  // Default to Middle (row 1) and Center (col 1)
  let col = 1; 
  let row = 1; 

  // 2. Check X axis (Left, Center, Right)
  if (e.clientX < rect.left) {
    col = 0; // Mouse is to the left of the image
  } else if (e.clientX > rect.right) {
    col = 2; // Mouse is to the right of the image
  }

  // 3. Check Y axis (Top, Middle, Bottom)
  if (e.clientY < rect.top) {
    row = 0; // Mouse is above the image
  } else if (e.clientY > rect.bottom) {
    row = 2; // Mouse is below the image
  }

  // 4. Find the target image ID
  const targetId = gridMap[row][col];
  
  // 5. Update the visible image
  images.forEach(img => {
    if (img.id === targetId) {
      img.classList.add('active');
    } else {
      img.classList.remove('active');
    }
  });
});