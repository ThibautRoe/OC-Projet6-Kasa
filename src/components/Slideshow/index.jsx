import { useState, useEffect } from 'react'
import './index.scss'

/**
 * Slideshow component
 * @function Slideshow
 * @param {string[]} pictures - Array of URLs of pictures of the displayed place
 * @returns {JSX}
 */
export default function Slideshow({ pictures }) {
    const [slideIndex, setSlideIndex] = useState(1)
    const [pictureClassName, setPictureClassName] = useState("slideshow__picture slideshow__picture--fadein")

    //Handle prev / next picture loading and add a fadeout transition using timeout, className and CSS
    function prevPicture() {
        setPictureClassName("slideshow__picture slideshow__picture--fadeout")
        setTimeout(() => {
            setSlideIndex(slideIndex === 1 ? (pictures.length) : (slideIndex - 1))
        }, 500)
    }

    function nextPicture() {
        setPictureClassName("slideshow__picture slideshow__picture--fadeout")
        setTimeout(() => {
            setSlideIndex(slideIndex > (pictures.length - 1) ? 1 : (slideIndex + 1))
        }, 500)
    }

    //Add a fadein transition on new image, only after being fully loaded, using className and CSS
    function transitionAfterImageLoad() {
        setPictureClassName("slideshow__picture slideshow__picture--fadein");
    }

    //Handle left / right arrow key press on keyboard to change picture, only if more than 1 picture
    useEffect(() => {
        if (pictures.length <= 1) { return }

        function keyPressHandler(e) {
            if (e.key === "ArrowLeft") { prevPicture() }
            if (e.key === "ArrowRight") { nextPicture() }
        }

        document.addEventListener('keydown', keyPressHandler)

        return () => {
            document.removeEventListener('keydown', keyPressHandler)
        }
    })

    return (
        <div className="slideshow">
            <img
                className={pictureClassName}
                src={pictures[slideIndex - 1]}
                alt="Photo d'un logement"
                onLoad={transitionAfterImageLoad}
            />
            {(pictures.length > 1) && (
                <>
                    <p className="slideshow__count">{`${slideIndex}/${pictures.length}`}</p>
                    <button
                        className="slideshow__button slideshow__button--prev"
                        onClick={() => prevPicture()}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512" fill="currentColor">
                            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
                        </svg>
                    </button>
                    <button
                        className="slideshow__button slideshow__button--next"
                        onClick={() => nextPicture()}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512" fill="currentColor">
                            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                        </svg>
                    </button>
                </>
            )}
        </div>
    )
}