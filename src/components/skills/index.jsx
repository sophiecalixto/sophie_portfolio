import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import { Container, Badge } from 'react-bootstrap';
import { FaHtml5, FaJs, FaReact, FaBootstrap, FaPython, FaVuejs } from "react-icons/fa";
import { SiTailwindcss, SiRedux, SiReduxsaga, SiMaterialui, SiTypescript } from 'react-icons/si';
import { FcSettings } from "react-icons/fc";

function Skills() {
    useEffect(() => {
        ScrollReveal().reveal('#skills', { delay: 1000 })
      }, [])

    return (
        <Container id="skills">
            <h1 className="fs-5"> <FcSettings/> Skills </h1>
            <h3>
                <Badge bg="light" text="dark">
                    My Skills:
                </Badge>{' '}
                <Badge bg="secondary">HTML 5 <FaHtml5 /></Badge>{' '}
                <Badge bg="secondary">JavaScript <FaJs /></Badge>{' '}
                <Badge bg="secondary">React <FaReact /></Badge>{' '}
                <Badge bg="secondary">Bootstrap <FaBootstrap /></Badge>{' '}
                <Badge bg="secondary">TailWind <SiTailwindcss /></Badge>{' '}
                <Badge bg="secondary">Material UI <SiMaterialui /></Badge>{' '}
                <Badge bg="secondary">Redux <SiRedux /> and Redux Saga <SiReduxsaga /></Badge>{' '}
                <Badge bg="secondary">Typescript <SiTypescript /></Badge>{' '}
            </h3>
            <h3>
                <Badge bg="light" text="dark">
                    Learning:
                </Badge>{' '}
                <Badge bg="secondary">Python 3 <FaPython /> </Badge>{' '}
                <Badge bg="secondary">React Native <FaReact /> </Badge>{' '}
                <Badge bg="secondary">Vue.js <FaVuejs /> </Badge>{' '}
            </h3>
        </Container>
    )
}

export default Skills;