export default function Collapse({ title, contentString, contentTable }) {

    return (
        <>
            {title && (
                <details>
                    <summary>{title}</summary> {/* TODO Mettre l'icône qui va bien */}
                    <>
                        {contentString && <p>{contentString}</p>}
                        {contentTable && contentTable.map((content, index) => (
                            <p key={`content-${index}`}>{content}</p>
                        ))}
                    </>
                </details>
            )}
        </>
    )
}