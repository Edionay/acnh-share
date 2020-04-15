import React, { useState } from "react";
import Song from "../../components/Song";
import songs from "../../data/songs-mock";
import userSongs from "../../data/user-songs-mock";

const SongList = () => {
	const playSong = (songTitle) => {
		if (audio) audio.pause();
		audio = new Audio(`./assets/songs/${songTitle}.mp3`);
		audio.play();
	};

	const pauseSong = (songTitle) => {
		if (audio) audio.pause();
	};

	let audio;

	return (
		<div
			style={{
				background: `url("./assets/main-background.png")`,
				paddingTop: "30vh",
				width: "100vw",
			}}
		>
			{songs.map((song, index) => (
				<Song
					pauseSong={pauseSong}
					playSong={playSong}
					key={index}
					index={index}
					song={song}
					owned={userSongs[song.title]}
				/>
			))}
		</div>
	);
};
export default SongList;