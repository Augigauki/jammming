import React from "react";
import Tracklist from "./Tracklist";

const SearchResults = ({ tracks }) => {
  return (
    <div>
        <Tracklist tracks={tracks}/>
    </div>
      
  );
};

export default SearchResults;
