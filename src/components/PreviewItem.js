import React from 'react'
import '../App.css'
import Fade from 'react-bootstrap/Fade'

const { useState } = React;

function PreviewItem(props) {
    const [isShown, setIsShown] = useState(false)
    const { img, path, preview } = props;

    return (
        <span className="avatar-img">
            <Fade in={isShown}>
                <span className="preview-text">
                    {preview}
                </span>
            </Fade>
            <img
                className="rounded-circle"
                href={path}
                src={img}
                style={{ width: '10%' }}
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}>
            </img>
        </span>
    )
}

export default PreviewItem;
