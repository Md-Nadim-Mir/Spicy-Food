
import food from '../../../public/food.png'
import delivery from '../../../public/delivery.png'
import payment from '../../../public/payment.png'
import enjoy from '../../../public/enjoy.png'


const gradientStyle = {
    background: 'linear-gradient(to right,#6d51a5, #751006)',
    /* Other CSS properties */
    
};

const Delivery = () => {


    return (

        <div className="pt-14 pb-20">
            <h1 className="text-3xl md:text-4xl text-center font-extrabold text-[#d5b3e8] mt-10 mb-16">How Serve Food ?</h1>

           
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-5  md:px-8  gap-4'>


                <div  style={gradientStyle} className='card bg-base-100 shadow-2xl p-5 mx-2 flex flex-col items-center'>

                    <img className='h-[170px]' src={food} alt="" />
                    <h1 className='font-extrabold text-xl pt-4 text-[#d5b3e8] text-center'>Choose Your Favourite Food</h1>

                </div>


                <div style={gradientStyle} className='card bg-base-100 shadow-2xl p-5 mx-2 flex flex-col items-center'>

                    <img className='h-[170px]' src={delivery} alt="" />
                    <h1 className='font-extrabold text-xl pt-4 text-[#d5b3e8] text-center'>Free And Fast Delivery</h1>

                </div>



                <div style={gradientStyle} className='card bg-base-100 shadow-2xl p-5 mx-2 flex flex-col items-center'>

                    <img className='h-[170px]' src={payment} alt="" />
                    <h1 className='font-extrabold text-xl pt-4 text-[#d5b3e8] text-center'>Easy Payment Methods</h1>

                </div>


                <div style={gradientStyle} className='card bg-base-100 shadow-2xl p-5 mx-2 flex flex-col items-center'>

                    <img className='h-[170px]' src={enjoy} alt="" />
                    <h1 className='font-extrabold text-xl pt-4 text-[#d5b3e8] text-center'>And Finally , Enjoy Your Food</h1>

                </div>



            </div>
        </div>
    );
};

export default Delivery;