import React,{useEffect} from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import heroImg from "./assets/liquid-cheese.svg";
import clientArray from "./constants";
import "../src/App.css"
function App() {



  useEffect(() => {
    fetch("http://choice-uat.synofin.tech:8082/supply-chain/v1/get-theme")
    .then((response) => response.json())
    .then((data) => {

        clientArray.map((obj)=>{
          if(obj.themeClass == data.data[0].themeClass){
            document.body.setAttribute("data-theme", obj.primaryColor)
          }
        })
        //  if(obj.themeClass == "csl"){
        //    document.body.setAttribute("data-theme", "dark-theme")
        //  }
   
    });
  }, [])
  
  return (
    <Container className="content-container">
      <Row className="justify-content-center">
        <Col xs="6" className="hero-section-headings">
          <h1 className="hearo-section-title">Theming System</h1>
          <p className="hero-section-desc">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <Row className="justify-content-center">
            <h5 className="select-theme-heading">Select a Theme from below</h5>
            <Col className="select-theme-div">
              <Button
                id="hero-btn1"
                variant="primary"
                onClick={() =>
                  document.body.setAttribute("data-theme", "light-theme")
                }
              >
                Light
              </Button>
              <Button
                id="hero-btn2"
                variant="secondary"
                onClick={() =>
                  document.body.setAttribute("data-theme", "dark-theme")
                }
              >
                Dark
              </Button>
              <Button
                id="hero-btn3"
                variant="success"
                onClick={() =>
                  document.body.setAttribute("data-theme", "sea-theme")
                }
              >
                Sea Wave
              </Button>
              <Button
                id="hero-btn4"
                variant="success"
                onClick={() =>
                  document.body.setAttribute("data-theme", "sharp-theme")
                }
              >
                Sharp
              </Button>
            </Col>
          </Row>
        </Col>
        <Col xs="6">
          {/* <img className="heroImg" src={heroImg} /> */}
        </Col>
      </Row>
    </Container>
  );
}
export default App;