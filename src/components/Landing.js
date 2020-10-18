import React from 'react'
import '../App.css'
import PreviewItem from './PreviewItem'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

const previewsOne = [
    { preview: "Credibility Capital", path: "www.credibilitycapital.com", img: "credcap-icon.png", width: '18vw', border: '50%', rounded: true },
    { preview: "Project Innovate Newark", path: "www.projectinnovatenewark.org", img: "pin-copy.png", width: '18vw', border: '50%', rounded: false },
    { preview: "The Todo App", path: "/todo", img: "todo.png", width: '18vw', border: '50%', rounded: true },
]

const previewsTwo = [
    { preview: "Blogger", path: "/blogger", img: "blogger.png", width: '18vw', border: '50%', rounded: true },
    { preview: "Project Innovate Newark", path: "/pin", img: "pin-copy.png", width: '18vw', border: '50%', rounded: false },
    // { preview: "CSX Program Teacher", path: "/csx", img: "csx.png", rounded: true },
    // { preview: "Todo Application", path: "/todo", img: "todo.png", rounded: true },
]

function Landing() {
    return (
        <>
            <Container>
                <div className="font" style={{ marginTop: '3em' }}>
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
