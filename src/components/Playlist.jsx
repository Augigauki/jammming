import React, { useEffect } from 'react';
import Tracklist from './Tracklist';
import styles from '../styles/modules/playlist.module.css';

const Playlist = ({ tracks, setPlaylistName, name, plCount, setPlCount, removeTrack, exportPlaylist }) => {
	//const [name, setName] = useState('Your new playlist');

	const handleNameChange = (e) => {
		setPlaylistName(e.target.value);
	};

  useEffect(() => {
    setPlCount(tracks.length);
  }, [tracks, setPlCount]);

  const handleExport = () => {
    exportPlaylist();
  }

	return (
		<div>
			{tracks[0] ? (
				<div>
					<div className={styles.header}>
            <input 
              id="playlistname"
              type="text"
              className={styles.title}
              value={name}
              onChange={handleNameChange}
            />
            <h6>{plCount} tracks</h6>
						
					</div>
					<Tracklist
						tracks={tracks}
						context='playlist'
            removeTrack={removeTrack}
					/>
          <div className={styles.export}>
            <button onClick={handleExport}>Export playlist</button>
          </div>
				</div>
			) : (
				<h4>
					Brr, it's cold and empty and lonely in here. Search up some
					songs and add them here!
				</h4>
			)}
		</div>
	);
};

export default Playlist;
