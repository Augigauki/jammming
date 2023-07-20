const port = 5000;

const express = require('express')
require('dotenv').config();
const axios = require('axios');
const app = express();
const cors = require('cors');
app.use(cors());

//listening for port 5000
app.listen(port, ()=> console.log(`Server is running on port ${port}`));

//API Request
app.get('/', (req, res) => {
    const options = {
        method: 'GET',
        url: `https://api.spotify.com/v1/tracks/${query}`
    }
})
    


const clientID = '3339a35063684d7ca12e93e7b6300250';
const redirectURI = 'http://localhost:3000/callback';
const code = undefined;

if(!code){
    redirectToAuthCodeFlow(clientID);
}
else{
    const accessToken = await getAccessToken(clientID, code);
    
    //const profile = await fetchProfile(accessToken);
    //populateUI(profile);    
}

export async function redirectToAuthCodeFlow(clientID){
    const verifier = generateCodeVerifier(128);
    const challenge = await generateCodeChallenge(verifier);

    localStorage.setItem('verifier', verifier);

    const params = new URLSearchParams();
    params.append('client_id', clientID);
    params.append('response_type', 'code');
    params.append('redirect_uri', redirectURI);
    params.append('scope', 'user-read-private user-read-email');
    params.append('code_challenge_mehtod', 'S256');
    params.append('code_challenge', challenge);

    document.location = `https://accounts.spotify.com/authorize${params.toString()}`;
}

const generateCodeVerifier = length => {
    let text = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUCWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for(let i = 0; i < length; i++){
        text += possible.charAt(Math.floot(Math.random() * possible.length));
    }
    return text;
}

const generateCodeChallenge = async (codeVerifier) => {
    const data = new TextEncoder().encode(codeVerifier);
    const digest = await window.crypto.subtle.digest('SHA-256', data);
    return btoa(String.fromCharCode.apply(null, [...new Uint8Array(digest)]))
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');
}

async function getAccessToken(clientID, code){
    const verifier = localStorage.getItem('verifier');

    const params = new URLSearchParams();
    params.append('client_id', clientID);
    params.append('grant_type', 'authorization_code');
    params.append('code', code);
    params.append('redirect_uri', redirectURI);
    params.append('code_verifier', verifier);

    const result = await fetch('https://accounts.spotify.com/api/token', {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params
    });

    const { access_token } = await result.json();
    return access_token;
}



const fetchProfile = async (token) => {
    const result = await fetch('https://api.spotify.com/v1/me', {
        method: "GET",
        headers: { Authorization: `Bearer ${token}`}
    });

    return await result.json();
}

const populateUI = (profile) => {

}

