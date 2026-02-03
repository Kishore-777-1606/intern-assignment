import React from "react"
import ReactDOM from "react-dom/client"
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import "./index.css"
import Signup from "./pages/Signup"



const Private=({children})=>{
 return localStorage.getItem("t") ? children : <Navigate to="/" />
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
 <BrowserRouter>
 <Routes>
 <Route path="/" element={<Login/>}/>
 <Route path="/signup" element={<Signup/>}/>
 <Route path="/dash" element={<Private><Dashboard/></Private>}/>
</Routes>
 </BrowserRouter>
)
