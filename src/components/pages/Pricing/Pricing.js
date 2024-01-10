import React from 'react';
import "./Pricing.css"
import Navbar from '../../navbar/navbar';
import Footer from '../Footer/Footer';


const Pricing = () => {
  return (
    <>
    <Navbar/>
         <div className="container mt-5 pt-5">
         <div className="row white">
				

					<div className="col-xs-12 col-sm-6 col-md-3">
							<ul className="pricing p-green border border-dark rounded">
								<li>
									<img src="http://bread.pp.ua/n/settings_g.svg" alt=""/>
									<big>Start</big>
								</li>
								<li>Responsive Design</li>
								<li>Color Customization</li>
								<li>HTML5 & CSS3</li>
								<li>Styled elements</li>
								<li>
									<h3>$199</h3>
									<span>per month</span>
								</li>
								<li>
									<button>Join Now</button>
								</li>
							</ul>
					</div>

					<div className="col-xs-12 col-sm-6 col-md-3">
							<ul className="pricing p-yel border border-dark rounded">
								<li>
									<img src="http://bread.pp.ua/n/settings_y.svg" alt=""/>
									<big>Good</big>
								</li>
								<li>Responsive Design</li>
								<li>Color Customization</li>
								<li>HTML5 & CSS3</li>
								<li>Styled elements</li>
								<li>
									<h3>$299</h3>
									<span>per month</span>
								</li>
								<li>
									<button>Join Now</button>
								</li>
							</ul>
					</div>

					<div className="col-xs-12 col-sm-6 col-md-3">
							<ul className="pricing p-red border border-dark rounded">
								<li>
									<img src="http://bread.pp.ua/n/settings_r.svg" alt=""/>
									<big>Ultima</big>
								</li>
								<li>Responsive Design</li>
								<li>Color Customization</li>
								<li>HTML5 & CSS3</li>
								<li>Styled elements</li>
								<li>
									<h3>$399</h3>
									<span>per month</span>
								</li>
								<li>
									<button>Join Now</button>
								</li>
							</ul>
					</div>

					<div className="col-xs-12 col-sm-6 col-md-3">
							<ul className="pricing p-blue border border-dark rounded">
								<li>
									<img src="http://bread.pp.ua/n/settings_b.svg" alt=""/>
									<big>Vip</big>
								</li>
								<li>Responsive Design</li>
								<li>Color Customization</li>
								<li>HTML5 & CSS3</li>
								<li>Styled elements</li>
								<li>
									<h3>$799</h3>
									<span>per month</span>
								</li>
								<li>
									<button>Join Now</button>
								</li>
							</ul>
					</div>


				
  </div></div> 
  <Footer/>
  </>
  )
}

export default Pricing;