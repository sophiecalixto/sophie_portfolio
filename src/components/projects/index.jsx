import React, { useEffect } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { FcIdea } from "react-icons/fc";
import { FaReact, FaGithub, FaBootstrap } from "react-icons/fa";
import ScrollReveal from 'scrollreveal';

function Projects() {

    useEffect(() => {
        ScrollReveal().reveal('#projects', { delay: 1000 })
      }, [])

    return (
        <Container id="projects">
            <h1 className="fs-5"> <FcIdea /> Projects </h1>
            <div className="row gap-3">
                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src="https://camo.githubusercontent.com/4f40d6dd0fb9a9e268509f8e8b6f40a09a8f77bb254a2bb022712363e808f636/68747470733a2f2f692e696d6775722e636f6d2f4d325a686c694e2e6a7067" />
                    <Card.Body>
                        <Card.Title className="text-dark">Waifu Shop</Card.Title>
                        <Card.Text className="text-dark">
                            React App and Redux <FaReact />
                        </Card.Text>
                        <Button variant="secondary" href="https://github.com/sophiecalixto/Waifu_Shop" target="_blank">{<FaGithub />} GitHub Repository</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src="https://camo.githubusercontent.com/2d93ede9e44ff8463deff9c4c2e10b9a0f39eb01afacdaf5943242fc5cafee48/68747470733a2f2f6763646e622e706272642e636f2f696d616765732f30416d4f44647742455162662e6a70673f6f3d31" />
                <Card.Body>
                    <Card.Title className="text-dark">React Auth JWT </Card.Title>
                    <Card.Text className="text-dark">
                        React App and Redux Toolkit <FaReact/>
                    </Card.Text>
                    <Button variant="secondary" href="https://github.com/sophiecalixto/React-JWT-Autentica-o" target="_blank">{<FaGithub/>} GitHub Repository</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src="https://camo.githubusercontent.com/4ffc6d459dbe00aa4d059c8cd3b7741388b78c0dc48cf3ed91381693dcdc7094/68747470733a2f2f6763646e622e706272642e636f2f696d616765732f55546e4a624d495a6c366b762e6a70673f6f3d31" />
                <Card.Body>
                    <Card.Title className="text-dark">Netflix Clone</Card.Title>
                    <Card.Text className="text-dark">
                        React App and Context API <FaReact/>
                    </Card.Text>
                    <Button variant="secondary" href="https://github.com/sophiecalixto/netflixclone" target="_blank">{<FaGithub/>} GitHub Repository</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src="https://camo.githubusercontent.com/81d17d7001dc1bed383216a89979dfb18ecf5b579f8a5bb9e625ba37db178551/68747470733a2f2f692e696d6775722e636f6d2f4744656a366a422e706e67" />
                <Card.Body>
                    <Card.Title className="text-dark">DT money</Card.Title>
                    <Card.Text className="text-dark">
                        React App and Context API <FaReact/>
                    </Card.Text>
                    <Button variant="secondary" href="https://github.com/sophiecalixto/projeto-contabilidade" target="_blank">{<FaGithub/>} GitHub Repository</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src="https://camo.githubusercontent.com/2131a3f09e2e86a46afcb5be41343a344526c3dd5db40a29e8206fa6073c8410/68747470733a2f2f692e696d6775722e636f6d2f726b3350446b492e6a7067" />
                <Card.Body>
                    <Card.Title className="text-dark">GitHub Repos</Card.Title>
                    <Card.Text className="text-dark">
                        React App and Context API <FaReact/>
                    </Card.Text>
                    <Button variant="secondary" href="https://github.com/sophiecalixto/github_repos" target="_blank">{<FaGithub/>} GitHub Repository</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src="https://www.poupardinheiro.com.br/imagens/post/1759/330xNxwill-bank-beta.JPG.pagespeed.ic.5611b34732.JPG" />
                <Card.Body>
                    <Card.Title className="text-dark">WillBank Clone</Card.Title>
                    <Card.Text className="text-dark">
                        Responsive Page using Bootstrap <FaReact/>
                    </Card.Text>
                    <Button variant="secondary" href="https://github.com/sophiecalixto/willbank-clone" target="_blank">{<FaBootstrap/>} GitHub Repository</Button>
                </Card.Body>
            </Card>
            </div>
        </Container>
    )
}

export default Projects;