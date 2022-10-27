import Header from "./components/Header"
import {ThemeProvider} from "styled-components"
import { GlobalStyles } from "./styles/Global.styled";
import Footer from "./components/Footer";
import Container from "./components/Container";


const theme = {
  colors:{
    header:"#ffff",
    body:"#eee",
    footer: "#8A1C4A",
  },
  margins:{},
  responsive:"768px",
}
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
     <Header />
    <Container />
  <Footer />
    </ThemeProvider>
  );
};

export default App;
