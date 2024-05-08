
import banner from '../../assets/banner_bg.gif';
import { FaStar } from "react-icons/fa";
import SearchBtn from '../Reusable/Search_btn/SearchBtn';

const Bannner = () => {

    

    return (
        <div className='font-poppins text-primary_font grid md:grid-cols-3 grid-cols-1 gap-2 md:p-2 p-4 items-center md:text-left text-center md:my-20 my-6'>
            <div className='flex flex-col md:col-span-2 md:leading-[80px] gap-4'>
                <div className='flex gap-2 items-center md:justify-start justify-center'>
                    <div className='flex gap-1'>
                        <FaStar className='text-primary_color'/>
                        <FaStar className='text-primary_color'/>
                        <FaStar className='text-primary_color'/>
                        <FaStar className='text-primary_color'/>
                    </div>
                    <p className='text-p_text font-medium md:text-base text-sm'>TRUSED BY OVER 2M+ USERS</p>
                </div>
                <h1 className='md:text-6xl text-4xl font-bold md:leading-[70px] leading-[50px]'>Get the Perfect <br /><span className='text-primary_color'>Developers & Projects</span></h1>
                <p className='text-p_text font-medium md:text-base text-sm'>With the Bangladeshi #1 Developers marketplace</p>
                <SearchBtn></SearchBtn>
            </div>
            <div className=''>
                <img src={banner} alt="" />
            </div>
        </div>
    );
};

export default Bannner;