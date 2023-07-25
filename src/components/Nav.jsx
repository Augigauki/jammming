import React, { useState } from "react";
import styles from "../styles/modules/nav.module.css";
import Profile from "./Profile";
import SearchBar from "./SearchBar";
import Playlist from "./Playlist";

const Nav = ({ token, setPlaylistName, name, plCount, setPlCount, added, setAdded, setUserid, exportPlaylist }) => {
	const [search, setSearch] = useState(false);
	const [playlist, setPlaylist] = useState(false);
	const [home, setHome] = useState(true);
	

	const handleSearch = () => {
		setPlaylist(false);
		setSearch(true);
		setHome(false);
	};

	const handlePlaylist = () => {
		setSearch(false);
		setPlaylist(true);
		setHome(false);
	};

	const handleHome = () => {
		setHome(true);
		setSearch(false);
		setPlaylist(false);
	};

	const removeTrack = track => {
		setAdded((current) => {
			return current.filter((toRemove) => toRemove.id !== track.id)
		})
	};

	return (
		<div>
			<div className={styles.navWrapper}>
				<p onClick={handleHome}>Home</p>
				<p onClick={handleSearch}>Search</p>
				<p onClick={handlePlaylist}>Playlist</p>
			</div>

			{search ? <SearchBar token={token} onAdded={setAdded}/> : <></>}
			{playlist ? <Playlist tracks={added} setPlaylistName={setPlaylistName} name={name} plCount={plCount} setPlCount={setPlCount} removeTrack={removeTrack} exportPlaylist={exportPlaylist}/> : <></>}
			{home ? (
				<div>
					<Profile token={token} setUserid={setUserid}/>
					<br />
					<h3>
						Build your own playlist and export it to your Spotify
						account
					</h3>
					
				</div>
			) : (
				<></>
			)}
		</div>
	);
};

export default Nav;
