import { Link } from 'react-router-dom'
import './index.scss'

/**
 * PageNotFound component (page)
 * @function PageNotFound
 * @returns {JSX}
 */
export default function PageNotFound() {
    return (
        <main className="page-not-found">
            <h1 className="page-not-found__title">404</h1>
            <p className="page-not-found__subtitle">Oups! La page que vous demandez n'existe pas.</p>
            <Link to={"/"}>{`Retourner sur la page d'accueil`}</Link>
        </main>
    )
}