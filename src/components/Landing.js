import React from 'react'
import '../App.css'
import PreviewItem from './PreviewItem'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

const previewsOne = [
    { preview: "Credibility Capital", path: "http://www.credibilitycapital.com", img: "/credcap-icon.png", border: '50%', rounded: true },
    { preview: "Project Innovate Newark", path: "http://www.projectinnovatenewark.org", img: "/pin-copy.png", border: '50%', rounded: false },
    { preview: "The Todo App", path: "https://github.com/Christiantav/todo-app", img: "/todo.png", border: '50%', rounded: true },
]

const previewsTwo = [
    { preview: "Blogger", path: "https://github.com/Christiantav/blogger", img: "/blogger.png", border: '50%', rounded: true },
    { preview: "Computer Science Program Teacher", path: "https://github.com/projectinnovatenewark/csx", img: "/csx.png", border: '50%', rounded: false },
]

function Landing() {
    return (
        <>
            <Container>
                <div className="font" id="title">
                    Software Development Portfolio of Christian Tavares
                </div>

                <Row md={{ span: 3 }}>
                    {previewsOne.map(preview =>
                        <PreviewItem {...preview} />
                    )}
                </Row>

                <Row md={{ span: 3, offset: 3 }}>
                    {previewsTwo.map(preview =>
                        <PreviewItem {...preview} />
                    )}
                </Row>
            </Container>
        </>
    );
}

export default Landing;
