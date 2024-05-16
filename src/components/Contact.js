import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../assets/img/contactImg.svg";

export const Contact = () => {
  const formInitialDetails = {
    firsName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
   e.preventDefault();
   setButtonText('Sending...');
   let response = await fetch('http:localhost:5000/contacts', {
      method:"POST",
      headers:{
         "Content-Type":"Aplication/json;charset=utf-8"
      },
      body:JSON.stringify(formDetails)
   });
   setButtonText("Send")
   let result = response.json();
   setFormDetails(formInitialDetails);
   if(result.code === 200) {
      setStatus({
         success: true, message:'Message sent successfully'
      })
   } else {
      setStatus({
         success: false, message:'Something went wrong, please try again later.'
      })
   }
  }

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-atems-center">
          <Col md={6}>
            <img src={contactImg} alt="Contact" />
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    placeholder="First Name"
                    value={formDetails.firsName}
                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={formDetails.lastName}
                    onChange={(e) => onFormUpdate("lastName", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={formDetails.email}
                    onChange={(e) =>
                      onFormUpdate("emailAddress", e.target.value)
                    }
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="phone"
                    placeholder="Phone No."
                    value={formDetails.phone}
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                  />
                </Col>
                <Col>
                  <textarea
                    row="6"
                    placeholder="Message"
                    value={formDetails.message}
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                  />
                  <button type="submit"><span>{buttonText}</span></button>
                </Col>
                {
                  status.message &&
                  <Col>
                  <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                  </Col>
                }
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
