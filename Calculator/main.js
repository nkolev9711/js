const display1El = document.querySelector(".display-1");
const display2El = document.querySelector(".display-2");
const tempResultEl = document.querySelector(".temp-result");
const numbersEl = document.querySelectorAll(".number");
const operationEl = document.querySelectorAll(".operation");
const equalEl = document.querySelector(".equal");
const clearAllBtn = document.querySelector(".all-clear");
const clearLastBtn = document.querySelector(".backspace");

let dis1Num = "";
let dis2Num = "";
let result = null;
let lastOperation = "";
let haveDot = false;
let flag = false;


numbersEl.forEach((number) => {
	number.addEventListener('click', (e) => {

			if(e.target.innerText === '.' && !haveDot){
			haveDot = true;
		} else if (e.target.innerText === '.' && haveDot) return;
		dis2Num += e.target.innerText;
		display2El.innerText = dis2Num;

		if(flag === true) {
			dis2Num = e.target.innerText;
			display2El.innerText = dis2Num
		}

		flag = false;
	})
		
	})

operationEl.forEach((operation) => {
	operation.addEventListener('click', (e) => {
		if(!dis2Num) return;
		haveDot = false;

		const operationName = e.target.innerText;

		if (dis1Num && dis2Num && lastOperation) {
      		mathOperation();
   		} else {
      		result = parseFloat(dis2Num);
    	}
		
		lastOperation = operationName;

		equationText(operationName);

	})
})

equalEl.addEventListener('click', (e) => {
		if(!dis1Num || !dis2Num) return;
	
		mathOperation();

		display2El.innerText = result;
		dis2Num = result;
		dis1Num = '';
		display1El.innerText = '';
		flag = true;

})


function equationText(name) {

	dis1Num += dis2Num + ' ' + name + ' ';
	display1El.innerText = dis1Num;
	display2El.innerText = '';
	dis2Num = '';
}


function mathOperation() {
	if (lastOperation === "x") {
    result = parseFloat(result) * parseFloat(dis2Num);
  } else if (lastOperation === "+") {
    result = parseFloat(result) + parseFloat(dis2Num);
  } else if (lastOperation === "-") {
    result = parseFloat(result) - parseFloat(dis2Num);
  } else if (lastOperation === "/") {
    result = parseFloat(result) / parseFloat(dis2Num);
  } 
}

clearAllBtn.addEventListener("click", () => {
  dis1Num = "";
  dis2Num = "";
  display1El.innerText = "";
  display2El.innerText = "";
  result = "";
});

clearLastBtn.addEventListener('click', () => {
	dis2Num = dis2Num.toString().slice(0,-1);
	display2El.innerText = dis2Num;
})
