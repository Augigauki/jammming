import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../styles/modules/profile.module.css';

const Profile = ({token, setUserid}) => {
	const [username, setUsername] = useState('');
	//const [userid, setUserid] = useState('');
	const [avatar, setAvatar] = useState('');

	const access_token = token;

	useEffect(() => {
		const fetchProfile = async () => {
			try {
				const { data } = await axios.get(
					'https://api.spotify.com/v1/me',
					{
						headers: {
							'Content-Type': 'application/json',
							Authorization: `Bearer ${access_token}`,
						},
					}
				);

				setUsername(data.display_name);
				setAvatar(data.images[0].url);
				setUserid(data.id);
			} catch (error) {
				console.error(error);
			}
		};

		fetchProfile();
	}, [access_token, setUserid]);

	return (
		<div className={styles.profileWrapper}>
			<img
				src={avatar}
				alt={username}
				className={styles.userImg}
			/>
			<h2>Welcome {username}!</h2>
		</div>
	);
};

export default Profile;
