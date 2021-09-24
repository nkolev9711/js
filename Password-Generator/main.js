const charAmountRange = document.getElementById('charAmountRange')
const charAmountNumber = document.getElementById('charAmountNumber')
const passwordDisplay = document.getElementById('password-display')
const includeUppercase = document.getElementById('includeUppercase')
const includeNumber = document.getElementById('includeNumber')
const includeSymbol = document.getElementById('includeSymbol')
const form = document.getElementById('form')
const copyBtn = document.getElementById('copyBtn')

const UPPERCASE_CODES = arrayFromLowToHigh(65, 90);
const LOWERCASE_CODES = arrayFromLowToHigh(97, 122);
const NUMBER_CODES = arrayFromLowToHigh(48, 57);
const SYMBOL_CODES = arrayFromLowToHigh(33, 47)
  .concat(arrayFromLowToHigh(58, 64))
  .concat(arrayFromLowToHigh(91, 96))
  .concat(arrayFromLowToHigh(123, 126));



charAmountRange.addEventListener('input', sync)
charAmountNumber.addEventListener('input', sync)



form.addEventListener('submit', (e) => {
	e.preventDefault();

	const charAmount = charAmountNumber.value;
	const UppercaseChecked = includeUppercase.checked;
	const NumbersChecked = includeNumber.checked;
	const SymbolsChecked = includeSymbol.checked;

	const password = generatePassword(charAmount, UppercaseChecked, NumbersChecked, SymbolsChecked);

	passwordDisplay.innerText = password;

	if(passwordDisplay != '')
	{
		copyBtn.style.display = "block"
	}

	if(copyBtn.innerText = "Copied") {
		copyBtn.innerText = "Copy Password"
		copyBtn.classList.remove("copyActive")
	}

})


function generatePassword(charAmount, UppercaseChecked, NumbersChecked, SymbolsChecked){
	let charCodes = LOWERCASE_CODES;
	if(UppercaseChecked) charCodes = charCodes.concat(UPPERCASE_CODES);
	if(NumbersChecked) charCodes = charCodes.concat(NUMBER_CODES);
	if(SymbolsChecked) charCodes = charCodes.concat(SYMBOL_CODES);

	let passwordArray = [];

	for(i = 0; i < charAmount; i++){
		const characterCodes = charCodes[Math.floor(Math.random()*charCodes.length)];
		passwordArray.push(String.fromCharCode(characterCodes));
	}
	return passwordArray.join('')
}

copyBtn.addEventListener('click', () => {
	const textarea = document.createElement("textarea");
 	const passwordToCopy = passwordDisplay.innerText;

  	textarea.value = passwordToCopy;
  	form.appendChild(textarea);

  	textarea.select();
  	document.execCommand("copy");
  	textarea.remove();

  	if(copyBtn.innerText = "Copy Password"){

  	copyBtn.innerText = "Copied"
  	copyBtn.classList.add("copyActive")
  }
  	
})


function arrayFromLowToHigh(low, high){
	let array = []
	for(i = low; i <= high; i++){
		array.push(i);
	}

	return array;
}

function sync(e){
	const value = e.target.value
	charAmountRange.value = value
	charAmountNumber.value = value
}