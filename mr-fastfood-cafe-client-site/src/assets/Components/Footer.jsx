
import logo from '../../../public/cafe_logo.png'

import { FaFacebookSquare, FaTwitterSquare, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

import { BsFillTelephoneFill } from 'react-icons/bs';
import { FiMessageSquare } from 'react-icons/fi';
import { ImLocation2 } from 'react-icons/im';



const Footer = () => {

    return (

        // bg-[#170101]

        <div className=' pt-16 '>

            <div className='px-5 py-14 grid grid-cols-1 md:grid-cols-2 items-center  md:px-14 lg:px-28 xl:px-40 '>


                <div>


                    <img className='w-[100px] h-[100px]' src={logo} alt="" />

                    <div>
                        <h1 className='text-3xl font-extrabold text-[orange]'>Spicy Food</h1>


                    </div>



                    {/* address */}

                    <div>

                        <h1 className='text-xl font-extrabold text-[#a83e28]  mt-6 pb-2'>Get In Touch</h1>

                        <div className='flex text-black dark:text-white items-center gap-2 py-1'>

                            <BsFillTelephoneFill></BsFillTelephoneFill>

                            <h1 className='font-bold '>+88 01533 333 333</h1>

                        </div>

                        <div className='flex text-black dark:text-white items-center gap-2 py-1'>

                            <FiMessageSquare></FiMessageSquare>

                            <h1 className='font-bold '>info@gmail.com</h1>

                        </div>

                        <div className='flex text-black dark:text-white items-center gap-2 py-1'>

                            <ImLocation2></ImLocation2>

                            <h1 className='font-bold '>72, Abu Naser Stadium Goli, Khulna</h1>

                        </div>


                    </div>

                    {/* social logo */}

                    <div className='flex items-center text-3xl font-bold text-black dark:text-white pt-2 space-x-2'>

                        <FaFacebookSquare></FaFacebookSquare>
                        <FaTwitterSquare></FaTwitterSquare>

                        <FaInstagram></FaInstagram>
                        <FaLinkedinIn></FaLinkedinIn>


                    </div>

                </div>


                <div className='flex xl:justify-end'>

                    <div>
                        <h1 className='text-3xl text-[#a83e28] font-bold pt-5 pb-10'>Connect With Us</h1>

                        <div className='grid grid-cols-1 gap-2 text-black dark:text-white ' >

                            <input className='p-2 rounded-lg xl:w-[400px] bg-[#634545] dark:bg-white' type="text" placeholder='name' name="" id="" />
                            <input className='p-2 rounded-lg xl:w-[400px] bg-[#634545] dark:bg-white' type="text" placeholder='email' name="" id="" />
                            <input className='p-2 rounded-lg xl:w-[400px] h-[80px] bg-[#634545] dark:bg-white' type="text" placeholder='message' name="" id="" />

                            <button className='btn bg-[#8f3e19] xl:w-[400px] text-black dark:text-white'>
                                <input type="submit" value='send message' name="" id="" />
                            </button>

                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Footer;