import React, {useState} from 'react';
import Playlist from './Playlist';

const Playlists = () => {
    const [playlists, setPlaylists] = useState([]);

    return(
        <div>
            {playlists.length > 0 ? 
                <div>
                    {playlists.map((playlist) => {
                    <Playlist />
                })}
                </div> : <div>So empty in here! Make a new playlist</div>}
        </div>
    )
}

export default Playlists;