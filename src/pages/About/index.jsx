import Banner from '../../components/Banner'
import Loader from '../../components/Loader'
import Collapse from '../../components/Collapse'
import { useFetch } from '../../utils/hooks'

export default function About() {
    const apiUrl = `${import.meta.env.VITE_API_URL}/about`
    const { data, isLoading, error } = useFetch(apiUrl)

    return (
        <main>
            <Banner />
            <h1 style={{ display: "none" }}>A propos</h1>
            {error ? (
                <p>Erreur lors du chargement des données depuis l'API</p>
            ) : isLoading ? (
                <Loader />
            ) : (
                <section>
                    {data && data.map((item) => (
                        <Collapse
                            key={`collapse-${item.title}`}
                            title={item.title}
                            contentString={item.content}
                        />
                    ))}
                </section>
            )}
        </main >
    )
}