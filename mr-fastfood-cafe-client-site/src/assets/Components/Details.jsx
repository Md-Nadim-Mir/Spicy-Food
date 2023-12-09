import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import swal from 'sweetalert';


const gradientStyle = {
    background: 'linear-gradient(to right,#ac8d9a, #557c93)',
    /* Other CSS properties */
    
};

const gradientStyle1 = {
    background: 'linear-gradient(to right,#6d51a5, #751006)',
    /* Other CSS properties */
    
};


const Details = () => {

    let foodInfo = useLoaderData();

    let {name,price,brand,type,description,rating,photo}=foodInfo;

    let addfood={name,price,brand,type,description,rating,photo};
  
   


    let handleAddToCart=(all)=>{


     console.log(all)


        fetch('https://spicy-food.vercel.app/cart',{
           
        method:'post',
            headers:{
               'content-type':'application/json'
            },
            body: JSON.stringify(all)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);

            if(data.insertedId){

                swal("Good job!", "Food item added to cart!", "success");
               
            }
        })

    }

    return (

        // style={gradientStyle}

        <div   className="-mb-10 pb-20">
           

             <h1 className="md:text-5xl text-center font-extrabold  py-5 text-[#ff512e]">{addfood.name}</h1>

            <div style={gradientStyle1} className="m-5 px-5 py-10 border-4 rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-16">

                <div>
                    <img className="rounded-lg w-full h-[300px]" src={addfood.photo} alt="" />
                </div>

                <div>

                    <div className="font-extrabold text-[#d5b3e8] py-2">

                        <h1>Price: {addfood.price} tk</h1>
                        <h1>Brand: {addfood.brand}</h1>
                        <h1>Type : {addfood.type}</h1>
                        <h1>Rating : 5 out of {addfood.rating} </h1>
                    </div>

                    <div className="py-5 text-[#d5b3e8]">
                        <h1 className="text-xl font-bold">Description:</h1>
                        <h1 className="font-[500]">{addfood.description}</h1>
                    </div>


                    <div className="flex justify-center md:justify-start font-bold">

                        <button onClick={()=>handleAddToCart(addfood)} className="btn bg-[#170101] hover:bg-[#170101] font-bold text-[orange] my-4">Add to cart</button>

                    </div>
                </div>




            </div>

        </div>
    );
};

export default Details;