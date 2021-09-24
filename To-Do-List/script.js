//Variables

let btn = document.getElementById('btn');
let input = document.getElementById('input');
let container = document.getElementById('container');
let clearbtn = document.getElementById('btn-clr');
let clearbtnAll = document.getElementById('btn-clr-all')



//Function

let MyFunction = function() {

if(input.value != ''){
	let p = document.createElement("p");
	let span = document.createElement("span")
	let i = document.createElement("i");

	
	
		i.className = "fa fa-trash";
		span.innerText = input.value;
		p.append(i, span);
		container.append(p);
		input.value = "";



	span.addEventListener('click', () => {
		if(span.style.textDecoration != "line-through"){
			span.style.textDecoration = "line-through";
		}

		else if (span.style.textDecoration = "line-through"){
			span.style.textDecoration = "none";
		}
	})



	i.addEventListener('click', () => {
		p.remove();
	})



	clearbtn.addEventListener('click', () => {
		if(span.style.textDecoration === "line-through"){
		p.remove();
	}
	})



	clearbtnAll.addEventListener('click', () => {
		p.remove();
	})
}

}


//Function Call on EventListeners

btn.addEventListener('click', MyFunction);
input.addEventListener('keypress',function(e){
    if (e.keyCode === 13) {
    MyFunction();
  }
});