import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const Register = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [termsChecked, setTermsChecked] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleCheckboxChange = () => {
        setTermsChecked(!termsChecked);
    };

    return (
        <div className="mx-auto w-[40%] flex flex-col  border border-neutral-100 p-6 shadow-md mb-12 gap-2 rounded-md">
            <div className="flex flex-col items-center text-center gap-6">
                <h1 className="text-black_bg text-3xl font-bold">Create an account</h1>
                <Link to="/"><a className="flex items-center justify-center text-center border border-neutral-300 py-2 px-4 gap-4 rounded-md">
                    <span className="text-3xl"><FcGoogle /></span>
                    <span>Register with Google</span>
                </a></Link>
                <p className="text-color_grey">- Or continue with -</p>
            </div>

            {/* form start */}

            <form className="flex flex-col gap-4 mt-2">
                <div className="flex gap-4">
                    <div className="flex flex-col gap-2 flex-grow">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" name="firstName" id="firstName" className="p-2 border border-neutral-300 rounded-md"/>
                    </div>
                    <div className="flex flex-col flex-grow gap-2">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" name="lastName" id="lastName" className="p-2 border border-neutral-300 rounded-md"/>
                    </div>
                </div>
                <label htmlFor="userEmail">Email address</label>
                <input type="email" name="userEmail" id="userEmail" className="p-2 border border-neutral-300 rounded-md"/>
                <label htmlFor="userType">Client or Service Provider?</label>
                <select id="userType" name="userType" className="p-2 border border-neutral-300 rounded-md">
                    <option value="" selected disabled >Select one</option>
                    <option value="client" >Client</option>
                    <option value="serviceProvider">Service Provider</option>
                </select>


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

                <label htmlFor="termsCheckbox" className="flex items-center">
                <input 
                    type="checkbox" 
                    id="termsCheckbox" 
                    name="termsCheckbox" 
                    className="mr-2"
                    checked={termsChecked}
                    onChange={handleCheckboxChange}
                />
                I agree to the <span className="font-semibold ml-1"><Link to="/termsConditions">Terms and Conditions</Link></span>
            </label>

            <button 
                type="submit" 
                className={`btn bg-primary_color text-lg text-neutral-50 ${!termsChecked && 'opacity-50 text-white_color cursor-not-allowed'}`}
                disabled={!termsChecked}
            >
                Create an account
            </button>

            </form>

            <p className="mt-2">Already have an account? <span className="font-semibold"><Link to="/login">Login here</Link></span></p>

        </div>
    );
};

export default Register;