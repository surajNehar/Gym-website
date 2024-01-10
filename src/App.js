import "./App.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./components/pages/Home/Home"
import Aboutus from './components/pages/Aboutus/Aboutus'
import Trainer from "./components/pages/Trainer/Trainer"
import Login from "./components/pages/Login/Login"
import Register from "./components/pages/Register/Register"
import Pricing from "./components/pages/Pricing/Pricing"
import Program from "./components/pages/Program/Program"


  function App(){
    return(
        <>
         <BrowserRouter>
         <Routes>
          <Route path="/" element={<Home/>}/>
           <Route path="/about" element={<Aboutus/>}/>
          <Route path="/trainer" element={<Trainer/>}/>
          <Route path="/pricing" element={<Pricing/>}/>
          <Route path="program" element={<Program/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path= "login" element={<Login/>}/>
          
         </Routes>
         </BrowserRouter>
        </>
    )
  }

  export default App;