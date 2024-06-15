const body = document.getElementsByTagName("body")[0];

function setColor(name) {
	body.style.backgroundColor = name;
}

function randomColor() {
	const [red, green, blue] = [Math.round(Math.random() * 255),
	Math.round(Math.random() * 255), Math.round(Math.random() * 255)];
	const color = (`rgb(${red}, ${green}, ${blue})`);
	body.style.backgroundColor = color;
}