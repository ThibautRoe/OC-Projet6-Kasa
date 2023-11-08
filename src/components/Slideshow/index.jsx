import { useState } from 'react'
import './index.css'

export default function Slideshow({ pictures }) {
    const [slideIndex, setSlideIndex] = useState(1)

    return (
        <div className="slideshow">
            <div className="slideshow__slides">
                <div className="slideshow__slide">
                    <img className="slideshow__picture" loading="lazy" src={pictures[slideIndex - 1]} alt="Photo d'un logement" />
                    {pictures.length > 1 && (<p className="slideshow__count">{`${slideIndex}/${pictures.length}`}</p>)}
                </div>
            </div>
            {pictures.length > 1 && (
                <div className="slideshow__buttons">
                    <button className="slideshow__buttons slideshow__buttons--prev-button" onClick={() => setSlideIndex(slideIndex === 1 ? (pictures.length) : (slideIndex - 1))}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512" fill="currentColor"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" /></svg>
                    </button>
                    <button className="slideshow__buttons slideshow__buttons--next-button" onClick={() => setSlideIndex(slideIndex > (pictures.length - 1) ? 1 : (slideIndex + 1))}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512" fill="currentColor"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg>
                    </button>
                </div>
            )}
        </div>
    )
}