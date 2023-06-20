import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Education from './components/Education';
import Tech from './components/Tech';
import Experience from './components/Experience';
import Works from './components/Works';
import Connect from './components/Connect';

function App() {
  return (
    <div className="App font-shareTech m-3">
      {/* <Navbar/> */}
      {/* <Home /> */}
      {/* <Education /> */}
      <Tech />
      <Experience />
      <Works />
      {/* TODO - Parallex scroll effect */}
      <Connect />
    </div>
  );
}

export default App;
