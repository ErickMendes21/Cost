import { Link } from "react-router-dom";
import Styles from "./Navbar.module.css"
import Logo from "../../pages/img/costs_logo.png"

function Navbar() {
return (
    <nav className={Styles.navbar}>
                <Link to ="/">
                <img src={Logo} alt="Costs" />
                </Link>
            <ul className={Styles.list}>
            <li className={Styles.item}>
                <Link to ="/">Home</Link>
            </li>
            <li className={Styles.item}>
                <Link to="/Contato">Contato</Link>
            </li>
            <li className={Styles.item}>
                <Link to="/Company">Empresa</Link>
            </li>
            <li className={Styles.item}>
                <Link to="/Projects">Projeto</Link>
            </li>
            </ul>
    </nav>
)
}

export default Navbar   