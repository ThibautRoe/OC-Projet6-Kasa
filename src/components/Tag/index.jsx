export default function Tag({ tags }) {
    return (
        tags.map((tag, index) => (<p key={`tag-${index}`} className="tag">{tag}</p>))
    )
}