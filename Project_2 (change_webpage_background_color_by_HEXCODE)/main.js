//  1. create rgb generator function

function rgbGenerator() {
// generate random rgb values
    const red = Math.floor(Math.random() * 254);
    const green = Math.floor(Math.random() * 254);
    const blue = Math.floor(Math.random() * 254);

// change background & button hexadecimal color  
    const hexCode = `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
    document.body.style.backgroundColor = hexCode;
    document.getElementById('btn').style.backgroundColor = `rgb(${green},${red} ,${blue})`;
    document.getElementById('hexCode').value = hexCode;
}

//  2. select button
const button = document.getElementById('btn');

//  3. implement function to the selected button or any other place
button.onclick = rgbGenerator;
// window.onload = rgbGenerator
// setInterval(rgbGenerator, 1000);