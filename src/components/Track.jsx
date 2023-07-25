import React, { useState } from "react";
import styles from "../styles/modules/track.module.css";

const Track = ({ track, context, onAdded, removeTrack }) => {
	const [added, setAdded] = useState(false);

	const handleAdd = () => {
		setAdded(true);
		onAdded((prev) => [...prev, track]);
	};

	const handleRemove = () => {
		setAdded(false);
		removeTrack(track);
		
	}

	return (
		<tr className={styles.resultRow}>
			<td className={styles.albumArtCol}>
				<img
					className={styles.albumArt}
					src={track.album.images[0].url}
					alt={track.album.name}
				/>
			</td>
			<td className={styles.trackCol}>
				<h4>{track.name}</h4>
			</td>
			<td className={styles.artistCol}>
				<h4>{track.artists[0].name}</h4>
			</td>
			<td className={styles.albumCol}>
				<h4>{track.album.name}</h4>
			</td>
			<td className={styles.addCol}>
				{context === "search" ? (
					<div>
						{added ? (
							<div className={styles.added}>
								<button>Added!</button>
							</div>
						) : (
							<div className={styles.addButton}>
								<button onClick={handleAdd}>Add</button>
								
							</div>
						)}
					</div>
				) : (
					<div className={styles.remove}>
						<button onClick={handleRemove}>Remove</button>
					</div>
				)}
			</td>
		</tr>
	);
};



export default Track;
