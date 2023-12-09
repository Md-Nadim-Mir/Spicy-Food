import { FaFacebookSquare, FaTwitterSquare, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

import './Banner.css'

const Banner = () => {

    return (



        <div className="banner_img h-[80vh] text-center ">



            <div className="px-2 py-3 xl:pt-10 bg-opacity-50 bg-[gray] h-[80vh]">

                <h1 className='text-3xl font-extrabold pt-16 lg:pt-28 text-[#d5b3e8]'>Would you like a Delicious Fast Food ?</h1>

                <p className="text-[#d5b3e8] text-[12px]  font-extrabold pt-3 py-2">It's proper time - taste & Savor - Relaxation in every sip!  Get the nostalgia back!! Your companion <br />  of every moment!!! Enjoy the beautiful  moments and make them memorable.</p>

                

                <div className='flex justify-center  items-center text-3xl font-bold text-[#d5b3e8]  pt-4 space-x-4'>

                    <FaFacebookSquare></FaFacebookSquare>
                    <FaTwitterSquare></FaTwitterSquare>

                    <FaInstagram></FaInstagram>
                    <FaLinkedinIn></FaLinkedinIn>


                </div>

                <button className="btn bg-[#43321b] hover:bg-[#43321b] mt-5 p-2 rounded-md font-bold text-[#d5b3e8]">Learn More</button>
            </div>

        </div>

    );
};

export default Banner;