import './App.css';
import NavigationBar from './Components/NavigationBar';
import Footer from './Components/Footer';
import Home from "./Pages/Home";
import JoinUs from "./Pages/JoinUs";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact"
import Nicaragua from "./Pages/Nicaragua.js";
import Uganda from "./Pages/Uganda.js";
import Ethiopia from "./Pages/Ethiopia.js";
import Nepal from "./Pages/Nepal.js";
import EthiopiaOld from "./Pages/EthiopiaOld.js";
import Guatemala from "./Pages/Guatemala.js";
import Thailand from "./Pages/Thailand.js";
import AboutUs from "./Pages/AboutUs.js";
import Colombia from "./Pages/Colombia.js";
import {BrowserRouter as Router, Route,Routes } from "react-router-dom";

function App() {
  return <div className="App">
    <Router>
      <NavigationBar />
      <Routes>
        <Route path='/' exact element={<Home />}/>
        <Route path='/JoinUs' exact element={<JoinUs />}/>
        <Route path='/projects' exact element={<Projects />}/>
        <Route path='/contact' exact element={<Contact />} />
        <Route path='/projects/uganda' exact element={<Uganda />} />
        <Route path='/projects/ethiopia' exact element={<Ethiopia />} />
        <Route path='/projects/nepal' exact element={<Nepal />} />
        <Route path='/projects/colombia' exact element={<Colombia />} />
        <Route path='/projects/nicaragua' exact element={<Nicaragua />} />
        <Route path='/projects/ethiopiaold' exact element={<EthiopiaOld />} />
        <Route path='/projects/guatemala' exact element={<Guatemala />} />
        <Route path='/projects/thailand' exact element={<Thailand />} />
        <Route path='/aboutus' exact element={<AboutUs />} />
      </Routes>
      <Footer />
    </Router>
  </div>;

}

export default App;
