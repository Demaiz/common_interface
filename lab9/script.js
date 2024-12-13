const user_name = prompt("Введіть ім'я");
document.getElementById("user_name").innerHTML = user_name;
if (!user_name || user_name.length > 15){
	document.getElementById("user_name").innerHTML = "Користувач";
}
const btn = document.getElementById("btn");
const user_card = document.getElementById("user_card");
const computer_card = document.getElementById("computer_card");
const card = document.querySelectorAll(".card");
const winner = document.getElementById("winner");
const attempt = document.getElementById("attempt")
const user_score = document.getElementById("user_score");
const computer_score = document.getElementById("computer_score");

btn.addEventListener("click", generate_random_number);
let computer_random_number;
let user_random_number;
let user_points = 0;
let computer_points = 0;
let iteration = 1;
let cards_value = [6, 7, 8, 9, 10, 2, 3, 4, 11];

function generate_random_number(){
	btn.disabled = true;
	computer_random_number = Math.floor(Math.random() * 9) + 1;
	user_random_number = Math.floor(Math.random() * 9) + 1;
	display_card();
}

function display_card(){	
	card[0].style.transform = "rotateY(0deg)";
	card[1].style.transform = "rotateY(0deg)";

	setTimeout(() => {
		user_card.src = `card_${user_random_number}.png`;
		computer_card.src = `card_${computer_random_number}.png`;
		card[0].style.transform = "rotateY(180deg)";
        card[1].style.transform = "rotateY(180deg)";
    }, 900);
	
	setTimeout(add_points, 1700);
}

function add_points(){
	user_points += cards_value[user_random_number - 1];
	computer_points += cards_value[computer_random_number - 1];
	computer_score.innerHTML = computer_points;
	user_score.innerHTML = user_points;
	attempt.innerHTML = `Спроба (${iteration}/3)`;
	if (iteration === 3){
		display_result();
	}
	else{
		iteration++;
		btn.disabled = false;
	}
}

function display_result(){
	if (computer_points === user_points){
		winner.innerHTML = "Нічия!";
	}
	else if(computer_points > user_points){
		winner.innerHTML = "Комп'ютер переміг!";
	}
	else{
		winner.innerHTML = user_name?`${user_name} переміг!`:"Користувач переміг!";
	}
	btn.removeEventListener("click", generate_random_number);
	btn.disabled = false;
	btn.addEventListener("click", reset);
	btn.value = "Грати ще!";
}

function reset(){
	user_points = 0;
	computer_points = 0;
	iteration = 1;
	btn.value = "Грати";
	winner.innerHTML = "";
	card[0].style.transform = "rotateY(0deg)";
	card[1].style.transform = "rotateY(0deg)";
	btn.removeEventListener("click", reset);
	btn.addEventListener("click", generate_random_number);
    attempt.innerHTML = "Спроба (0/3)";
	computer_score.innerHTML = "0";
	user_score.innerHTML = "0";
}