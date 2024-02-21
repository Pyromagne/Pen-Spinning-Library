import React from 'react';

const ResponsiveYouTube = ({ videoId }) => {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: 0,
        paddingBottom: '56.25%', // 16:9 aspect ratio (height / width * 100%)
      }}
    >
      <iframe
        title="YouTube Video"
        src={`https://www.youtube.com/embed/${videoId}`}
        allowFullScreen
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          borderRadius: '10px',
        }}
      />
    </div>
  );
};

export default ResponsiveYouTube;
