// import { useState } from 'react'
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from "react-router-dom";
import HomePage from "./pages/homepage";
import Login from "./pages/login";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="login" element={<Login/>}/>
      </Routes>
    </Router>
  )
}

export default App
