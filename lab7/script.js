// HTML
let div = document.createElement("div");
document.body.appendChild(div);
let input = document.createElement("input");
div.appendChild(input);
let img = document.createElement("img");
img.src = "ball.png";
div.appendChild(img);
let h1 = document.createElement("h1");
h1.textContent = "Запитуйте";
div.appendChild(h1);
let error = document.createElement("p");
div.appendChild(error);

// CSS
img.style.cssText = 'width: 90%; padding-top: 2%;';
div.style.cssText = 'width: 40%; display: flex; flex-direction: column; align-items: center; border: 2px solid black; padding: 2%; margin-top: 3%; box-shadow: 3px 3px 33px blue;';
document.body.style.cssText = 'display: flex; justify-content: center; background-color: rgba(6,12,33,255);' ;
input.style.cssText = 'border-radius: 16px; height: 40px; background-color:rgba(238,221,255,255); width: 90%; font-size: 28px; text-align: center; border: none;';
h1.style.cssText = 'color: white; position: absolute; margin-top: 19%; font-size: 64px; text-shadow: 2px 1px black;'
error.style.cssText = 'color: red;'

// JS
img.addEventListener("click", function () {
	let answers = ["Так", "Ні", "Можливо"];
	error.innerHTML = "";

	if (input.value && input.value[input.value.length - 1] == "?"){
	let destiny = Math.random() * answers.length;
	h1.innerHTML = answers[Math.floor(destiny)];
	}
	else{
		if (input.value){
		error.innerHTML = "Питання має закінчуватися символом «?»";
		}
		else {
			error.innerHTML = "Введіть питання";
		}
	}
  });