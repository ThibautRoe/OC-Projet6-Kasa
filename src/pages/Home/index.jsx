import Banner from '../../components/Banner'
import Loader from '../../components/Loader'
import Card from '../../components/Card'
import { useFetch } from '../../utils/hooks'
import { Link } from 'react-router-dom'

export default function Home() {
    const apiUrl = `${import.meta.env.VITE_API_URL}/logements`
    const { data, isLoading, error } = useFetch(apiUrl)

    return (
        <main>
            <Banner title={"Chez vous, partout et ailleurs"} />
            {error ? (
                <p>Erreur lors du chargement des données depuis l'API</p>
            ) : isLoading ? (
                <Loader />
            ) : (
                <section>
                    {data && data.map((logement) => (
                        <Link
                            key={`logement-${logement.id}`}
                            to={`/logement/${logement.id}`}
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