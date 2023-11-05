export default function Card({ title, cover }) {
    return (
        <>
            <article>
                {cover ? <img src={cover} alt="Photo d'un logement" /> : null}
                {title ? <h2>{title}</h2> : null}
            </article>
        </>
    )
}