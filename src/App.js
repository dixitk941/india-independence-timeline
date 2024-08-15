import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Timeline from './pages/Timeline';
import FreedomFighters from './pages/FreedomFighters';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import IndependenceDayEvents from './pages/IndependenceDayEvents';
import CoronaEra from './pages/CoronaEra'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-900">
        <Navbar />
        <div className="pt-16"> {/* Padding to ensure the navbar doesn't overlap content */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/freedom-fighters" element={<FreedomFighters />} />
            <Route path="/independence-day-events" element={<IndependenceDayEvents />} />
            <Route path="/coronaera" element={<CoronaEra />} />
            {/* Add other routes here */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;