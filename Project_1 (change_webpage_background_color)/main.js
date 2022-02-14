//  1. create rgb generator function

function rgbGenerator() {

    const red = Math.floor(Math.random() * 254);
    const green = Math.floor(Math.random() * 254);
    const blue = Math.floor(Math.random() * 254);
    
    document.body.style.backgroundColor = `rgb(${red},${green} ,${blue})`;
    document.getElementById('btn').style.backgroundColor = `rgb(${green},${red} ,${blue})`;
}

//  2. select button
const button = document.getElementById('btn');

//  3. implement function to selected button
button.onclick = rgbGenerator;