import React from 'react';
import ReactPlayer from 'react-player';
import './Video.css';

const YouTubeVideo = () => {
  return (
    <div className="video-container">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=PtbtUMUPeyY"
        controls={true}
        className='video'
      />
    </div>
  );
};

export default YouTubeVideo;