import React, { useState, useEffect } from "react";
import SearchResults from "./SearchResults";
import styles from "../styles/modules/searchbar.module.css";
import axios from "axios";

const SearchBar = (props) => {
	const [searchKey, setSearchKey] = useState("");
	const [tracks, setTracks] = useState([]);

	const access_token = props.token;

	useEffect(() => {
		const searchTrack = async () => {
			if (searchKey !== "") {
				try {
					const { data } = await axios.get(
						"https://api.spotify.com/v1/search",
						{
							headers: {
								"Content-Type": "application/json",
								Authorization: `Bearer ${access_token}`,
							},
							params: {
								q: searchKey,
								type: "track",
								limit: 20,
							},
						}
					);

					setTracks(data.tracks.items);
				} catch (error) {
					console.error(error);
				}
			} else {
				setTracks([]);
			}
		};

		searchTrack();
	}, [searchKey, access_token]);

	const handleSearch = (e) => {
		setSearchKey(e.target.value);
	};

	return (
		<div>
			<input
				id="search"
				type="text"
				placeholder="Search for tracks"
				className={styles.searchInput}
				value={searchKey}
				onChange={handleSearch}
			/>
			{tracks.length > 0 && searchKey !== "" ? (
				<SearchResults tracks={tracks} searchKey={searchKey} onAdded={props.onAdded}/>
			) : (
				<></>
			)}
		</div>
	);
};

export default SearchBar;
