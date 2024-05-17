import { Col, Container, Row } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import Logo from "../assets/img/logo.svg";
import navbar1 from "../assets/img/navbar-1.svg";
import navbar2 from "../assets/img/navbar-2.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <MailchimpForm />
          <Col sm={6}>
            <img alt="Logo" src={Logo} />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.facebook.com/">
                <img alt="facebook" src={navbar1} />
              </a>
              <a href="https://www.instagram.com/">
                <img alt="instagram" src={navbar2} />
              </a>
            </div>
            <p>CopyRight 2024. All Right Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
