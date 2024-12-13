const user_name = prompt("Введіть ім'я");
document.getElementById("user_name").innerHTML = user_name;
if (!user_name || user_name.length > 15){
	document.getElementById("user_name").innerHTML = "Користувач";
}
const btn = document.getElementById("btn");

const winner = document.getElementById("winner"); 
btn.addEventListener("click", generate_number);
let user_score = 0;
let computer_score = 0;
let is_winner = false;
let coin;
let dice;

function generate_number(){
	if (!is_winner){
		btn.disabled = true;
		user_random_number = 1 + Math.floor(Math.random() * 6);
		computer_random_number = 1 + Math.floor(Math.random() * 6);
		roll_dice();
	}
	
}

function roll_dice(){
	dice = document.querySelectorAll(".dice");
	for (let i = 0; i < dice.length; i++) {
		dice[i].style.display = "inline";
		dice[i].src = "casino.gif";
	}
		
	setTimeout(() => {
		show_dice();
	}, 1800);
	
}

function show_dice(){
	dice[0].src = `dice_${user_random_number}.png`;
	dice[1].src = `dice_${computer_random_number}.png`;
	add_point();
}

function add_point(){
	if (user_random_number >= computer_random_number){
		user_score++;
		coin = document.getElementById(`user_coin_${user_score}`);
		coin.style.display = "inline";	
	}

	if (user_random_number <= computer_random_number){
		computer_score++;
		coin = document.getElementById(`computer_coin_${computer_score}`);
		coin.style.display = "inline";			
	}

	check_if_win();
}

function check_if_win(){
	if (user_score == 3){
		is_winner = true;
		winner.innerHTML = `${(user_name)? user_name: "Користувач"} переміг!`;
		btn.value = "Грати ще";
		btn.addEventListener("click", reset);
	}

	if (computer_score == 3){
		is_winner = true;
		winner.innerHTML = "Комп'ютер переміг!";
		btn.value = "Грати ще";
		btn.addEventListener("click", reset);
	}

	if (computer_score == 3 && user_score == 3){
		winner.innerHTML = "Нічия!";
		btn.value = "Грати ще";
		btn.addEventListener("click", reset);
	}
	btn.disabled = false;
}

function reset(){
	computer_score = 0;
	user_score = 0;
	is_winner = false;
	const coins = document.querySelectorAll(".coins");
	for(let i of coins){
		for (let j of i.children)
			j.style.display = "none";
	}
	btn.removeEventListener("click", reset);
	winner.innerHTML = "";
	btn.value = "Генерувати";
}