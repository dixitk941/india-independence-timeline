import React from 'react';
import YouTubeEmbed from '../components/YouTubeEmbed'; // Adjust the import path if necessary

function IndependenceDayEvents() {
  const events = [
    { year: 2020, videoId: 'bwMkAv-ID_g?si=W1eHmLboQuAYOEpP', title: 'Independence Day 2020 Celebration' },
    { year: 2021, videoId: 'HrHmULVWeZU?si=0FFVrjr-S8bnhnDA', title: 'Independence Day 2021 Celebration' },
    { year: 2022, videoId: 'HrHmULVWeZU?si=0FFVrjr-S8bnhnDA', title: 'Independence Day 2022 Celebration' },
    { year: 2023, videoId: 'U7FZkZ-DjHQ', title: 'Independence Day 2023 Celebration' },
    { year: 2024, videoId: 'xNjNDw1l5hU', title: 'Independence Day 2024 Live Event' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="bg-cover bg-center h-64 flex items-center justify-center" style={{ backgroundImage: "url('/path/to/your/background-image.jpg')" }}>
        <h1 className="text-5xl font-bold text-white">Independence Day Events</h1>
      </div>

      {/* Events Section */}
      <div className="container mx-auto p-8">
        {events.map((event, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-center mb-4">{event.title}</h2>
            <YouTubeEmbed videoId={event.videoId} title={event.title} onError={(error) => console.error(`Error loading video ${event.videoId}: ${error}`)} />
          </div>
        ))}
      </div>

      {/* Footer */}
     
    </div>
  );
}

export default IndependenceDayEvents;