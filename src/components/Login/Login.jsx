
import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useState, useRef, useContext, useEffect } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../Firebase/Firebase.config"; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {

    useEffect(() => {
        document.title = 'FH - Login';
    })

    const { signInUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const emailRef = useRef(null);

    const [user, setUser] = useState(null);

    // Initialize GoogleAuthProvider
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            const loggedInUser = result.user;
            // console.log(loggedInUser);
            setUser(loggedInUser);
            navigate('/');
        }).catch((error) => {
            console.log('error', error.message);
        });
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleRememberMeChange = () => {
        setRememberMe(!rememberMe);
    };

    const handleLogIn = e => {
        e.preventDefault();
        const email = e.target.userEmail.value;
        const password = e.target.password.value;

        signInUser(email, password)
        .then(result =>{
            console.log(result.user);
            navigate('/');
        })
        .catch( error =>{
            console.error(error);
        })
    
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                
                if(result.user.emailVerified){
                    setSuccess('Login successfully.');
                    toast.success('Login successfully.');
                } else {
                    toast.error('Please check your email and verify your account.');
                }
    
            })
            .catch(error => {
                console.error(error);
                let errorMessage = "Please enter email and password while login.";
                if (error.code === "auth/user-not-found") {
                    errorMessage = "User not found. Please check your email and try again.";
                } else if (error.code === "auth/wrong-password") {
                    errorMessage = "Incorrect password. Please try again.";
                }
                setRegisterError(errorMessage);
                toast.error(errorMessage);
            });
    }

    const handleForgetPassword = () => {
        const email = emailRef.current.value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
        if (!email) {

            toast.error('Email is empty.');
            return;

        } else if (!emailRegex.test(email)) {

            toast.error('Your email is invalid. Please provide valid email.');
            return;

        }
        console.log('Sent reset email to:', email);
    
        sendPasswordResetEmail(auth, email)
        .then(() =>{

            toast.success('Please check your email.');
        })
        .catch(error =>{
            toast.error('An error occurred while sending the reset email.', error);

        })
    };


    return (
        <div className="mx-auto lg:w-[40%] md:w-[60%] w-[90%] flex flex-col  border border-neutral-100 p-6 shadow-md mb-16 gap-2 rounded-md">
            <div className="flex flex-col items-center text-center gap-6">
                <h1 className="text-black_bg md:text-2xl text-lg font-bold border-y-2 border-border_color p-2">Sign in to your account</h1>
                <Link to="" onClick={handleGoogleSignIn}>
                    <a className="flex items-center justify-center text-center border border-neutral-300 py-2 px-4 gap-4 rounded-md">
                        <span className="text-3xl"><FcGoogle /></span>
                        <span>Continue with Google</span>
                    </a>
                </Link>
                <p className="text-color_grey">- Or continue with -</p>
            </div>

            {/* form start */}
            <form onSubmit={handleLogIn} className="flex flex-col gap-4 mt-2">
                <label htmlFor="userEmail">Email address</label>
                <input 
                    type="email" 
                    name="userEmail" 
                    ref={emailRef}
                    id="userEmail" 
                    className="p-2 border border-neutral-300 rounded-md"
                />

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

                    <Link onClick={handleForgetPassword} to="" className="text-blue-500 font-semibold hover:underline">Forgot Password?</Link>
                </div>

                <button 
                    type="submit" 
                    className={`btn bg-primary_color md:text-lg text-md text-neutral-50`}
                >
                    Log In
                </button>
            </form>

            <ToastContainer />

            <p className="mt-2">Don't have an account? <span className="font-semibold"><Link to="/register">Register here</Link></span></p>
        </div>
    );
};

export default Login;
