import './index.scss'

/**
 * Collapse component
 * @function Collapse
 * @param {string} className - Appended to default class to determine on which page the collapse is added for CSS rules
 * @param {string} title - Collapse title, used in <summary> tag
 * @param {string} [contentString] - Collapse details as string for about page
 * @param {string[]} [contentTable] - Collapse details as an array of strings for logement page
 * @returns {JSX}
 */
export default function Collapse({ className, title, contentString, contentTable }) {
    return (
        <>
            {title && (
                <div className={`collapse collapse--${className}`}>
                    <details className={`collapse__detail collapse__detail--${className}`}>
                        <summary className={`collapse__title collapse__title--${className}`}>
                            {className === "about" ? <h2>{title}</h2> : <span>{title}</span>}
                            <div className={`collapse__button collapse__button--${className}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill="currentColor">
                                    <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
                                </svg>
                            </div>
                        </summary>
                    </details>
                    {/* Content outside of details HTML tag to use CSS trick to get details animation with pure CSS and no JS : https://dev.to/jgustavoas/solved-how-to-fully-animate-the-details-html-element-with-only-css-and-no-javascript-55ek */}
                    <div className={`collapse__content collapse__content--${className}`}>
                        {contentString && <p>{contentString}</p>}
                        {contentTable && contentTable.map((content, index) => (
                            <p key={`content-${index}`}>{content}</p>
                        ))}
                    </div>
                </div >
            )
            }
        </>
    )
}