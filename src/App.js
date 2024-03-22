import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Company from "./components/pages/Company";
import Home from "./components/pages/Home";
import NewProject from "./components/pages/NewProject";
import Projects from "./components/pages/Projects";
import Contato from "./components/pages/Contact";
import Navbar from "./components/pages/layout/Navbar";
import Footer from "./components/pages/layout/Footer";
import Container from './components/pages/layout/Container';
import Project from './components/pages/Project';
function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
      <div>
        <Routes>
          <Route exact path ='/' element={<Home />} ></Route>
          <Route path='/Company' element={<Company />} />
          <Route path='/Contato' element={<Contato />} />
          <Route path='/Projects' element={<Projects />} />
          <Route path='/NewProject' element={<NewProject />} />
          <Route path='/Project/:id' element={<Project />} />  
        </Routes>
      </div>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
