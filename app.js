
// let buttons = document.querySelectorAll('button');

// let input = document.querySelector('input');


// for(let button of buttons){
//     button.addEventListener('click' , function(event){
//         let btnText = event.target.innerText;
//         if(btnText === 'C'){
//             input.value = '';
//         }
//         else if( btnText === '='){
//             try{
//                 input.value = eval(input.value);
//             }
//             catch(e){
//                 input.value = 'gaddari korbe' //invalid
//             }
//         }
//         else{
//             input.value += btnText;
//         }

//     })
// }
let buttons = document.querySelectorAll('button');
let input = document.querySelector('input');

for (let button of buttons) {
    button.addEventListener('click', function (event) {
        let btnText = event.target.innerText;
        
        // Clear input if 'C' is clicked
        if (btnText === 'C') {
            input.value = '';
        } 
        // Evaluate expression if '=' is clicked
        else if (btnText === '=') {
            try {
                input.value = eval(input.value);
            } catch (e) {
                input.value = 'gaddari korbe'; // Show error if expression is invalid
            }
        } 
        // Append clicked button's text to input field
        else {
            input.value += btnText;
        }

        // Adjust font size based on the length of the input value
        adjustFontSize();
    });
}

// Function to reduce font size when input gets too long
function adjustFontSize() {
    const maxFontSize = 48; // Starting font size
    const minFontSize = 16; // Minimum font size
    const inputMaxLength = 10; // Threshold length for reducing font size
    const charLength = input.value.length;

    if (charLength > inputMaxLength) {
        const newFontSize = Math.max(minFontSize, maxFontSize - (charLength - inputMaxLength) * 2);
        input.style.fontSize = `${newFontSize}px`;
    } else {
        input.style.fontSize = `${maxFontSize}px`; // Reset font size if within limit
    }
}

