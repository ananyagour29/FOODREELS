
// import React, { useState, useEffect } from 'react';
// import '../../styles/profile.css';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import Button from '../../components/Button';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const API = import.meta.env.VITE_API_URL;

// const Profile = () => {
//   const { id } = useParams();

//   const [profile, setProfile] = useState(null);
//   const [videos, setVideos] = useState([]);
//   const [selectedVideo, setSelectedVideo] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const response = await axios.get(
//           `${API}/api/food-partner/${id}`,
//           { withCredentials: true }
//         );

//         setProfile(response.data.foodPartner);
//         setVideos(response.data.foodPartner.foodItems || []);
//       } catch (error) {
//         toast.error(error.response?.data?.message || 'Failed to load profile');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProfile();
//   }, [id]);

//   if (loading) {
//     return (
//       <div style={{ textAlign: 'center', marginTop: '50px' }}>
//         Loading...
//       </div>
//     );
//   }

//   return (
//     <main className="profile-page">

//       <Button />

//       <section className="profile-header">
//         <div className="profile-meta">

//           {/* ❌ IMAGE REMOVED ONLY */}

//           <div className="profile-info">

//             <h1 className="profile-pill profile-business">
//               {profile?.name || 'No Name'}
//             </h1>

//             {/* <p className="profile-pill profile-phone">
//               <strong>Ph:</strong> {profile?.phone || 'N/A'}
//             </p>

//             <p className="profile-pill profile-address">
//               <strong>Address:   </strong> {profile?.address || 'N/A'}
//             </p> */}
// <p className="profile-pill profile-phone">
//   <strong>Ph:</strong>
//   <span className="info-value">{profile?.phone || 'N/A'}</span>
// </p>

// <p className="profile-pill profile-address">
//   <strong>Address:</strong>
//   <span className="info-value">{profile?.address || 'N/A'}</span>
// </p>
//           </div>
//         </div>

//         <div className="profile-stats">
//           <div className="profile-stat">
//             <span className="profile-stat-label">Total Reels</span>
//             <span className="profile-stat-value">{videos.length}</span>
//           </div>
//         </div>
//       </section>

//       <hr className="profile-sep" />

//       {videos.length === 0 ? (
//         <div style={{ textAlign: 'center', padding: '40px' }}>
//           No food reels uploaded yet.
//         </div>
//       ) : (
//         <section className="profile-grid">
//           {videos.map((v) => (
//             <div
//               key={v._id}
//               className={`profile-grid-item ${
//                 selectedVideo?._id === v._id
//                   ? 'zoomed'
//                   : selectedVideo
//                   ? 'faded'
//                   : ''
//               }`}
//               onClick={() =>
//                 setSelectedVideo(selectedVideo?._id === v._id ? null : v)
//               }
//             >
//               <video
//   className="profile-grid-video"
//   src={v.video}
//   muted
//   controls={selectedVideo?._id === v._id}
//   disablePictureInPicture
//   controlsList="nodownload noplaybackrate noremoteplayback"
// />
//               {/* <video
//                 className="profile-grid-video"
//                 src={v.video}
//                 muted
//                 controls={selectedVideo?._id === v._id}
//               /> */}

//               {selectedVideo?._id === v._id && (
//                 <div className="video-overlay">
//                   <h2>{v.name}</h2>
//                   <p>{v.description}</p>
//                 </div>
//               )}
//             </div>
//           ))}
//         </section>
//       )}
//     </main>
//   );
// };

// export default Profile;
import React, { useState, useEffect } from 'react';
import '../../styles/profile.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Button from '../../components/Button';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const API = import.meta.env.VITE_API_URL;

const Profile = () => {
  const { id } = useParams();

  const [profile, setProfile] = useState(null);
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [loading, setLoading] = useState(true);

  const copyPhoneNumber = async () => {
    try {
      await navigator.clipboard.writeText(
        profile?.phone || ''
      );

      toast.success('Phone number copied!');
    } catch (error) {
      toast.error('Failed to copy number');
    }
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(
          `${API}/api/food-partner/${id}`,
          { withCredentials: true }
        );

        setProfile(response.data.foodPartner);
        setVideos(response.data.foodPartner.foodItems || []);
      } catch (error) {
        toast.error(
          error.response?.data?.message ||
            'Failed to load profile'
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [id]);

  if (loading) {
    return (
      <div
        style={{
          textAlign: 'center',
          marginTop: '50px',
        }}
      >
        Loading...
      </div>
    );
  }

  return (
    <main className="profile-page">
      <Button />

      <section className="profile-header">
        <div className="profile-meta">
          <div className="profile-info">
            <h1 className="profile-pill profile-business">
              {profile?.name || 'No Name'}
            </h1>

            <p className="profile-pill profile-phone">
              <strong>Ph:</strong>

              <span className="info-value">
                {profile?.phone || 'N/A'}
              </span>

              <button
                onClick={copyPhoneNumber}
                className="copy-btn"
              >
                COPY
              </button>
            </p>

            <p className="profile-pill profile-address">
              <strong>Address:</strong>

              <span className="info-value">
                {profile?.address || 'N/A'}
              </span>
            </p>
          </div>
        </div>

        <div className="profile-stats">
          <div className="profile-stat">
            <span className="profile-stat-label">
              Total Reels
            </span>

            <span className="profile-stat-value">
              {videos.length}
            </span>
          </div>
        </div>
      </section>

      <hr className="profile-sep" />

      {videos.length === 0 ? (
        <div
          style={{
            textAlign: 'center',
            padding: '40px',
          }}
        >
          No food reels uploaded yet.
        </div>
      ) : (
        <section className="profile-grid">
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
              onClick={() =>
                setSelectedVideo(
                  selectedVideo?._id === v._id
                    ? null
                    : v
                )
              }
            >
              <video
                className="profile-grid-video"
                src={v.video}
                muted
                controls={
                  selectedVideo?._id === v._id
                }
                disablePictureInPicture
                controlsList="nodownload noplaybackrate noremoteplayback"
              />

              {selectedVideo?._id === v._id && (
                <div className="video-overlay">
                  <h2>{v.name}</h2>
                  <p>{v.description}</p>
                </div>
              )}
            </div>
          ))}
        </section>
      )}
    </main>
  );
};

export default Profile;