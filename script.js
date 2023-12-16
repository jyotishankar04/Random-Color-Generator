let button = document.querySelector(".btn");
let colorText = document.querySelector("span");
let hex = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',    
]

button.addEventListener('click',()=>{
    // !hex color 
    const hexColor = getHexColor();
   document.body.style.backgroundColor = hexColor;
   colorText.innerHTML = hexColor;
})

const generateRandomNum= () =>{
    return Math.floor(Math.random()*hex.length);

}

const getHexColor = ()=>{
    let hexColor = '#';
    for(let i = 0;i< 6; i++){
        hexColor+=hex[generateRandomNum()];
    }
    return hexColor;
}

