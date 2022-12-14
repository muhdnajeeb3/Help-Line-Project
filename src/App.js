import React from 'react'
import './App.css';
import NavbarMain from './components/NavbarMain';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './components/pages/Home';
import DoctorsScreen from './components/pages/DoctorsScreen';
import TaxisScreen from './components/pages/TaxisScreen';
import EmergencySCreen from './components/pages/EmergencyScreen';
import ChildSpecialist from './components/pages/ChildSpecialist';



function App() {
  return (
    <>
    <Router >
      
      <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/doctors' element={<DoctorsScreen/>} />
      <Route exact path='/taxis' element={<TaxisScreen/>} />
      <Route exact path='/emergency' element={<EmergencySCreen/>} />
      <Route exact path='/childSpecialist' element={<ChildSpecialist/>} />
          
      </Routes>
    </Router>
    </>
  );
}

export default App;
