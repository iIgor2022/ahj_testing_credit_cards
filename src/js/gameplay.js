export default class GamePlay {
	constructor() {
		this.timer = 0;
		this.missedClick = 0;
		this.goblin = document.createElement("div");
		this.goblin.classList.add("goblin");
		this.onCellClick = this.onCellClick.bind(this);
		document.querySelector(".container").addEventListener("click", this.onCellClick);
	}

	startGame() {
		const cells = document.querySelectorAll(".hole");
		this.timer = setInterval(() => {
				const cell = cells[Math.floor(Math.random() * cells.length)];
				cell.insertAdjacentElement("afterbegin", this.goblin);
		}, 1000);
	}

	onCellClick(e) {
		e.stopPropagation();
		if (e.target == this.goblin) {
			this.addPoint();
			this.goblin.remove();
		} else {
			this.missedClick++;
			if (this.missedClick == 5) {
				clearInterval(this.timer);
				this.goblin.remove();
				alert("Вы проиграли!");
			}
		}
	}

	addPoint() {
		let text = document.querySelector(".point").innerText.split(" ");
		text[2]++;
		document.querySelector(".point").innerText = text.join(" ");
	}
}
