import axios from 'axios'

const KEY = 'AIzaSyBzj0GK-E4xXEUG18RH970fbPLuLuS-PoY';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});