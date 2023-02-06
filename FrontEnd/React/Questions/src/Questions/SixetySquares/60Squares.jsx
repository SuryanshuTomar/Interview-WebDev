import { React, useEffect, useState, useCallback } from "react";
import { v4 as uuid } from "uuid";
import styles from "./60Squares.module.css";

let boxArray = new Array(60);
for (let i = 0; i < boxArray.length; i++) {
	boxArray[i] = { val: 0, id: uuid() };
}

const SixtySquares = () => {
	const [box, setBox] = useState(boxArray);
	const [zeroIndex, setZeroIndex] = useState(0);

	const handleReset = useCallback(() => {
		let updatedBox = box.map((item) => ({ ...item, val: 0 }));
		setZeroIndex(0);
		setBox(updatedBox);
	}, [box, setBox, setZeroIndex]);

	useEffect(() => {
		const intervalTime = setInterval(() => {
			if (zeroIndex < box.length) {
				let updatedBox = box.map((item, index) => {
					if (index === zeroIndex) return { ...item, val: 1 };

					return item;
				});

				setZeroIndex((prevZero) => prevZero + 1);
				setBox(updatedBox);
			} else {
				handleReset();
			}
		}, 500);

		return () => clearInterval(intervalTime);
	}, [box, setBox, zeroIndex, setZeroIndex]);

	const render = box.map((item, index) => {
		let content;
		if (index % 6 === 0) {
			content = <br />;
		}
		content = (
			<span key={item.id}>
				{content}
				<span
					className={styles.box}
					style={{
						backgroundColor: `${item.val === 0 ? "white" : "black"}`,
					}}
				></span>
			</span>
		);
		return content;
	});

	return (
		<div>
			<h1>SixtySquares</h1>
			<br />
			{render}
			<br />
			<br />
			<button onClick={handleReset}>Reset Loading</button>
		</div>
	);
};
export default SixtySquares;
