class Car {
	constructor(battery, position, faceTo) {
		this.battery = battery;
		this.position = position;
		this.faceTo = faceTo;
	}

	Moving(p, faceTo, cost) {
		this.position = p;
		this.faceTo = faceTo;
		if (this.battery >= cost) {
			this.battery -= cost;
			console.log("battery", this.battery)
			return true
		}
		return false
	}

	loadBattery(gain) {
		this.battery += gain;
		console.log("Rechargement", this.battery)
	}
}

class Point {
	constructor(dx, dy) {
		this.dx = dx;
		this.dy = dy;
	}

	// static distance(a, b) {
	// 	const dx = a.x - b.x;
	// 	const dy = a.y - b.y;
	// 	return Math.hypot(dx, dy);
	// }
}



function keyPressed(event){
    switch (event.code) {
        case "ControlLeft" || "ControlRight":
			// car.loadBattery(4)
            break;
        case "Space":
			// if(car.battery >= 2)
            	rollDice();
			// else
			// 	car.loadBattery(4)
        break;
    
        default:
            break;
    }
}

function rollDice() {
	if(localStorage.getItem("isStarted")==1){
		const dice = [...document.querySelectorAll(".die-list")];
		let deplacement=0
		dice.forEach(die => {
			toggleClasses(die);
			deplacement=die.dataset.roll = getRandomNumber(1, 6)
		});
		setTimeout(()=>{
			move(deplacement)
		},1500)
	}else{
		startGame()
	}
}

function toggleClasses(die) {
	die.classList.toggle("odd-roll");
	die.classList.toggle("even-roll");
}

function getRandomNumber(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}


document.body.addEventListener("keydown", keyPressed)
if(localStorage.getItem("isStarted")==0){
	document.getElementById("div-die").style.visibility="hidden"
}