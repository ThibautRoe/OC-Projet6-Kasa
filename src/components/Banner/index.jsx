import './index.scss'

/**
 * 
 * @param {string} image
 * @param {string} title
 * @returns {JSX} Banner Component
 */
export default function Banner({ image, title }) {
    return (
        <div className="banner">
            {image && <img className="banner__picture" src={image} alt="Paysage montagneux" />}
            {title && <h1 className="banner__title">{title}</h1 >}
        </div>
    )
}