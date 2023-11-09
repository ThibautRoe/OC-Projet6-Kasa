import LogoLarge from '../../assets/images/logo-large.png'
import LogoSmall from '../../assets/images/logo-small.png'
import { NavLink } from "react-router-dom"
import './index.scss'

export default function Header() {
    return (
        <header className="header">
            <NavLink to={"/"}>
                <picture> {/* TODO Ajuster la largeur de la media query si besoin */}
                    <source media="(max-width: 650px)" srcSet={LogoSmall} />
                    <img className="header__logo" loading="lazy" src={LogoLarge} alt="Logo Kasa" />
                </picture>
            </NavLink>
            <nav className="navbar">
                <ul className="navbar__list">
                    <li className="navbar__link">
                        <NavLink to={"/"}>
                            Accueil
                        </NavLink>
                    </li>
                    <li className="navbar__link">
                        <NavLink to={"/a-propos"}>
                            A Propos
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}