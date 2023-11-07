import LogoLarge from '../../assets/images/logo-large.png'
import LogoSmall from '../../assets/images/logo-small.png'
import { NavLink } from "react-router-dom"

export default function Header() {
    return (
        <header className="header">
            <picture className="header__logo"> {/* TODO Ajuster la largeur de la media query si besoin */}
                <source media="(max-width: 650px)" srcSet={LogoSmall} />
                <img src={LogoLarge} alt="Logo Kasa" />
            </picture>
            <nav>
                <ul>
                    <li>
                        <NavLink to={"/"}>
                            Accueil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/a-propos"}>
                            A propos
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}