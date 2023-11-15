/**
 * Tag component
 * @function Tag
 * @param {string[]} [tags] - Array of string for the tags of the displayed place
 * @returns {JSX} 
 */
export default function Tag({ tags }) {
    return (
        <div className="logement__tags">
            {tags?.map((tag, index) => (<p key={`tag-${index}`} className="logement__tag">{tag}</p>))}
        </div>
    )
}