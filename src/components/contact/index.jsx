import React, { useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import { FcContacts } from 'react-icons/fc';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import ScrollReveal from 'scrollreveal';

function Contact() {
  useEffect(() => {
    ScrollReveal().reveal('#contact', { delay: 1000 })
  }, [])


  return (
    <Container id="contact">
        <h1 className="fs-5"> <FcContacts /> Contact </h1>
        <h3> Check My Github: <Button variant="light" href="https://github.com/sophiecalixto" target="_blank">{<FaGithub/>}</Button></h3>
        <h3> Check My Linkedin: <Button variant="light" href="https://www.linkedin.com/in/sophiecalixto/" target="_blank">{<FaLinkedinIn/>}</Button></h3>
        <h3> Send me and Email: <Button variant="light" href="mailto:sophiecalixto2004@gmail.com" target="_blank">{<MdEmail/>}</Button></h3>
    </Container>
  )
}

export default Contact;