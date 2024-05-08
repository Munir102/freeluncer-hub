import CountDownCard from "../Reusable/Countdown_card/CountDownCard";
import { VscProject } from "react-icons/vsc";




const Countdown = () => {

    const cardsData = [
        { number: "1200", title: "Freelance Developers", icon: <VscProject />},
        { number: "1020", title: "Developers Per Project", icon: <VscProject />},
        { number: "75495", title: "Completed Projects", icon: <VscProject />},
    ];

    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-12 gap-4 font-poppins text-primary_font md:mt-20 mt-4 p-2">
            {cardsData.map((card, index) => (
                <div key={index} className="flex flex-col items-center">
                    <CountDownCard number={card.number} title={card.title} icon={card.icon} />
                </div>
            ))}
        </div>
    );
};

export default Countdown;
