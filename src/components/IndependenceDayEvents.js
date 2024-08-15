import React from 'react';
import YouTubeEmbed from './YouTubeEmbed';

function IndependenceDayEvents() {
    const events = [
      { year: 2020, videoId: '3Vu0Qb_zqJg', title: 'Independence Day 2020 Celebration' },
      { year: 2021, videoId: '3Vu0Qb_zqJg', title: 'Independence Day 2021 Celebration' },
      { year: 2022, videoId: '_H9_8_g7exk', title: 'Independence Day 2022 Celebration' },
      { year: 2023, videoId: 'U7FZkZ-DjHQ', title: 'Independence Day 2023 Celebration' },
      { year: 2024, videoId: 'LIVE_VIDEO_LINK', title: 'Independence Day 2024 Live Event' }, // Replace with actual live video ID
    ];
  
    return (
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold text-center text-green-600 mb-12">Independence Day Events</h1>
        {events.map((event, index) => (
          <YouTubeEmbed key={index} videoId={event.videoId} title={event.title} />
        ))}
      </div>
    );
  }
  

export default IndependenceDayEvents;
