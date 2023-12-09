
import chef1 from '../../../public/chef1.jpg'
import chef2 from '../../../public/chef2.jpg'
import chef3 from '../../../public/chef3.jpg'
import chef4 from '../../../public/chef4.jpg'

import { FaFacebookSquare, FaTwitterSquare, FaLinkedinIn, FaInstagram } from 'react-icons/fa';


const gradientStyle = {
    background: 'linear-gradient(to right,#6d51a5, #751006)',
    /* Other CSS properties */
    
};

const Chef = () => {

    return (

        <div className='pt-5 pb-10'>
            <h1 className="text-3xl md:text-4xl text-center font-extrabold text-[#d5b3e8] pt-10 pb-16">Our Talented Chef</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:px-8 px-5'>


                <div className="card w-full bg-base-100 shadow-xl">

                    <figure><img src={chef1} className='h-[250px]' alt="Shoes" /></figure>

                    <div className="card-body rounded-b-2xl text-[#d5b3e8]" style={gradientStyle}>

                        <h2 className="text-2xl font-extrabold">Mark Henry</h2>

                        <h2 className="text-xl font-bold">Chief chef</h2>

                 

                            <div className='flex items-center text-3xl font-bold text-[#d5b3e8] pt-2 space-x-2'>

                                <FaFacebookSquare></FaFacebookSquare>
                                <FaTwitterSquare></FaTwitterSquare>

                                <FaInstagram></FaInstagram>
                                <FaLinkedinIn></FaLinkedinIn>


                            </div>

                     

                    </div>
                </div>


                <div className="card w-full bg-base-100 shadow-xl">

                    <figure><img src={chef3} className='h-[250px]' alt="Shoes" /></figure>

                    <div className="card-body rounded-b-2xl text-[#d5b3e8]" style={gradientStyle}>

                        <h2 className="text-2xl font-extrabold">Luna Jefa</h2>

                        <h2 className="text-xl font-bold">Assistant chef</h2>

                 

                            <div className='flex items-center text-3xl font-bold text-[#d5b3e8] pt-2 space-x-2'>

                                <FaFacebookSquare></FaFacebookSquare>
                                <FaTwitterSquare></FaTwitterSquare>

                                <FaInstagram></FaInstagram>
                                <FaLinkedinIn></FaLinkedinIn>


                            </div>

                     

                    </div>
                </div>


                <div className="card w-full bg-base-100 shadow-xl">

                    <figure><img src={chef2} className='h-[250px]' alt="Shoes" /></figure>

                    <div className="card-body rounded-b-2xl text-[#d5b3e8]" style={gradientStyle}>

                        <h2 className="text-2xl font-extrabold">Jacof Marku</h2>

                        <h2 className="text-xl font-bold"> Assistant chef</h2>

                 

                            <div className='flex items-center text-3xl font-bold text-[#d5b3e8] pt-2 space-x-2'>

                                <FaFacebookSquare></FaFacebookSquare>
                                <FaTwitterSquare></FaTwitterSquare>

                                <FaInstagram></FaInstagram>
                                <FaLinkedinIn></FaLinkedinIn>


                            </div>

                     

                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl">

                    <figure><img src={chef4} className='h-[250px]' alt="Shoes" /></figure>

                    <div className="card-body rounded-b-2xl text-[#d5b3e8]" style={gradientStyle}>

                        <h2 className="text-2xl font-extrabold">Rom Paul</h2>

                        <h2 className="text-xl font-bold">Assistant chef</h2>

                 

                            <div className='flex items-center text-3xl font-bold text-[#d5b3e8] pt-2 space-x-2'>

                                <FaFacebookSquare></FaFacebookSquare>
                                <FaTwitterSquare></FaTwitterSquare>

                                <FaInstagram></FaInstagram>
                                <FaLinkedinIn></FaLinkedinIn>


                            </div>

                     

                    </div>
                </div>

              

            </div>
        </div>
    );
};

export default Chef;
