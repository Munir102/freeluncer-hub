
import PropTypes from 'prop-types';
import { FaLocationDot } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";

const DeveloperCard = ({ name, designation, location, rating, workingType, active, image }) => {
    return (
        <div className="card w-[380px] p-1 bg-white rounded-lg border border-green_text  shadow-primary_color overflow-hidden hover:shadow-xl transition duration-300 transform hover:-translate-y-1 hover:scale-105 font-poppins">
            <div className="flex justify-center items-center p-4">
                <div className={`avatar w-[180px] h-[180px] border border-green_text rounded-full ${active ? 'online' : 'offline'}`}>
                    <img src={image} alt={name} className="w-full h-full rounded-full object-cover shadow-lg transform hover:shadow-md transition duration-300"/>
                </div>

            </div>
            
            <div className="card-body p-4 text-center">
                <h1 className="text-black_bg text-2xl font-bold mb-2">{name}</h1>
                <h2 className="text-xl font-semibold text-p_text mb-2">{designation}</h2>
                <div className="flex justify-center gap-2">
                    <FaStarHalfAlt className="text-[#facc15] mt-1 text-lg"/>
                    <h2 className="text-xl text-gray-700 mb-2">{rating }</h2>
                </div>
                <div className="flex justify-center gap-2 pb-2 text-p_text">
                    <FaLocationDot className=""/>
                    <h1 className="">{location}</h1>
                </div>
                <div className="working-type flex flex-wrap justify-center gap-2">
                    {workingType.map((type, index) => (
                        <span key={index} className="text-white px-4 py-2  border-primary_color rounded-md text-sm shadow-lg transform hover:shadow-md transition duration-300">{type}</span>
                    ))}
                </div>
            </div>
            <div className='btn bg-primary_color rounded-lg text-lg text-neutral-100 shadow-lg transform hover:shadow-md transition duration-300'>
                View Details
            </div>
        </div>
    );
};

DeveloperCard.propTypes = {
    name: PropTypes.string.isRequired,
    designation: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    workingType: PropTypes.arrayOf(PropTypes.string).isRequired,
    active: PropTypes.bool.isRequired,
    image: PropTypes.string.isRequired
};

export default DeveloperCard;


