import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Form, NavLink } from "react-router-dom";
import swal from 'sweetalert';


import './Add_Update.css'

const gradientStyle1 = {
    background: 'linear-gradient(to right,#6d51a5, #751006)',
    /* Other CSS properties */
    
};


const Update = () => {

    let updateInfo = useLoaderData();

    let { _id,brand, description, name, photo, price, rating, type } = updateInfo;

    let handleUpdateProduct = (e) => {

        e.preventDefault();

        let name = e.target.name.value;
        let price = e.target.price.value;

        let brand = e.target.brand.value;
        let type = e.target.type.value;


        let description = e.target.description.value;
        let rating = e.target.rating.value;


        let photo = e.target.photo.value;

        let updateFood = { name, price, brand, type, description, rating, photo }

        console.log(updateFood);

        // e.target.reset();


        // post method work 

        fetch(`https://spicy-food.vercel.app/food/${updateInfo.brand}/${updateInfo._id}`, {

            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateFood)

        })
            .then(res => res.json())
            .then(data => {

                console.log(data);
               

                if (data.modifiedCount) {

                    swal("Good job!", "Food update Successfully!", "success");

                   

                }
            })



    }

    return (

        <div className="bg_img md:py-36 py-14">


            <div style={gradientStyle1} className="text-center mx-2 md:mx-14 lg:mx-24 xl:mx-60   rounded-2xl">

                <h1 className="py-14 text-3xl md:text-4xl font-extrabold text-[#EA593C]">Update Food Item</h1>


                <Form onSubmit={handleUpdateProduct} className="py-8 px-12">

                    {/* row 1 */}

                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12 font-bold">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>

                            <input type="text" name='name' placeholder="Enter Food name" defaultValue={name} className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" defaultValue={price} name='price' placeholder="Enter Food Price" className="input input-bordered" required />
                        </div>
                    </div>




                    {/* {row 2} */}

                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12 font-bold">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Brand</span>
                            </label>



                            <select defaultValue={brand} className="p-3 rounded-md" name="brand" id="">

                                <option className="font-bold"></option>
                                <option className="font-bold">KFC</option>
                                <option className="font-bold">BURGER_KING</option>
                                <option className="font-bold">PIZZA_HUT</option>
                                <option className="font-bold">Mc_DONALD_S</option>
                                <option className="font-bold">Kazi_Farms_Kitchen</option>
                                <option className="font-bold">Nondo_s</option>
                                <option className="font-bold">SUBWAY</option>
                                <option className="font-bold">AFC</option>




                            </select>

                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Type</span>
                            </label>
                            <input type="text" defaultValue={type} name='type' placeholder="Enter Food Type" className="input input-bordered" required />
                        </div>
                    </div>


                    {/* {row 3} */}

                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12 font-bold">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Short Description</span>
                            </label>

                            <input type="text" defaultValue={description} name='description' placeholder="Write Short Description" className="input input-bordered" required />
                        </div>

                        <div className="form-control">

                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>

                            <input type="text" defaultValue={rating} name='rating' placeholder="Give Rating between 1 to 5" className="input input-bordered" required />

                        </div>
                    </div>


                    {/* {row 4} */}

                    <div className="grid grid-cols-1 font-bold">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>

                            <input type="text" defaultValue={photo} name='photo' placeholder="Enter Food Photo URL" className="input input-bordered" required />
                        </div>




                    </div>


                    <div>



                        <button className='btn bg-[#170101] hover:bg-[#170101] text-xl font-extrabold text-[orange]   my-7'>

                            <input type="submit" name="" value='Update Food' id="" />

                        </button>





                    </div>



                </Form>


            </div>

        </div>
    );
};

export default Update;