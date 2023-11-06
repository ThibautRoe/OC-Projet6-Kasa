import { useState } from 'react'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Slideshow({ pictures }) {
    const [slideIndex, setSlideIndex] = useState(1)

    return (
        <div className="slider-container">
            <div className="slider">
                <div className="slide">
                    <img src={pictures[slideIndex - 1]} alt="Photo d'un logement" />
                    {pictures.length > 1 && (<p>{`${slideIndex}/${pictures.length}`}</p>)}
                </div>
            </div>
            {pictures.length > 1 && (
                <div className="slider-buttons">
                    <button className="prev-button" onClick={() => setSlideIndex(slideIndex === 1 ? (pictures.length) : (slideIndex - 1))}>
                        <FontAwesomeIcon icon="fa-solid fa-chevron-left" />
                    </button>
                    <button className="next-button" onClick={() => setSlideIndex(slideIndex > (pictures.length - 1) ? 1 : (slideIndex + 1))}>
                        <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
                    </button>
                </div>
            )}
        </div>
    )
}