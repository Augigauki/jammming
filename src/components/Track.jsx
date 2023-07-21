import React from "react";
import styles from "../styles/modules/track.module.css";

const Track = ({ track }) => {
  return (
    
      <div className={styles.trackResult} key={track.id}>
        <img
          className={styles.albumArt}
          src={track.album.images[0].url}
          alt={track.album.name}
        />
        <div className={styles.trackInfoWrapper}>
          <div>
            <h6>Title</h6>
            <h3>{track.name}</h3>
          </div>
          <div>
            <h6>Artist</h6>
            <h3>{track.artists[0].name}</h3>
          </div>
          <div>
            <h6>Album</h6>
            <h3>{track.album.name}</h3>
          </div>
        </div>
      </div>
    
  );
};

export default Track;
