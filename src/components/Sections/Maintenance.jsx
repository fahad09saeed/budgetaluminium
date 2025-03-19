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

const Maintenance = () => {
  return (
    <>
    <TopNavbar />
    
          <Wrapper  className="container flexSpaceCenter">
      <LeftSide className="flexCenter">
        <div>
          <h1 className="extraBold font60">Maintenance and Care</h1>
          <HeaderP className="font13 semiBold">
          Whether it is a patio cover, Railings, Deck, Gates, Renovations, Repairs or Sunroom – you have purchased a best quality Budget Aluminium product that will give you many years of service and enjoyment. As with any product that is exposed to the outdoor elements, regular maintenance will keep your purchase looking and functioning at a level that will continue to provide a source of pride of ownership.
          <br/>
          <br/>
          <strong>A couple of notes on safety:</strong>
          <br/>
          <br/>
          Always employ a qualified technician if you are adding or modifying electrical devices associated with your purchases, other types of repair or renovations.

Let a professional do any work required on the roof. Our team will definitely be the best source of this help. While many products are capable of holding the weight of an individual some are not. Also, metal and/or glass roofs are very slippery when wet or iced over.
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
          <h1 className="extraBold font60">Cleaning tips & cautions:</h1>
          <strong>ALUMINUM Paint Finish Cleaning</strong>
          <br/>
          <br/>
          In addition to their enduring good looks, Budget Aluminium aluminum products are easy to maintain. Airborne pollutants, however, such as emissions from autos can cause an acidic build-up on any baked enamel product surface. This can easily be removed by periodic cleaning with any household detergent. Simply mix a few teaspoons of automotive car wash liquid in a bottle or hose sprayer and apply liberally to all exposed surfaces, then rinse freely.
          <br/>
          <br/>
          <strong>CAUTION: DO NOT USE ABRASIVE OR SOLVENT-TYPE MATERIALS OR PAINT REMOVER. THOSE MATERIALS MAY SOFTEN OR REMOVE YOUR BAKED ENAMEL FINISH.</strong>
          <br/>
          <br/>
          <strong>To Remove Mildew</strong>
          <br/>
          Black spots on the surface of your aluminum product may be caused by mildew. Watch carefully for it, especially on protected surfaces, such as beneath eaves or in patio enclosures. To eliminate mildew, prepare the following solution:
          <br/>
          <br/>
          1/3 cup detergent (example: Tide)
          <br/>
          2/3 cup tri-sodium phosphate (example: Soilax)
          <br/>
          3 quarts of water
          <br/>
          1 quart 5% sodium hypochlorite (example: Clorox)
          <br/>
          Mix ingredients together and apply with sponge or cloth to mildewed areas. Wear protective gloves and avoid skin contact.
          <br/>
          <br/>
          <strong>CAUTION: GREATER CONCENTRATIONS MAY CAUSE DAMAGE TO THE ALUMINUM FINISH. AVOID SKIN CONTACT. FOLLOW INSTRUCTIONS FOR CLEANING AND RINSING GIVEN ABOVE.</strong>
          </HeaderP>
          
        </div>
      </RightSide>
    </Wrapper>

    <Wrapper  className="container flexSpaceCenter">
      <LeftSide className="flexCenter">
        <div>
          <h1 className="extraBold font60">GLASS Cleaning</h1>
          <HeaderP className="font13 semiBold">
          Wash the glass in your sunroom or conservatory with warm water and a mild detergent. A commercially available glass cleaner (Windex, etc.) will work as well. Avoid using abrasive cleaners that may scratch or otherwise damage the glass surface. Do not use razor blades to scrape the glass surface. Do not use solvents or other harsh chemicals on any part of your sunroom or conservatory.
          <br/>
          <br/>
          <strong>CAUTION: DO NOT WALK ON GLASS ROOFS. SERIOUS INJURY COULD RESULT! DO NOT WASH YOUR SUNROOM, PATIO ROOM OR CONSERVATORY WITH A POWER OR PRESSURE WASHER.</strong>
          <br/>
          <br/>
          <strong>ACRYLIC Skylights and Roof Panel Cleaning</strong>
          <br/>
          <br/>
          Use warm water and a mild detergent if necessary. If using a detergent rinse with plenty of water.
          <br/>
          <br/>
          <strong>CAUTION: DO NOT USE COMMERCIAL GLASS CLEANERS (EG: WINDEX) TO CLEAN ACRYLIC SKYLIGHTS AND ROOF PANELS. THESE PRODUCTS WILL PERMANENTLY DAMAGE THE ACRYLIC.</strong>
          <br/>
          <br/>
          <strong>CAUTION: DO NOT WALK ON ACRYLIC ROOFS. SERIOUS INJURY COULD RESULT!</strong>
          <br/>
          <br/>
          <strong>GUTTER Cleaning</strong>
          <br/>
          Just as your house gutters require regular cleaning so do the gutters on your new Budget Aluminium roof. You can use the same approach to cleaning them as you do on your regular house gutters.
          <br/>
          <br/>
          If you have purchased a Budget Aluminium sunroom or solarium which you intend to heat in the winter and live in a location that experiences very cold winters we highly recommend that you have heat strips installed in your gutters. A qualified electrician will be able to do this for you.
          <br/>
          <br/>
          <strong>INSECT SCREEN Care and Cleaning</strong>
          <br/>
          
          We recommend you remove your insect screens during the colder parts of the year. They can be cleaned with soapy water and a garden hose in the spring.
          <br/>
          <br/>
          Under no circumstances should you use strong solvents such as thinners or solutions containing chlorinated hydrocarbons, esters or ketones. Similarly, never use abrasive cleaners or cutting compounds. 
          <br/>
          <br/>
          <strong>RECOMMENDED CLEANING SCHEDULES </strong>
          <br/>
          Non-Aggressive Environments- Clean and inspect once a year Tropical Environments- Clean and inspect every 6 months Chlorinated Swimming Pools- Clean and inspect every 3 months Coastal Environments- Clean and inspect every 3 months Industrial Environments- Clean and inspect every 3 months Aggressive/ Hazardous Environments (Active Job Sites)- Clean and inspect every month 
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

    <Footer/>
    </>
  );
};



export default Maintenance;

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
