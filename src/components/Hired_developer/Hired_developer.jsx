
import Slider from 'react-slick';
import DeveloperCard from '../Reusable/Developer_card/DeveloperCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';


// Custom arrow components
const NextArrow = ({ onClick }) => {
    return (
        <div
            className="absolute top-[-50px] md:right-6 right-4 md:text-2xl text-md md:p-2 p-1 border rounded-full text-neutral-100 bg-primary_color cursor-pointer z-10 text-gray-700 hover:text-gray-900 shadow-lg transform hover:shadow-md transition duration-300"
            onClick={onClick}
        >
            <FaArrowRight />
        </div>
    );
};

const PrevArrow = ({ onClick }) => {
    return (
        <div
            className="absolute top-[-50px] right-24 md:text-2xl text-md md:p-2 p-1 border rounded-full text-neutral-100 bg-primary_color cursor-pointer z-10 text-gray-700 hover:text-gray-900 shadow-lg transform hover:shadow-md transition duration-300"
            onClick={onClick}
        >
            <FaArrowLeft />
        </div>
    );
};

const HiredDeveloper = () => {
    const devData = [
        { name: "John Doe", designation: "Senior Developer", location: "New York, USA", rating: 4.8, workingType: ["Remote", "Full-time"], active: true, image: "https://i.ibb.co/sCjR20B/1707069387113.jpg" },
        { name: "Jane Smith", designation: "Frontend Developer", location: "San Francisco, USA", rating: 4.5, workingType: ["Onsite", "Part-time"], active: false, image: "https://i.ibb.co/JKWmWtg/monir-pass.jpg" },
        { name: "Mike Johnson", designation: "Backend Developer", location: "Austin, USA", rating: 4.7, workingType: ["Remote", "Contract"], active: true, image: "https://via.placeholder.com/300" },
        { name: "Emily Davis", designation: "Full Stack Developer", location: "London, UK", rating: 4.9, workingType: ["Onsite", "Full-time"], active: true, image: "https://i.ibb.co/sCjR20B/1707069387113.jpg" },
        { name: "Chris Brown", designation: "Mobile Developer", location: "Toronto, Canada", rating: 4.6, workingType: ["Remote", "Part-time"], active: true, image: "https://via.placeholder.com/300" },
        { name: "Natalie Wilson", designation: "DevOps Engineer", location: "Sydney, Australia", rating: 4.7, workingType: ["Remote", "Contract"], active: false, image: "https://via.placeholder.com/300" },
        { name: "James Lee", designation: "QA Engineer", location: "Singapore", rating: 4.4, workingType: ["Onsite", "Full-time"], active: true, image: "https://via.placeholder.com/300" },
        { name: "Sophia Martinez", designation: "UI/UX Designer", location: "Berlin, Germany", rating: 4.5, workingType: ["Remote", "Part-time"], active: false, image: "https://via.placeholder.com/300" },
        { name: "Liam Harris", designation: "Data Scientist", location: "Paris, France", rating: 4.8, workingType: ["Remote", "Full-time"], active: true, image: "https://i.ibb.co/ZBDmRFg/monir-cv-removebg-preview.png" },
        { name: "Olivia Clark", designation: "Machine Learning Engineer", location: "Zurich, Switzerland", rating: 4.9, workingType: ["Onsite", "Full-time"], active: false, image: "https://i.ibb.co/ZBDmRFg/monir-cv-removebg-preview.png" },
        { name: "Noah Lewis", designation: "Software Architect", location: "Amsterdam, Netherlands", rating: 4.7, workingType: ["Remote", "Contract"], active: true, image: "https://via.placeholder.com/300" },
        { name: "Emma Walker", designation: "Database Administrator", location: "Dublin, Ireland", rating: 4.6, workingType: ["Onsite", "Full-time"], active: false, image: "https://via.placeholder.com/300" },
        { name: "Aiden Young", designation: "Systems Analyst", location: "Hong Kong", rating: 4.4, workingType: ["Remote", "Part-time"], active: true, image: "https://via.placeholder.com/300" },
        { name: "Mia King", designation: "Security Engineer", location: "Tokyo, Japan", rating: 4.8, workingType: ["Remote", "Contract"], active: false, image: "https://i.ibb.co/0XjvVRw/monir.png" },
        { name: "Ethan Scott", designation: "Network Engineer", location: "Seoul, South Korea", rating: 4.5, workingType: ["Onsite", "Full-time"], active: true, image: "https://via.placeholder.com/300" },
        { name: "Ava Adams", designation: "Cloud Engineer", location: "Melbourne, Australia", rating: 4.7, workingType: ["Remote", "Part-time"], active: false, image: "https://via.placeholder.com/300" },
        { name: "Lucas Robinson", designation: "AI Developer", location: "Stockholm, Sweden", rating: 4.9, workingType: ["Remote", "Full-time"], active: true, image: "https://i.ibb.co/0XjvVRw/monir.png" },
        { name: "Amelia Wright", designation: "Game Developer", location: "Barcelona, Spain", rating: 4.6, workingType: ["Onsite", "Full-time"], active: false, image: "https://via.placeholder.com/300" },
        { name: "Mason Green", designation: "Systems Engineer", location: "Munich, Germany", rating: 4.8, workingType: ["Remote", "Contract"], active: true, image: "https://via.placeholder.com/300" },
        { name: "Harper Baker", designation: "Blockchain Developer", location: "Dubai, UAE", rating: 4.7, workingType: ["Onsite", "Full-time"], active: false, image: "https://via.placeholder.com/300" }
    ];

    // Sort devData by rating from high to low
    devData.sort((a, b) => b.rating - a.rating);

    // Remove and get the highest rated developer
    const highestRatedDev = devData.shift(); 

    // Rest of the developers
    const otherDevs = devData; 

    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };

    return (
        <div className="font-poppins md:mt-24 mt-4 md:p-2 p-4 flex flex-col gap-8">
            <div className="text-center mb-8">
                <h1 className="md:text-4xl text-2xl text-primary_font font-semibold md:my-3 my-2">Most Hired Developers</h1>
                <p className="md:text-base text-xs text-p_text">Work with our most talented people at the most affordable price</p>
            </div>
            <Slider {...settings} className="gap-4">
                {highestRatedDev && (
                    <div key="highest-rated" className="p-2 md:my-2 my-1 ml-2">
                        <DeveloperCard
                            name={highestRatedDev.name}
                            designation={highestRatedDev.designation}
                            location={highestRatedDev.location}
                            rating={highestRatedDev.rating}
                            workingType={highestRatedDev.workingType}
                            active={highestRatedDev.active}
                            image={highestRatedDev.image}
                        />
                    </div>
                )}
                {otherDevs.map((card, index) => (
                    card && (
                        <div key={index} className="p-2 md:my-2 my-1 ml-2">
                            <DeveloperCard
                                name={card.name}
                                designation={card.designation}
                                location={card.location}
                                rating={card.rating}
                                workingType={card.workingType}
                                active={card.active}
                                image={card.image}
                            />
                        </div>
                    )
                ))}
            </Slider>
        </div>
    );
};

export default HiredDeveloper;
