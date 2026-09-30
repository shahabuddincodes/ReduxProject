import axios from "axios";

const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY;
const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;
const GIPHY_KEY = import.meta.env.VITE_GIFY_KEY;

export async function fetchPhotos(query, per_page = 20) {
  const res = await axios.get("https://api.unsplash.com/photos", {
    params: { query, per_page },
    headers: { Authorization: `Client-ID ${UNSPLASH_KEY}` },
  });
  return res.data;
}

export async function fetchVideos(query, per_page = 20) {
  const res = await axios.get("https://api.pexels.com/v1/videos/search", {
    params: { query, per_page },
    headers: { Authorization: PEXELS_KEY },
  });
  return res.data.videos;
}
export async function fetchGif(query, limit = 20) {
  const res = await axios.get("https://api.giphy.com/v1/gifs/search", {
    params: { q: query, limit : limit, api_key: GIPHY_KEY },
  });
  return res.data.data;
}
