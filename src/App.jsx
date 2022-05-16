import React, { useEffect } from "react";
import { ContainerStyled } from "./style";
import NavComponent from "./components/navbar";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";
import ScrollReveal from "scrollreveal";
import GlobalStyle from "./global/globalStyle";

function App() {
  useEffect(() => {
    ScrollReveal().reveal('.image', { delay: 700 })
    ScrollReveal().reveal('.about', { delay: 1000 })
  }, [])


  return (
    <>
      <GlobalStyle />
      <ContainerStyled className="bg-dark container-fluid">
        <NavComponent />
        <section id="home">
          <div className="image">
            <img src={require('./images/profile.jpg')} alt="profile-image" className="profileimg" />
          </div>
          <br></br>
          <div className="about">
            <h1> Hello 👋</h1>
            <h2> I'm <i>Sophie Calixto</i></h2>
            <h3> Front-end Developer </h3>
          </div>
        </section>
        <br></br>
        <br></br>
        <Skills />
        <br></br>
        <br></br>
        <Projects />
        <br></br>
        <br></br>
        <Contact />
        <footer>
          <h2>Page by: Sophie Calixto</h2>
        </footer>
      </ContainerStyled>
    </>
  );
}

export default App;
