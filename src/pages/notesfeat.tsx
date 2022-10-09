import React from 'react'
// import { Link } from 'gatsby'
import '../css/global.css';
import { Layout } from '../components/layout'
import { Link } from "gatsby"

import Arrow from "../assets/misc/svgs/arrow-right.svg";
import Screen1 from "../assets/images/screen1.png"

const NotesFeat = () => {
    return (

        <body className="bg-[#E2E8F0]">
            <Layout
                pageTitle="Notes"
                activePage="/notesfeat"
                headerTitle="Stuvise"
                headerImg=""
            >

                <section className='md:h-[640px]'>

                    <div className='flex flex-row ml-20 space-x-28'>

                        <div className='flex flex-col mt-10'>
                            <h1 className='font-robreg text-[#475569] text-[20px] tracking-wide'>Note-Taking with Stuvise</h1>
                            <h1 className='font-interbod text-[#475569] text-[40px] tracking-wider mt-2'>Designed to be Clean, <br></br> Powerful & Easy to Use.</h1>

                            <div className='font-robreg text-[20px] tracking-wider text-[#475569] mt-8 space-y-10'>
                                <div className='flex flex-row'>
                                    <img />
                                    <h1>Take high quality & well organised notes.</h1>
                                </div>

                                <div className='flex flex-row'>
                                    <img />
                                    <h1>Import, Store & Organise study material.</h1>
                                </div>

                                <div className='flex flex-row'>
                                    <img />
                                    <h1>Search across notes & flashcards for keywords.</h1>
                                </div>
                            </div>

                            <div className='max-w-[11vw]'>
                                <div className='shadow-md rounded-lg hover:scale-105 mt-12'>
                                    <Link to="/">
                                        <button
                                            className="text-[17px]  flex text-[#303F47] border-2 border-transparent shadow-2xl drop-shadow-2xl md:px-4 p-1.5 px-5 py-3  hover:scale-100 rounded-lg">
                                            Join the Beta
                                            <span>
                                                <img className="h-4 mt-1 pl-4" src={Arrow} />
                                            </span>
                                        </button>

                                    </Link>

                                </div>
                            </div>
                        </div>

                        <div className='mt-6 -mr-10'>
                            <img className=' h-[520px]' src={Screen1} />
                        </div>

                    </div>

                </section>




            </Layout >
        </body>
    );
};

export default NotesFeat;