import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import WorkExperience from './pages/WorkExperience';
import Projects from './pages/Projects';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<AboutMe></AboutMe>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/work-experience" element={<WorkExperience></WorkExperience>}></Route>
          <Route path="/projects" element={<Projects></Projects>}></Route>
        </Routes>
    </Router>
  );
}

export default App;
