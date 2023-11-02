import LogoWhite from '../../assets/images/logo-white.png'

export default function Footer() {
    return (
        <footer style={{ backgroundColor: "black", color: "white" }}> {/* TODO Enlever le style inline */}
            < img src={LogoWhite} alt="Logo Kasa" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer >
    )
}