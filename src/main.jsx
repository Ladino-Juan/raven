import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx'
import NavBar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
   
   <NavBar />
   <App />
   <Footer />
 </BrowserRouter>
  </React.StrictMode>,
)
