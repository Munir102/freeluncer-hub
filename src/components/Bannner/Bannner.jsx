import banner from '../../assets/banner_bg.gif';
import { FaStar } from "react-icons/fa";

const Bannner = () => {
    return (
        <div className='font-poppins text-primary_font grid md:grid-cols-3 grid-cols-1 gap-2 p-2 items-center'>
            <div className='flex flex-col md:col-span-2 leading-[80px]'>
                <div className='flex gap-2 items-center'>
                    <div className='flex gap-1'>
                        <FaStar className='text-primary_color'/>
                        <FaStar className='text-primary_color'/>
                        <FaStar className='text-primary_color'/>
                        <FaStar className='text-primary_color'/>
                    </div>
                    <p className='text-p_text font-medium'>TRUSED BY OVER 2M+ USERS</p>
                </div>
                <h1 className='text-6xl font-bold leading-[70px]'>Get the Perfect <br /><span className='text-primary_color'>Developers & Projects</span></h1>
                <p className='text-p_text font-medium'>With the Bangladesh #1 Developers marketplace</p>
            </div>
            <div className=''>
                <img src={banner} alt="" />
            </div>
        </div>
    );
};

export default Bannner;