import React from "react";
import Tracklist from "./Tracklist";

const SearchResults = ({ tracks, onAdded }) => {

	return (
		<div>
			<Tracklist tracks={tracks} context="search" onAdded={onAdded} />
		</div>
	);
};

export default SearchResults;
