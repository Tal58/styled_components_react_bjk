import React from "react";
import { Logo2 } from "../styles/Footer.styled";
import { Link } from "../styles/Footer.styled";
import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";
import { Icons } from "../styles/Footer.styled";
import { ComboLink } from "../styles/Footer.styled";
import { FooterDiv } from "../styles/Footer.styled";
import { FooterImg } from "../styles/Footer.styled";
import { CoveredDiv } from "../styles/Footer.styled";

function Footer() {
  return (
    <CoveredDiv>
      <FooterImg>
        <Logo2 src="./images/Logo2.png" />
      </FooterImg>

      <FooterDiv>
        <ComboLink>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>+3(125) 526 55 78</p>
          <p>contact@mihail.com</p>
        </ComboLink>
        <ComboLink>
          <Link to="#">About</Link>
          <Link to="#">What We Do</Link>
          <Link to="#">FAQ</Link>
        </ComboLink>
        <ComboLink>
          <Link to="#">Career</Link>
          <Link to="#">Blog</Link>
          <Link to="#">Contact Us</Link>
        </ComboLink>
        <Icons>
          <p>
            <BsTwitter />
          </p>
          <p>
            <BsFacebook />
          </p>
          <p>
            <ImLinkedin />
          </p>
        </Icons>
      </FooterDiv>
    </CoveredDiv>
  );
}

export default Footer;
