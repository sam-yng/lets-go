import React from 'react'
// import { Link } from 'gatsby'
import '../css/global.css';
import { Layout } from '../components/layout'
import { Link } from "gatsby"
import LogoSm from "../assets/images/logoSm.png";
import Select from 'react-select'

import { eddOptions, toolOptions } from "../components/data/data";
import Arrow from "../assets/misc/svgs/angle-down.svg";
import Arrow2 from "../assets/misc/svgs/arrow-right.svg";
import Screen1 from "../assets/images/screen1.png"


const SignUp = () => {
    return (
        <div className='col-bg'>
            <Layout
                pageTitle="Signup"
                activePage="/signup"
                headerTitle="Stuvise"
                headerImg=""
            >

                <body className="h-[90vh]">

                    <section className='flex flex-row ' >
                        <div className="bg-white md:ml-20 md:w-[80vh] -mt-7 mx-4 rounded-xl shadow-xl pb-10">
                            <div className="pt-5">
                                <div className='flex justify-center h-[55px] w-auto mt-4'>
                                    <img src={LogoSm} />
                                </div>
                                <div className="flex space-x-3 justify-center tracking-wide font-interbod text-[32px] mt-4 text-[#475569]">
                                    <h1>Stuvise Beta Program</h1>
                                </div>
                                <h1 className='text-center font-robreg text-[18px] mt-3 text-[#303F47] opacity-80 leading-relaxed '>
                                    Just a couple things before you can start
                                    <br></br>
                                    studying with Stuvise.
                                </h1>
                            </div>
                            <div className="flex justify-center mt-1">
                                <form className="w-full pr-9 ml-10 pt-6">
                                    <div className="-mx-3 flex flex-row">
                                        <div className="w-full px-3 ">
                                            <label>

                                            </label>
                                            <input className="appearance-none block w-full  border border-gray-200 rounded-lg py-4 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="Name" placeholder="First Name" />

                                        </div>

                                        <div className="w-full px-3">
                                            <label >

                                            </label>
                                            <input className="appearance-none block w-full border border-gray-200 rounded-lg py-4 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="Name" placeholder="Last Name" />

                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="flex justify-center">
                                <form className="w-full pr-9 ml-10 pt-4">
                                    <div className="-mx-3 flex flex-row">
                                        <div className="w-full px-3 ">
                                            <label>

                                            </label>
                                            <input className="appearance-none block w-full  border border-gray-200 rounded-lg py-4 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="" placeholder="Email" />

                                        </div>

                                        <div className="w-full px-3">
                                            <label >

                                            </label>
                                            <input className="appearance-none block w-full border border-gray-200 rounded-lg py-4 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="" placeholder="Password" />

                                        </div>
                                    </div>
                                </form>
                            </div>

                            <div className="flex justify-center">
                                <form className="w-full pr-9 ml-10 pt-4">
                                    <div className="-mx-3 flex flex-row">
                                        <div className="w-full px-3">
                                            <div className="">
                                                <label className="appearance-none block w-full  border border-gray-200 rounded-lg py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                                                    <Select
                                                        closeMenuOnSelect={true}
                                                        placeholder="Education"
                                                        options={eddOptions}
                                                        classNamePrefix="react-select"
                                                        className="react-select--inline"
                                                        components={{
                                                            IndicatorsContainer: () => null
                                                        }}
                                                        isSearchable={false}
                                                    />
                                                    <div className='inline-block'>
                                                        <img className='h-4' src={Arrow} />
                                                    </div>
                                                </label>

                                            </div>
                                        </div>

                                        <div className="w-full px-3">
                                            <div className="">
                                                <label className="appearance-none block w-full  border border-gray-200 rounded-lg py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                                                    <Select
                                                        closeMenuOnSelect={true}
                                                        placeholder="Current Study Tools"
                                                        options={toolOptions}
                                                        classNamePrefix="react-select"
                                                        className="react-select--inline"
                                                        components={{
                                                            IndicatorsContainer: () => null
                                                        }}
                                                        isSearchable={false}
                                                    />
                                                    <div className='inline-block'>
                                                        <img className='h-4' src={Arrow} />
                                                    </div>
                                                </label>

                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className='flex flex-col justify-center items-center mt-6'>
                                <Link to="/" >
                                    <p className='font-robreg opacity-80 text-[#303F47] text-[16px] hover:underline underline-offset-[2px] decoration-2 decoration-[#5AB9EA]'>
                                        If you are an existing user of Stuvise please click HERE to get in
                                        <br></br>
                                        touch about moving your account into the app.
                                    </p>
                                </Link>
                                <div className='flex flex-row mt-6'>
                                    <div className=" h-5 mr-3 opacity-50 ml-4">
                                        <input type="checkbox" value="" className="w-4 h-4 bg-gray-50 hover:cursor-pointer rounded-lg border focus:ring-3 focus:ring-sky-900" required />
                                    </div>

                                    <h1 className='font-robreg opacity-80 text-[#303F47] text-[16px] '>
                                        By clicking “Get Started” I agree to Stuvis’s Terms & Conditions
                                    </h1>

                                </div>
                                <div className='flex shadow-md rounded-lg hover:scale-105 mt-10'>
                                    <Link to="/">
                                        <button className="text-[17px] text-[#475569] flex border-2 border-transparent shadow-2xl md:px-6 p-1.5 px-6 py-3 bg[#303F47] hover:scale-100 rounded-lg">
                                            Get Started
                                            <span>
                                                <img className="h-4 mt-1 pl-4" src={Arrow2} />
                                            </span>
                                        </button>

                                    </Link>

                                </div>
                            </div>
                        </div>

                        <div className='realtive'>
                            <img className='absolute -bottom-14 -right-[13vw] over' src={Screen1} />
                        </div>

                    </section>

                </body>


            </Layout >
        </div>
    );
};

export default SignUp;
