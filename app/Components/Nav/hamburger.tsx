import './hamburger.css'
import { FaBars } from "react-icons/fa6";

export default function Hamburger() {

    return (
        <nav className="hamburger">
            <FaBars className='hamburger-style'/>
        </nav>
    )
}