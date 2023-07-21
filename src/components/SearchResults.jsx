import React from "react";
import Tracklist from "./Tracklist";

const SearchResults = ({ tracks, searchKey }) => {
  return (
    <div>
        <h2>Your search for {searchKey}:</h2>
        <Tracklist tracks={tracks}/>
    </div>
      
  );
};

export default SearchResults;
