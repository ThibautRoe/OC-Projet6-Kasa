import { useState, useEffect } from 'react';
import './index.css'

export default function Slider({ pictures }) {
    const [slideIndex, setSlideIndex] = useState(1)

    useEffect(() => {
        function showSlide(slideIndex) {
            const slides = [...document.getElementsByClassName("slide")]
            slides.forEach(slide => {
                slide.style.display = "none"
            });
            if (slideIndex < 1) {
                slides[slides.length - 1].style.display = "initial"
                setSlideIndex(slides.length)
                return
            }
            if (slideIndex > slides.length) {
                slides[0].style.display = "initial"
                setSlideIndex(1)
                return
            }
            else {
                slides[slideIndex - 1].style.display = "initial"
            }
        }

        showSlide(slideIndex)
    }, [slideIndex])

    return (
        <div className="slider-container">
            <div className="slider">
                {pictures && pictures.map((picture, index) => (
                    <div key={`picture-${index}`} className="slide">
                        <img src={picture} alt="Photo d'un logement" />
                        <p>{`${index + 1}/${pictures.length}`}</p>
                    </div>
                ))}
            </div>
            <button className="prev-button" onClick={() => setSlideIndex(slideIndex - 1)}>←</button> {/* TODO Changer les flèches */}
            <button className="next-button" onClick={() => setSlideIndex(slideIndex + 1)}>→</button>
        </div>
    )
}