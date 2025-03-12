import React from 'react';
import styled from "styled-components";
// Sections
import TopNavbar from "../Nav/TopNavbar";
import Header from "./Header";
import Footer from "./Footer";
import '../../style.css';
import HeaderImage from "../../assets/img/windows.webp";
import kitchen from "../../assets/img/kitchen.webp";
import g1 from "../../assets/img/awning2.webp";
import g2 from "../../assets/img/awning1.webp";
import g3 from "../../assets/img/awning3.webp";
import g4 from "../../assets/img/awning4.webp";
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

const HomeRenovation = () => {
  return (
    <>
    <TopNavbar />
    
          <Wrapper  className="container flexSpaceCenter">
      <LeftSide className="flexCenter">
        <div>
          <h1 className="extraBold font60">HOME RENOVATION</h1>
          <HeaderP className="font13 semiBold">
          Transform your home into a stunning and functional space with our expert home renovation services. Whether you're looking to upgrade your kitchen with modern finishes, enhance your washroom with elegant fixtures, or create a cozy and inviting basement, we bring your vision to life with precision and craftsmanship. Our team specializes in high-quality flooring installation, from hardwood to tiles, ensuring durability and style. We also design and build beautiful decks, perfect for outdoor relaxation and entertainment. With meticulous attention to detail, we make every corner of your home both stylish and practical.
          <br/>
          <br/>
          In addition to major renovations, we also focus on enhancing the finer details of your home. Our door replacement services improve both security and aesthetic appeal, while our professional painting services breathe new life into your interiors and exteriors. Whether you prefer bold, vibrant colors or subtle, elegant tones, we use premium-quality paints for a flawless finish. With our expertise, we ensure that your renovation project is seamless, stress-free, and exceeds your expectations. Let us help you create the home of your dreams with our comprehensive remodeling solutions.
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
          <h1 className="extraBold font60">WINDOWS & DOORS</h1>
          Enhance the beauty, security, and energy efficiency of your home with our premium windows and doors making services in Canada. We specialize in crafting high-quality, durable custom windows and doors designed to withstand Canada’s diverse climate while adding style and functionality to your space. Whether you need modern energy-efficient windows, strong and stylish entry doors, or custom patio doors, we offer a wide range of designs and materials to suit your preferences. Our expert craftsmanship ensures precision installation, superior insulation, and long-lasting performance. Trust us to transform your home with expertly crafted windows and doors that blend aesthetics, durability, and security seamlessly.
          <br/>
          <br/>
          </HeaderP>
          
        </div>
      </RightSide>
    </Wrapper>

    <Wrapper  className="container flexSpaceCenter">
      <LeftSide className="flexCenter">
        <div>
          <h1 className="extraBold font60">KITCHEN AND WASHROOMS</h1>
          <HeaderP className="font13 semiBold">
          Upgrade your home with our expert kitchen and washroom making services in Canada, designed to bring functionality, style, and comfort to your space. Whether you're looking for a modern, custom-designed kitchen with high-end cabinetry, countertops, and smart storage solutions or a luxurious washroom renovation featuring elegant fixtures, spa-like showers, and premium tiling, we deliver top-quality craftsmanship. Our team ensures seamless installation, durable materials, and innovative designs tailored to your needs. With a focus on aesthetics and practicality, we create stunning kitchens and washrooms that enhance your lifestyle and add lasting value to your home.
          </HeaderP>
          
        </div>
      </LeftSide>
      <RightSide>
             
        <ImageWrapper>
          <Img className="radius8" src={kitchen} alt="office" style={{zIndex: 9, width:"500px"}} />
         
            
          <DotsWrapper>
            <Dots />
          </DotsWrapper>
        </ImageWrapper>
        <GreyDiv className="lightBg"></GreyDiv>
      </RightSide>
   

    
      
    </Wrapper>
    <div className="gallery-container patiogallery">
      <h2 className='galleryheading'>Home Renovation Gallery</h2>
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



export default HomeRenovation;

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
