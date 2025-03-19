import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Assets
import CloseIcon from "../../assets/svg/CloseIcon";
import LogoIcon from "../../assets/svg/Logo";

export default function Sidebar({ sidebarOpen, toggleSidebar }) {
  return (
    <Wrapper className="animate darkBg" sidebarOpen={sidebarOpen}>
      <SidebarHeader className="flexSpaceCenter">
        
        <CloseBtn onClick={() => toggleSidebar(!sidebarOpen)} className="animate pointer">
          <CloseIcon />
        </CloseBtn>
      </SidebarHeader>

      <UlStyle className="flexNullCenter flexColumn">
        <li className="semiBold font15 pointer">
        <a  style={{ padding: "10px 15px" }} href="/"   offset={-80}
        onClick={() => toggleSidebar(!sidebarOpen)}
        activeClass="active"
        className="whiteColor"
       
        >
                Home
              </a>
          
        </li>
        <li className="semiBold font15 pointer">
        <a href="/patio-covers" 
        onClick={() => toggleSidebar(!sidebarOpen)}
        activeClass="active"
        className="whiteColor"
        style={{ padding: "10px 15px" }}
        >
                Patio Covers
              </a>

          
        </li>
        <li className="semiBold font15 pointer">
        <a  href="/sun-rooms" offset={-80}
         onClick={() => toggleSidebar(!sidebarOpen)}
         activeClass="active"
         className="whiteColor"
         style={{ padding: "10px 15px" }}
        >
                SunRooms
              </a>
          
        </li>
        {/* <li className="semiBold font15 pointer">
        <a  href="/sleek-fence"
         onClick={() => toggleSidebar(!sidebarOpen)}
         activeClass="active"
         className="whiteColor"
         style={{ padding: "10px 15px" }}
         >
                Sleek Fence
              </a>
         
        </li> */}
        <li className="semiBold font15 pointer">
        <a href="/home-renovation"
        onClick={() => toggleSidebar(!sidebarOpen)}
        activeClass="active"
        className="whiteColor"
        style={{ padding: "10px 15px" }}
        >
                Home Renovation
              </a>
         
        </li>
        <li className="semiBold font15 pointer">
        <a href="/rallings-fence-gates"  
         onClick={() => toggleSidebar(!sidebarOpen)}
         activeClass="active"
         className="whiteColor"
         style={{ padding: "10px 15px" }}
        >
                Ralling, Fence & Gates
              </a>
         
        </li>

        <li className="semiBold font15 pointer">
        <a href="/book-appointment"  
         onClick={() => toggleSidebar(!sidebarOpen)}
         activeClass="active"
         className="whiteColor"
         style={{ padding: "10px 15px" }}
        >
                Book Appointment
              </a>
         
        </li>
      </UlStyle>
     
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  width: 400px;
  height: 100vh;
  position: fixed;
  top: 0;
  padding: 0 30px;
  right: ${(props) => (props.sidebarOpen ? "0px" : "-400px")};
  z-index: 9999;
  @media (max-width: 400px) {
    width: 100%;
  }
`;
const SidebarHeader = styled.div`
  padding: 20px 0;
`;
const CloseBtn = styled.button`
  border: 0px;
  outline: none;
  background-color: transparent;
  padding: 10px;
`;
const UlStyle = styled.ul`
  padding: 40px;
  li {
    margin: 20px 0;
  }
`;
