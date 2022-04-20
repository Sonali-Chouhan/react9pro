import React from "react"
import './App.css';
import Home from "./Component/Home";
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import About from "./Component/About";
import Header from "./Header";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={ <Home/>}/>
          <Route  path="/about" element={<About/>}/>
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
