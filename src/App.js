import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/base/Navbar"
import routes from "./routes";
import './App.css'
import Footer from "./components/base/Footer";

function App() {
  return (
 
    <div className="App">
      
      <Navbar />
       <Routes>
        {
          routes.map((item, index) =>
            <Route key={index} path={item.path} element={item.element} />
          )
       }
      </Routes>
     <Footer />
      </div>

  );
}

export default App;