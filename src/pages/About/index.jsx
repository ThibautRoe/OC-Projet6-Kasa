import Banner from '../../components/Banner'
import Loader from '../../components/Loader'
import Collapse from '../../components/Collapse'
import { useFetch } from '../../utils/hooks'
import bannerAbout from '../../assets/images/banner-about.jpg'
import './index.scss'

/**
 * 
 * @returns About component
 */
export default function About() {
    const { data, isLoading, error } = useFetch("about.json")

    return (
        <main className="about">
            <Banner
                image={bannerAbout}
            />
            <h1 style={{ display: "none" }}>A propos</h1>
            {error ? (
                <p>Erreur lors du chargement des données depuis l'API</p>
            ) : isLoading ? (
                <Loader />
            ) : ((data && data.length > 0) && (
                <section className="collapses collapses--about">
                    {data.map((item) => (
                        <Collapse
                            key={`collapse-${item.title}`}
                            className="about"
                            title={item.title}
                            contentString={item.content}
                        />
                    ))}
                </section>
            ))}
        </main >
    )
}