import React from 'react'
// import { Link } from 'gatsby'
import '../css/global.css';
import { Layout } from '../components/layout'
import { Link } from "gatsby"

import Arrow from "../assets/misc/svgs/arrow-right.svg";
import Screen1 from "../assets/images/screen1.png"

const IndexPage = () => {
  return (
    <body className="col-bg">
      <Layout
        pageTitle="Home"
        activePage="/home"
        headerTitle="Stuvise"
        headerImg=""
      >



        <section className='grid screen place-items-center mt-24'>
          <div className='flex flex-col items-center text-center'>

            <div className='font-interreg flex text-5xl leading-normal'>
              <h1>Stuvise.</h1>
            </div>
            <div className='font-interbod flex text-6xl leading-tight'>
              <h1>
                The Pro Tool for
                <br></br>
                <span
                  className='text-transparent bg-clip-text bg-gradient-to-l from-[#C1C8E4] via-[#5AB9EA] to-[#8860D0] '>
                  Studying
                </span>
              </h1>
            </div>

            <div className='font-robreg text-[18px] text-[#303F47] opacity-80 mt-8 tracking-wider'>
              <p>Your notes & flashcards combined,<br></br>turrbo charged by AI.</p>
            </div>

            <div className='flex shadow-md rounded-lg hover:scale-105 mt-14'>
              <Link to="/">
                <button
                  className="text-[17px] flex text-black border-2 border-transparent shadow-2xl drop-shadow-2xl md:px-6 p-1.5 px-6 py-3 bg[#303F47] hover:scale-100 rounded-lg">
                  Join the Beta<span>
                    <img className="h-4 mt-1 pl-4" src={Arrow} /></span></button>

              </Link>

            </div>

          </div>


        </section>

        <section className='mt-20'>

          <div className='flex justify-center'>
            <img src={Screen1} />
          </div>

        </section>




      </Layout >
    </body>
  );
};

export default IndexPage;
