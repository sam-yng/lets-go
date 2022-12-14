import React from 'react'
// import { Link } from 'gatsby'
import '../css/global.css';
import { Layout } from '../components/layout'
import { Link } from "gatsby"
import Collapsible from 'react-collapsible'

import Arrow from "../assets/misc/svgs/arrow-right.svg";
import Screen1 from "../assets/images/screen1.png"
import Ellipse from "../assets/images/ellipse.png"
import FileC from "../assets/images/file-check.svg"
import Cards from "../assets/misc/svgs/cards-blank.svg";
import DeskT from "../assets/misc/svgs/desktop.svg";
import Search from "../assets/misc/svgs/search.png";
import Repeat from "../assets/misc/svgs/repeat.svg";
import Filter from "../assets/misc/svgs/filters.svg";
import Globe from "../assets/misc/svgs/globe.svg";

import Check4 from "../assets/misc/svgs/check-double-4.svg";
import Check5 from "../assets/misc/svgs/check-double-5.svg";
import Check6 from "../assets/misc/svgs/check-double-6.svg";

import File5 from "../assets/misc/svgs/file-check-5.svg";
import Glass9 from "../assets/misc/svgs/magnifying-glass-9.svg";
import Wifi2 from "../assets/misc/svgs/wifi-2.svg";
import Cards7 from "../assets/misc/svgs/cards-blank-7.svg";
import Repeat4 from "../assets/misc/svgs/repeat-4.svg";

import Logo from "../assets/images/logoSm.png";

import Micro from "../assets/images/indexcol/micro.png"
import Cross3 from "../assets/images/Cross3.png"

import Cross1 from "../assets/images/indexcol/cross1.png"
import Cross2 from "../assets/images/indexcol/cross2.png"
import Flash1 from "../assets/images/indexcol/flash1.png"
import Flash2 from "../assets/images/indexcol/flash2.png"
import Share1 from "../assets/images/indexcol/share1.png"
import Share2 from "../assets/images/indexcol/share2.png"
import Stat1 from "../assets/images/indexcol/stat1.png"
import Stat2 from "../assets/images/indexcol/stat2.png"
import Rep1 from "../assets/images/indexcol/rep1.png"
import Rep2 from "../assets/images/indexcol/rep2.png"


const IndexPage = () => {
  return (
    <section className="newcol-bg w-screen">
      <Layout
        pageTitle="Home"
        activePage="/home"
        headerTitle="Stuvise"
        headerImg=""
      >

        <body >



          <section className='grid screen place-items-center md:mt-24 md:pt-0 pt-10'>
            <div className='flex flex-col items-center text-center'>

              <div className='font-interreg flex md:text-5xl text-[27px]'>
                <h1>Stuvise.</h1>
              </div>
              <div className='font-interbod flex md:text-6xl text-[27px]'>
                <h1>
                  The Pro Tool for
                  <br></br>
                  <span
                    className='text-transparent bg-clip-text bg-gradient-to-l from-[#6B7A99] via-[#8EB4CC] to-[#6B7A99]'>
                    Studying
                  </span>
                </h1>
              </div>

              <div className='font-robreg md:text-[18px] text-[14px] text-[#303F47] opacity-80 md:mt-8 mt-4 tracking-wider'>
                <p>Your notes & flashcards combined,<br></br>turrbo charged by AI.</p>
              </div>

              <div className='flex shadow-10xl rounded-lg hover:scale-105 md:mt-14 mt-8'>
                <Link to="/">
                  <button
                    className="md:text-[17px] text-[13px] bg-white bg-opacity-10 flex text-black border-2 border-transparent  md:px-6 p-1.5 px-4 md:py-3 py-2 hover:scale-100 rounded-lg">
                    Early Access<span>
                      <img className="h-3 mt-1 md:pl-4 md:h-4 pl-3" src={Arrow} /></span></button>

                </Link>

              </div>

            </div>

          </section>


          <section className='md:mt-20 mt-10'>
            <div className='flex flex-col justify-center items-center'>
              <div>
                <img src={Screen1} />
              </div>

            </div>
          </section>




          <section className='md:mx-[10%] mx-[5%] mt-24'>
            <div>
              <section className='bg-gradient-to-r from-[#6B7A99] via-[#8EB4CC] to-[#6B7A99] mr-[77vw] md:mr-[77vw] mb-4'>
                <div className='h-[4px]'>
                </div>
              </section>
              <div className='font-interbod text-[24px] md:text-[30px] text-[#303F47] mb-6 tracking-wide'>
                <h1>Everything you need.<br></br>Everything you didn't know you wanted.</h1>
              </div>
              <p className='font-robreg text-[#303F47] text-[18px] md:text-[20px] tracking-wides mb-6'>
                Stuvise combines all the study tools you need.
                <br></br>
                Maximising efficiency and reducing time spent studying.
              </p>
            </div>


            <div className='flex flex-col mb-20'>

              <div className='flex flex-col md:flex-row md:space-x-10'>


                <div className="bg-white bg-opacity-90 mt-8 flex flex-col rounded-2xl md:h-[62vh] md:w-[55%] shadow-10xl pt-4 md:pt-8 overflow-hidden">

                  <div className='flex md:flex-row md:ml-10 ml-4'>
                    <h1 className='font-robreg text-[#303F47] text-[14px] md:text-[20px]'>Search with Stuvise <br></br>
                      <span className='font-interbod text-[#303F47] text-[17px] md:text-[30px]'>
                        Cross-Platform Search.
                      </span>
                    </h1>

                    <div className='relative md:w-[15vw] w-[30vw]'>
                      <img className='absolute top-0 right-0 md:h-[55px] md:w-[55px] w-[31px] h-[29px]' src={Micro} />
                    </div>

                  </div>

                  <img className='' src={Cross2} />
                  <img className='-mt-5' src={Cross1} />
                </div>


                <div className="bg-white bg-opacity-90 mt-8 flex flex-col rounded-2xl md:h-[62vh] md:w-[45%] shadow-10xl pt-4 md:pt-8">

                  <div className='flex md:flex-row ml-4 md:ml-10'>
                    <h1 className='font-robreg text-[#303F47] text-[14px] md:text-[20px]'>Flashcards with Stuvise <br></br>
                      <span className='font-interbod text-[#303F47] text-[17px] md:text-[30px]'>
                        Flashcard Generation.
                      </span>
                    </h1>

                    <div className='relative md:w-[10vw] w-[33vw]'>
                      <img className='absolute top-0 right-0 md:h-[55px] md:w-[55px] w-[31px] h-[29px] md:mr-4' src={Micro} />
                    </div>

                  </div>

                  <div className='relative overflow-hidden mt-4 md:mt-0 rounded-2xl'>
                    <img className='w-full ml-6' src={Flash2} />
                    <img className='h-[369px] w-[298px] absolute right-0 bottom-0' src={Flash1} />
                  </div>

                </div>

              </div>



              <div className='flex flex-col md:flex-row md:space-x-10 mt-8 md:mt-16'>

                <div className="bg-white bg-opacity-90 flex flex-col rounded-2xl md:h-[57vh] md:w-[70%] shadow-10xl pt-4 md:pt-8 overflow-hidden">

                  <div className='flex md:flex-row ml-4 md:ml-10'>
                    <h1 className='font-robreg text-[#303F47] text-[14px] md:text-[20px]'>Note-Taking with Stuvise <br></br>
                      <span className='font-interbod text-[#303F47] text-[17px] md:text-[30px]'>
                        Comprehensive Note-Taking Tool.
                      </span>
                    </h1>

                  </div>

                  <div className='mt-4 md:mt-0'>
                    <img src={Screen1} />
                  </div>

                </div>

                <div className="bg-white bg-opacity-90 flex flex-col rounded-2xl md:h-[57vh] md:w-[30%] shadow-10xl md:mt-0 mt-8 pt-4 md:pt-8">

                  <div className='flex flex-row ml-4 md:ml-10'>
                    <h1 className='font-robreg text-[#303F47] text-[14px] md:text-[20px]'>Export & Share with Stuvise <br></br>
                      <span className='font-interbod text-[#303F47] text-[17px] md:text-[30px]'>
                        Share your Notes.
                      </span>
                    </h1>

                  </div>


                  <img className='-mb-9 -mt-2' src={Share1} />
                  <img src={Share2} />


                </div>

              </div>

              <div className='flex flex-col md:flex-row md:space-x-10 mt-8 md:mt-16'>

                <div className="bg-white bg-opacity-90 flex flex-col rounded-2xl md:h-[82.5vh] md:w-[40%] shadow-10xl md:pt-8 pt-4 overflow-hidden">

                  <div className='flex flex-row ml-4 md:ml-10'>
                    <h1 className='font-robreg text-[#303F47] text-[14px] md:text-[20px]'>Practice with Stuvise <br></br>
                      <span className='font-interbod text-[#303F47] text-[17px] md:text-[30px]'>
                        Spaced Repitition.
                      </span>
                    </h1>



                    <div className='relative md:w-[10vw] w-[41vw]'>
                      <img className='absolute top-0 right-0 md:h-[55px] md:w-[55px] w-[31px] h-[29px] md:mr-4' src={Micro} />
                    </div>

                  </div>

                  <img className='w-[245px] h-[200px] mt-36 z-20' src={Rep1} />


                  <div className='relative h-full w-full'>
                    <img className='absolute bottom-0' src={Rep2} />
                  </div>

                </div>

                <div className='flex flex-col md:space-y-9 mt-8 md:mt-0 md:w-[60%]'>
                  <div className="bg-white bg-opacity-90 flex flex-col rounded-2xl h-[32vh] shadow-10xl pt-4 md:pt-8">

                    <div className='flex flex-row ml-4 md:ml-10'>
                      <h1 className='font-robreg text-[#303F47] text[14px] md:text-[20px]'>Organisation with Stuvise<br></br>
                        <span className='font-interbod text-[#303F47] text-[17px] md:text-[30px]'>
                          Flashcards & Notes.
                        </span>
                      </h1>



                    </div>

                    <div className='relative overflow-hidden'>
                      <img />
                      <img />
                    </div>

                  </div>
                  <div className="bg-white bg-opacity-90 flex flex-col rounded-2xl md:h-[46vh] shadow-10xl mt-8 md:mt-0 pt-4 md:pt-8">

                    <div className='flex flex-row ml-4 md:ml-10'>
                      <h1 className='font-robreg text-[#303F47] text-[14px] md:text-[20px]'>Statistics with Stuvise<br></br>
                        <span className='font-interbod text-[#303F47] text-[17px] md:text-[30px]'>
                          Study Stats.
                        </span>
                      </h1>

                      <div className='relative md:w-[10vw] w-[44vw]'>
                        <img className='absolute top-0 right-0 md:h-[55px] md:w-[55px] w-[31px] h-[29px] md:mr-4' src={Micro} />
                      </div>

                    </div>

                    <div className='flex flex-row md:ml-20'>

                      <img className='w-[245px] h-[200px] mt-6' src={Stat1} />
                      <img className='md:ml-10 hidden md:block' src={Stat2} />

                    </div>

                  </div>
                </div>

              </div>

            </div>
          </section>

          <section>

            <div className='md:flex hidden justify-center flex-col md:flex-row items-center'>
              <div className="bg-white bg-opacity-90 flex rounded-2xl md:mb-10 w-[80%] flex-col md:flex-row shadow-10xl md:mt-[22vh] tracking-wider pt-10 pb-10">
                <div className='flex flex-col ml-10'>
                  <h1 className='font-interbod text-[#303F47] text-[30px]'>
                    Join our beta program now!
                  </h1>
                  <h1 className='font-robreg text-[#303F47] mt-3'>
                    We are currently gathering feedback on the product & would
                    <br></br>
                    love to hear what you think!
                  </h1>
                </div>

                <div className='flex md:flex-row mt-5 justify-center'>
                  <Link to="/">
                    <button
                      className="text-[17px] md:ml-[27vw] flex text-[#303F47] border-2 border-transparent shadow-10xl md:px-6 p-1.5 px-6 py-4 hover:scale-105 rounded-lg">
                      Join the Beta<span>
                        <img className="h-4 mt-1 pl-4" src={Arrow} /></span>
                    </button>

                  </Link>
                </div>
              </div>
            </div>

            <div className='md:hidden flex justify-center flex-col md:flex-row items-center'>
              <div className="bg-[#D5E0E7] bg-opacity-90 flex rounded-2xl md:mb-10 w-[90%] flex-col md:flex-row shadow-10xl md:mt-[22vh] tracking-wider pt-10 pb-10">
                <div className='flex flex-col'>
                  <h1 className='font-interbod text-[#303F47] text-[20px] text-center'>
                    Get Early Access Now!
                  </h1>

                </div>

                <div className='flex md:flex-row mt-5 justify-center'>
                  <Link to="/">
                    <button
                      className="text-[14px] flex text-[#303F47] border-2 border-transparent shadow-10xl p-1.5 px-4 py-2 hover:scale-105 rounded-lg">
                      Early Access<span>
                        <img className="h-3 mt-1 pl-3" src={Arrow} /></span>
                    </button>

                  </Link>
                </div>
              </div>
            </div>

          </section>

          <section className='md:mt-[30vh] pt-10'>
            <div className='flex flex-col md:flex-row md:ml-40 ml-6'>
              <div className='flex flex-col font-robreg text-[#303F47] text-[20px] tracking-wider mr-10'>

                <section className='bg-gradient-to-r from-[#6B7A99] via-[#8EB4CC] to-[#6B7A99] w-[7%]'>
                  <div className='h-[4px]'>
                  </div>
                </section>

                <img className='md:h-[40px] md:w-[30px] h-[35px] w-[25px] -mb-4 mt-4' src={FileC} />


                <h1 className='font-interbod text-[24px] md:text-[30px] text-[#303F47] mt-8 md:mt-6 mb-7'>
                  Take Notes With Style.
                </h1>

                <div className='space-y-10 font-robreg'>
                  <div className='flex flex-row'>
                    <img className='md:h-[11px] md:w-[11px] h-[9px] w-[9px] mr-4' src={Ellipse} />
                    <h1 className='md:-mt-2 -mt-1 md:text-[20px] text-[14px]'>
                      <span className='font-extrabold'>Purpose built for students - </span>Designed to<br></br>have all the tools, and none of the clutter.
                    </h1>
                  </div>

                  <div className='flex flex-row'>
                    <img className='md:h-[11px] md:w-[11px] h-[9px] w-[9px] mr-4' src={Ellipse} />
                    <h1 className='md:-mt-2 -mt-1 md:text-[20px] text-[14px]'>
                      <span className='font-extrabold'>Catalogue your notes - </span>Our flat file system<br></br>makes organising your study easy.
                    </h1>
                  </div>

                  <div className='flex flex-row'>
                    <img className='md:h-[11px] md:w-[11px] h-[9px] w-[9px] mr-4' src={Ellipse} />
                    <h1 className='md:-mt-2 -mt-1 md:text-[20px] text-[14px]'>
                      <span className='font-extrabold'>Customisability. </span>Shape how you use<br></br>stuvise with statistics and study specific<br></br>folder ladels.
                    </h1>
                  </div>
                  <div className='flex flex-row'>
                    <img className='md:h-[11px] md:w-[11px] h-[9px] w-[9px] mr-4' src={Ellipse} />
                    <h1 className='md:-mt-2 -mt-1 md:text-[20px] text-[14px]'>
                      <span className='font-extrabold'>Desktop app. </span>
                    </h1>
                  </div>
                </div>

                <div className='hidden flex-row mt-5 md:flex'>

                  <Link to="/">
                    <button
                      className="text-[17px] mt-4 flex text-[#303F47] border-2 border-transparent shadow-10xl md:px-7 p-1.5 px-6 py-4 hover:scale-105 rounded-lg">
                      Learn More<span>
                        <img className="h-4 mt-1 pl-4" src={Arrow} /></span></button>

                  </Link>
                </div>

              </div>


              <div className='relative md:block hidden md:h-[40vw] md:w-[40vw] md:ml-24 md:pt-12'>
                <img src={Screen1} />
                <img className='absolute md:left-10 md:bottom-20' src={Stat2} />
              </div>


            </div>

            <div className="bg-white bg-opacity-90 md:ml-40 flex flex-col rounded-2xl md:w-[30%] shadow-10xl md:mt-[24vh] mx-4 mt-16 tracking-wider pt-4 pb-4 md:pt-8 md:pb-8">
              <div className='ml-6 md:ml-8'>
                <h1 className='font-interbod text-[14px] text-[#303F47]'>Dylan:</h1>
                <h1 className='font-interreg text-[14px] text-[#303F47]'>Comp Science Student @ UNSW</h1>
                <p className='font-robreg text-[14px] md:text-[16px] text-[#303F47] mt-3'>
                  ???Stuvise has a powerful note-taking experience
                  <br className='hidden md:block'></br>
                  that makes taking & organising lecture notes as
                  <br className='hidden md:block'></br>
                  easy as possible.???
                </p>
              </div>
            </div>

            <div className='md:hidden block mx-4 mt-12'>
              <img src={Screen1} />

            </div>


            <div className='flex flex-col md:flex-row ml-6 md:ml-40 mt-[24vh]'>
              <div className='flex flex-col font-robreg text-[#303F47] text-[20px] tracking-wider mr-10'>


                <div className='flex flex-row space-x-6'>
                  <img className='md:h-[49px] md:w-[48px] h-[44px] w-[43px] -mb-4 mt-4' src={Cards} />
                  <img className='md:h-[45px] md:w-[44px] h-[40px] w-[39px] -mb-4 mt-5' src={Micro} />
                </div>

                <h1 className='font-interbod text-[24px] md:text-[30px] text-[#303F47] mt-8 md:mt-6 mb-7'>
                  Create Flashacards Instantly.
                </h1>

                <div className='space-y-10'>
                  <div className='flex flex-row'>
                    <img className='md:h-[11px] md:w-[11px] h-[9px] w-[9px] mr-4' src={Ellipse} />
                    <h1 className='md:-mt-2 -mt-1 md:text-[20px] text-[14px]'>
                      <span className='font-extrabold'>Super powered AI - </span>Stuvise's AI scans<br></br>your notes & generates flashcards.
                    </h1>
                  </div>

                  <div className='flex flex-row'>
                    <img className='md:h-[11px] md:w-[11px] h-[9px] w-[9px] mr-4' src={Ellipse} />
                    <h1 className='md:-mt-2 -mt-1 md:text-[20px] text-[14px]'>
                      <span className='font-extrabold'>Convenient Access - </span>Create & Edit<br></br>flashcards alongside your notes.
                    </h1>
                  </div>

                  <div className='flex flex-row'>
                    <img className='md:h-[11px] md:w-[11px] h-[9px] w-[9px] mr-4' src={Ellipse} />
                    <h1 className='md:-mt-2 -mt-1 md:text-[20px] text-[14px]'>
                      <span className='font-extrabold'>Scheduled Study - </span>Stuvise reminds<br></br>you when & what to study. Updated<br></br>Daily.
                    </h1>
                  </div>

                </div>

              </div>

              <div className='md:block hidden relative h-[40vw] w-[40vw] ml-24 pt-12'>
                <img src={Screen1} />
              </div>

            </div>

            <div className="bg-white bg-opacity-90 md:ml-40 flex flex-col rounded-2xl md:w-[30%] shadow-10xl md:mt-[24vh] mx-4 mt-16 tracking-wider pt-4 pb-4 md:pt-8 md:pb-8">
              <div className='ml-6 md:ml-8'>
                <h1 className='font-interbod text-[14px] text-[#303F47]'>Amy:</h1>
                <h1 className='font-interreg text-[14px] text-[#303F47]'>Medicine Student @ UNSW</h1>
                <p className='font-robreg text-[14px] md:text-[16px] text-[#303F47] mt-3'>
                  ???Stuvise has completely changed the way I
                  <br></br>
                  study. As a medicine student, I have to remember
                  <br className='md:block hidden'></br>
                  and learn a lot of different concepts, very
                  quickly."
                </p>
                <p className='font-robreg text-[14px] md:text-[16px] text-[#303F47] mt-4'>
                  "I can't comprehend how it generates study
                  <br></br>
                  cards from my notes so well."
                </p>
              </div>
            </div>


            <div className='flex flex-col md:flex-row ml-6 md:ml-40 mt-20 md:mt-[24vh]'>
              <div className='flex flex-col font-robreg text-[#303F47] text-[20px] tracking-wider mr-10'>


                <div className='flex flex-row space-x-6'>
                  <img className='md:h-[49px] md:w-[48px] h-[44px] w-[43px] -mb-4 mt-4' src={DeskT} />
                  <img className='md:h-[45px] md:w-[44px] h-[40px] w-[39px] -mb-4 mt-4 md:mt-5' src={Micro} />
                </div>

                <h1 className='font-interbod text-[24px] md:text-[30px] text-[#303F47] mt-6 mb-7'>
                  Stuvise tells you what to study<br className='md:block hidden'></br>& when to study.
                </h1>

                <div className='space-y-10'>
                  <div className='flex flex-row'>
                    <img className='md:h-[11px] md:w-[11px] h-[9px] w-[9px] mr-4' src={Ellipse} />
                    <h1 className='md:-mt-2 -mt-1 md:text-[20px] text-[14px]'>
                      <span className='font-extrabold'>Spaced repitition - </span>
                      Stuvise uses an algorithim<br></br>that has been proven to improve long-term
                      <br></br>knowledge by 200%.
                    </h1>
                  </div>

                  <div className='flex flex-row'>
                    <img className='md:h-[11px] md:w-[11px] h-[9px] w-[9px] mr-4' src={Ellipse} />
                    <h1 className='md:-mt-2 -mt-1 md:text-[20px] text-[14px]'>
                      <span className='font-extrabold'>Scheduled Revision - </span>Stuviser will remind you<br></br>when flashcards are due.
                    </h1>
                  </div>

                  <div className='flex flex-row'>
                    <img className='md:h-[11px] md:w-[11px] h-[9px] w-[9px] mr-4' src={Ellipse} />
                    <h1 className='md:-mt-2 -mt-1 md:text-[20px] text-[14px]'>
                      <span className='font-extrabold'>Practice - </span>Rank cards dependent on their recall<br></br>difficulty.
                    </h1>
                  </div>

                  <div className='flex flex-row'>
                    <img className='md:h-[11px] md:w-[11px] h-[9px] w-[9px] mr-4' src={Ellipse} />
                    <h1 className='md:-mt-2 -mt-1 md:text-[20px] text-[14px]'>
                      <span className='font-extrabold'>Learning Science - </span>Review content when you're<br></br>
                      close to forgetting it, training your brain to retain<br></br>
                      information for longer periods of time with less<br></br>
                      effort.
                    </h1>
                  </div>

                </div>

                <div className='md:flex hidden flex-row mt-5'>

                  <Link to="/">
                    <button
                      className="text-[17px] mt-4 flex text-[#303F47] border-2 border-transparent shadow-10xl md:px-7 p-1.5 px-6 py-4 hover:scale-105 rounded-lg">
                      Learn More<span>
                        <img className="h-4 mt-1 pl-4" src={Arrow} /></span></button>

                  </Link>
                </div>

              </div>

            </div>

            <div className='flex flex-row ml-6 md:ml-40 mt-20 md:mt-[24vh]'>
              <div className='flex flex-col font-robreg text-[#303F47] text-[20px] tracking-wider mr-10'>


                <div className='flex flex-row space-x-4'>
                  <img className='md:h-[40px] md:w-[30px] h-[35px] w-[25px] -mb-4 mt-4' src={FileC} />
                  <img className="h-4 mt-7 md:mt-8" src={Arrow} />
                  <img className='md:h-[49px] md:w-[48px] h-[44px] w-[43px] -mb-4 mt-3 md:mt-4' src={Cards} />
                  <img className='md:h-[45px] md:w-[44px] h-[40px] w-[39px] -mb-4 mt-4 md:mt-5' src={Micro} />
                </div>

                <h1 className='font-interreg text-[13px] md:text-[15px] text-[#303F47] mt-7'>
                  Combinging Notes & Flashcards
                </h1>

                <h1 className='font-interbod text-[24px] md:text-[30px] text-[#303F47] mt-3 mb-7'>
                  The Flashcard Screen.
                </h1>

                <div className='space-y-10'>
                  <div className='flex flex-row'>
                    <img className='md:h-[11px] md:w-[11px] h-[9px] w-[9px] mr-4' src={Ellipse} />
                    <h1 className='md:-mt-2 -mt-1 md:text-[20px] text-[14px]'>
                      <span className='font-extrabold'>Greater Control - </span>Create multi-note flashcard<br></br>decks, that are specific to your learning goals.
                    </h1>
                  </div>

                  <div className='flex flex-row'>
                    <img className='md:h-[11px] md:w-[11px] h-[9px] w-[9px] mr-4' src={Ellipse} />
                    <h1 className='md:-mt-2 -mt-1 md:text-[20px] text-[14px]'>
                      <span className='font-extrabold'>Scheduled Revision - </span>Update your decks with<br></br>new cards & your schedule won't be affected.
                    </h1>
                  </div>

                </div>

              </div>

              <div >
                <img />
              </div>

            </div>

            <div className='flex flex-col md:flex-row ml-6 md:ml-40 mt-20 md:mt-[24vh]'>
              <div className='flex flex-col font-robreg text-[#303F47] text-[20px] tracking-wider mr-10'>


                <div className='flex flex-row space-x-6'>

                  <img className='md:h-[49px] md:w-[48px] h-[44px] w-[43px] -mb-4 mt-3 md:mt-4' src={Cards} />
                  <img className='md:h-[45px] md:w-[44px] h-[40px] w-[39px] -mb-4 mt-4 md:mt-5' src={Micro} />
                </div>

                <h1 className='font-interreg text-[13px] md:text-[15px] text-[#303F47] mt-7'>
                  Powerful Learning Insights
                </h1>

                <h1 className='font-interbod text-[24px] md:text-[30px] text-[#303F47] mt-3 mb-7'>
                  The Flashcard Screen.
                </h1>

                <div className='space-y-10'>
                  <div className='flex flex-row'>
                    <img className='md:h-[11px] md:w-[11px] h-[9px] w-[9px] mr-4' src={Ellipse} />
                    <h1 className='md:-mt-2 -mt-1 md:text-[20px] text-[14px]'>
                      <span className='font-extrabold'>Learning Stats - </span>Track past learning trends &<br></br>monitor what cards are due next.
                    </h1>
                  </div>

                  <div className='flex flex-row'>
                    <img className='md:h-[11px] md:w-[11px] h-[9px] w-[9px] mr-4' src={Ellipse} />
                    <h1 className='md:-mt-2 -mt-1 md:text-[20px] text-[14px]'>
                      <span className='font-extrabold'>Notes & Decks - </span>Filter cards between decks
                      <br></br>
                      & notes, helping you find content specific
                      <br></br>
                      gaps in your knowledge.
                    </h1>
                  </div>

                </div>

              </div>

              <div>
                <img />
              </div>

            </div>

            <div className='flex flex-col md:flex-row ml-6 md:ml-40 mt-20 md:mt-[24vh]'>
              <div className='flex flex-col font-robreg text-[#303F47] text-[20px] tracking-wider mr-10'>


                <div className='flex flex-row space-x-6'>

                  <img className='md:h-[40px] md:w-[39px] h-[35px] w-[34px] -mb-4 mt-5' src={Search} />
                  <img className='md:h-[45px] md:w-[44px] h-[40px] w-[39px] -mb-4 mt-4 md:mt-5' src={Micro} />
                </div>

                <h1 className='font-interreg text-[13px] md:text-[15px] text-[#303F47] mt-7'>
                  Search with Stuvise
                </h1>

                <h1 className='font-interbod text-[24px] md:text-[30px] text-[#303F47] mt-3 mb-7'>
                  Google but it's Stuvise.
                </h1>

                <div className='space-y-8'>

                  <h1 className='md:-mt-2 -mt-1 md:text-[20px] text-[14px]'>
                    Stuvise's inbuilt search engine retrieve's
                    <br></br>
                    information when you want it, right where
                    <br></br>
                    you need it.
                  </h1>


                  <div className='flex flex-row'>
                    <img className='md:h-[32px] md:w-[32px] h-[20px] w-[21px] mr-4' src={Filter} />
                    <h1 className='md:text-[20px] text-[14px]'>
                      Filter your results.
                    </h1>
                  </div>

                  <div className='flex flex-row'>
                    <img className='md:h-[32px] md:w-[32px] h-[20px] w-[21px] mr-4' src={Repeat} />
                    <h1 className='md:text-[20px] text-[14px]'>
                      Repeat previous searches.
                    </h1>
                  </div>

                  <div className='flex flex-row'>
                    <img className='md:h-[32px] md:w-[32px] h-[20px] w-[21px] mr-4' src={Cards} />
                    <h1 className='md:text-[20px] text-[14px]'>
                      Search through your flashcards.
                    </h1>
                  </div>

                </div>

              </div>

              <div className='md:h-[40vw] md:w-[40vw] md:ml-28 pt-6 md:pt-0'>
                <img src={Cross3} />
              </div>

            </div>

          </section>


          <section className='grid screen place-items-center mt-24'>
            <div className='flex flex-col items-center text-center z-40'>

              <div className='font-interreg flex text-5xl leading-normal'>
                <h1>Stuvise.</h1>
              </div>
              <div className='font-interbod flex text-6xl leading-tight'>
                <h1>
                  A Pro Tool for Pro
                  <br></br>
                  <span
                    className='text-transparent bg-clip-text bg-gradient-to-l from-[#6B7A99] via-[#8EB4CC] to-[#6B7A99] '>
                    Students
                  </span>
                </h1>
              </div>


              <div className='flex shadow-10xl rounded-lg hover:scale-105 mt-14'>
                <Link to="/">
                  <button
                    className="text-[17px] bg-white bg-opacity-10 flex text-black border-2 border-transparent  md:px-6 p-1.5 px-5 py-2 md:py-3 hover:scale-100 rounded-lg">
                    Early Access<span>
                      <img className="h-4 mt-1 pl-4" src={Arrow} /></span></button>

                </Link>
              </div>

            </div>

          </section>


          <section className='pb-20'>
            <div className='flex md:flex-row flex-col justify-center pt-16 mb-6'>

              <div className="bg-white bg-opacity-90 flex flex-col rounded-xl shadow-10xl md:w-[25%] mr-[10vw] pt-6 space-y-4">
                <div className='flex flex-row ml-8 items-center'>
                  <img className='h-[55px] w-[42px] mr-6' src={Globe} />
                  <h1 className='text-[30px] text-[#303F47]'>Early Access</h1>
                </div>
                <h1 className='text-[#303F47] opacity-90 ml-8'>Early access is underway.</h1>
                <h1 className='text-center text-[65px] text-[#303F47]'>Free</h1>

                <div className='flex flex-col font-robreg text-[#303F47] text-[15px] items-left ml-8 space-y-6'>

                  <div className='flex flex-row'>
                    <img src={Check4} />
                    <h1 className='ml-5'>Receive access to new features early.</h1>
                  </div>

                  <div className='flex flex-row'>
                    <img src={Check5} />
                    <h1 className='ml-5'>Use Stuvise benefits for free.</h1>
                  </div>

                  <div className='flex flex-row'>
                    <img src={Check6} />
                    <h1 className='ml-5'>Provide the stuvise team with feedback.</h1>
                  </div>

                </div>

                <div className='flex justify-center pt-6 pb-8'>
                  <div className='shadow-10xl w-[12vw] rounded-lg hover:scale-105'>
                    <Link to="/">
                      <button
                        className="text-[16px] bg-white bg-opacity-10 flex text-black border-2 border-transparent md:px-6 p-1.5 px-6 py-3 hover:scale-100 rounded-lg">
                        Join the Beta<span>
                          <img className="h-4 mt-1 pl-4" src={Arrow} /></span></button>

                    </Link>
                  </div>
                </div>
              </div>


              <div className="bg-white bg-opacity-90 flex flex-col rounded-xl shadow-10xl md:w-[25%] pt-6 space-y-4">
                <div className='flex flex-row ml-8 items-center'>
                  <img className='h-[42px] w-[53px] mr-6' src={Logo} />
                  <h1 className='text-[30px] text-[#303F47]'>Pro Version</h1>
                </div>
                <h1 className='text-[#303F47] opacity-90 ml-8'>Coming soon.</h1>
                <h1 className='text-center text-[65px] text-[#303F47]'>$7.99</h1>

                <div className='hidden flex-col font-robreg text-[#303F47] text-[15px] ml-8 space-y-6'>

                  <div className='flex flex-row space-x-[2.3vw]'>
                    <img src={File5} />
                    <h1>Note-Taking.</h1>
                  </div>

                  <div className='flex flex-row space-x-[2vw]'>
                    <img src={Glass9} />
                    <h1>Full-Text Search.</h1>
                  </div>

                  <div className='flex flex-row space-x-[1.7vw]'>
                    <img src={Wifi2} />
                    <h1>Offline Access.</h1>
                  </div>

                  <div className='flex flex-row space-x-[1.5vw]'>
                    <img src={Cards7} />
                    <h1>Automatic Flashcards.</h1>
                  </div>

                  <div className='flex flex-row space-x-[1.5vw]'>
                    <img src={Repeat4} />
                    <h1>Spaced Repitition.</h1>
                  </div>

                </div>


                <div className='flex flex-row items-center ml-8'>

                  <div className='flex flex-col space-y-6'>
                    <img className='h-[26px] w-[26px]' src={File5} />
                    <img className='h-[26px] w-[26px]' src={Glass9} />
                    <img className='h-[26px] w-[26px]' src={Wifi2} />
                    <img className='h-[26px] w-[26px]' src={Cards7} />
                    <img className='h-[26px] w-[26px]' src={Repeat4} />
                  </div>

                  <div className='flex flex-col space-y-7 ml-5 font-robreg text-[#303F47] text-[15px]'>
                    <h1>Note-Taking.</h1>
                    <h1>Full-Text Search.</h1>
                    <h1>Offline Access.</h1>
                    <h1>Automatic Flashcards.</h1>
                    <h1>Spaced Repitition.</h1>
                  </div>

                </div>


              </div>

            </div>


          </section>



        </body>
      </Layout >
    </section >
  );
};

export default IndexPage;
