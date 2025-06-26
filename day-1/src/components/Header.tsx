import { NavLink } from "react-router";

function HeaderComponent() {

    return (
        <header>
            <nav>
                <ul className="text-xl font-medium flex space-x-8 m-10 justify-end">
                    <li><NavLink to="/blog" className={({ isActive }) => isActive ? "text-secondary" : ""}>Blog</NavLink></li>
                    <li><NavLink to="/works" className={({ isActive }) => isActive ? "text-secondary" : ""}>Works</NavLink></li>
                    <li><NavLink to="/contact" className={({ isActive }) => isActive ? "text-secondary" : ""}>Contact</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default HeaderComponent;