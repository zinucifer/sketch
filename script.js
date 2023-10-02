const container = document.querySelector('.container');

const choice = 16;
let bgColor="background-color:black;";
let rgbIndicator=0;

for(let i=0;i<(choice*choice);i++){
    const grid = document.createElement('div');
    grid.classList.add('grid');
    container.appendChild(grid);
}

const gridBoxes = document.querySelectorAll('.grid');

gridBoxes.forEach((boxes) => {
    boxes.addEventListener('mouseover', () =>{
        boxes.setAttribute('style', bgColor);
        if(rgbIndicator==1){
            bgColor=rgbColor();
        }
    });
});

const black = document.querySelector('.black');
const eraser = document.querySelector('.eraser');
const rgb = document.querySelector('.rgb');

black.addEventListener('click', () => {
    bgColor="background-color:black;";
    rgbIndicator=0;
});

eraser.addEventListener('click', () => {
    bgColor="background-color:white;";
    rgbIndicator=0;
});

rgb.addEventListener('click', () => {
    rgbIndicator=1;
});

function rgbColor(){
    let x=Math.round(Math.random()*256);
    let y=Math.round(Math.random()*256);
    let z=Math.round(Math.random()*256);
    bgColor=`background-color:rgb(${x},${y},${z});`;
    return bgColor;
}
