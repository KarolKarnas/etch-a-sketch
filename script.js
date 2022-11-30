
let sqPerSide;


// add event listener to the button

let setGridButton = document.getElementById('set-grid-button');
setGridButton.addEventListener('click', getSqPerSide);

// main function create the square grid

function getSqPerSide() {

    // reset old Tiles background
const oldTiles = document.querySelectorAll('.sketch-tile');
oldTiles.forEach(oldTile => {
    oldTile.style = 'background: #c3c3c3';
});
    //get correct number

	sqPerSide = +prompt('How many squares per side? (min: 2, max: 100)');

	if (sqPerSide < 2) {
		alert('to LOW! again');
		getSqPerSide();
	} else if (sqPerSide > 100) {
		alert('to HIGH! again');
		getSqPerSide();
	} else if (isNaN(sqPerSide)) {
		alert('Something went wrong. Write a number! Again!');
        getSqPerSide();
	} else {
        let sqNumber = sqPerSide * sqPerSide;
        // console.log(sqNumber);
        
        const sketchGridContainer = document.getElementById('sketch-grid-container');
        
        // set CSS grid according to sqPerSide
        
        sketchGridContainer.style.cssText = `grid-template-columns: repeat(${sqPerSide}, 1fr); grid-template-rows: repeat(${sqPerSide}, 1fr);`;
        
        //create grid, edge of grid = sqPerSide, number of squares is sqPerSide to power(2) = sqNumber
        
        for (let i = 1; i <= sqNumber; i++) {
            const newDiv = document.createElement('div');
            newDiv.className = 'sketch-tile';
            newDiv.addEventListener('mouseover', () => {
                newDiv.style = 'background: deeppink;';
            });
        
            sketchGridContainer.appendChild(newDiv);
        }
        
	}
}