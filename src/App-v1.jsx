import styled from "styled-components";
import GlobalStyles from "./styles/GobalStyles";
import Button from "./ui/Button";
import Heading from "./ui/Heading";
import Input from "./ui/Input";
import Row from "./ui/Row";

const StyledApp = styled.div`
  /* background-color: orangered; */
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row >
          <Row type="horizontal">
            <Heading as="h1">The Wield Oasis</Heading>
            <div>
              <Heading as="h2">Check in and out</Heading>
              <Button variation="primary" size="medium" onClick={() => alert("Check in")}>check in</Button>
              <Button variation="secondary" size="small" onClick={() => alert("Check out")}>check out</Button>
            </div>
          </Row>
          <Row type="vertical">
            <Heading as="h3">form</Heading>
            <form>
              <Input type="number" placeholder="Number of guest" />
              <Input type="number" placeholder="Number of guest" />
            </form>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
