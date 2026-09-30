/* eslint-disable no-unused-vars */

import React from "react";
import styled from "styled-components";
// Components
import FullButton from "../Buttons/FullButton";
// Assets
import Dots from "../../assets/svg/Dots";
import Vimeo from "@u-wave/react-vimeo"
export default function Header() {
  return (
    <Wrapper id="home" className="container flexSpaceCenter">
      <LeftSide className="flexCenter">
        <div>
          <h1 className="extraBold font60">Patio Cover, Railings, Fence, Deck</h1>
          <HeaderP className="font13 semiBold">
          Our past projects include both new construction and repairs/restorations. Most job done in one day. And we can also plan, manage, and build multi-phase jobs. 
          We specialized in Patio Cover - Full Glass or mix, Railings, Aluminium fence, Gates - remote control and Manual, wood deck, stairs, and more...
          </HeaderP>
          <BtnWrapper>
            <FullButton title="Get Started" />
          </BtnWrapper>
          
        </div>
      </LeftSide>
      <RightSide>
             
        <ImageWrapper>
          {/* <Img className="radius8" src={HeaderImage} alt="office" style={{zIndex: 9}} /> */}
          {/* <VideoContainer className="radius8"  style={{zIndex: 9}}> */}
        <Vimeo
          background={false}
          style={{zIndex: 9, position: "relative", width: "550px"}}
          loop={true}
          responsive
          video="https://vimeo.com/799226493/3439853f00"
          className="radius8"
        />
    
          <DotsWrapper>
            <Dots />
          </DotsWrapper>
        </ImageWrapper>
        <GreyDiv className="lightBg"></GreyDiv>
      </RightSide>
    </Wrapper>
  );
}


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


