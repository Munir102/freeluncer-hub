import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import ReviewCard from '../Reusable/Review_card/ReviewCard';


// Custom arrow components
const NextArrow = ({ onClick }) => {
    return (
        <div
            className="absolute top-[-50px] md:right-6 right-4 md:p-2 p-1 md:text-2xl text-md border rounded-full text-neutral-100 bg-primary_color cursor-pointer z-10 text-gray-700 hover:text-gray-900 shadow-lg transform hover:shadow-md transition duration-300"
            onClick={onClick}
        >
            <FaArrowRight />
        </div>
    );
};

const PrevArrow = ({ onClick }) => {
    return (
        <div
            className="absolute top-[-50px] right-20 md:text-2xl text-md md:p-2 p-1 border rounded-full text-neutral-100 bg-primary_color cursor-pointer z-10 text-gray-700 hover:text-gray-900 shadow-lg transform hover:shadow-md transition duration-300"
            onClick={onClick}
        >
            <FaArrowLeft />
        </div>
    );
};

const TopReview = () => {

    const topReview = [
        {
            name: "John Doe",
            designation: "Senior Developer",
            review: "John is an exceptional developer. His attention to detail and problem-solving skills are top-notch.",
            image: "https://i.ibb.co/ZBDmRFg/monir-cv-removebg-preview.png",
            rating: 4.5
        },
        {
            name: "Jane Smith",
            designation: "Frontend Developer",
            review: "Jane is a talented frontend developer. Her designs are always creative and user-friendly.",
            image: "https://i.ibb.co/ZBDmRFg/monir-cv-removebg-preview.png",
            rating: 4.5
        },
        {
            name: "Mike Johnson",
            designation: "Backend Developer",
            review: "Mike is a backend wizard. He's able to optimize even the most complex database queries.",
            image: "https://i.ibb.co/ZBDmRFg/monir-cv-removebg-preview.png",
            rating: 4.5
        },
        {
            name: "Emily Davis",
            designation: "Full Stack Developer",
            review: "Emily is a versatile full stack developer. She excels in both frontend and backend development.",
            image: "https://i.ibb.co/ZBDmRFg/monir-cv-removebg-preview.png",
            rating: 4.6
        },
        {
            name: "Chris Brown",
            designation: "Mobile Developer",
            review: "Chris is an expert mobile developer. His apps are intuitive and performant.",
            image: "https://i.ibb.co/ZBDmRFg/monir-cv-removebg-preview.png",
            rating: 4.4
        },
        {
            name: "Natalie Wilson",
            designation: "DevOps Engineer",
            review: "Natalie is a reliable DevOps engineer. She ensures our deployment pipelines are always running smoothly.",
            image: "https://i.ibb.co/ZBDmRFg/monir-cv-removebg-preview.png",
            rating: 4.2
        },
        {
            name: "James Lee",
            designation: "QA Engineer",
            review: "James is a meticulous QA engineer. He's able to find even the most elusive bugs in our code.",
            image: "https://i.ibb.co/ZBDmRFg/monir-cv-removebg-preview.png",
            rating: 4.8
        },
        {
            name: "Sophia Martinez",
            designation: "UI/UX Designer",
            review: "Sophia's designs are stunning. She has a keen eye for aesthetics and user experience.",
            image: "https://i.ibb.co/ZBDmRFg/monir-cv-removebg-preview.png",
            rating: 4.5
        },
        {
            name: "Liam Harris",
            designation: "Data Scientist",
            review: "Liam is a brilliant data scientist. His analyses provide valuable insights for our business.",
            image: "https://i.ibb.co/ZBDmRFg/monir-cv-removebg-preview.png",
            rating: 4.5
        },
        {
            name: "Olivia Clark",
            designation: "Machine Learning Eng.",
            review: "Olivia is a machine learning whiz. She's able to develop models that outperform state-of-the-art algorithms.",
            image: "https://i.ibb.co/ZBDmRFg/monir-cv-removebg-preview.png",
            rating: 4.7
        }
    ];

    // Sort devData by rating from high to low
    topReview.sort((a, b) => b.rating - a.rating);

    // Remove and get the highest rated developer
    const topRaviewer = topReview.shift(); 

    // Rest of the developers
    const otherReviewer = topReview;

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
                <h1 className="md:text-4xl text-2xl text-primary_font font-semibold md:my-3 my-2">Top Review</h1>
                <p className="md:text-base text-xs text-p_text">Discover Excellence: Unveiling Our Top Reviews 🌟</p>
            </div>
            <Slider {...settings} className="gap-4">
                {topRaviewer && (
                    <div key="highest-rated" className="p-4 md:my-2 my-1 ml-1">
                        <ReviewCard
                            name={topRaviewer.name}
                            designation={topRaviewer.designation}
                            review={topRaviewer.review}
                            image={topRaviewer.image}
                            rating={topRaviewer.rating}
                        />
                    </div>
                )}
                {otherReviewer.map((card, index) => (
                    card && (
                        <div key={index} className="p-4 md:my-2 my-1 ml-1">
                            <ReviewCard
                                name={card.name}
                                designation={card.designation}
                                review={card.review}
                                image={card.image}
                                rating={card.rating}
                            />
                        </div>
                    )
                ))}
            </Slider>
        </div>
    );
};

export default TopReview;