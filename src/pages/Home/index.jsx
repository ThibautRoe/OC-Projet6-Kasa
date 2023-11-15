import Banner from '../../components/Banner'
import bannerHome from '../../assets/images/banner-home.webp'
import Loader from '../../components/Loader'
import Card from '../../components/Card'
import { useFetch } from '../../utils/hooks'
import { Link } from 'react-router-dom'
import './index.scss'

/**
 * Home component (page)
 * @function Home
 * @returns {JSX}
 */
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
            ) : ((data && data.length > 0) && (
                <section className="home__cards">
                    {data.map((logement) => (
                        <Link
                            key={`logement-${logement.id}`}
                            to={`/logement/${logement.id}`}
                        >
                            <Card
                                cover={logement.cover}
                                title={logement.title}
                            />
                        </Link>
                    ))}
                </section>
            ))}
        </main>
    )
}