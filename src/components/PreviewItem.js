import React from 'react'
import '../App.css'
import Col from 'react-bootstrap/Col'
import Fade from 'react-bootstrap/Fade'

const { useState } = React;

function PreviewItem(props) {
    const [isShown, setIsShown] = useState(false)
    const { border, img, path, preview, rounded, width } = props;

    const opacity = isShown ? '.1' : '1';

    return (
        <Col>
            <div style={{ marginTop: '3em', textAlign: 'center' }}>
                <a
                    href={path}
                    className="img-wrapper"
                    onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}
                >
                    <Fade in={isShown}>
                        <span className="preview-text font">
                            {preview}
                        </span>
                    </Fade>
                    <span style={{ color: 'black' }}>
                        <img
                            className={`${rounded ? "rounded-circle" : ""} img`}
                            src={img}
                            style={{ width: width, opacity: opacity, borderRadius: border }}
                        >
                        </img>
                    </span>
                </a>
            </div>
        </Col>
    )
}

export default PreviewItem;
