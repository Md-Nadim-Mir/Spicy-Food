import React, { useEffect, useState } from 'react';
import Brand_Data_Show from './Brand_Data_Show';

const Brand = () => {

    // let brandInfo = useLoaderData();
    // // console.log(brandInfo)

    let [brandInfo,setBrandInfo]=useState([]);

    useEffect( ()=>{

        fetch('https://spicy-food.vercel.app/brand')
        .then(res=>res.json())
        .then(data=>setBrandInfo(data))

    },[])

    return (
        <div>
            <h1 className="mt-10 text-3xl md:text-4xl text-center font-extrabold text-[#d5b3e8]">Our Popular Brand</h1>


            <div className='py-16 md:px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mx-2'>



            {

                brandInfo.map(brandData=>  <Brand_Data_Show key={brandData._id} brandData={brandData}></Brand_Data_Show>)

            }






            </div>
        </div>
    );
};

export default Brand;