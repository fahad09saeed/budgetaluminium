import React from 'react';
import styled from "styled-components";
// Sections
import TopNavbar from "../Nav/TopNavbar";
import Header from "./Header";
import Footer from "./Footer";
import '../../style.css';
import HeaderImage from "../../assets/img/sunroom1.webp";
import g1 from "../../assets/img/sunroom2.webp";
import g2 from "../../assets/img/sunroom3.webp";
import g3 from "../../assets/img/sunroom4.webp";
import g4 from "../../assets/img/sunroom5.webp";
import Dots from "../../assets/svg/Dots";
const images = [
  { id: 1, src: g1, alt: "Image 1" },
  { id: 2, src: g2, alt: "Image 2" },
  { id: 3, src: g3, alt: "Image 3" },
  { id: 4, src: g4, alt: "Image 4" },
];

const Sunrooms = () => {
  return (
    <>
    <TopNavbar />
    
          <Wrapper  className="container flexSpaceCenter">
      <LeftSide className="flexCenter">
        <div>
          <h1 className="extraBold font60">Sun Room & Solarium</h1>
          <HeaderP className="font13 semiBold">
          Convert your deck / patio into Sunroom. Enjoying your morning coffee in your sunroom or hosting a party in winter outdoor or grow your tropical plants. Get the feeling of being at one with nature, no matter the weather and find the peace and comfort that your backyard brings all year long.  Enjoy a new lifestyle!.. More Family time..,,  BBQ,   Breakfast room  Reading space  Garden sanctuary Hot-tub or deck enclosure  Home gym  Entertaining  Kids Play room  Party Room..  Call us to book a onsite free Estimate.  604 783 8356
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
        {images.map(image => (
          <img key={image.id} src={image.src} alt={image.alt} className="gallery-img" />
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};



export default Sunrooms;

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
