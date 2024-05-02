import React, { useContext, useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import auth from "../../Firebase/Firebase.config";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
    useEffect(() => {
        document.title = 'Task Titans - Registration';
    });

    const { createUser } = useContext(AuthContext);

    const [showPassword, setShowPassword] = useState(false);
    const [termsChecked, setTermsChecked] = useState(false);
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const [userRole, setUserRole] = useState('select');

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleCheckboxChange = () => {
        setTermsChecked(!termsChecked);
    };

    const handleRoleChange = (e) => {
        setUserRole(e.target.value);
    };

    const validateEmail = (email) => {
        const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
        return gmailRegex.test(email);
    };

    const handleRegisterForm = async (e) => {
        e.preventDefault();

        const fName = e.target.firstName.value;
        const lName = e.target.lastName.value;
        const email = e.target.userEmail.value;
        const password = e.target.password.value;
        const userRole = e.target.userRole.value;

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

        if (!passwordRegex.test(password)) {
            toast.error('Password should be at least 6 characters long and contain at least one uppercase letter and one lowercase letter.');
            return;
        }

        if (password.length < 6) {
            toast.error('Password should be 6 characters or longer.');
            return;
        }

        if (!validateEmail(email)) {
            toast.error('Please enter a valid Gmail address.');
            return;
        }

        try {
            // Create user in Firebase
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Update user profile
            await updateProfile(user, {
                displayName: `${fName} ${lName}`
            });

            // Send email verification
            await sendEmailVerification(user);
            
            e.target.reset();
            setRegisterError('');
            setSuccess('User created successfully.');

            toast.success('Please check your email and verify your account.');

            console.log("User created:", user);
            
        } catch (error) {
            console.error(error);
            // setRegisterError(error.message);
            // toast.error(error.message);
            toast.error('Already used this email.');
        }
    };

    return (
        <div className="mx-auto font-poppins text-primary_font md:text-base text-sm lg:w-[40%] md:w-[60%] w-[90%] flex flex-col border border-neutral-100 p-6 shadow-md mb-16 gap-2 rounded-md">
            <div className="flex flex-col items-center text-center gap-6">
                <h1 className=" md:text-2xl text-lg font-bold border-y-2 border-border_color p-2 mb-4">Create an account</h1>
                {/* <Link to="/">
                    <a className="flex items-center justify-center text-center border border-neutral-300 py-2 px-4 gap-4 rounded-md">
                        <span className="text-3xl"><FcGoogle /></span>
                        <span>Register with Google</span>
                    </a>
                </Link>
                <p className="text-color_grey">- Or continue with -</p> */}
            </div>

            {/* Form start */}
            <form onSubmit={handleRegisterForm} className="flex flex-col gap-4 mt-2">
                <div className="flex xl:flex-row flex-col gap-4">
                    <div className="flex flex-col gap-2 flex-grow">
                        <label htmlFor="firstName">First Name*</label>
                        <input type="text" name="firstName" id="firstName" className="p-2 border border-neutral-300 rounded-md"/>
                    </div>
                    <div className="flex flex-col flex-grow gap-2">
                        <label htmlFor="lastName">Last Name*</label>
                        <input type="text" name="lastName" id="lastName" className="p-2 border border-neutral-300 rounded-md"/>
                    </div>
                </div>
                <label htmlFor="userEmail">Email address*</label>
                <input type="email" name="userEmail" id="userEmail" className="p-2 border border-neutral-300 rounded-md" required/>
                <label htmlFor="password">Password*</label>
                <div className="flex items-center">
                    <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        id="password"
                        className="p-2 border border-neutral-300 rounded-md flex-1"
                        required
                    />
                    <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="ml-2 p-3 bg-transparent border border-neutral-300 rounded-md"
                    >
                        {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                    </button>
                </div>
                <label htmlFor="userRole">Select Role*</label>
                <select
                    id="userRole"
                    name="userRole"
                    value={userRole}
                    onChange={handleRoleChange}
                    className="p-2 border border-neutral-300 rounded-md"
                    required
                >
                    <option value="select" disabled>Select One</option>
                    <option value="seller">Seller</option>
                    <option value="buyer">Buyer</option>
                </select>
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
                {registerError && <p className="text-red-500">{registerError}</p>} 
                <button 
                    type="submit" 
                    className={`btn bg-primary_color text-lg text-neutral-50 ${!termsChecked && 'opacity-50 text-white_color cursor-not-allowed'}`}
                    disabled={!termsChecked}
                >
                    Create an account
                </button>
            </form>
            <p className="mt-2">Already have an account? <span className="font-semibold"><Link to="/login">Login here</Link></span></p>

            {/* ToastContainer */}
            <ToastContainer />
        </div>
    );
};

export default Register;
