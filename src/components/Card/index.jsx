import './index.scss'

/**
 * 
 * @param {string} title
 * @param {string} cover
 * @returns {JSX} Card Component
 */
export default function Card({ title, cover }) {
    return (
        <>
            <article className="card">
                {cover ? <img className="card__picture" src={cover} alt="Photo d'un logement" /> : <div className="card__picture card__picture--no-picture"></div>}
                <h2 className="card__title">{title ? title : "Mon super logement"}</h2>
            </article>
        </>
    )
}