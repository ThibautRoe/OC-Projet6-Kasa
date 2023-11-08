import Banner from '../../components/Banner'
import Loader from '../../components/Loader'
import Card from '../../components/Card'
import { useFetch } from '../../utils/hooks'
import { Link } from 'react-router-dom'
import bannerHome from '../../assets/images/banner-home.jpg'

export default function Home() {
    const { data, isLoading, error } = useFetch('logements.json')

    return (
        <main className="home">
            <Banner
                image={bannerHome}
                title={"Chez vous, partout et ailleurs"}
            />
            {error ? (
                <p>Erreur lors du chargement des données depuis l'API</p>
            ) : isLoading ? (
                <Loader />
            ) : (
                <section className="home__cards">
                    {data && data.map((logement) => (
                        <Link
                            key={`logement-${logement.id}`}
                            to={`/logement/${logement.id}/${logement.title.toLowerCase().replace(/ /g, "-")}`} //On rajoute le titre dans l'URL pour plus de clarté
                        >
                            <Card
                                title={logement.title}
                                cover={logement.cover}
                            />
                        </Link>
                    ))}
                </section>
            )}
        </main>
    )
}