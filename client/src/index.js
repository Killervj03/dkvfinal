import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./styles.css"
import { BrowserRouter } from "react-router-dom"
import 'semantic-ui-css/semantic.min.css'
import Footer from './pages/Footer'
import Logins from "./pages/Login"
import DBConnect from "./AppBackEndConnect";
import Member from "./pages/Member"
import Aboutus from "./pages/Aboutus"
import Navbar from "./Navbar"







const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
);
