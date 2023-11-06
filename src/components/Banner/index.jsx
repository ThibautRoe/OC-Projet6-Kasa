export default function Banner({ image, title }) {
    return (
        <>
            {image ? <img src={image} alt="Paysage montagneux" /> : null}
            {title ? <h1>{title}</h1 > : null}
        </>
    )
}