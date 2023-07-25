import React, { useState, useEffect } from 'react';
import styles from './styles/modules/app.module.css';
import Nav from './components/Nav';

const App = () => {
	const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
	const REDIRECT_URI = process.env.REACT_APP_SPOTIFY_REDIRECT_URI;
	const AUTH_ENDPOINT = process.env.REACT_APP_SPOTIFY_AUTH_ENDPOINT;
	const RESPONSE_TYPE = process.env.REACT_APP_SPOTIFY_RESPONSE_TYPE;

	const [token, setToken] = useState('');

	const [userid, setUserid] = useState('');

	//Playlist consts
	const [playlistName, setPlaylistName] = useState('Your new playlist');
	const [added, setAdded] = useState([]);
	const [plCount, setPlCount] = useState(0);

	//external playlist variables
	const [extListId, setExtListId] = useState('');

	useEffect(() => {
		const hash = window.location.hash;
		let token = window.localStorage.getItem('token');

		if (!token && hash) {
			token = hash
				.substring(1)
				.split('&')
				.find((elem) => elem.startsWith('access_token'))
				.split('=')[1];
			window.location.hash = '';
			window.localStorage.setItem('token', token);
		}

		setToken(token);
	}, []);

	useEffect(() => {
		if(extListId){
			try{
				fetch(
					`https://api.spotify.com/v1/playlists/${extListId}/tracks`,
					{
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
							Authorization: `Bearer ${token}`,
						},
						body: JSON.stringify({
							uris: added.map((track) => {
								return track.uri;
							})
						}),
					}
				)
			} catch(error){
				console.error(error);
			}
		}
	}, [extListId]);

	const exportPlaylist = async () => {
		try {
			
			fetch(
				`https://api.spotify.com/v1/users/${userid}/playlists`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${token}`,
					},
					body: JSON.stringify({
						name: playlistName,
						description: 'Created by a React app lol',
						public: false,
					}),
				}
			).then(response => {
				if(response.ok){
					return response.json();
				}
			})
			.then(data => {
				
				setExtListId(data.id);
			})
		} catch (error) {
			console.error(error);
		}
	};

	const logout = () => {
		setToken('');
		window.localStorage.removeItem('token');
	};

	return (
		<div className={styles.container}>
			<h1 className={styles.siteTitle}>Spotify Playlist Builder</h1>

			{!token ? (
				<a
					className={styles.login}
					href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=playlist-modify-private`}
				>
					Login to Spotify
				</a>
			) : (
				<div>
					<Nav
						token={token}
						setPlaylistName={setPlaylistName}
						name={playlistName}
						plCount={plCount}
						setPlCount={setPlCount}
						added={added}
						setAdded={setAdded}
						setUserid={setUserid}
						exportPlaylist={exportPlaylist}
					/>

					<button
						className={styles.logout}
						onClick={logout}
					>
						Logout
					</button>
				</div>
			)}
		</div>
	);
};

export default App;
