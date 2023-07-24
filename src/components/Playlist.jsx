import React, {useState} from 'react';
import Tracklist from './Tracklist';
import styles from '../styles/modules/playlist.module.css';

const Playlist = ({tracks, context})  => {

    const [name, setName] = useState('');
    /* const [tracks, setTracks] = useState([]); */

    return (
		<Tracklist tracks={tracks} context="playlist" />
	);
}

export default Playlist;