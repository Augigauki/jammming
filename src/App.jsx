import React, {useState, useEffect} from 'react';
import styles from './styles/modules/app.module.css';
import SearchBar from './components/SearchBar';

const App = () => {

  const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
  const REDIRECT_URI = process.env.REACT_APP_SPOTIFY_REDIRECT_URI;
  const AUTH_ENDPOINT = process.env.REACT_APP_SPOTIFY_AUTH_ENDPOINT;
  const RESPONSE_TYPE = process.env.REACT_APP_SPOTIFY_RESPONSE_TYPE;

  const [token, setToken] = useState('');

  useEffect(() => {
    //alert(`client_id: ${CLIENT_ID}`)
    const hash = window.location.hash;
    let token = window.localStorage.getItem('token');

    if(!token && hash){
      token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1];
      window.location.hash="";
      window.localStorage.setItem("token", token);
    }

    setToken(token);
  }, []);

  const logout = () => {
    setToken('');
    window.localStorage.removeItem("token");
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.siteTitle}>Spotify Playlist Builder</h1>
      {!token ? 
        <a className={styles.login} href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a>
        :
        <div>
          <SearchBar token={token}/>
          <button className={styles.logout} onClick={logout}>Logout</button>
        </div>
      }
      
    </div>
    
  );
}

export default App;
