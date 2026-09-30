/* eslint-disable no-unused-vars */

import React from 'react';
import styled from "styled-components";
// Sections
import TopNavbar from "../Nav/TopNavbar";
import Footer from "./Footer";
import '../../style.css';
import HeaderImage from "../../assets/img/ralling1.webp";
import g1 from "../../assets/img/ralling1.webp";
import g2 from "../../assets/img/ralling2.webp";
import g3 from "../../assets/img/ralling3.webp";
import g4 from "../../assets/img/ralling4.webp";
import g5 from "../../assets/img/ralling5.webp";
import g6 from "../../assets/img/ralling6.webp";
import g7 from "../../assets/img/ralling7.webp";
import g8 from "../../assets/img/ralling8.webp";
import g9 from "../../assets/img/ralling9.webp";
import g10 from "../../assets/img/ralling10.webp";
import g11 from "../../assets/img/ralling11.webp";
import g12 from "../../assets/img/ralling12.webp";
import g13 from "../../assets/img/ralling13.webp";
import g14 from "../../assets/img/ralling14.webp";
import g15 from "../../assets/img/ralling15.webp";
import g16 from "../../assets/img/ralling16.webp";
import g17 from "../../assets/img/ralling17.webp";
import g18 from "../../assets/img/ralling18.webp";
import g19 from "../../assets/img/ralling19.webp";
import g20 from "../../assets/img/ralling20.webp";
import g21 from "../../assets/img/gallery/ralling/gallery5.jpg";
import g22 from "../../assets/img/gallery/ralling/gallery8.jpg";
import g23 from "../../assets/img/gallery/ralling/gallery9.jpg";
import g24 from "../../assets/img/gallery/ralling/g15.jpg";
import g25 from "../../assets/img/gallery/ralling/g35.jpg";
import g26 from "../../assets/img/gallery/ralling/g37.jpg";
import g27 from "../../assets/img/gallery/ralling/g38.jpg";
import g28 from "../../assets/img/gallery/ralling/g39.jpg";
import g29 from "../../assets/img/gallery/ralling/g40.jpg";
import g30 from "../../assets/img/gallery/ralling/g41.jpg";
import g31 from "../../assets/img/gallery/ralling/g46.jpg";
import g32 from "../../assets/img/gallery/ralling/g47.jpg";
import g33 from "../../assets/img/gallery/ralling/g48.jpg";
import g34 from "../../assets/img/gallery/fence/gallery10.jpg";
import g35 from "../../assets/img/gallery/fence/gallery11.jpg";
import g36 from "../../assets/img/gallery/fence/gallery12.jpg";
import g37 from "../../assets/img/gallery/fence/g14.jpg";
import g38 from "../../assets/img/gallery/fence/g21.jpg";
import g39 from "../../assets/img/gallery/fence/g22.jpg";
import g40 from "../../assets/img/gallery/fence/g27.jpg";
import g41 from "../../assets/img/gallery/fence/g28.jpg";
import g42 from "../../assets/img/gallery/fence/g29.jpg";
import g43 from "../../assets/img/gallery/ralling/g55.jpg";
import g44 from "../../assets/img/gallery/ralling/g58.jpg";
import g45 from "../../assets/img/gallery/ralling/g59.jpg";
import g46 from "../../assets/img/gallery/ralling/g60.jpg";
import g47 from "../../assets/img/gallery/ralling/g61.jpg";
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
  { id: 5, src: g5, alt: "Image 4" },
  { id: 6, src: g6, alt: "Image 4" },
  { id: 7, src: g7, alt: "Image 4" },
  { id: 8, src: g8, alt: "Image 4" },
  { id: 9, src: g9, alt: "Image 4" },
  { id: 10, src: g10, alt: "Image 4" },
  { id: 11, src: g11, alt: "Image 4" },
  { id: 12, src: g12, alt: "Image 4" },
  { id: 13, src: g13, alt: "Image 4" },
  { id: 14, src: g14, alt: "Image 4" },
  { id: 15, src: g15, alt: "Image 4" },
  { id: 16, src: g16, alt: "Image 4" },
  { id: 17, src: g17, alt: "Image 4" },
  { id: 18, src: g18, alt: "Image 4" },
  { id: 19, src: g19, alt: "Image 4" },
  { id: 20, src: g20, alt: "Image 4" },
  { id: 21, src: g21, alt: "Image 4" },
  { id: 22, src: g22, alt: "Image 4" },
  { id: 23, src: g23, alt: "Image 4" },
  { id: 24, src: g24, alt: "Image 4" },
  { id: 25, src: g25, alt: "Image 4" },
  { id: 26, src: g26, alt: "Image 4" },
  { id: 27, src: g27, alt: "Image 4" },
  { id: 28, src: g28, alt: "Image 4" },
  { id: 29, src: g29, alt: "Image 4" },
  { id: 30, src: g30, alt: "Image 4" },
  { id: 31, src: g31, alt: "Image 4" },
  { id: 32, src: g32, alt: "Image 4" },
  { id: 33, src: g33, alt: "Image 4" },
  { id: 34, src: g34, alt: "Image 4" },
  { id: 35, src: g35, alt: "Image 4" },
  { id: 36, src: g36, alt: "Image 4" },
  { id: 37, src: g37, alt: "Image 4" },
  { id: 38, src: g38, alt: "Image 4" },
  { id: 39, src: g39, alt: "Image 4" },
  { id: 40, src: g40, alt: "Image 4" },
  { id: 41, src: g41, alt: "Image 4" },
  { id: 42, src: g42, alt: "Image 4" },
  { id: 43, src: g43, alt: "Image 4" },
  { id: 44, src: g44, alt: "Image 4" },
  { id: 45, src: g45, alt: "Image 4" },
  { id: 46, src: g46, alt: "Image 4" },
  { id: 47, src: g47, alt: "Image 4" },

];

const onInit = () => {
  console.log('lightGallery has been initialized');
};

const Rallings = () => {
  return (
    <>
    <TopNavbar />
    
          <Wrapper  className="container flexSpaceCenter">
      <LeftSide className="flexCenter">
        <div>
          <h1 className="extraBold font60">Ralling, Fence &amp; Gates</h1>
          <HeaderP className="font13 semiBold">
          Enjoying your morning coffee in your sunroom or hosting a party in winter outdoor or grow your tropical plants. Get the feeling of being at one with nature, no matter the weather and find the peace and comfort that your backyard brings all year long.  Enjoy a new lifestyle!.. More Family time..,,  BBQ,   Breakfast room  Reading space  Garden sanctuary Hot-tub or deck enclosure  Home gym  Entertaining  Kids Play room  Party Room..  Call us to book a onsite free Estimate.  604 783 8356
          <br/>
          <br/>

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



export default Rallings;

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

