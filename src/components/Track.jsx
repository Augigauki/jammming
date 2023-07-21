import React, {useState} from 'react';

const Track = () => {
    const [id, setId] = useState(0);
    const [name, setName] = useState('');
    const [album, setAlbum] = useState('');
    const [artwork, setArtwork] = useState('');
    const [artist, setArtist] = useState ('');
    const [duration, setDuration] = useState(0);
    const [explicit, setExplicit] = useState(false);
    const [url, setUrl] = useState('');
    const [data, setData] = useState('');
    const [discNumber, setDiscNumber] = useState(0);

   /*  const track = {
        name: name,
        album: album,
        artwork: artwork,
        artist: artist,
        duration: duration,
        explicit: explicit,
        url: url,
        discNumber: discNumber
    } */

    return (
        <div>
            <h3>{name}</h3>
        </div>
    );
}


export default Track;