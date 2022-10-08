import React from 'react'
// import { Link } from 'gatsby'
import '../css/global.css';
import { Layout } from '../components/layout'
import { Link } from "gatsby"


const SignUp = () => {
    return (
        <Layout
            pageTitle="Home"
            activePage="/home"
            headerTitle="Stuvise"
            headerImg=""
        >

            <body className="">

                <section>
                    <div className="bg-white mt-20 md:ml-20 md:w-[87vh] mx-4 rounded-md">
                        <div className="pt-5">
                            <div className="flex space-x-3 justify-center pt-1 tracking-wide">
                                <h1 className="font-playfairmedium text-4xl text-sky-800">Enquire</h1>
                                <h1 className="font-playfairmedium text-4xl">Now</h1>
                            </div>
                            <h1 className="font-roboto text-lg md:text-xl text-center pt-4 tracking-wide">We will get back to you within 1 hour.</h1>
                        </div>
                        <div className="flex justify-center">
                            <form className="w-full pr-9 ml-10 pt-6">
                                <div className="-mx-3">
                                    <div className="w-full px-3 ">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >

                                        </label>
                                        <input className="appearance-none font-playfairmedium block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="Name" placeholder="Name" />

                                    </div>

                                    <div className="w-full px-3">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >

                                        </label>
                                        <input className="appearance-none block w-full font-playfairmedium text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="Email" placeholder="Email" />

                                    </div>
                                </div>
                                <div className="-mx-3">
                                    <div className="w-full px-3">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >

                                        </label>
                                        <input className="appearance-none block w-full text-gray-700 font-playfairmedium border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="Address" placeholder="Property Address" />

                                    </div>
                                </div>



                                <div className="-mx-3">
                                    <div className="w-full px-3">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >

                                        </label>
                                        <input className="appearance-none block w-full text-gray-700 border font-playfairmedium border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="Phone Number" placeholder="Phone Number" />

                                    </div>

                                    <div className="w-full px-3">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >

                                        </label>
                                        <input className="appearance-none block w-full text-gray-700 border font-playfairmedium border-gray-200 rounded py-3 pb-32 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="Message" placeholder="Message" />

                                    </div>
                                </div>
                                <div className="flex justify-center pb-5 pt-4">
                                    <div className="font-playfairbold hover:cursor-pointer hover:scale-110 justify-center flex w-[18vh] h-[6vh] border-solid drop-shadow-xl border-2 p-2 px-4 bg-sky-900 text-white rounded-md">
                                        <Link to="/request">Enquire Now</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>

            </body>


        </Layout >
    );
};

export default SignUp;
