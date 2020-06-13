import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 5c6VMrropgqfxgT1c6A1IYHI-zvszWqHOkAT0J7xt5A'
  }
})