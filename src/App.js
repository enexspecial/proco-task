import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Dashboard } from './components/Dashboard';


function App() {
  return (
    // Implementing the router 
    <Routes>
        <Route path="/" element={<Dashboard/>}/>
    </Routes>
  );
}

export default App;
