import LogoWhite from '../../assets/images/logo-white.png'
import './index.scss'

export default function Footer() {
    return (
        <footer className="footer">
            <img className="footer__logo" loading="lazy" src={LogoWhite} alt="Logo Kasa" />
            <p className="footer__credits">© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}