export default function Card({ title, cover }) {
    return (
        <>
            <article className="card">
                {cover ? <img className="card__picture" loading="lazy" src={cover} alt="Photo d'un logement" /> : null}
                {title ? <h2 className="card__title">{title}</h2> : null}
            </article>
        </>
    )
}