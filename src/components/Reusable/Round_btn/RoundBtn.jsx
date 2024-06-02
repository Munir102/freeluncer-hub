import { FaArrowRightLong } from "react-icons/fa6";

const Roundbtn = () => {
    return (
        <div>
            <button className="btn md:btn-lg btn-md bg-neutral-50 text-primary_color rounded-full shadow-xl transform hover:shadow-md transition duration-300">
                <FaArrowRightLong className="text-3xl" />
            </button>
        </div>
    );
};

export default Roundbtn;
