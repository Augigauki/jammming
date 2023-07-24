import React, { useState, useEffect } from "react";
import styles from "../styles/modules/nav.module.css";
import SearchBar from "./SearchBar";
import Playlist from "./Playlist";

const Nav = ({ token }) => {
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

	return (
		<div>
			<div className={styles.navWrapper}>
				<p onClick={handleHome}>Home</p>
				<p onClick={handleSearch}>Search</p>
				<p onClick={handlePlaylist}>Playlist</p>
			</div>

			{search ? <SearchBar token={token} /> : <></>}
			{playlist ? <Playlist /> : <></>}
            {home ? <div>
            <h2>Build your own playlist and export it to your Spotify account!</h2>
            <p>Get started by creating a new playlist</p>
          </div> : <></>}
		</div>
	);
};

export default Nav;
