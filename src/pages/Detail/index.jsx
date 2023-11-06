import Loader from '../../components/Loader'
import Slideshow from '../../components/Slideshow'
import Tag from '../../components/Tag'
import Star from '../../components/Star'
import Collapse from '../../components/Collapse'
import ErrorPage from '../ErrorPage'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../utils/hooks'

export default function About() {
    const { id } = useParams()
    const apiUrl = `${import.meta.env.VITE_API_URL}/logements?id=${id}` /* JSON Server permet de filtrer avec ?xx=yy, à voir pour l'API définitive si elle permet de le faire */
    const { data, isLoading, error } = useFetch(apiUrl)

    return (
        <main>
            {error ? (
                <p>Erreur lors du chargement des données depuis l'API</p>
            ) : isLoading ? (
                <Loader />
            ) : data.length === 0 ? (
                <ErrorPage />
            ) : (
                <>
                    <Slideshow pictures={data[0].pictures} />
                    <div className='titleAndTags'>
                        <h1>{data[0].title}</h1>
                        <p>{data[0].location}</p>
                        <Tag tags={data[0].tags} />
                    </div>
                    <div className='hostAndRating'>
                        <p>{data[0].host.name}</p>
                        <img src={data[0].host.picture} alt="Photo de profil" />
                        <Star rating={data[0].rating} />
                    </div>
                    <Collapse
                        title={"Description"}
                        contentString={data[0].description}
                    />
                    <Collapse
                        title={"Équipements"}
                        contentTable={data[0].equipments}
                    />
                </>
            )
            }
        </main >
    )
}