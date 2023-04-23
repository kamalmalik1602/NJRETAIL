import React from "react";
import "./Navbar.css";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import ImageSection from "./ImageSection";
import Explore from "./Explore";
import service1 from "../assets/images/service1.jpg";
import service4 from "../assets/images/service4.jpg";
import service3 from "../assets/images/service3.jpeg";
const Home = () => {
  return (
    <>
      {/* <Navbar/> */}
      <ImageSection />
      <Explore />

      <div className="Reviews-section">
        <div class="heading-section">
          <h3 class="sub-heading-1 common-text-animation" data-scroll="in">
            Our Reviews
          </h3>
          <p class="reviewtext" data-scroll="in">
            Experience shopping like never before at our mall. Discover a world
            of endless possibilities and unforgettable moments
          </p>
        </div>
        <div class="reviews">
          <div class="review">
            <img src={service1} alt="Reviewer 1" />
            <div class="review-text">
              <h3>Reviewer 1</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                vel dui euismod, dignissim ipsum ac, fermentum enim. Nunc non
                justo et orci fermentum pretium at at dolor.
              </p>
              <div class="rating">
                <span class="star">&#9733;</span>
                <span class="star">&#9733;</span>
                <span class="star">&#9733;</span>
                <span class="star">&#9734;</span>
                <span class="star">&#9734;</span>
              </div>
            </div>
          </div>
          <div class="review">
            <img src={service4} alt="Reviewer 2" />
            <div class="review-text">
              <h3>Reviewer 2</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                vel dui euismod, dignissim ipsum ac, fermentum enim. Nunc non
                justo et orci fermentum pretium at at dolor.
              </p>
              <div class="rating">
                <span class="star">&#9733;</span>
                <span class="star">&#9733;</span>
                <span class="star">&#9733;</span>
                <span class="star">&#9733;</span>
                <span class="star">&#9734;</span>
              </div>
            </div>
          </div>
          <div class="review">
            <img src={service3} alt="Reviewer 3" />
            <div class="review-text">
              <h3>Reviewer 3</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                vel dui euismod, dignissim ipsum ac, fermentum enim. Nunc non
                justo et orci fermentum pretium at at dolor.
              </p>
              <div class="rating">
                <span class="star">&#9733;</span>
                <span class="star">&#9733;</span>
                <span class="star">&#9733;</span>
                <span class="star">&#9733;</span>
                <span class="star">&#9733;</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    <div class="cta-area">
      <div class="container-4">
         <div class="row-1">
            <div class="col-md-9 col-sm-12">
               <div class="cta-text">
                  <h2>Request A Free Franchise Consultation</h2>
               </div>
            </div>
            <div class="col-md-3">
               <div class="cta-btn">
                  <a class="viso-btn cta" href="franchise.php">Apply Now</a>
               </div>
            </div>
         </div>
      </div>
   </div>
    </>
  );
};

export default Home;
