import React from 'react';
import Track from './Track';

const Tracklist = ({tracks}) => {
    return (
        <div className="resultContainer">
      {tracks.map((track) => {
        return (
          <div className="trackResult" key={track.id}>
            <h3>Title: {track.name}</h3>
            <h5>Artist: {track.artists[0].name}</h5>
            <h5>Album: {track.album.name}</h5>
            <img src={track.album.images[0].url} alt={track.album.name} />
          </div>
        );
      })}
    </div>
    )
}

export default Tracklist;