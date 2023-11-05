export default function Collapse({ title, contentString, contentTable }) {
    return (
        <>
            {title ? (
                <>
                    <h2>{title}</h2>
                    {contentString ? (
                        <p>{contentString}</p>
                    ) : null}
                    {contentTable ? (
                        contentTable.map((content, index) => (
                            <p key={`content-${index}`}>{content}</p>
                        ))
                    ) : null}
                </>
            ) : null}
        </>
    );
}