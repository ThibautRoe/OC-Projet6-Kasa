import Loader from '../../components/Loader'
import Slideshow from '../../components/Slideshow'
import Tag from '../../components/Tag'
import Star from '../../components/Star'
import Collapse from '../../components/Collapse'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../utils/hooks'
import { Navigate } from 'react-router-dom'

export default function Logement() {
    const { id, title } = useParams()
    const { data, isLoading, error } = useFetch("../../logements.json")
    const logement = data.filter(item => item.id === id)
    let wrongUrlTitle = false

    if (!isLoading && logement.length > 0) {
        wrongUrlTitle = title !== logement[0].title.toLowerCase().replace(/ /g, "-")
        //title est le prop passé en paramètre de l'URL et logement[0].title est le vrai titre du logement, qu'on a récupéré depuis l'API en filtrant avec l'ID du logement
        //On formate logement[0].title comme title et on compare les 2 pour traiter le cas de figure où un utilisateur changerait le titre dans l'URL à la main
    }

    return (
        <main>
            {error ? (
                <p>Erreur lors du chargement des données depuis l'API</p>
            ) : isLoading ? (
                <Loader />
            ) : logement.length === 0 ? (
                <Navigate to="/404" />
            ) : wrongUrlTitle ? (
                <Navigate to="/404" />
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
            )}
        </main >
    )
}