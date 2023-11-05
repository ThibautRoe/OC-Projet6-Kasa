export default function Banner({ title, image }) {
    return (
        <>
            {image ? <img src={image} alt="Paysage montagneux" /> : <p>Image bannière</p>} {/* TODO : enlever le p et mettre null */}
            {title ? <h1>{title}</h1 > : null}
        </>
    )
}