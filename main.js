const characterAmountRange=document.getElementById('characterAmountRange')
const characterAmountNumber=document.getElementById('characterAmountNumber')
const form=document.getElementById('generatePassword');
const includeUpperCase=document.getElementById('includeUpperCase')
const includeNumbers=document.getElementById('includeNumbers')
const includeSymbols=document.getElementById('includeSymbols')

const passwordDisplay=document.getElementById('password-display')


const upper_case=arrayFromLowToHigh(65, 90)
const lower_case=arrayFromLowToHigh(97, 122)
const number_character=arrayFromLowToHigh(48, 57)
const symbol_character=arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58, 64)
).concat(
    arrayFromLowToHigh(91, 96)
).concat(
    arrayFromLowToHigh(123, 126)
)

characterAmountNumber.addEventListener('input', syncCharacter);
form.addEventListener('submit', (e)=>{
    e.preventDefault(); 
    const includeAmountElement=characterAmountNumber.value
    const includeUpperCaseElement=includeUpperCase.checked
    const includeSymbolsElement=includeSymbols.checked
    const includeNumbersElement=includeNumbers.checked

    let password=generatePassword(includeAmountElement, includeUpperCaseElement, includeNumbersElement,
        includeSymbolsElement)


    passwordDisplay.innerText=password
      
})

function generatePassword(includeAmountElement, includeUpperCaseElement, 
    includeNumbersElement,includeSymbolsElement){
   let charCodes=lower_case;
   if(includeUpperCase) charCodes=charCodes.concat(symbol_character)
   if(includeNumbers) charCodes=charCodes.concat(number_character)
   if(includeSymbols) charCodes=charCodes.concat(symbol_character)

   let passwordCharacters=[];
   for(let i=0; i<includeAmountElement; i++){
    const character=charCodes[Math.floor(Math.random() * charCodes.length)]

    passwordCharacters.push(String.fromCharCode(character))
   } 
   return passwordCharacters.join('')
}   


function arrayFromLowToHigh(low, high){
    const array=[]
     
    for(let i=low; i<=high; i++){
        array.push(i);
    }

    return array;
}

function syncCharacter(e){
     const value=e.target.value;
     characterAmountNumber.value=value;
     characterAmountRange.value=value

} 

