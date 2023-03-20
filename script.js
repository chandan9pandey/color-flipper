const btn = document.getElementById("button");
const color = document.getElementById("color");
const randomColor = () => {
	let val = "0123456789ABCDEF";
	let cons = "#";
	for (let i = 0; i < 6; i++) {
		cons += val[Math.floor(Math.random() * 16)];
	}
	return cons;
};
function getRandomColor() {
	document.body.style.backgroundColor = randomColor();
	color.textContent = randomColor();
}
btn.addEventListener("click", getRandomColor);
