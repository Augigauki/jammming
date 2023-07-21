import React from 'react';
import Track from './Track';
import styles from '../styles/modules/tracklist.module.css';

const Tracklist = ({tracks}) => {
    return (
        <div className={styles.resultWrapper}>
            {tracks.map((track) => {
                return <Track track={track} />
            })}

            {/**/}
        </div>
        
        
        
    );
}

export default Tracklist;