import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Assets
import LogoImg from "../../assets/img/logo.png";
import fb from "../../assets/img/fb.png";
import linkedin from "../../assets/img/linkedin.png";
import insta from "../../assets/img/insta.png";
import yelp from "../../assets/img/yelp.png";
import Chatbot from "../Chatbot";
export default function Contact() {

  const getCurrentYear = () => {
    return new Date().getFullYear();
  }

  return (
    <Wrapper>
      <div className="darkBg">
        <div className="container">
          <InnerWrapper className="flexSpaceCenter" style={{ padding: "30px 0" }}>
            <Link className="flexCenter animate pointer" to="home" smooth={true} offset={-80}>
              <img src={LogoImg} style={{width:"200px"}}/>
             
            </Link>
            <StyleP className="whiteColor font13">
              © {getCurrentYear()} - <span className="purpleColor font13">Budget Aluminium</span> All Right Reserved
            </StyleP>
            <div className="socialfooter">
            <a href="https://www.facebook.com/110798884177031" target="_blank"><img src={fb}/></a>
            <a href="https://www.linkedin.com/company/budget-aluminium" target="_blank"><img src={linkedin}/></a>
            <a href="https://www.instagram.com/budget_aluminium" target="_blank"><img src={insta}/></a>
            <a href="https://www.yelp.com/biz/YuRbRaBuKqmNRRaCwl4mVw" target="_blank"><img src={yelp}/></a>
            <Link className="whiteColor animate pointer font13 btp"  to="home" smooth={true} offset={-80}>
              Back to top
            </Link>
            </div>
            <Chatbot />
          </InnerWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const InnerWrapper = styled.div`
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;
const StyleP = styled.p`
  @media (max-width: 550px) {
    margin: 20px 0;
  }
`;