import { useContext } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const location = useLocation();

    const handleLogout = () => {
        logOut()
            .then(() => console.log('User logged out successfully'))
            .catch(error => console.error(error))
    }

    const NavLinks = (
        <>
            {user && (
                <>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/listedBook">Freeluncer</NavLink></li>
                    <li><NavLink to="/pagesToRead">Project</NavLink></li>
                    <li><NavLink to="/aboutUs">About Us</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </>
            )}

            {!user && location.pathname !== '/login' && location.pathname !== '/register' && (
                <>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/aboutUs">About Us</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </>
            )}
        </>
    );

    return (
        <div className="navbar bg-base-100 md:p-0 p-4 md:my-4 my-2">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost p-0 lg:hidden">
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
                        <div className="text-small_text font-poppins text-base">
                            {NavLinks}
                        </div>
                    </ul>
                </div>
                <Link to="/" className="md:text-2xl text-base font-bold ml-2">Task <span className="text-primary_color">Titans</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <div className="flex text-small_text font-poppins text-base md:pr-2 gap-1">
                        {NavLinks}
                    </div>
                </ul>
            </div>
            <div className="navbar-end flex md:gap-4 gap-2">
                {user && (
                    <div className="flex items-center md:gap-4 gap-2">
                        <p className="md:text-base text-xs">{window.innerWidth <= 768 ? user.displayName.slice(0, 6) : user.displayName}</p>
                        <button
                            onClick={handleLogout}
                            className="btn btn-sm btn-outline border-primary_color text-primary_color hover:bg-primary_color hover:text-white hover:border-primary_color md:px-6 lg:text-[14px] text-xs rounded-md"
                        >
                            Logout
                        </button>
                    </div>
                )}
                {!user && (
                    <div className="flex md:gap-4 gap-2">
                        <NavLink
                            to="/login"
                            className="btn btn-sm btn-outline border-primary_color text-primary_color hover:bg-primary_color hover:text-white hover:border-primary_color md:px-6 lg:text-sm text-xs rounded-md"
                        >
                            Log In
                        </NavLink>
                        {/* <NavLink
                            to="/register"
                            className="btn btn-sm bg-primary_color text-neutral-50 border-primary_color hover:bg-transparent hover:text-primary_color hover:border-primary_color md:px-6 lg:text-sm text-xs rounded-md"
                        >
                            Register
                        </NavLink> */}
                    </div>
                )}

            </div>
            {/* {authInfo && authInfo.name && <p>{authInfo.name}</p>} */}
        </div>
    );
};

export default Header;
