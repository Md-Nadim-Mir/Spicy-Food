
import { NavLink, useLoaderData } from "react-router-dom";
import { FcRating } from 'react-icons/fc';


// slider part
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css/bundle';

import AOS from 'aos';
import 'aos/dist/aos.css';

// slider part




// image

import c1 from '../../../public/c1.jpg'
import c2 from '../../../public/c2.jpg'
import c3 from '../../../public/c3.jpg'
import c4 from '../../../public/c4.jpg'
import b2 from '../../../public/b2.jpg'
import b3 from '../../../public/b3.jpg'

import bu2 from '../../../public/burger.jpg'
import p4 from '../../../public/p4.jpg'
import f1 from '../../../public/fish.jpg'
import d4 from '../../../public/d4.jpg'

import axios from "axios";

const gradientStyle = {
    background: 'linear-gradient(to right,#ac8d9a, #557c93)',
    /* Other CSS properties */
    
};

const gradientStyle1 = {
    background: 'linear-gradient(to right,#6d51a5, #751006)',
    /* Other CSS properties */
    
};

const Brand_Details = () => {

    let url = useLoaderData();
     console.log(url);

     let [categoryData,setCategoryData]=useState([]);

     useEffect(()=>{

        fetch(url)
        .then(res=>res.json())
        .then(data=>setCategoryData(data))

       
        


     },[url])


    useEffect(() => {

        AOS.init({ duration: 2500 });

    }, [])



    return (

        // style={gradientStyle}

        <div  className="-mb-20 pb-24">


            {/* slider added */}


            <div className="pt-24 lg:pt-10">


                {/* swiper slider */}

                <Swiper

                    modules={[Navigation, Pagination, Autoplay, A11y]}

                    centeredSlides={true}

                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}

                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={{ clickable: true }}

                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
                >



                    {/* 1 */}

                    <SwiperSlide>

                        <div>
                            <div className='flex justify-center px-3 md:px-5 lg:px-8 xl:px-10'>

                                <img className='w-full h-[500px]  rounded-md mb-9' src={c1} alt="" />

                            </div>




                        </div>

                    </SwiperSlide>


                    {/* 2*/}

                    <SwiperSlide>

                        <div>
                            <div className='flex justify-center px-3 md:px-5 lg:px-8 xl:px-10'>

                                <img className='w-full h-[500px]  rounded-md mb-9' src={b2} alt="" />

                            </div>




                        </div>

                    </SwiperSlide>


                    {/*3*/}

                    <SwiperSlide>

                        <div>
                            <div className='flex justify-center px-3 md:px-5 lg:px-8 xl:px-10'>

                                <img className='w-full h-[500px]  rounded-md mb-9' src={c3} alt="" />

                            </div>




                        </div>

                    </SwiperSlide>



                    <SwiperSlide>

                        <div>
                            <div className='flex justify-center px-3 md:px-5 lg:px-8 xl:px-10'>

                                <img className='w-full h-[500px]  rounded-md mb-9' src={bu2} alt="" />

                            </div>




                        </div>

                    </SwiperSlide>


                    {/*4*/}

                    <SwiperSlide>

                        <div>
                            <div className='flex justify-center px-3 md:px-5 lg:px-8 xl:px-10'>

                                <img className='w-full h-[500px]  rounded-md mb-9' src={c4} alt="" />

                            </div>




                        </div>

                    </SwiperSlide>




                    {/*5*/}

                    <SwiperSlide>

                        <div>
                            <div className='flex justify-center px-3 md:px-5 lg:px-8 xl:px-10'>

                                <img className='w-full h-[500px]  rounded-md mb-9' src={b3} alt="" />

                            </div>




                        </div>

                    </SwiperSlide>


                    {/*5*/}

                    <SwiperSlide>

                        <div>
                            <div className='flex justify-center px-3 md:px-5 lg:px-8 xl:px-10'>

                                <img className='w-full h-[500px]  rounded-md mb-9' src={b2} alt="" />

                            </div>




                        </div>

                    </SwiperSlide>


                    <SwiperSlide>

                        <div>
                            <div className='flex justify-center px-3 md:px-5 lg:px-8 xl:px-10'>

                                <img className='w-full h-[500px]  rounded-md mb-9' src={p4} alt="" />

                            </div>




                        </div>

                    </SwiperSlide>




                    <SwiperSlide>

                        <div>
                            <div className='flex justify-center px-3 md:px-5 lg:px-8 xl:px-10'>

                                <img className='w-full h-[500px]  rounded-md mb-9' src={f1} alt="" />

                            </div>




                        </div>

                    </SwiperSlide>



                    <SwiperSlide>

                        <div>
                            <div className='flex justify-center px-3 md:px-5 lg:px-8 xl:px-10'>

                                <img className='w-full h-[500px]  rounded-md mb-9' src={d4} alt="" />

                            </div>




                        </div>

                    </SwiperSlide>












                </Swiper>












            </div>

         


            <h1 className="text-2xl md:text-4xl text-center font-extrabold text-[#d5b3e8] pt-10">Featured Food</h1>


            {
                categoryData.length > 0 ?

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-2 md:mx-5  lg:mx-6 xl:mx-10 my-16">



                        {


                            categoryData.map(k => <div key={k._id} className="card w-full bg-base-100 shadow-xl">

                                <figure >

                                    <img className='w-[400px] h-[200px]' src={k.photo} alt="Shoes" />
                                </figure>



                                <div style={gradientStyle1} className="card-body rounded-b-2xl">



                                    <h1 className="font-extrabold text-[#d5b3e8] text-xl">Name: {k.name}</h1>



                                    <div className="flex items-center justify-between font-bold text-[#d5b3e8] mt-2">


                                        <h1 className="">Brand: {k.brand}</h1>

                                        <span className="flex items-center gap-2 font-bold"><FcRating></FcRating> {k.rating}</span>

                                    </div>





                                    <div className="flex items-center justify-between font-bold text-[#d5b3e8]">

                                        <h1>Price: {k.price} tk</h1>
                                        <h1>Type : {k.type}</h1>

                                    </div>




                                    <div className="flex items-center justify-between font-bold gap-2 pt-4">

                                        <NavLink to={`/food/${k.brand}/${k._id}`}>
                                            <button className="btn bg-[#170101] hover:bg-[#170101] font-bold text-[orange] my-4 ">Details</button>

                                        </NavLink>

                                        <NavLink to={`/update/${k.brand}/${k._id}`}>

                                            <button className="btn bg-[#170101] hover:bg-[#170101] font-bold text-[orange] my-4 ">
                                                Update</button>

                                        </NavLink>

                                    </div>




                                </div>

                            </div>

                            )



                        }



                    </div>

                    :

                    <div className="card shadow-xl mx-12 my-16">

                        <h1 className="text-center font-extrabold text-3xl text-[orange]">No data can be added</h1>

                        <NavLink className='flex justify-center py-10' to='/'>

                            <button className="btn bg-[#170101] hover:bg-[#170101] text-[orange]">

                                go to home

                            </button>

                        </NavLink>

                    </div>
            }






        </div>
    );
};

export default Brand_Details;