import { NavLink } from "react-router-dom"

export default function Header() {
    return (
        <header>
            <p>Logo header</p>
            <nav>
                <ul>
                    <li>
                        <NavLink to={"/"}> {/* NavLink permet d'avoir la classe "active" mise automatiquement sur le lien "a" quand on est sur la page du lien */}
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