import React from 'react'
import Select from 'react-select'
import { Helmet } from 'react-helmet'
// import { StaticQuery, graphql } from 'gatsby'
import { Link } from "gatsby"
import '../css/global.css';
import Logo from "../assets/images/logoSm.png";
import Arrow from "../assets/misc/svgs/angle-down.svg";
// import "animate.css";
import Collapsible from 'react-collapsible'

import Bars from "../assets/misc/svgs/bars.svg";
import Right from "../assets/misc/svgs/right-to-bracket.svg";
import Plus from "../assets/misc/svgs/plus.svg";


import {
  HideOn,
} from "react-hide-on-scroll";


import Facebook from "../assets/misc/svgs/facebook3.svg"
import Insta from "../assets/misc/svgs/instagram3.svg"
import Linked from "../assets/misc/svgs/linkedin3.svg"

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

        <header className='md:hidden block bg-[#D5E0E7] h-12'>
          <div className='flex flex-row justify-between pt-3 mx-6'>

            <img className='h-[20px] w-[20px]' src={Bars} />
            <img className='h-[23px] w-[29px]' src={Logo} />
            <img className='h-[20px] w-[20px]' src={Right} />

          </div>
        </header>

        <HideOn height={500}>
          <header className="hidden md:block h-32 z-0">

            <div className="font-interreg hidden md:flex justify-end items-center h-28 mr-16 text-[#303F47] opacity-80">



              <div className='space-x-14 flex flex-row items-center'>

                <div className='relative w-[58vw] h-[46px]'>
                  <img className='absolute left-0 w-[60px] h-[46px]' src={Logo} />
                </div>

                <div className='hidden'>
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
                    <h1 className="text-md">Updates</h1>
                  </Link>
                </div>

                <div className='flex'>
                  <Link to="/">
                    <h1 className="text-md">Pricing</h1>
                  </Link>
                </div>

                <div className='rounded-lg hover:scale-105'>
                  <Link to="/signup">
                    <button
                      className="text-md text-black bg-white bg-opacity-10 border-2 border-transparent shadow-10xl md:px-4 p-1.5 px-4 hover:scale-100 rounded-lg">
                      Try Stuvise</button>
                  </Link>
                </div>

                <div>



                </div>
              </div>
            </div>

          </header>
        </HideOn>

        <main>{children}</main>


        <footer className="text-[#303F47] bg-[#D5E0E7] hidden md:block">
          <section className='bg-gradient-to-r from-[#6B7A99] via-[#8EB4CC] to-[#6B7A99]'>
            <div className='h-[4px] -mt-3'>
            </div>
          </section>

          <div className='flex flex-row justify-end space-x-20 mt-16 pb-16 mr-[20vw]'>

            <div className='hidden flex-col space-y-2'>
              <h1 className='text-[20px]'>Explore</h1>

              <Link to="/">
                <h1 className='text-[14px]'>Revision</h1>
              </Link>

              <Link to="/">
                <h1 className='text-[14px]'>Flashcards</h1>
              </Link>

              <Link to="/">
                <h1 className='text-[14px]'>Note-taker</h1>
              </Link>

              <Link to="/">
                <h1 className='text-[14px]'>Pricing</h1>
              </Link>

              <Link to="/">
                <h1 className='text-[14px]'>How it works</h1>
              </Link>

              <Link to="/">
                <h1 className='text-[14px]'>Updates</h1>
              </Link>

              <Link to="/">
                <h1 className='text-[14px]'>Blog</h1>
              </Link>
            </div>

            <div className='hidden flex-col space-y-2'>
              <h1 className='text-[20px]'>Features</h1>

              <Link to="/">
                <h1 className='text-[14px]'>Search</h1>
              </Link>

              <Link to="/">
                <h1 className='text-[14px]'>Flashcards</h1>
              </Link>

              <Link to="/">
                <h1 className='text-[14px]'>Note-taker</h1>
              </Link>

              <Link to="/">
                <h1 className='text-[14px]'>Sharing</h1>
              </Link>

              <Link to="/">
                <h1 className='text-[14px]'>Spaced Repitition</h1>
              </Link>

              <Link to="/">
                <h1 className='text-[14px]'>Organisation</h1>
              </Link>

              <Link to="/">
                <h1 className='text-[14px]'>Statistics</h1>
              </Link>
            </div>

            <div className='hidden flex-col space-y-2 items-left'>
              <h1 className='text-[20px]'>Socials</h1>

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

            <div className='flex flex-col space-y-2'>
              <h1 className='text-[20px] font-[600]'>Connect</h1>

              <Link to="/">
                <h1 className='text-[14px]'>Help Center</h1>
              </Link>

              <Link to="/">
                <h1 className='text-[14px]'>Contact Us</h1>
              </Link>

            </div>



          </div>

          <div className='font-interreg text-[14px] text-[#303F47] justify-end flex mr-10 -mt-6 pb-6'>
            <h1>2022 @ Stuvise Inc.</h1>
          </div>




        </footer>

        <footer className='md:hidden block  bg-[#D5E0E7] h-[260px]'>
          <section className='bg-gradient-to-r from-[#6B7A99] via-[#8EB4CC] to-[#6B7A99]'>
            <div className='h-[4px] -mt-3'>
            </div>
          </section>

          <Collapsible trigger="Connect" className='text-[#303F47] flex flex-row font-[600] w-[75%] ml-10 mt-10 border-off border-[#CACACA] py-2 border-t-2 border-b-2'>


            <div className='flex justify-end w-full items-center mr-2'>
              <img className='w-[13px] h-[18px]' src={Plus} />
            </div>


          </Collapsible>
          <div className='font-interreg text-[14px] text-[#303F47] justify-end flex mt-[16vh] mr-8'>
            <h1>2022 @ Stuvise Inc.</h1>
          </div>
        </footer>


      </div >

    </>
  );
};