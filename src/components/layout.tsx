import React from 'react'
import Select from 'react-select'
import { Helmet } from 'react-helmet'
// import { StaticQuery, graphql } from 'gatsby'
import { Link } from "gatsby"
import '../css/global.css';
// import Logo from "../assets/nav/logo.svg";
import Arrow from "../assets/misc/svgs/angle-down.svg";
// import "animate.css";

import Facebook from "../assets/misc/svgs/facebook2.svg"
import Insta from "../assets/misc/svgs/instagram2.svg"
import Linked from "../assets/misc/svgs/linkedin2.svg"

import { colourOptions } from "./data/data";

export type LayoutProps = {
  pageTitle: string;
  activePage: string;
  headerImg: string;
  headerSize?: "hero" | "feature";
  headerTitle: string;
  children: React.ReactNode;
};


export const Layout: React.FC<LayoutProps> = ({
  pageTitle,
  activePage,
  headerImg,
  headerTitle,
  headerSize = "feature",
  children,
}) => {
  return (
    <>
      <Helmet>
        <title>Stuvise | {pageTitle}</title>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&family=Roboto:wght@300&display=swap"
          rel="stylesheet"
        />

      </Helmet>

      <div>


        <header className="h-28 ">

          <div className="font-interreg flex justify-end items-center h-28 mr-16 text-[#303F47] opacity-80">
            <div className=' space-x-14 flex flex-row justify-end text-center items-center'>
              <div className=''>
                <button className="text-md flex">Features
                  <img className="h-4 ml-2 mt-1" src={Arrow} />
                </button>
              </div>


              <div className="text-lg hidden">
                <Select
                  closeMenuOnSelect={true}
                  defaultValue={colourOptions[0]}
                  options={colourOptions}
                  classNamePrefix="react-select"
                  className="react-select--inline"
                  components={{
                    IndicatorsContainer: () => null
                  }}
                  isSearchable={false}
                />
              </div>

              <div className='flex'>
                <Link to="/">
                  <h1 className="text-md">Learning</h1>
                </Link>
              </div>

              <div className='flex'>
                <Link to="/">
                  <h1 className="text-md">Pricing</h1>
                </Link>
              </div>

              <div className='shadow-xl rounded-lg hover:scale-105'>
                <Link to="/signup">
                  <button
                    className="text-md text-black border-2 border-transparent shadow-2xl drop-shadow-2xl md:px-4 p-1.5 px-4 hover:scale-100 rounded-lg">
                    Try Stuvise</button>
                </Link>
              </div>

              <div>



              </div>
            </div>
          </div>

        </header>


        <main>{children}</main>


        <footer className="bg-gradient-to-r from-[#6B7A99] via-[#8EB4CC] to-[#6B7A99] h-[22vh] text-white">
          <div className='flex flex-row justify-end mr-32'>

            <div className='flex flex-col mr-14 mt-6 space-y-2'>
              <h1 className='text-[22px] underline underline-offset-4 decoration-2'>Help</h1>

              <Link to="/">
                <h1 className='text-[14px]'>Help Center</h1>
              </Link>

              <Link to="/">
                <h1 className='text-[14px]'>Contact</h1>
              </Link>

            </div>

            <div className='flex flex-col mt-6 space-y-2 items-left'>
              <h1 className='text-[22px] underline underline-offset-4 decoration-2'>Socials</h1>

              <div className='flex flex-row'>
                <img className='h-[18px] mr-2' src={Insta} />
                <Link to="/">
                  <h1 className='text-[14px]'>Instagram</h1>
                </Link>
              </div>

              <div className='flex flex-row'>
                <img className='h-[18px] mr-2' src={Facebook} />
                <Link to="/">
                  <h1 className='text-[14px]'>Facebook</h1>
                </Link>
              </div>

              <div className='flex flex-row'>
                <img className='h-[18px] mr-2' src={Linked} />
                <Link to="/">
                  <h1 className='text-[14px]'>Linkedin</h1>
                </Link>
              </div>

            </div>

          </div>
        </footer>

      </div>

    </>
  );
};