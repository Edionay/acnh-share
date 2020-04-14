import React, { useState } from "react";

const Song = ({ playSong, song, owned, index }) => {
	const [selected, setSelected] = useState(owned);

	return (
		<div
			style={{
				display: "inline-block",
				width: 20 + "%",
				height: 200 + "px",
				margin: 10 + "px",
			}}
			key={index}
		>
			<input
				onClick={() => {
					playSong(song.title);
					setSelected(!selected);
				}}
				className="Input"
				id={index}
				type="checkbox"
				style={{ display: "none" }}
			></input>
			<label
				className="Label"
				style={{
					display: "block",
					background: `url("assets/covers/${song.title}.png")`,
					height: 200 + "px",
					with: 200 + "px",
					backgroundSize: "cover",
					filter: `${selected ? "grayscale(0)" : "grayscale(1)"}`,
				}}
				htmlFor={index}
			></label>
		</div>
	);
};

export default Song;