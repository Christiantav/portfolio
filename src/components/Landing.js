import React from 'react'
import '../App.css'
import PreviewItem from './PreviewItem'

const previews = [
    { preview: "Worked as a Software Engineer at Credcap for 1.5 years", path: "/credcap", img: "credcap.png"},
    { preview: "Worked as the Lead Developer at Project Innovate Newark for 2 years", path: "/pin", img: "pin.png"},
    { preview: "Worked as a Computer Science Teacher for 2 years", path: "/csx", img: "csx.png"},
]

function Landing() {
    return (
        <>
            <div>Software Development Resume of Christian Tavares</div>

            {previews.map(preview =>
                <PreviewItem {...preview} />
            )}
        </>
    );
}

export default Landing;
