import { useState } from "react";

const RenderString = () => {
	const [str, setStr] = useState([
		"Tomato",
		"Potato",
		"Radish",
		"Carrot",
		"EggPlant",
		"Chilly",
	]);

	const [ipVal, setIpVal] = useState("");

	const handleString = () => {
		let suffix = ipVal.slice(-1);
		let newString = ipVal.substring(0, ipVal.length - 1);

		setIpVal(suffix + newString);
	};

	return (
		<div>
			<h1>RenderString</h1>
			<h2>Rendered List : </h2>
			{str.map((item) => (
				<div key={item}>{item}</div>
			))}

			<br />
			<h2>Reverse String Charachters : </h2>
			<label htmlFor="input">Give Input String: </label>
			<input
				type="text"
				id="input"
				value={ipVal}
				onChange={(e) => setIpVal(e.target.value)}
			/>
			<p onClick={handleString}>{ipVal}</p>
		</div>
	);
};

export default RenderString;
