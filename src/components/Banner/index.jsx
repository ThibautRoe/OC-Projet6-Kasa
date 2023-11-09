import './index.scss'

export default function Banner({ image, title }) {
    return (
        <div className="banner">
            {image && <img className="banner__picture" loading="lazy" src={image} alt="Paysage montagneux" />}
            {title && <h1 className="banner__title">{title}</h1 >}
        </div>
    )
}