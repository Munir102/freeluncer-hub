import img from "../../assets/Email campaign-amico.png"
import SubscribeOption from "../Reusable/Subscribe_option/SubscribeOption";


const Subcribe = () => {
    <style>
        .leading{
            
        }
    </style>
    return (
        <div className="grid md:grid-cols-4 bg-primary_color md:p-20 p-10 md:px-40 px-0 md:mt-24 mt-4 font-poppins md:gap-24 text-green_bg md:text-left text-center md:items-start items-center">

            <div className="md:col-span-1 md:p-0 p-16">
                <img src={img} alt="" />
            </div>

            <div className="md:col-span-3 flex flex-col md:pl-24 pl-0 md:gap-6 gap-4">
                <h1 className="md:text-[48px] text-[24px] font-bold md:leading-[60px] leading-[36px]">Subscribe for Discounts, <br />Updates & More!</h1>
                <p className="md:text-base text-sm">Stay Ahead of the Curve: Monthly Product Updates, Industry Insights, and More!</p>
                <div className="flex md:justify-start justify-center">
                    <SubscribeOption></SubscribeOption>
                </div>
            </div>


        </div>
    );
};

export default Subcribe;