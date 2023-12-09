import { NavLink, useLoaderData } from "react-router-dom";
import { RiDeleteBin6Fill } from 'react-icons/ri';
import swal from 'sweetalert';
import { useState } from "react";


const gradientStyle = {
    background: 'linear-gradient(to right,#ac8d9a, #557c93)',
    /* Other CSS properties */
    
};

const gradientStyle1 = {
    background: 'linear-gradient(to right,#6d51a5, #751006)',
    /* Other CSS properties */
    
};


const Cart = () => {

    let chooseFood = useLoaderData();

    let [item, setItem] = useState(chooseFood);

    let handleDelete = (_id) => {

        console.log(_id);

        fetch(`https://spicy-food.vercel.app/cart/${_id}`, {

            method: 'DELETE'


        })
            .then(res => res.json())
            .then(data => {

                console.log(data);

                if (data.deletedCount > 0) {
                    swal("Good job!", " Item Deleted Successfully!", "success");

                    let remaining = item.filter(single => single._id != _id);
                    setItem(remaining)


                }
            })

    }


    return (

        // style={gradientStyle}

        <div  className="pt-5 pb-10">





            {
                item.length > 0 ? <div>


                    <h1 className="pt-10 pb-10 text-center text-3xl md:text-4xl font-extrabold text-[#d5b3e8] "> Cart Add Item: {item.length}</h1>


                    <div className="grid grid-cols-1 lg:grid-cols-2">




                        {
                            item.map(one => <div style={gradientStyle1} key={one._id} className="m-5 px-5 py-10 border-4 rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-16 ">

                                <div>
                                    <img className="rounded-lg w-full h-[200px]" src={one.photo} alt="" />
                                </div>

                                <div >

                                    <div className="text-black font-extrabold py-2">

                                        <h1>Name: {one.name}</h1>
                                        <h1>Price: {one.price}</h1>
                                        <h1>Brand: {one.brand}</h1>
                                        <h1>Type : {one.type}</h1>

                                    </div>


                                    <div className="flex justify-center md:justify-start font-bold">

                                        <button onClick={() => handleDelete(one._id)} className="btn bg-[#170101] hover:bg-[#170101] font-bold text-[orange] my-4">Delete <RiDeleteBin6Fill className="text-xl font-bold text-[#fb2e38]"></RiDeleteBin6Fill></button>

                                    </div>
                                </div>

                            </div>)
                        }



                    </div>





                </div>

                    :

                    <div className="card shadow-xl mx-12">

                        <h1 className="text-center font-extrabold text-3xl text-[orange] ">No food item can be added</h1>

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

export default Cart;



