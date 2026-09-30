/* eslint-disable no-unused-vars */

import React from 'react';
import styled from "styled-components";
// Sections
import TopNavbar from "../Nav/TopNavbar";
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
import benefit from "../../assets/img/benefit.webp";
import specification from "../../assets/img/specification.webp";
import doorawning from "../../assets/img/doorawning.webp";
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
import g26 from "../../assets/img/gallery/gallery1.jpg";
import g27 from "../../assets/img/gallery/gallery2.jpg";
import g28 from "../../assets/img/gallery/gallery3.jpg";
import g29 from "../../assets/img/gallery/gallery4.jpg";
import g30 from "../../assets/img/gallery/gallery6.jpg";
import g31 from "../../assets/img/gallery/gallery7.jpg";
import g32 from "../../assets/img/gallery/gallery13.jpg";
import g33 from "../../assets/img/gallery/g16.jpg";
import g34 from "../../assets/img/gallery/g18.jpg";
import g35 from "../../assets/img/gallery/g19.jpg";
import g36 from "../../assets/img/gallery/g20.jpg";
import g37 from "../../assets/img/gallery/g23.jpg";
import g38 from "../../assets/img/gallery/g24.jpg";
import g39 from "../../assets/img/gallery/g25.jpg";
import g40 from "../../assets/img/gallery/g26.jpg";
import g41 from "../../assets/img/gallery/g30.jpg";
import g42 from "../../assets/img/gallery/g31.jpg";
import g43 from "../../assets/img/gallery/g32.jpg";
import g44 from "../../assets/img/gallery/g36.jpg";
import g45 from "../../assets/img/gallery/g42.jpg";
import g46 from "../../assets/img/gallery/g43.jpg";
import g47 from "../../assets/img/gallery/g44.jpg";
import g48 from "../../assets/img/gallery/g45.jpg";
import g49 from "../../assets/img/gallery/g49.jpg";
import g50 from "../../assets/img/gallery/g50.jpg";
import g51 from "../../assets/img/gallery/g51.jpg";
import g52 from "../../assets/img/gallery/g52.jpg";
import g53 from "../../assets/img/gallery/g53.jpg";
import g54 from "../../assets/img/gallery/g54.jpg";
import g55 from "../../assets/img/gallery/g62.jpg";

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
  { id: 26, src: g26, alt: "Image 25" },
  { id: 27, src: g27, alt: "Image 25" },
  { id: 28, src: g28, alt: "Image 25" },
  { id: 29, src: g29, alt: "Image 25" },
  { id: 30, src: g30, alt: "Image 25" },
  { id: 31, src: g31, alt: "Image 25" },
  { id: 32, src: g32, alt: "Image 25" },
  { id: 33, src: g33, alt: "Image 25" },
  { id: 34, src: g34, alt: "Image 25" },
  { id: 35, src: g35, alt: "Image 25" },
  { id: 36, src: g36, alt: "Image 25" },
  { id: 37, src: g37, alt: "Image 25" },
  { id: 38, src: g38, alt: "Image 25" },
  { id: 39, src: g39, alt: "Image 25" },
  { id: 40, src: g40, alt: "Image 25" },
  { id: 41, src: g41, alt: "Image 25" },
  { id: 42, src: g42, alt: "Image 25" },
  { id: 43, src: g43, alt: "Image 25" },
  { id: 44, src: g44, alt: "Image 25" },
  { id: 45, src: g45, alt: "Image 25" },
  { id: 46, src: g46, alt: "Image 25" },
  { id: 47, src: g47, alt: "Image 25" },
  { id: 48, src: g48, alt: "Image 25" },
  { id: 49, src: g49, alt: "Image 25" },
  { id: 50, src: g50, alt: "Image 25" },
  { id: 51, src: g51, alt: "Image 25" },
  { id: 52, src: g52, alt: "Image 25" },
  { id: 53, src: g53, alt: "Image 25" },
  { id: 54, src: g54, alt: "Image 25" },
  { id: 55, src: g55, alt: "Image 25" },
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
    
    <div className="gallery-container patiogallery container">
      <h2 className='galleryheading'>Patio Cover, Awnings</h2>
      <Container>
      <Column>
        <Image src={benefit} alt="Placeholder" />
        <Heading>Benefits</Heading>
        <Text>Backyards are becoming more like outdoor living spaces with patio furniture, BBQ, fireplaces.. One great addition to put the finishing touch on your outdoor living space is a patio cover.
          
          
        </Text>
        <br/>
        <ul class="patiobenefit">
            <li>Extra Added Living Space</li>
            <li>Great for Outdoor Entertaining</li>
            <li>Bring you closer to nature</li>
            <li>Custom Designed Aluminum /Glass/Polycarbonate/ Acrylic Awnings</li>
            <li>Patio Covers/ Carports / Railings</li>
            <li>Professional Installation Services</li>
          </ul>
          <br/>
          <Text>If you choose to sell your home, a quality and stylish patio cover will add great value.</Text>
      </Column>

      <Column>
        <Image src={specification} alt="Placeholder" />
        <Heading>Specification</Heading>
        <Text>
          <ul className='patiobenefit'>
            <li>Custom Aluminum W-panels </li>
            <li>Tempered  glass (clear or tinted) </li>
            <li>Poly-carbonate multi-layered Sheet</li>
            <li>Acrylic Multi layer Sheet</li>
            <li>Insulated Panel</li>
            <li>Customized to meet size and style</li>
          </ul>
        </Text>
      </Column>

      <Column>
        <Image src={doorawning} alt="Placeholder" />
        <Heading>Window / Door AWNINGS</Heading>
        <Text>
          <ul className='patiobenefit'>
            <li>Durable Polycarbonate Panels</li>
            <li>Long Life Span</li>
            <li>Perfect Over Doors and/or Windows</li>
            <li>Available in a 2' or 3' Projection</li>
          </ul>
        </Text>
      </Column>
    </Container>
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

const Container = styled.div`
  display: flex;

  justify-content: space-between;
  gap: 20px;
  padding: 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Column = styled.div`
  flex: 1;
  text-align: center;
  padding: 20px;
  border-radius: 10px;
  background: #f9f9f9;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 300px;
`;

const Image = styled.img`
  width: 100%;
  max-width: 100px;
  height: auto;
  margin-bottom: 10px;
`;

const Heading = styled.h3`
  font-size: 20px;
  color: #333;
  margin-bottom: 10px;
`;

const Text = styled.p`
  font-size: 16px;
  color: #666;
`;

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
