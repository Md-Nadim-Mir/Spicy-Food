
import { NavLink } from 'react-router-dom';
import e404 from '../../../public/404.gif'

import { AiOutlineArrowLeft } from "react-icons/ai";

const ErrorPage = () => {

    return (

        <div>

            <div className='text-center  text-black font-bold pt-10'>

                <NavLink to='/'>

                    <p className='flex justify-center items-center gap-2 text-2xl'> <span className='text-[green] font-extrabold '><AiOutlineArrowLeft></AiOutlineArrowLeft></span> Back to home</p>
                </NavLink>

            </div>


            <div className='flex justify-center'>
                <img src={e404} alt="" />
            </div>

        </div>
    );
};

export default ErrorPage;