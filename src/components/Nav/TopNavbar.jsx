import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Components
import Sidebar from "../Nav/Sidebar";
import Backdrop from "../Elements/Backdrop";
// Assets
import LogoIcon from "../../assets/img/logo.webp";
import BurgerIcon from "../../assets/svg/BurgerIcon";

export default function TopNavbar() {
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);


  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <Wrapper className="flexCenter animate whiteBg" style={y > 100 ? { height: "40px" } : { height: "60px" }}>
        <NavInner className="container flexSpaceCenter">
          <Link className="pointer flexNullCenter" to="home" smooth={true}>
          
          <img className="homelogo" src={LogoIcon} alt="logo"  style={{ height: "40px" }}/>
          

          </Link>
          <BurderWrapper className="pointer" onClick={() => toggleSidebar(!sidebarOpen)}>
            <BurgerIcon />
          </BurderWrapper>
          <UlWrapper className="flexNullCenter">
            <li className="semiBold font15 pointer">
              <a className="active" style={{ padding: "10px 15px" }} href="/"   offset={-80}>
                Home
              </a>
            </li>
            {/* <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="services" spy={true} smooth={true} offset={-80}>
                Services
              </Link>
            </li> */}
            <li className="semiBold font15 pointer">
              <a className="active" style={{ padding: "10px 15px" }} href="/patio-covers" offset={-80}>
                PatioCovers
              </a>
            </li>
            <li className="semiBold font15 pointer">
              <a className="active" style={{ padding: "10px 15px" }} href="/sun-rooms" offset={-80}>
                SunRooms
              </a>
            </li>

            {/* <li className="semiBold font15 pointer">
              <a className="active" style={{ padding: "10px 15px" }} href="/sleek-fence" offset={-80}>
                Sleek Fence
              </a>
            </li> */}

            <li className="semiBold font15 pointer">
              <a className="active" style={{ padding: "10px 15px" }} href="/home-renovation"  offset={-80}>
                Home Renovation
              </a>
            </li>

            <li className="semiBold font15 pointer">
              <a className="active" style={{ padding: "10px 15px" }} href="/rallings-fence-gates"  offset={-80}>
                Ralling, Fence & Gates
              </a>
            </li>
            {/* <li className="semiBold font15 pointer">
              <a activeClass="active" style={{ padding: "10px 15px" }} href="/sleek-fence" spy={true} smooth={true} offset={-80}>
                Sleek-Fence
              </a>
            </li> */}

            {/* <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="contact" spy={true} smooth={true} offset={-80}>
                Contact
              </Link>
            </li> */}
          </UlWrapper>
          {/* <UlWrapperRight className="flexNullCenter">
            <li className="semiBold font15 pointer">
              <a href="/" style={{ padding: "10px 30px 10px 0" }}>
                Log in
              </a>
            </li>
            <li className="semiBold font15 pointer flexCenter">
              <a href="/" className="radius8 lightBg" style={{ padding: "10px 15px" }}>
                Get Started
              </a>
            </li>
          </UlWrapperRight> */}
        </NavInner>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;
const NavInner = styled.div`
  position: relative;
  height: 100%;
`
const BurderWrapper = styled.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`;
const UlWrapper = styled.ul`
  display: flex;
  @media (max-width: 760px) {
    display: none;
  }
`;
const UlWrapperRight = styled.ul`
  @media (max-width: 760px) {
    display: none;
  }
`;


