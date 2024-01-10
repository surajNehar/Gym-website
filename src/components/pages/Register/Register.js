import React, { useState } from "react";
import "./Register.css"; 
import { Link } from "react-router-dom";
import Navbar from "../../navbar/navbar";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";

const Register = () =>{
  const navigate = useNavigate();

  const [inpval, setInpval] = useState({
    name:"",
    email:"",
    dateofbirth:"",
    password:"",
  })

  const [data,setData] = useState([])

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
  e.preventDefault(); //stop the dafault behaviour 

 const {name,email,dateofbirth,password} = inpval;

 if(name === ""){
  alert("name field is required")
 }
  if(email === ""){
  alert("email field is required")
 }
 if(!email.includes("@")){
  alert(" plz enter the valid email address ")
 }
 if(dateofbirth === ""){
  alert(" dateofbirth is required ")
}
 if(password === ""){
  alert("password field is required")
}
if(password.length< 5){
  alert("password length should be greater than five ")
}else{
  alert(" you have register successfully! ")
    // Update the data state with the new user
    setData([...data, inpval]);

    // Clear the input fields
    setInpval({
      name: "",
      email: "",
      dateofbirth: "",
      password: "",
    });
   
  localStorage.setItem("user" , JSON.stringify([...data,inpval]));

  navigate("/login")

  }
  }
 
  return(
    <>
      <Navbar/>
      <div className='container mt-5 pt-5'>

          <h4 className="text-center ">Register</h4> 
          <div className='row pt-3 justify-content-evenly'>
          <div className='col-5 ' id="register-section"> 
        
      
        <form>

        <div className="my-3">
         <label for="name" className="form-label">Name</label>
         <input type="text" className="form-control" value={inpval.name} name="name" onChange={getdata} placeholder='Enter your name' id="name" aria-describedby="emailHelp"/>
        </div>

        <div className="my-3">
         <label for="exampleInputEmail1" className="form-label">Email address</label>
         <input type="email" className="form-control" value={inpval.email} name="email" onChange={getdata} placeholder='Enter email' id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>

        <div className="my-3">
          <label for="birthdate" className="form-label">birthdate</label>
          <input type="date" className="form-control" value={inpval.dateofbirth} name="dateofbirth" onChange={getdata} id="birthdate"/>
        </div>

         <div className="my-3">
          <label for="passwordid" className="form-label">Password</label>
          <input type="password" className="form-control" value={inpval.password} name="password" onChange={getdata} id="passwordid"/>
         </div>
 
        <button type="submit" className="btn btn-primary my-2" onClick={adddata}>Submit</button>


        <p> If you have already register then login here<Link to={"/login"} ><h4>Login</h4></Link></p>
        
        </form> 

      </div> 
      </div>
      </div>
     
     <Footer/>
    </>
  )
};

export default Register;