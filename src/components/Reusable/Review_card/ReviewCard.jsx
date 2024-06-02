import PropTypes from 'prop-types';
import { FaStarHalfAlt } from "react-icons/fa";

const truncateText = (text) => {
    const words = text.split(' ');
    if (words.length > 14) {
        return words.slice(0, 14).join(' ') + '...';
    }
    return text;
};

const ReviewCard = ({ name, designation, review, image, rating }) => {
    return (
        <div className="card bg-white rounded-lg shadow-lg p-4 h-48 overflow-hidden hover:shadow-xl transition duration-300 transform hover:-translate-y-1 hover:border-l-2 hover:border-primary_color hover:scale-105 font-poppins">
            <div className="grid grid-cols-4 mb-4">
                <div className="col-span-3 flex">
                    {image && <img src={image} alt={name} className="w-16 h-16 rounded-full mr-4" />}   
                    <div className="flex flex-col">
                        <h2 className="text-xl font-semibold">{name}</h2>
                        <p className="text-primary_font">{designation}</p>
                    </div>
                </div>
                <div
                    className="col-span-1 flex justify-center gap-2">
                    <FaStarHalfAlt className="text-[#facc15] mt-1 text-lg"/>
                    <h2 className="text-xl text-gray-700 mb-2">{rating }</h2>
            
                </div>
            </div>
            <p className="text-p_text pb-4">{truncateText(review)}</p>
        </div>
    );
};

ReviewCard.propTypes = {
    name: PropTypes.string.isRequired,
    designation: PropTypes.string.isRequired,
    review: PropTypes.string.isRequired,    
    image: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired
};

export default ReviewCard;
