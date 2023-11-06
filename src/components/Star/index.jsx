import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Star({ rating }) {
    const coloredStarNumber = Array.apply(null, { length: rating })
    const nonColoredStarNumber = Array.apply(null, { length: 5 - rating })

    return (
        <div className="rating">
            {coloredStarNumber.map((star, index) => (
                <FontAwesomeIcon key={`coloredStar-${index}`} icon="fa-solid fa-star" />
            ))}
            {nonColoredStarNumber.map((star, index) => (
                <FontAwesomeIcon key={`coloredStar-${index}`} icon="fa-solid fa-star" className="neutralStar" />
            ))}
        </div>
    )
}