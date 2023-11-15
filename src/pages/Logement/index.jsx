import Loader from '../../components/Loader'
import Slideshow from '../../components/Slideshow'
import Tag from '../../components/Tag'
import Star from '../../components/Star'
import Collapse from '../../components/Collapse'
import GenericAvatar from '../../assets/images/generic-avatar.webp'
import { useParams, Navigate } from 'react-router-dom'
import { useFetch } from '../../utils/hooks'
import './index.scss'

/**
 * Logement component (page)
 * @function Logement
 * @returns {JSX}
 */
export default function Logement() {
    const { id } = useParams()
    const { data, isLoading, error } = useFetch("../logements.json")
    let filteredData = []
    let logement = {}

    if (!isLoading) {
        filteredData = data.filter(item => item.id === id)
        logement = filteredData[0]
    }

    return (
        <main className="logement">
            {error ? (
                <p>Erreur lors du chargement des données depuis l'API</p>
            ) : isLoading ? (
                <Loader />
            ) : filteredData.length === 0 ? (
                <Navigate to="/404" />
            ) : (
                <>
                    {(logement.pictures && logement.pictures.length > 0) && (<Slideshow pictures={logement.pictures} />)}
                    <div className="logement__details">
                        <div className="logement__title-and-location">
                            <h1 className="logement__title">{logement.title && logement.title}</h1>
                            <p className="logement__location">{logement.location && logement.location}</p>
                            <Tag tags={logement.tags && logement.tags} />
                        </div>
                        <div className="logement__host-and-rating">
                            <div className="logement__host">
                                <p className="logement__host-name">{logement.host?.name && logement.host.name}</p>
                                <img className="logement__host-picture" src={logement.host?.picture ? logement.host.picture : GenericAvatar} alt="Photo de profil" />
                            </div>
                            <Star rating={logement.rating && logement.rating} />
                        </div>
                    </div>
                    {(logement.description || logement.equipments) && (
                        <div className="collapses collapses--logement">
                            {logement.description && (
                                <Collapse
                                    className="logement"
                                    title="Description"
                                    contentString={logement.description}
                                />
                            )}
                            {logement.equipments && (
                                <Collapse
                                    className="logement"
                                    title="Équipements"
                                    contentTable={logement.equipments}
                                />
                            )}
                        </div>
                    )}
                </>
            )}
        </main >
    )
}