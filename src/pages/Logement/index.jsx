import Loader from '../../components/Loader'
import Slideshow from '../../components/Slideshow'
import Tag from '../../components/Tag'
import Star from '../../components/Star'
import Collapse from '../../components/Collapse'
import ErrorPage from '../ErrorPage'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../utils/hooks'

export default function Logement() {
    const { id } = useParams()
    const { data, isLoading, error } = useFetch("../../logements.json")
    const logement = data.filter(item => item.id === id)

    return (
        <main>
            {error ? (
                <p>Erreur lors du chargement des données depuis l'API</p>
            ) : isLoading ? (
                <Loader />
            ) : logement.length === 0 ? (
                <ErrorPage />
            ) : (
                <>
                    <Slideshow pictures={logement[0].pictures} />
                    <div className='titleAndTags'>
                        <h1>{logement[0].title}</h1>
                        <p>{logement[0].location}</p>
                        <Tag tags={logement[0].tags} />
                    </div>
                    <div className='hostAndRating'>
                        <p>{logement[0].host.name}</p>
                        <img src={logement[0].host.picture} alt="Photo de profil" />
                        <Star rating={logement[0].rating} />
                    </div>
                    <Collapse
                        title={"Description"}
                        contentString={logement[0].description}
                    />
                    <Collapse
                        title={"Équipements"}
                        contentTable={logement[0].equipments}
                    />
                </>
            )
            }
        </main >
    )
}