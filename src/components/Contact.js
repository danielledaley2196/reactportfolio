import React from "react";
import Card from "react-bootstrap/Card";

const Contact = () => {
  return (
    <Card>
      <Card.Title>Contact</Card.Title>
      <br />
      <Card.Link href="https://github.com/danielledaley2196">GitHub</Card.Link>
      <br />
      <br />
      <Card.Link href="https://www.linkedin.com/in/danielledaley2196/">
        Linkedin
      </Card.Link>
      <Card.Text>Email: danielledaley2196@gmail.com</Card.Text>
    </Card>
  );
};

export default Contact;
