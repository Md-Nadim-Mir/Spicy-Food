import { NavLink } from 'react-router-dom';
import logo from '../../../public/cafe_logo.png'
import './Navbar.css'


import profile from '../../../public/user.png'
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from './AuthProvider';

const Navbar = () => {


    const [mode, setMode] = useState('light');


    function handleMood() {

           const html = document.documentElement;

            if (mode == 'light') {

                html.classList.remove('light');
                html.classList.add('dark');

                setMode('dark')
                localStorage.setItem('mode', 'dark')
            }

            else {
                html.classList.remove('dark');
                html.classList.add('light');

                setMode('light')
                localStorage.setItem('mode', 'dark')
            }



    }


    useEffect( ()=>{

        const currentMode=localStorage.getItem('mode') || 'light';
        document.documentElement.classList.add(currentMode);
        setMode(currentMode);

    },[])











    let { user, LogOut } = useContext(AuthContext);
    // console.log(user);




    let signOut = () => {


        LogOut()
            .then()
            .catch()


    }

    let links = <>

        <NavLink to='/'>Home</NavLink>
        <NavLink to='/add_product'>Add Product</NavLink>
        <NavLink to='/cart'>My Cart</NavLink>
        <NavLink to='/register'>Register</NavLink>

    </>

    const gradientStyle = {
        background: 'linear-gradient(to right,#2A0741, #4a313e)',
        /* Other CSS properties */

    };


    return (

        // style={gradientStyle}

        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown text-[orange] font-bold">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul id="sidebar" tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box text-[#A83E28] font-extrabold w-52">

                        {
                            links
                        }

                    </ul>
                </div>


                {/* navbar logo start  */}

                <div className='flex gap-1 items-center md:px-10 px-1 py-2 '>


                    <div>
                        <img className='w-[70px] hidden md:block' src={logo} alt="" />
                    </div>

                    <div >

                        <h1 className='hidden md:block font-extrabold text-[#f9b22f]  text-base md:text-3xl'>Spicy Food</h1>


                    </div>


                </div>


                {/* navbar logo end */}



            </div>
            <div className="navbar-center hidden lg:flex">
                <ul id="sidebar" className="menu menu-horizontal px-1 text-[#ea593c] text-[18px] font-bold flex gap-5">
                    {
                        links
                    }

                </ul>
            </div>



            {/* check login and logut , show profile and name */}

            <div className="navbar-end">

                <div className="flex items-center gap-x-2 xl:mr-5">



                    <p className="hidden xl:block text-[#ea593c] text-center font-bold">{user?.displayName ? user.displayName : 'Unknown'}</p>



                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar mx-2">
                        <div className="w-10 rounded-full">
                            <img src={user?.photoURL ? user.photoURL : profile} />
                        </div>
                    </label>



                </div>

                {
                    user ?


                        <div id="sidebar">

                            <NavLink onClick={signOut} className="btn  text-[#ea593c] font-bold bg-[#43321b] hover:bg-[#43321b]" >Logout</NavLink>


                        </div>

                        :

                        <div id="sidebar">

                            <NavLink className="btn  text-[#ea593c] font-bold bg-[#43321b] hover:bg-[#43321b]" to='/login'>Login</NavLink>


                        </div>

                }


                <button onClick={handleMood}  className='px-2'>

                  {
                     mode == 'light' ? <svg className="swap-off fill-current w-10 h-10 text-[orange]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg> 
                     
                     : <svg className="swap-on fill-current w-10 h-10 text-[orange]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg> 
                  }

                </button>

              

            </div>


        </div>
    );
};

export default Navbar;