import React, { useState } from "react";
import "./Login.css";
import Navbar from "../../navbar/navbar";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";


const Login = () =>{
  const navigate = useNavigate();

  const [inpval, setInpval] = useState({
    email:"",
    password:"",   
  })


  const getdata = (e) =>{
  // console.log(e.target.value);
  
  const {value,name} = e.target;
  // console.log(value, name)
  //now this value are store in input state

  setInpval({
    ...inpval,
    [name]: value,
  });
  
}

const adddata = (e) =>{
  e.preventDefault();//stop the dafault behaviour 

  const getuserArr = localStorage.getItem("user");
    console.log(getuserArr);

    const { email, password } = inpval;

 
 if(email === ""){
  alert("email field is required")
 }
 if(!email.includes("@")){
  alert(" plz enter the valid email address ")
 }
 if(password === ""){
  alert("password field is required")
}
if(password.length< 5){
  alert("password length should be greater than five ")
}else{

  if (getuserArr && getuserArr.length) {
    const userdata = JSON.parse(getuserArr);
    const userlogin = userdata.filter((el, k) => {
        return el.email === email && el.password === password
    });

    if (userlogin.length === 0) {
        alert("invalid details")
    } else {
      alert("you have login successfully ")

        localStorage.setItem("user_login", JSON.stringify(userlogin));

        navigate("/");

         // Reset the input fields
         setInpval({
          email: "",
          password: "",
        });
 
    }
 }
 }
}
  return(
    <>    
          <Navbar/>
          <div className='container mt-5 pt-2'>
            <h4 className="text-center mt-5 mb-2">Login </h4>
           <div className='row pt-3 justify-content-evenly'>
           <div className='col-5 border border-primary' id="login-section"> 
         
        <form>

        

        <div className="my-3">
         <label for="exampleInputEmail1" className="form-label" >Email address</label>
         <input type="email" className="form-control" name="email" value={inpval.email} onChange={getdata} placeholder='Enter email' id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>

       
         <div className="my-3">
          <label for="passwordid" className="form-label">Password</label>
          <input type="password" value={inpval.password} className="form-control" name="password" onChange={getdata} id="passwordid"/>
         </div>
 
        <button type="submit" className="btn btn-primary my-2" onClick={adddata}>Submit</button>
        </form> 

         
      </div>
      </div>
      </div>
     
     <Footer/>

    </>
  )
};

export default Login;