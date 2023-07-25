import React from "react";
import Track from "./Track";
import styles from "../styles/modules/tracklist.module.css";

const Tracklist = ({ tracks, context, onAdded, removeTrack }) => {
	
	

	return (
		<div className={styles.resultWrapper}>
			<table>
				<thead>
					<tr>
						<th className={styles.albumArtCol}></th>
						<th className={styles.trackCol}>
							<h6>Track</h6>
						</th>
						<th className={styles.artistCol}>
							<h6>Artist</h6>
						</th>
						<th className={styles.albumCol}>
							<h6>Album</h6>
						</th>
						<th className={styles.addCol}></th>
					</tr>
				</thead>
				<tbody>
					{tracks.map((track) => {
						return <Track track={track} context={context} key={track.id} onAdded={onAdded} removeTrack={removeTrack}/>;
						
					})}
				</tbody>
			</table>
		</div>
	);
};

export default Tracklist;
