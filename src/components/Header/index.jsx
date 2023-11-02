import LogoLarge from '../../assets/images/logo-large.png'
import LogoSmall from '../../assets/images/logo-small.png'
import { NavLink } from "react-router-dom"

export default function Header() {
    return (
        <header>
            <img src={LogoLarge} alt="Logo Kasa" /> {/* TODO Gérer aussi le cas de figure avec le logo small */}
            <nav>
                <ul>
                    <li>
                        <NavLink to={"/"}> {/* TODO Faire le CSS, NavLink permet d'avoir la classe "active" mise automatiquement sur le lien "a" quand on est sur la page du lien */}
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