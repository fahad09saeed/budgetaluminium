import React from 'react';
import styled from "styled-components";
// Sections
import TopNavbar from "../Nav/TopNavbar";
import Footer from "./Footer";
import '../../style.css';
import HeaderImage from "../../assets/img/windows.webp";
import g1 from "../../assets/img/awning2.webp";
import g2 from "../../assets/img/awning1.webp";
import g3 from "../../assets/img/awning3.webp";
import g4 from "../../assets/img/awning4.webp";
import Dots from "../../assets/svg/Dots";


// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';




const images = [
  { id: 1, src: g1, alt: "Image 1" },
  { id: 2, src: g2, alt: "Image 2" },
  { id: 3, src: g3, alt: "Image 3" },
  { id: 4, src: g4, alt: "Image 4" },
];


const Warranty = () => {
  return (
    <>
    <TopNavbar />
    
          <Wrapper  className="container flexSpaceCenter">
      <LeftSide className="flexCenter">
        <div>
          <h1 className="extraBold font60">Warranty and Liability</h1>
          <HeaderP className="font13 semiBold">
          10 year  warranty for Acrylite acrylic products, all others 5 years warranty for the materials and 1 year labor warranty. 
          <br/>
          <br/>
          The warranty period begins from the date of installation.  

If the buyer was not present during installation, and has not expressed concerns within two (2) days from the installation date, warranty period will begin at the installation date.

For acrylic patio covers, the following warranties also apply:  

10 years for replacement parts for damage caused by hail and 30 years for replacement parts due to panel discolouration.   Labour is not included. Refer to the Acrylite acrylic manufacturer’s specific warranty for details. Final decision for warranty by Acrylite. 
          <br/>
          <br/>
          Please note that our warranties do not cover failure due to any repairs or modifications to the product after purchase, accidental damage, abuse, misuse, or normal wear and tear, including: fading, scratched or chipped finishes, weathering under normal weather conditions, staining or discoloration. The limited warranties described above are extended to the original purchaser of the product only.
<br/>
<br/>
Budget Aluminium warrants its products to be free from manufacturing defects to the original purchaser with proof of purchase; the maximum liability is the product purchase price. Proper maintenance, including routine cleaning (deck,  gutter, patio cover, railings), staining or weather guard protection (painting, staining, etc..) for wood structures is required to keep this warranty in effect.
<br/>
<br/>
<strong>Disclaimer:</strong>
<br/>
Please be aware that it is the customer's sole responsibility to ensure compliance with all local regulations, permits, and laws applicable to their purchase and use of our products/services. We strongly recommend that you consult with local authorities or a legal professional to determine the specific requirements in your area. Our company does not assume any responsibility for obtaining or maintaining necessary permits or for any legal issues that may arise from non-compliance.
<br/>
<br/>
<strong>Exclusions</strong>
<br/>
This warranty does not apply to damage resulting from improper maintenance, misuse, negligence, normal wear, abuse, accident, alteration or tampering. Repair or modification by anyone other than Budget Aluminium or an approved agent voids the warranty. 

Breakage caused by incorrect usage or malicious damage 

Negligence on behalf of the user 

Damage due to shifting of supporting structures, natural catastrophes or acts of God 

Alterations, repair or retrofitting not approved by Budget Aluminium

Patterning that may occur in or on the surface of tempered glass 

Adjustments, repair and replacement parts due to normal wear and tear (i.e. scuffs, scratches, etc.) 

Warranty voids the use of  strong solvents such as thinners or solutions containing chlorinated hydrocarbons, esters or ketones. Similarly, never use abrasive cleaners or cutting compounds. 
<br/>
<br/>
Liability is limited to product replacement only.
<br/>
<br/>
Pay shipping or transportation charges or pay to repair or replace the product, unless otherwise agreed upon in advance.
<br/>
<br/>
<strong>Material warranty </strong>
<br/>
<br/>
Material warranty does not cover the labour, transportation, shippping. Its limit to the replacement of the defective materials. Removal and reinstallation will be charged. 
<br/>
<br/>
<strong>
Labor Warranty
</strong>
<br/>
<br/>
Labor Warranty limits to the repair of the problems occured by installation defects. Any damage or repair required by alteration, addition or not proper maintance will be charged.This warranty includes labour to repair or replace defective materials
<br/>
<br/>
What You Must Do To Obtain Warranty Service: If you suspect a manufacturing defect, photos (digital preferred) of claimed products must be submitted to the attention of Budget Aluminium prior to any judgment regarding defective items, along with a written description of the defect and any related circumstances thought to have caused the defect. Please include a copy of your dated invoice, keeping the original invoice.
<br/>
<br/>
Under no circumstances should you use strong solvents such as thinners or solutions containing chlorinated hydrocarbons, esters or ketones. Similarly, never use abrasive cleaners or cutting compounds. 
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


    <Footer/>
    </>
  );
};



export default Warranty;

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

