import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleRememberMeChange = () => {
        setRememberMe(!rememberMe);
    };

    const handleRegisterForm = e =>{
        e.preventDefault();
        // console.log("click done");
        const email = e.target.userEmail.value;
        const password = e.target.password.value;
        const rememberMe = e.target.rememberMe.value;

        console.log(email, password, rememberMe);
    }

    return (
        <div className="mx-auto w-[40%] flex flex-col  border border-neutral-100 p-6 shadow-md mb-16 gap-2 rounded-md">
            <div className="flex flex-col items-center text-center gap-6">
                <h1 className="text-black_bg text-2xl font-bold">Sign in to your account</h1>
                <Link to="/">
                    <a className="flex items-center justify-center text-center border border-neutral-300 py-2 px-4 gap-4 rounded-md">
                        <span className="text-3xl"><FcGoogle /></span>
                        <span>Continue with Google</span>
                    </a>
                </Link>
                <p className="text-color_grey">- Or continue with -</p>
            </div>

            {/* form start */}
            <form onSubmit={handleRegisterForm} className="flex flex-col gap-4 mt-2">
                <label htmlFor="userEmail">Email address</label>
                <input type="email" name="userEmail" id="userEmail" className="p-2 border border-neutral-300 rounded-md"/>

                <label htmlFor="password">Password</label>
                <div className="flex items-center">
                    <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        id="password"
                        className="p-2 border border-neutral-300 rounded-md flex-1"
                    />
                    <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="ml-2 p-3 bg-transparent border border-neutral-300 rounded-md"
                    >
                        {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                    </button>
                </div>

                <div className="flex justify-between">
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="rememberMe"
                            name="rememberMe"
                            checked={rememberMe}
                            onChange={handleRememberMeChange}
                            className="mr-2"
                        />
                        <label htmlFor="rememberMe">Remember Me</label>
                    </div>

                    <Link to="/forgot-password" className="text-blue-500 font-semibold hover:underline">Forgot Password?</Link>
                </div>

                <button 
                    type="submit" 
                    className={`btn bg-primary_color text-lg text-neutral-50`}
                >
                    Log In
                </button>
            </form>

            <p className="mt-2">Don't have an account? <span className="font-semibold"><Link to="/register">Register here</Link></span></p>
        </div>
    );
};

export default Login;
