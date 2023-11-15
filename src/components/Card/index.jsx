import './index.scss'

/**
 * Card component
 * @function Card
 * @param {string} [cover] - Cover picture of the card
 * @param {string} [title=Mon super logement] - Title of the card, shown on the picture
 * @returns {JSX}
 */
export default function Card({ cover, title }) {
    return (
        <>
            <article className="card">
                {cover ? <img className="card__picture" src={cover} alt="Photo d'un logement" /> : <div className="card__picture card__picture--no-picture"></div>}
                <h2 className="card__title">{title ? title : "Mon super logement"}</h2>
            </article>
        </>
    )
}