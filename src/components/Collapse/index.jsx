import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Collapse({ title, contentString, contentTable }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            {title && (
                <button onClick={() => setIsOpen(!isOpen)}>
                    <h2>{title}</h2>
                    <FontAwesomeIcon icon="fa-solid fa-chevron-up" />
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