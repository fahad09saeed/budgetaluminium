import React from 'react';
import styled from "styled-components";
// Sections
import TopNavbar from "../Nav/TopNavbar";
import Footer from "./Footer";
import '../../style.css';
import HeaderImage from "../../assets/img/sleek1.webp";
import g1 from "../../assets/img/sleek2.webp";
import g2 from "../../assets/img/sleek3.webp";
import g3 from "../../assets/img/sleek4.webp";
import g4 from "../../assets/img/sleek5.webp";
import Dots from "../../assets/svg/Dots";

import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';



// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

const images = [
  { id: 1, src: g1, alt: "Image 1" },
  { id: 2, src: g2, alt: "Image 2" },
  { id: 3, src: g3, alt: "Image 3" },
  { id: 4, src: g4, alt: "Image 4" },
];

const onInit = () => {
  console.log('lightGallery has been initialized');
};

const Sleekfence = () => {
  return (
    <>
    <TopNavbar />
    
          <Wrapper  className="container flexSpaceCenter">
      <LeftSide className="flexCenter">
        <div>
          <h1 className="extraBold font60">HAVE THE FENCE EVERYONE WANTS</h1>
          <HeaderP className="font13 semiBold">
            <strong>Get a modern fence you’ll never replace</strong><br/><br/>
            Primarily utilizing high-grade aluminum, our modern fences are found at many luxury residences across North America.
          <br/>
          <br/>
          SLEEKFENCE™ is made from 100% 6063-T5 Aluminum with a heavy-duty powder coating. Aluminum is one of the most recycled-and most recyclable-materials available on the market today. Nearly 75% of all aluminum produced in the U.S. is still in use today. Aluminum can also be recycled directly back into itself repeatedly. This is a true closed loop.
          <br/>
          <br/>
          SLEEKFENCE™ is for designers and discerning homeowners who want to make their fence a feature, and a statement that lasts for a long time. Aluminum fences are a great alternative to composite or vinyl fencing.
          <br/>
          <br/>
          SLEEKFENCE™ manufacturing facilities are ISO 9000-9001 certified, the globally-recognized standard for product quality management systems. As an unmistakable leader in the North American metal fence manufacturing industry, we hold ourselves to the highest ideals and never cease innovating with our fence designs.
          <br/>
          <br/>
          <ul>
            <li>Zero Maintenance Other than regular cleaning.</li>
            <li>Enduring Quality Limited lifetime warranty.</li>
          </ul>

          </HeaderP>
          
        </div>
      </LeftSide>
      <RightSide>
             
        <ImageWrapper>
          <Img className="radius8" src={HeaderImage} alt="office" style={{zIndex: 9, width:"500px"}} />
         
            
          <DotsWrapper>
            <Dots />
          </DotsWrapper>
        </ImageWrapper>
        <GreyDiv className="lightBg"></GreyDiv>
      </RightSide>
   

    
      
    </Wrapper>

    <div className="gallery-container patiogallery">
      <h2 className='galleryheading'>PHOTO GALLERY</h2>
      <div className="gallery">
      <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >
            {images.map(image => (
               <a  href={image.src}>
                    <img key={image.id} src={image.src} alt={image.alt} className="gallery-img" />
                </a>
          
        ))}
               
              
            </LightGallery>
      </div>
    </div>
    <Footer/>
    </>
  );
};



export default Sleekfence;

const Wrapper = styled.section`
  padding-top: 80px;
  width: 100%;
  min-height: 840px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const LeftSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin: 50px 0;
    text-align: center;
  }
  @media (max-width: 560px) {
    margin: 80px 0 50px 0;
  }
`;
const RightSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
    margin-top: 30px;
  }
`;
const HeaderP = styled.div`
  max-width: 470px;
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    text-align: center;
    max-width: 100%;
  }
`;

const GreyDiv = styled.div`
  width: 30%;
  height: 700px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  @media (max-width: 960px) {
    display: none;
  }
`;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 9;
  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;
  }
`;


const Img = styled.img`
  @media (max-width: 560px) {
    width: 80%;
    height: auto;
  }
`;

const DotsWrapper = styled.div`
  position: absolute;
  right: -100px;
  bottom: 100px;
  z-index: 2;
  @media (max-width: 960px) {
    right: 100px;
  }
  @media (max-width: 560px) {
    display: none;
  }
`;

