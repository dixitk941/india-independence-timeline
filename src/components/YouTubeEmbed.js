import React from 'react';

function YouTubeEmbed({ videoId, title }) {
  return (
    <div className="w-full max-w-2xl mx-auto my-8">
      <h2 className="text-2xl font-bold text-center mb-4">{title}</h2>
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          className="w-full h-full rounded-lg shadow-lg"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default YouTubeEmbed;
