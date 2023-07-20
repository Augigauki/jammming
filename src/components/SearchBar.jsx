import React, {useState, useEffect} from 'react';
import axios from 'axios';

const SearchBar = (props) => {
    const [searchKey, setSearchKey] = useState('');
    const [tracks, setTracks] = useState([]);

    const access_token = props.token;

    const searchTrack = async () => {
        const {data} = await axios.get("https://api.spotify.com/v1/search", {
            headers: {
                'Content-Type' : "application/json",
                'Authorization': `Bearer ${access_token}`
            },
            params: {
                q: searchKey,
                type: 'track'
            }
        })

        console.log(data.tracks);
    }

    const handleSearch = e => {
        setSearchKey(e.target.value);
    }

    return(
        <div>
            <input
                id="search"
                type="text"
                placeholder="Search for tracks"
                className="SearchInput"
                value={searchKey}
                onChange={handleSearch}
            />
            <button onClick={searchTrack}>Search!</button>
        </div>
    );
}

export default SearchBar;