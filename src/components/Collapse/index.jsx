import { useState } from 'react'

export default function Collapse({ title, contentString, contentTable }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            {title && (
                <button onClick={() => setIsOpen(!isOpen)}>
                    <h2>{title}</h2>
                    <span>→</span> {/* TODO Remplacer par une icône */}
                </button>
            )}
            {isOpen && (
                <>
                    {contentString && <p>{contentString}</p>}
                    {contentTable && contentTable.map((content, index) => (
                        <p key={`content-${index}`}>{content}</p>
                    ))}
                </>
            )}
        </>
    )
}