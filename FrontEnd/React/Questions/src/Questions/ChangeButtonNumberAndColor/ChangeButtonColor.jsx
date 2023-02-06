import { useState } from "react";

const getRandomColor = () => {
	const hexString = "0123456789ABCDEF";

	let color = "#";
	for (let i = 0; i < 6; i++) {
		color += hexString[Math.floor(Math.random() * 16)];
	}
	return color;
};

const ChangeButtonColor = () => {
	const [num, setNum] = useState(0);
	const [color, setColor] = useState(getRandomColor());

	const handleButton = () => {
		setNum((prevNum) => prevNum + 3);
		setColor(getRandomColor());
	};

	return (
		<div>
			<h1>Change Number and Color of button</h1>
			<button onClick={handleButton} style={{ backgroundColor: `${color}` }}>
				Change Me : {num}
			</button>
		</div>
	);
};

export default ChangeButtonColor;
