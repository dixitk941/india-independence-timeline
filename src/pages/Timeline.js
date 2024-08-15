import React from 'react';

function Timeline() {
  const events = [
    { year: 1857, title: 'First War of Independence', description: 'The rebellion of 1857, also known as the Sepoy Mutiny, was a significant uprising against the British East India Company.' },
    { year: 1885, title: 'Formation of Indian National Congress', description: 'The Indian National Congress was founded, playing a crucial role in India\'s struggle for freedom.' },
    { year: 1915, title: 'Gandhi Returns to India', description: 'Mahatma Gandhi returned to India from South Africa and became a key figure in the freedom movement.' },
    { year: 1919, title: 'Jallianwala Bagh Massacre', description: 'A brutal massacre in Amritsar, Punjab, leading to widespread outrage and strengthening the independence movement.' },
    { year: 1920, title: 'Non-Cooperation Movement', description: 'Led by Gandhi, this was a significant non-violent protest against British rule.' },
    { year: 1930, title: 'Dandi March', description: 'Gandhi led a 240-mile march to the Arabian Sea to make salt, defying British laws.' },
    { year: 1942, title: 'Quit India Movement', description: 'A mass protest demanding an end to British rule in India, launched by Gandhi and the Indian National Congress.' },
    { year: 1947, title: 'Independence Day', description: 'India gained independence from British rule on August 15, 1947.' },
    { year: 1950, title: 'Republic Day', description: 'On January 26, 1950, India adopted its constitution and became a republic.' },
  ];

  return (
    <div className="container mx-auto p-8 bg-white">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 animate-fadeIn">Timeline of India’s Independence</h2>
      <div className="relative">
  <div className="border-l-4 border-gray-300 absolute h-full left-1/2 transform -translate-x-1/2 z-0"></div>
  {events.map((event, index) => (
    <div
      key={index}
      className={`relative mb-12 flex flex-col ${index % 2 === 0 ? 'items-start text-left' : 'items-end text-right'} 
                  lg:${index % 2 === 0 ? 'items-start text-left' : 'items-end text-right'}
                  sm:items-center sm:text-center animate-slideUp w-full sm:w-11/12 mx-auto z-10`}
    >
      <div className="flex items-center mb-4 sm:flex-col sm:items-center sm:mb-6">
        <div className="w-5 h-5 bg-gray-900 rounded-full border-4 border-white sm:mb-2 z-10"></div>
        <div className="w-full px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-lg hover:bg-gradient-to-r from-saffron via-white to-green hover:text-white transition duration-300 z-10">
          <h3 className="mb-2 text-xl font-bold text-gray-900">{event.year}</h3>
          <p className="text-gray-800">{event.title}</p>
          <p className="mt-1 text-gray-600">{event.description}</p>
        </div>
      </div>
    </div>
  ))}
</div>
    </div>
  );
}

export default Timeline;
