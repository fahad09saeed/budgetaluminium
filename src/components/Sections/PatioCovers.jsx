import React from 'react';
import styled from "styled-components";
// Sections
import TopNavbar from "../Nav/TopNavbar";
import Header from "./Header";
import Footer from "./Footer";
import '../../style.css';
import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// If you want you can use SCSS instead of css
// import 'lightgallery/scss/lightgallery.scss';
// import 'lightgallery/scss/lg-zoom.scss';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

import HeaderImage from "../../assets/img/awning1.webp";
import g1 from "../../assets/img/awning2.webp";
import g2 from "../../assets/img/awning1.webp";
import g3 from "../../assets/img/awning3.webp";
import g4 from "../../assets/img/awning4.webp";
import g5 from "../../assets/img/patio5.webp";
import g6 from "../../assets/img/patio6.webp";
import g7 from "../../assets/img/patio7.webp";
import g8 from "../../assets/img/patio8.webp";
import g9 from "../../assets/img/patio9.webp";
import g10 from "../../assets/img/patio10.webp";
import g11 from "../../assets/img/patio11.webp";
import g12 from "../../assets/img/patio12.webp";
import g13 from "../../assets/img/patio13.webp";
import g14 from "../../assets/img/patio14.webp";
import g15 from "../../assets/img/patio15.webp";
import g16 from "../../assets/img/patio16.webp";
import g17 from "../../assets/img/patio17.webp";
import g18 from "../../assets/img/patio18.webp";
import g19 from "../../assets/img/patio19.webp";
import g20 from "../../assets/img/patio20.webp";
import g21 from "../../assets/img/patio21.webp";
import g22 from "../../assets/img/patio22.webp";
import g23 from "../../assets/img/patio23.webp";
import g24 from "../../assets/img/patio24.webp";
import g25 from "../../assets/img/patio25.webp";

import Dots from "../../assets/svg/Dots";
const images = [
  { id: 1, src: g1, alt: "Image 1" },
  { id: 2, src: g2, alt: "Image 2" },
  { id: 3, src: g3, alt: "Image 3" },
  { id: 4, src: g4, alt: "Image 4" },
  { id: 5, src: g5, alt: "Image 5" },
  { id: 6, src: g6, alt: "Image 6" },
  { id: 7, src: g7, alt: "Image 7" },
  { id: 8, src: g8, alt: "Image 8" },
  { id: 9, src: g9, alt: "Image 9" },
  { id: 10, src: g10, alt: "Image 10" },
  { id: 11, src: g11, alt: "Image 11" },
  { id: 12, src: g12, alt: "Image 12" },
  { id: 13, src: g13, alt: "Image 13" },
  { id: 14, src: g14, alt: "Image 14" },
  { id: 15, src: g15, alt: "Image 15" },
  { id: 16, src: g16, alt: "Image 16" },
  { id: 17, src: g17, alt: "Image 17" },
  { id: 18, src: g18, alt: "Image 18" },
  { id: 19, src: g19, alt: "Image 20" },
  { id: 21, src: g21, alt: "Image 21" },
  { id: 22, src: g22, alt: "Image 22" },
  { id: 23, src: g23, alt: "Image 23" },
  { id: 24, src: g24, alt: "Image 24" },
  { id: 25, src: g25, alt: "Image 25" },
];

const onInit = () => {
        console.log('lightGallery has been initialized');
    };

const PatioCovers = () => {
  return (
    <>
    <TopNavbar />
    
          <Wrapper  className="container flexSpaceCenter">
      <LeftSide className="flexCenter">
        <div>
          <h1 className="extraBold font60">PATIO COVER, AWNINGS</h1>
          <HeaderP className="font13 semiBold">
          Welcome to the ultimate source for information about patio covers in the Lower Mainland of British Columbia! Whether you're looking to protect your outdoor living space from the elements or simply enhance the aesthetics of your home, a patio cover is the perfect solution.
          <br/>
          <br/>
          The Lower Mainland of BC is known for its unpredictable weather, making a patio cover essential for those who enjoy spending time outside. With a patio cover, you can enjoy your outdoor space without having to worry about rain, wind, or excessive sunlight. Our patio covers are designed to provide superior protection while complementing the style and architecture of your home.
          <br/>
          <br/>
          At Budget Aluminium and Allied World Ltd, we offer a wide range of patio cover options to suit your specific needs and budget. From traditional aluminum covers to modern,  designs, we have a solution for every taste and style. Our experienced and knowledgeable team will work with you to create a custom patio cover that meets your specific requirements and exceeds your expectations.
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
    <Wrapper className="container flexSpaceCenter sectionpatio2">
    <LeftSide className="flexCenter">
             
             <ImageWrapper2>
               <Img className="radius8" src={HeaderImage} alt="office" style={{zIndex: 9, width:"500px"}} />
              
                 
               <DotsWrapper2>
                 <Dots />
               </DotsWrapper2>
             </ImageWrapper2>
             <GreyDiv className="lightBg"></GreyDiv>
           </LeftSide>
           
      <RightSide >
        <div>
          
          <HeaderP className="font13 semiBold">
          
          We use only the highest-quality materials, including aluminum, Tempered Glass, and UV-resistant materials, to ensure that your patio cover is both durable and beautiful. Our team of professionals will install your patio cover with precision and care, ensuring that it is properly secured and that you can enjoy your outdoor living space for years to come.
          <br/>
          <br/>
          In addition to patio covers, we also offer additional outdoor living solutions, including Sun Room, Railings, Pergolas, Renovations and more. Let us help you transform your outdoor space into a luxurious and functional living area that you can enjoy year-round.
          <br/>
          <br/>
          Contact us today to learn more about our patio cover options and to schedule a consultation with one of our experts. We look forward to helping you create the outdoor living space of your dreams in the Lower Mainland of BC!
          </HeaderP>
          
        </div>
      </RightSide>
    </Wrapper>
    <div className="gallery-container patiogallery">
      <h2 className='galleryheading'>Patio Cover, Awnings</h2>
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



export default PatioCovers;

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
const BtnWrapper = styled.div`
  max-width: 190px;
  @media (max-width: 960px) {
    margin: 0 auto;
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

const ImageWrapper2 = styled.div`
  display: flex;
  justify-content: flex-start;
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
const QuoteWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 50px;
  max-width: 330px;
  padding: 30px;
  z-index: 99;
  @media (max-width: 960px) {
    left: 20px;
  }
  @media (max-width: 560px) {
    bottom: -50px;
  }
`;
const QuotesWrapper = styled.div`
  position: absolute;
  left: -20px;
  top: -10px;
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

const DotsWrapper2 = styled.div`
  position: absolute;
  left: -100px;
  bottom: 100px;
  z-index: 2;
  @media (max-width: 960px) {
    right: 100px;
  }
  @media (max-width: 560px) {
    display: none;
  }
`;
