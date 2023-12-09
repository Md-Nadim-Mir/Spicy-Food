import { Link } from "react-router-dom";

const gradientStyle = {
    background: 'linear-gradient(to right,#6d51a5, #751006)',
    /* Other CSS properties */
    
};


const Brand_Data_Show = ({brandData}) => {

    let {brand,image}=brandData;

    // console.log(brandData)

    return (

        <div>


            <Link to={`/food/${brand}`}>


                <div className="card w-full bg-base-100 shadow-xl">

                    <figure >

                        <img className='w-[400px] h-[200px]' src={image} alt="Shoes" />
                    </figure>

                    <div className="card-body rounded-b-2xl" style={gradientStyle}>
                        <h2 className="font-bold text-xl text-[#d5b3e8]"> Brand: <span className=''>{brand}</span></h2>

                    </div>
                </div>


            </Link>

        </div>
    );
};

export default Brand_Data_Show;