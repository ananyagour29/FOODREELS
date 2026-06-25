import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReelFeed from '../../components/ReelFeed';

const API = import.meta.env.VITE_API_URL;

const Saved = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchSaved = async () => {
      try {
        const res = await axios.get(
          `${API}/api/food/saved`,
          {
            withCredentials: true,
          }
        );

        setVideos(res.data.videos || []);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSaved();
  }, []);

  return (
    <ReelFeed
      items={videos}
      emptyMessage="No saved reels."
    />
  );
};

export default Saved;