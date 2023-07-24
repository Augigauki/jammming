import React from "react";
import Tracklist from "./Tracklist";

const SearchResults = ({ tracks }) => {
  return (
    <div>
        <Tracklist tracks={tracks} context="search"/>
    </div>
      
  );
};

export default SearchResults;
