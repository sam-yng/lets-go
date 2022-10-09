import React from 'react'
import Select from 'react-select'
import { Helmet } from 'react-helmet'
// import { StaticQuery, graphql } from 'gatsby'
import { Link } from "gatsby"
import '../css/global.css';
// import Logo from "../assets/nav/logo.svg";
import Arrow from "../assets/misc/svgs/angle-down.svg";
// import "animate.css";



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


        <header className="h-28">

          <div className="font-interreg flex justify-end items-center h-28 mr-16 text-[#303F47] opacity-80">
            <div className='fixed space-x-14 flex flex-row justify-end text-center items-center'>
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


        <footer className="">
        </footer>

      </div>

    </>
  );
};