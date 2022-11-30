const sketchGridContainer = document.getElementById('sketch-grid-container');
console.log(sketchGridContainer);

//create 16x 16 grid

for (let i = 1; i <= 16; i++) {
    const newDiv = document.createElement('div');
    newDiv.className = 'sketch-tile';

	sketchGridContainer.appendChild(newDiv);
}