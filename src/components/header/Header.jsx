import { Link, NavLink } from "react-router-dom";

const Header = () => {

    const NavLinks = (
        <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/listedBook">Freeluncer</NavLink></li>
            <li><NavLink to="/pagesToRead">Project</NavLink></li>
            <li><NavLink to="/aboutUs">About Us</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
        </>
    );

    return (
        <div className="navbar bg-base-100 font_ws md:my-8 my-4 md:p-0 p-2">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <div className="text-small_text text-font_ws text-base">
                            {NavLinks}
                        </div>
                    </ul>
                </div>
                <Link to="/" className="md:text-[28px] text-xl font-bold text-title">Freeluncer <span className="text-primary_color">Hub</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <div className="flex text-small_text text-font_ws text-base md:pr-2 gap-1">
                        {NavLinks}
                    </div>
                </ul>
            </div>
            <div className="navbar-end flex gap-4">
                <NavLink to="/login" className="btn btn-outline border-primary_color text-primary_color hover:bg-primary_color hover:text-white hover:border-primary_color px-6 rounded-md">Log In</NavLink>
                <NavLink to="/register" className="btn bg-primary_color text-neutral-50 border-primary_color hover:bg-transparent hover:text-primary_color hover:border-primary_color px-6 rounded-md">Register</NavLink>
            </div>
        </div>
    );
};

export default Header;