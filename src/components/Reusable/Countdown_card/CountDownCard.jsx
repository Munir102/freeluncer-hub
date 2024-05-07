
import PropTypes from 'prop-types';
import CountUp from 'react-countup';

const CountDownCard = ({ number, title, icon }) => {
    return (
        <div className="card relative w-96 bg-white rounded-lg shadow-sm shadow-primary_color overflow-hidden hover:shadow-xl transition duration-300 transform hover:-translate-y-1 hover:scale-105">
            <div className="card-body flex justify-center items-center gap-4">
                <h1 className='text-primary_color border-2 rounded-full p-6 text-3xl'>{icon}</h1>
                <h1 className="text-3xl font-bold hover:text-primary_color transition duration-300">
                    <CountUp start={0} end={parseInt(number)} delay={0.15} />
                </h1>
                <p className="text-p_text font-medium md:text-base text-sm">{title}</p>
            </div>
        </div>
    );
};

CountDownCard.propTypes = {
    number: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired
};

export default CountDownCard;
