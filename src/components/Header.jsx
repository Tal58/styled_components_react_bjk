import Button from "../styles/Button.styled";
import Flex from "../styles/Flex.styled";
import StyledHeader, { Image, Logo, Nav, HeaderContext,Buttons } from "../styles/Header.styled";

function Header() {
  return (
    <StyledHeader>
      <Nav>
        <Logo src="./images/BjkLogo.png" />
        <Buttons>
          <Button color="#A62440">Join to Team</Button>
          <Button bg="#A62440">Talk to players</Button>
        </Buttons>
      </Nav>

      <Flex>
        <HeaderContext>
            <h1> PLAY WITH HONOUR!</h1>
            <p> We hold moral values and human virtues, integrity and justice being first, above anything else. We pay special attention to upholding the dignity of our club stemming from its glorious past. We know we have to be worthy of values represented by our team colors and the crescent & the star in our emblem.</p>
            <Button bg="#A62440">Start Your New Career</Button>
        </HeaderContext>
        <Image src="./images/q7.png" />
      </Flex>
    </StyledHeader>
  );
}

export default Header;
