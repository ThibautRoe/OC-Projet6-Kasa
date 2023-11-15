import './index.scss'

/**
 * Banner component
 * @function Banner
 * @param {string} image - Image to display in banner
 * @param {string} [title] - Title to display in banner
 * @returns {JSX}
 */
export default function Banner({ image, title }) {
    return (
        <div className="banner">
            {image && <img className="banner__picture" src={image} alt="Paysage montagneux" />}
            {title && <h1 className="banner__title">{title}</h1 >}
        </div>
    )
}