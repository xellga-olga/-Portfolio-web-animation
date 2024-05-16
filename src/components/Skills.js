import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skills" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.<br></br>Lorem Ipsum has been the industry's standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book.
              </p>
              <Carousel
                className="skills-slider"
                responsive={responsive}
                infinite={true}
              >
                <div className="item">
                  <img src={meter1} alt="Image1" />
                  <h5>Lorem</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image2" />
                  <h5>Lorem</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image3" />
                  <h5>Lorem</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
