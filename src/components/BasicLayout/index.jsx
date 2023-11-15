import { Outlet } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'
import './index.scss'

/**
 * BasicLayout component
 * @function BasicLayout
 * @returns {JSX}
 */
export default function BasicLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}