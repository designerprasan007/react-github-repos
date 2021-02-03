import axios from 'axios';

export const fetchRepo = (RepoName) => axios.get(`https://api.github.com/users/${RepoName}/repos`);

export const fetchUser = (UserName) => axios.get(`https://api.github.com/users/${UserName}`);
