import React,{useState, createContext} from 'react'
import { BrowserRouter as Router} from "react-router-dom";
import Nav from './Nav.js'
import Header from './Header.js'
import './App.css';
import AnimatedRoute from './AnimatedRoute.js';

export const AppContext = createContext(null);

const App = () => {
  const [modeMessage, setmodeMessage] = useState(true);
  modeMessage?document.body.style = 'background-color: #ffffff;':document.body.style = 'background-color: #0e0b16;';

  return (
    <Router>
      <AppContext.Provider value={{ modeMessage, setmodeMessage }}>
      <Header/>
      <Nav/>
      <AnimatedRoute/>
      </AppContext.Provider>
    </Router>
  )
}

export default App