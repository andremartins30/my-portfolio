
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import './App.css'
import ProjectsSection from './components/projectsSection/ProjectsSection';
const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/contato" element={<Contact />} />
        </Routes>
        <ProjectsSection/>
      </div>
    </Router>
  );
};

export default App;
