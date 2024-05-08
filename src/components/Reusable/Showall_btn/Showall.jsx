import PropTypes from 'prop-types';

const Showall = ({ onClick }) => {
    return (
        <div className="font-poppins">
            <button 
                onClick={onClick}
                className="btn bg-primary_color text-neutral-50 md:text-lg text-base font-semibold px-7 shadow-xl transform hover:shadow-md transition duration-300">
                Show all
            </button>
        </div>
    );
};

Showall.propTypes = {
    onClick: PropTypes.string.isRequired,
};



export default Showall;
