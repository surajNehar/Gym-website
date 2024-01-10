import React from 'react'
import img1 from "./images/mind-body (1).jpg";
import img2 from "./images/mind-body (2).jpg";
import img3 from "./images/mind-body (3).jpg";
import img4 from "./images/mind-body (4).jpg";
import img5 from "./images/mind-body (5).jpg";
import img6 from "./images/mind-body (6).jpg";
import img7 from "./images/mind-body (7).jpg";
import img8 from "./images/mind-body (8).jpg";
import Navbar from '../../navbar/navbar';
import Footer from '../Footer/Footer';

function Program() {
  return (
  <> 
  <Navbar/>
     <div className='container'>
        <div className='row'>
            <div className='col-10 offset-1'>
       <div id="carouselExampleCaptions" class="carousel slide">
      <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 7"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="7" aria-label="Slide 8"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={img1} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h1> Mind-body </h1>
        <p> Including activities like meditation, mindfulness, or stress-reducing classes for a holistic approach to well-being.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={img2} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h1>Weight-Loss</h1>
        <p>Tailored for those seeking to lose weight through a combination of exercise and nutrition guidance.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={img3} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h1>Personal-Trainer</h1>
        <p> Offering one-on-one sessions with certified trainers for individualized workout plans..</p>
      </div>
    </div>

    <div class="carousel-item">
      <img src={img4} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h1>Nutritional-counselling</h1>
        <p> Providing personalized nutritional guidance and meal plans to complement fitness programs.</p>
      </div>
    </div>

    <div class="carousel-item">
      <img src={img5} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h1>Sport-specific</h1>
        <p>Tailoring programs for athletes focusing on sport-specific conditioning and performance enhancement.</p>
      </div>
    </div>

    <div class="carousel-item">
      <img src={img6} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h1>Cardiovascular Fitness</h1>
        <p>Focused on improving cardiovascular health through activities like running, cycling, or group cardio classes.</p>
      </div>
    </div>

    <div class="carousel-item">
      <img src={img7} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h1>Group Fitness Classes</h1>
        <p> Offering a variety of classes such as yoga, pilates, spin, or HIIT to accommodate different preferences.</p>
      </div>
    </div>

    <div class="carousel-item">
      <img src={img8} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h1>Strength-specific</h1>
        <p> Targeting individuals looking to build muscle and increase overall strength.</p>
      </div>
    </div>

  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

</div></div></div>

<Footer/>
      </>
    )
}

export default Program