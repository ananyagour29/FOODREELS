
// import React, { useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// // import React, { useEffect, useRef, useState } from 'react';
// const API = import.meta.env.VITE_API_URL;

// const ReelFeed = ({
//   items = [],
//   emptyMessage = 'No videos yet.',
// }) => {
//   const videoRefs = useRef(new Map());

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           const video = entry.target;

//           if (!(video instanceof HTMLVideoElement))
//             return;

//           if (
//             entry.isIntersecting &&
//             entry.intersectionRatio >= 0.6
//           ) {
//             video.play().catch(() => {});
//           } else {
//             video.pause();
//           }
//         });
//       },
//       {
//         threshold: [0, 0.25, 0.6, 0.9, 1],
//       }
//     );

//     videoRefs.current.forEach((video) =>
//       observer.observe(video)
//     );

//     return () => observer.disconnect();
//   }, [items]);

//   const setVideoRef = (id) => (el) => {
//     if (!el) {
//       videoRefs.current.delete(id);
//       return;
//     }

//     videoRefs.current.set(id, el);
//   };

//   const handleLike = async (foodId) => {
//     try {
//       const res = await axios.post(
//         `${API}/api/food/like`,
//         { foodId },
//         {
//           withCredentials: true,
//         }
//       );

//       toast.success(res.data.message);
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message ||
//           'Like failed'
//       );
//     }
//   };

//   const handleSave = async (foodId) => {
//     try {
//       const res = await axios.post(
//         `${API}/api/food/save`,
//         { foodId },
//         {
//           withCredentials: true,
//         }
//       );

//       toast.success(res.data.message);
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message ||
//           'Save failed'
//       );
//     }
//   };

//   return (
//     <div className="reels-page">
//       <div className="reels-feed" role="list">

//         {items.length === 0 && (
//           <div className="empty-state">
//             <p>{emptyMessage}</p>
//           </div>
//         )}

//         {items.map((item) => (
//           <section
//             key={item._id}
//             className="reel"
//             role="listitem"
//           >
//             <video
//               ref={setVideoRef(item._id)}
//               className="reel-video"
//               src={item.video}
//               muted
//               playsInline
//               loop
//               preload="metadata"
//               controls
//             />

//             <div className="reel-overlay">
//               <div
//                 className="reel-overlay-gradient"
//                 aria-hidden="true"
//               />

//               <div className="reel-content">
//                 <h3
//                   className="reel-name"
//                   title={item.name}
//                 >
//                   {item.name}
//                 </h3>

//                 <p
//                   className="reel-description"
//                   title={item.description}
//                 >
//                   {item.description}
//                 </p>

//                 {item.foodPartner && (
//                   <Link
//                     className="reel-btn"
//                     to={`/food-partner/${item.foodPartner}`}
//                   >
//                     Visit Store
//                   </Link>
//                 )}
//               </div>

//               <div className="reel-actions">

//                 <div className="reel-action-group">
//                   <button
//                     className="reel-action"
//                     onClick={() =>
//                       handleLike(item._id)
//                     }
//                   >
//                     ❤️
//                   </button>

//                   <span className="reel-action__count">
//                     {item.likes?.length || 0}
//                   </span>
//                 </div>

//                 <div className="reel-action-group">
//                   <button
//                     className="reel-action"
//                     onClick={() =>
//                       handleSave(item._id)
//                     }
//                   >
//                     🔖
//                   </button>

//                   <span className="reel-action__count">
//                     {item.savedBy?.length || 0}
//                   </span>
//                 </div>

//               </div>
//             </div>
//           </section>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ReelFeed;
import Button from './Button';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const API = import.meta.env.VITE_API_URL;

const ReelFeed = ({
  items = [],
  emptyMessage = 'No videos yet.',
}) => {
  const videoRefs = useRef(new Map());
  const [pausedVideos, setPausedVideos] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;

          if (!(video instanceof HTMLVideoElement))
            return;

          if (
            entry.isIntersecting &&
            entry.intersectionRatio >= 0.6
          ) {
            if (!pausedVideos[video.dataset.id]) {
              video.play().catch(() => {});
            }
          } else {
            video.pause();
          }
        });
      },
      {
        threshold: [0, 0.25, 0.6, 0.9, 1],
      }
    );

    videoRefs.current.forEach((video) =>
      observer.observe(video)
    );

    return () => observer.disconnect();
  }, [items, pausedVideos]);

  const setVideoRef = (id) => (el) => {
    if (!el) {
      videoRefs.current.delete(id);
      return;
    }

    videoRefs.current.set(id, el);
  };

  const handlePausePlay = (id) => {
    const video = videoRefs.current.get(id);

    if (!video) return;

    if (video.paused) {
      video.play();

      setPausedVideos((prev) => ({
        ...prev,
        [id]: false,
      }));
    } else {
      video.pause();

      setPausedVideos((prev) => ({
        ...prev,
        [id]: true,
      }));
    }
  };

  const handleLike = async (foodId) => {
    try {
      const res = await axios.post(
        `${API}/api/food/like`,
        { foodId },
        {
          withCredentials: true,
        }
      );

      toast.success(res.data.message);
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          'Like failed'
      );
    }
  };

  const handleSave = async (foodId) => {
    try {
      const res = await axios.post(
        `${API}/api/food/save`,
        { foodId },
        {
          withCredentials: true,
        }
      );

      toast.success(res.data.message);
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          'Save failed'
      );
    }
  };

  return (
    <div className="reels-page">
       <div className="reel-top-btn">
    <Button />
  </div>

      <div className="reels-feed" role="list">

        {items.length === 0 && (
          <div className="empty-state">
            <p>{emptyMessage}</p>
          </div>
        )}

        {items.map((item) => (
          <section
            key={item._id}
            className="reel"
            role="listitem"
          >
            <video
              ref={setVideoRef(item._id)}
              data-id={item._id}
              className="reel-video"
              src={item.video}
              muted
              playsInline
              loop
              preload="metadata"
              onClick={() =>
                handlePausePlay(item._id)
              }
            />

            {pausedVideos[item._id] && (
              <div className="pause-overlay">
                ⏸
              </div>
            )}

            <div className="reel-overlay">
              <div
                className="reel-overlay-gradient"
                aria-hidden="true"
              />

              <div className="reel-content">
                <h3
                  className="reel-name"
                  title={item.name}
                >
                  {item.name}
                </h3>

                <p
                  className="reel-description"
                  title={item.description}
                >
                  {item.description}
                </p>

                {item.foodPartner && (
                  <Link
                    className="reel-btn"
                    to={`/food-partner/${item.foodPartner}`}
                  >
                    Visit Store
                  </Link>
                )}
              </div>

              <div className="reel-actions">

                <div className="reel-action-group">
                  <button
                    className="reel-action"
                    onClick={() =>
                      handleLike(item._id)
                    }
                  >
                    ❤️
                  </button>

                  <span className="reel-action__count">
                    {item.likes?.length || 0}
                  </span>
                </div>

                <div className="reel-action-group">
                  <button
                    className="reel-action"
                    onClick={() =>
                      handleSave(item._id)
                    }
                  >
                    🔖
                  </button>

                  <span className="reel-action__count">
                    {item.savedBy?.length || 0}
                  </span>
                </div>

              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default ReelFeed;