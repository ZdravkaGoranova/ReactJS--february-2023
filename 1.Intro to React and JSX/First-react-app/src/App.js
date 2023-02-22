import EventInfo from './components/EventInfo';
import Footer from './components/Footer.js';
import Header from './components/Header';
import Navigation from './components/Navigation.js';
import Shedule from './components/Schedule.js';
import Speakers from './components/Speakers.js'
import Tickets from './components/Tickets.js';


function App() {
  return (
    <div>
      <div>
        <EventInfo />
        <div className="container-fluid">

          <Header />

        </div>
        <div className="container">
          <Navigation />

          <Speakers />

        </div>

        <Tickets />

        <Shedule />

        <Footer />
      </div>
    </div>
  );
}

export default App;
