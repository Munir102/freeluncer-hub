import { FaArrowRightLong } from "react-icons/fa6";
import img1 from "../../assets/Code typing.gif";
import img2 from "../../assets/Programming-pana.png";


const Chooseprovider = () => {
    return (
        <div className="grid md:grid-cols-2 font-poppins md:mt-24 mt-4 md:p-2 p-4">
            <div className="col-span-1 bg-primary_color p-10 grid grid-cols-3 justify-center items-center gap-6">
                <div className="col-span-2 flex flex-col gap-4 text-neutral-50">
                    <h1 className="md:text-4xl text-2xl font-semibold">Need a Project?</h1>
                    <p className="md:text-base text-sm">Discover the ideal project tailored to your budget from our innovative community of creators.</p>
                    <div>
                        <button className="btn md:btn-lg btn-md bg-neutral-50 text-primary_color rounded-full shadow-xl transform hover:shadow-md transition duration-300">
                            <FaArrowRightLong className="text-2xl" />
                        </button>
                    </div>
                </div>
                <div className="col-span-1">
                    <img src={img2} alt="Project Illustration" />
                </div>
            </div>
            <div className="col-span-1 bg-neutral-50 p-10 grid grid-cols-2 justify-center items-center gap-6">
                <div className="col-span-1 flex flex-col gap-4">
                    <h1 className="md:text-4xl text-2xl font-semibold text-primary_font">Want to Work</h1>
                    <p className="md:text-base text-sm text-p_text">Unlock Unlimited Opportunities: Earn, Grow, and Thrive in Your Freelance Career!</p>
                    <div>
                        <button type="submit" className="btn md:btn-lg btn-md bg-primary_color text-neutral-50 rounded-full shadow-xl transform hover:shadow-md transition duration-300"><FaArrowRightLong className="text-2xl"/></button>
                    </div>
                </div>
                <div className="col-span-1">
                    <img src={img1} alt="" className="rounded-full"/>
                </div>
            </div>
        </div>
    );
};

export default Chooseprovider;