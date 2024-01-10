import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'
import {AiFillFacebook} from "react-icons/ai";
import {AiFillInstagram} from "react-icons/ai";
import {AiFillTwitterCircle} from "react-icons/ai";
import {AiOutlineMail} from "react-icons/ai";
//AiFillFacebook
//AiFillInstagram
//AiOutlineMail


const Footer = () => {
  return (
    <div className='container-fluid' id='footer-section'>
        <div className='row justify-content-evenly'>
            <div className='col-3 mt-5'id='foot-1'>
            <h4>GYM FIT</h4>
             Lorem ipsum dolor sit amet,<br/>
             consectetur adipiscing elit, <br/>
             sed do eiusmod tempor incididunt <br/>
             ut labore et dolore magna aliqua.<br/>
             ut labore et dolore magna aliqua.
            </div>
            <div className='col-3 mt-5'>
                <h5>Important Links</h5>
                <Link to={"/"}><p id='link-name'>Home</p></Link>
                <Link to={"/about"}><p id='link-name'>About us</p></Link>
                <Link to={"/trainer"}><p id='link-name'>Trainer</p></Link>
                <Link to={"/"}><p id='link-name'>Program</p></Link> 
                <Link to={"/register"}><p id='link-name'>Join-us</p></Link> 
            </div>
            <div className='col-3 mt-5'>
              <h5>Address</h5>

              <AiFillFacebook size={30}/>
              <AiFillInstagram size={30}/>
              <AiFillTwitterCircle size={30}/>
              <AiOutlineMail size={30}/>
            </div>
        </div>

    </div>
  )
}

export default Footer;