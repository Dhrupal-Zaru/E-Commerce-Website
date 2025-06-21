import Navbar from "./Navbar/Navbar"
import Footer from "./Footer/Footer"
import { Outlet } from "react-router-dom"
import styles from './AppLayout.module.css'

export default function AppLayout() {
    return (
        <div className={styles.app}>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}
