// import React, { useState, useEffect, use } from 'react'
// import '../../styles/profile.css'
// import { useParams } from 'react-router-dom'
// import axios from 'axios'
// const API = import.meta.env.VITE_API_URL;
// const Profile = () => {
//     const { id } = useParams()
//     const [ profile, setProfile ] = useState(null)
//     const [ videos, setVideos ] = useState([])

//     useEffect(() => {
//         axios.get(
//             // `http://localhost:3000/api/food-partner/${id}`, 
//             `${API}/api/food-partner/${id}`,
//             { withCredentials: true })
//             .then(response => {
//                 setProfile(response.data.foodPartner)
//                 setVideos(response.data.foodPartner.foodItems)
//             })
//     }, [ id ])


//     return (
//         <main className="profile-page">
//             <section className="profile-header">
//                 <div className="profile-meta">

//                     <img className="profile-avatar" src="https://images.unsplash.com/photo-1754653099086-3bddb9346d37?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0Nnx8fGVufDB8fHx8fA%3D%3D" alt="" />

//                     <div className="profile-info">
//                         <h1 className="profile-pill profile-business" title="Business name">
//                             {profile?.name}
//                         </h1>
//                         <p className="profile-pill profile-address" title="Address">
//                             {profile?.address}
//                         </p>
//                     </div>
//                 </div>

//                 <div className="profile-stats" role="list" aria-label="Stats">
//                     <div className="profile-stat" role="listitem">
//                         <span className="profile-stat-label">total meals</span>
//                         <span className="profile-stat-value">{profile?.totalMeals}</span>
//                     </div>
//                     <div className="profile-stat" role="listitem">
//                         <span className="profile-stat-label">customer served</span>
//                         <span className="profile-stat-value">{profile?.customersServed}</span>
//                     </div>
//                 </div>
//             </section>

//             <hr className="profile-sep" />

//             <section className="profile-grid" aria-label="Videos">
//                 {videos.map((v) => (
//                     <div key={v.id} className="profile-grid-item">
//                         {/* Placeholder tile; replace with <video> or <img> as needed */}


//                         <video
//                             className="profile-grid-video"
//                             style={{ objectFit: 'cover', width: '100%', height: '100%' }}
//                             src={v.video} muted ></video>


//                     </div>
//                 ))}
//             </section>
//         </main>
//     )
// }

// export default Profile
import React, { useState, useEffect } from 'react';
import '../../styles/profile.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const API = import.meta.env.VITE_API_URL;

const Profile = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    axios
      .get(`${API}/api/food-partner/${id}`, { withCredentials: true })
      .then((response) => {
        console.log(response.data); // For debugging
        setProfile(response.data.foodPartner);
        setVideos(response.data.foodPartner.foodItems || []);
      })
      .catch((err) => console.error(err));
  }, [id]);

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  return (
    <main className="profile-page">
      <section className="profile-header">
        <div className="profile-meta">
          <img
            className="profile-avatar"
            src="https://images.unsplash.com/photo-1754653099086-3bddb9346d37?w=500&auto=format&fit=crop&q=60"
            alt="Profile avatar"
          />
          <div className="profile-info">
            <h1 className="profile-pill profile-business" title="Business name">
              {profile?.name || 'No Name'}
            </h1>
            <p className="profile-pill profile-phone" title="Phone">
              <strong>Ph:</strong> {profile?.phone || 'N/A'}
            </p>
            <p className="profile-pill profile-address" title="Address">
              <strong>Address:</strong> {profile?.address || 'N/A'}
            </p>
          </div>
        </div>

        <div className="profile-stats" role="list" aria-label="Stats">
          <div className="profile-stat" role="listitem">
            <span className="profile-stat-label">Total Meals</span>
            <span className="profile-stat-value">{videos.length}</span>
          </div>
        </div>
      </section>

      <hr className="profile-sep" />

      <section className="profile-grid" aria-label="Videos">
        {videos.map((v) => (
          <div
            key={v._id}
            className={`profile-grid-item ${
              selectedVideo?._id === v._id
                ? 'zoomed'
                : selectedVideo
                ? 'faded'
                : ''
            }`}
            onClick={() => handleVideoClick(v)}
          >
            <video
              className="profile-grid-video"
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              src={v.video}
              muted
              controls={selectedVideo?._id === v._id}
            ></video>

            {selectedVideo?._id === v._id && (
              <div className="video-overlay">
                <h2>{v.name}</h2>
                <p>{v.description}</p>
                {/* <button className="close-btn" onClick={closeVideoModal}>
                  Close
                </button> */}
              </div>
            )}
          </div>
        ))}
      </section>
    </main>
  );
};

export default Profile;