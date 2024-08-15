import React, { useEffect } from 'react';

function CoronaEra() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="relative h-64 flex items-center justify-center">
        <h1 className="text-5xl font-bold text-white drop-shadow-lg z-10">The Corona Era</h1>
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-white to-green-500 opacity-50"></div>
      </div>

      {/* Timeline Section */}
      <div className="container mx-auto p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <h2 className="text-3xl font-semibold mb-4 text-orange-600">Timeline</h2>
        <p className="mb-4">The Corona Era began in late 2019 with the outbreak of COVID-19 in Wuhan, China. It quickly spread worldwide, leading to a global pandemic.</p>
        <ul className="list-disc list-inside">
          <li>December 2019: First cases reported in Wuhan, China.</li>
          <li>March 2020: WHO declares COVID-19 a pandemic.</li>
          <li>2020-2021: Global lockdowns, travel restrictions, and social distancing measures.</li>
          <li>2021: Vaccination campaigns begin worldwide.</li>
          <li>2022: Gradual easing of restrictions as vaccination rates increase.</li>
        </ul>
      </div>

      {/* Impact Section */}
      <div className="container mx-auto p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 mt-8">
        <h2 className="text-3xl font-semibold mb-4 text-green-600">Impact</h2>
        <p className="mb-4">The pandemic had a profound impact on various aspects of life, including:</p>
        <ul className="list-disc list-inside">
          <li>Health: Millions of infections and deaths worldwide.</li>
          <li>Economy: Global recession, job losses, and business closures.</li>
          <li>Education: Shift to online learning and disruptions in academic schedules.</li>
          <li>Social: Changes in social behavior, increased mental health issues.</li>
        </ul>
      </div>

      {/* Statistics Section */}
      <div className="container mx-auto p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 mt-8">
        <h2 className="text-3xl font-semibold mb-4 text-blue-600">Statistics</h2>
        <p className="mb-4">As of now, here are some key statistics:</p>
        <ul className="list-disc list-inside">
          <li>Total Cases: 200 million+</li>
          <li>Total Deaths: 4 million+</li>
          <li>Total Vaccinations: 3 billion+</li>
        </ul>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-orange-500 via-white to-green-500 text-white text-center p-4 mt-8 rounded-t-lg shadow-lg">
        <p>&copy; {new Date().getFullYear()} Corona Era Details. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default CoronaEra;