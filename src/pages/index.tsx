import React from 'react'
// import { Link } from 'gatsby'
import '../css/global.css';
import { Layout } from '../components/layout'
import { Link } from "gatsby"

import Arrow from "../assets/misc/svgs/arrow-right.svg";
import Screen1 from "../assets/images/screen1.png"
import Ellipse from "../assets/images/ellipse.png"
import FileC from "../assets/images/file-check.svg"

import Micro from "../assets/images/indexcol/micro.png"

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
    <section className="newcol-bg z-40">
      <Layout
        pageTitle="Home"
        activePage="/home"
        headerTitle="Stuvise"
        headerImg=""
      >

        <body >



          <section className='grid screen place-items-center mt-24'>
            <div className='flex flex-col items-center text-center z-40'>

              <div className='font-interreg flex text-5xl leading-normal'>
                <h1>Stuvise.</h1>
              </div>
              <div className='font-interbod flex text-6xl leading-tight'>
                <h1>
                  The Pro Tool for
                  <br></br>
                  <span
                    className='text-transparent bg-clip-text bg-gradient-to-l from-[#6B7A99] via-[#8EB4CC] to-[#6B7A99] '>
                    Studying
                  </span>
                </h1>
              </div>

              <div className='font-robreg text-[18px] text-[#303F47] opacity-80 mt-8 tracking-wider'>
                <p>Your notes & flashcards combined,<br></br>turrbo charged by AI.</p>
              </div>

              <div className='flex shadow-10xl rounded-lg hover:scale-105 mt-14'>
                <Link to="/">
                  <button
                    className="text-[17px] bg-white bg-opacity-10 flex text-black border-2 border-transparent  md:px-6 p-1.5 px-6 py-3 hover:scale-100 rounded-lg">
                    Join the Beta<span>
                      <img className="h-4 mt-1 pl-4" src={Arrow} /></span></button>

                </Link>

              </div>

            </div>

          </section>


          <section className='mt-20'>
            <div className='flex flex-col justify-center items-center z-20'>
              <div>
                <img src={Screen1} />
              </div>

              <div className="border-solid border-[#303F47] border-[1px] opacity-30 md:mx-0 mb-20 md:w-[52vw] mt-24"></div>
            </div>
          </section>




          <section className='mx-[10%] mt-10'>
            <div>
              <div className='font-interbod text-[30px] text-[#303F47] mb-6 tracking-wide'>
                <h1>Everything you need.<br></br>Everything you didn't know you wanted.</h1>
              </div>
              <p className='font-robreg text-[#303F47] text-[20px] tracking-wides mb-6'>
                Stuvise combines all the study tools you need.
                <br></br>
                Maximising efficiency and reducing effort.
              </p>
            </div>


            <div className='flex flex-col mb-20'>

              <div className='flex flex-col md:flex-row space-x-10'>

                <div className="bg-white bg-opacity-90 mt-8 flex flex-col rounded-2xl h-[62vh] w-[55%] shadow-10xl pt-8 overflow-hidden">

                  <div className='flex md:flex-row ml-10'>
                    <h1 className='font-robreg text-[#303F47] text-[20px]'>Search with Stuvise <br></br>
                      <span className='font-interbod text-[#303F47] text-[30px]'>
                        Cross-Platform Search.
                      </span>
                    </h1>

                    <div className='relative  w-[15vw]'>
                      <img className='absolute top-0 right-0 h-[55px] w-[55px]' src={Micro} />
                    </div>

                  </div>

                  <img className='' src={Cross2} />
                  <img className='-mt-5' src={Cross1} />
                </div>

                <div className="bg-white bg-opacity-90 mt-8 flex flex-col rounded-2xl h-[62vh] w-[45%] shadow-10xl pt-8">

                  <div className='flex flex-row ml-10'>
                    <h1 className='font-robreg text-[#303F47] text-[20px]'>Flashcards with Stuvise <br></br>
                      <span className='font-interbod text-[#303F47] text-[30px]'>
                        Flashcard Generation.
                      </span>
                    </h1>

                    <div className='relative  w-[10vw]'>
                      <img className='absolute top-0 right-0 h-[55px] w-[55px]' src={Micro} />
                    </div>

                  </div>

                  <div className='relative overflow-hidden'>
                    <img className='w-full ml-6' src={Flash2} />
                    <img className='h-[369px] w-[298px] absolute right-0 bottom-0' src={Flash1} />
                  </div>

                </div>

              </div>



              <div className='flex flex-row space-x-10 mt-16'>

                <div className="bg-white bg-opacity-90 flex flex-col rounded-2xl h-[57vh] w-[70%] shadow-10xl pt-8 overflow-hidden">

                  <div className='flex flex-row ml-10'>
                    <h1 className='font-robreg text-[#303F47] text-[20px]'>Note-Taking with Stuvise <br></br>
                      <span className='font-interbod text-[#303F47] text-[30px]'>
                        Comprehensive Note-Taking Tool.
                      </span>
                    </h1>

                  </div>

                  <div >
                    <img src={Screen1} />
                  </div>

                </div>

                <div className="bg-white bg-opacity-90 flex flex-col rounded-2xl h-[57vh] w-[30%] shadow-10xl pt-8">

                  <div className='flex flex-row ml-10'>
                    <h1 className='font-robreg text-[#303F47] text-[20px]'>Export & Share with Stuvise <br></br>
                      <span className='font-interbod text-[#303F47] text-[30px]'>
                        Share your Notes.
                      </span>
                    </h1>

                  </div>


                  <img className='-mb-9 -mt-2' src={Share1} />
                  <img src={Share2} />


                </div>

              </div>

              <div className='flex flex-row space-x-10 mt-16'>

                <div className="bg-white bg-opacity-90 flex flex-col rounded-2xl h-[82.5vh] w-[40%] shadow-10xl pt-8 overflow-hidden">

                  <div className='flex flex-row ml-10'>
                    <h1 className='font-robreg text-[#303F47] text-[20px]'>Practice with Stuvise <br></br>
                      <span className='font-interbod text-[#303F47] text-[30px]'>
                        Spaced Repitition.
                      </span>
                    </h1>



                    <div className='relative  w-[9vw]'>
                      <img className='absolute top-0 right-0 h-[55px] w-[55px]' src={Micro} />
                    </div>

                  </div>

                  <img className='w-[245px] h-[200px] mt-36 z-20' src={Rep1} />


                  <div className='relative h-full w-full'>
                    <img className='absolute bottom-0' src={Rep2} />
                  </div>

                </div>

                <div className='flex flex-col space-y-10 w-[60%]'>
                  <div className="bg-white bg-opacity-90 flex flex-col rounded-2xl h-[32vh] shadow-10xl pt-8">

                    <div className='flex flex-row ml-10'>
                      <h1 className='font-robreg text-[#303F47] text-[20px]'>Organisation with Stuvise<br></br>
                        <span className='font-interbod text-[#303F47] text-[30px]'>
                          Flashcards & Notes.
                        </span>
                      </h1>



                    </div>

                    <div className='relative overflow-hidden'>
                      <img />
                      <img />
                    </div>

                  </div>
                  <div className="bg-white bg-opacity-90 flex flex-col rounded-2xl h-[46vh] shadow-10xl pt-8">

                    <div className='flex flex-row ml-10'>
                      <h1 className='font-robreg text-[#303F47] text-[20px]'>Statistics with Stuvise<br></br>
                        <span className='font-interbod text-[#303F47] text-[30px]'>
                          Study Stats.
                        </span>
                      </h1>

                      <div className='relative  w-[30vw]'>
                        <img className='absolute top-0 right-0 h-[55px] w-[55px]' src={Micro} />
                      </div>

                    </div>

                    <div className='flex flex-row ml-20'>

                      <img className='w-[245px] h-[200px] mt-6' src={Stat1} />
                      <img className='ml-10' src={Stat2} />

                    </div>

                  </div>
                </div>

              </div>

            </div>
          </section>

          <section>

            <div className='flex justify-center flex-row '>
              <div className="bg-white bg-opacity-90 flex rounded-2xl mb-10 w-[80%] flex-row shadow-10xl mt-[22vh] tracking-wider pt-10 pb-10">
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

                <div className='flex flex-row mt-5'>
                  <Link to="/">
                    <button
                      className="text-[17px] ml-[27vw] flex text-[#303F47] border-2 border-transparent shadow-10xl md:px-6 p-1.5 px-6 py-4 hover:scale-105 rounded-lg">
                      Join the Beta<span>
                        <img className="h-4 mt-1 pl-4" src={Arrow} /></span></button>

                  </Link>
                </div>


              </div>
            </div>

          </section>

          <section className='mt-[40vh]'>
            <div className='flex flex-row ml-[10%] space-y-10 items-right'>
              <div className='flex flex-col font-robreg text-[#303F47] text-[20px] tracking-widest space-y-7'>

                <div className="border-solid border-[#8EB4CC] border-2 md:mx-0 md:w-7 -mb-3 "></div>

                <img className='h-[40px] w-[30px] -mb-4' src={FileC} />
                <div className='flex flex-row'>

                  <h1 className='font-interbod text-[30px] text-[#303F47]'>
                    Take Notes With Style.
                  </h1>
                </div>
                <div className='flex flex-row space-x-6 -space-y-2 pt-2'>
                  <img className='h-[11px] w-[11px]' src={Ellipse} />
                  <h1>
                    <span>Purpose built for students - </span>Designed to<br></br>have all the tools, and none of the clutter.
                  </h1>
                </div>
                <div className='flex flex-row space-x-6 -space-y-2'>
                  <img className='h-[11px] w-[11px]' src={Ellipse} />
                  <h1>
                    Catalogue your notes - Our flat file system<br></br>makes organising your study easy.
                  </h1>
                </div>
                <div className='flex flex-row space-x-6 -space-y-2'>
                  <img className='h-[11px] w-[11px]' src={Ellipse} />
                  <h1>
                    Customisability - Shape how you use<br></br>stuvise with statistics and study specific<br></br>folder ladels.
                  </h1>
                </div>
                <div className='flex flex-row space-x-6 -space-y-2'>
                  <img className='h-[11px] w-[11px]' src={Ellipse} />
                  <h1>
                    Desktop app - Download Stuvise onto your<br></br>computer, and have offline acceess.
                  </h1>
                </div>

                <div className='flex flex-row mt-5'>

                  <Link to="/">
                    <button
                      className="text-[17px] mt-4 flex text-[#303F47] border-2 border-transparent shadow-10xl md:px-7 p-1.5 px-6 py-4 hover:scale-105 rounded-lg">
                      Learn More<span>
                        <img className="h-4 mt-1 pl-4" src={Arrow} /></span></button>

                  </Link>
                </div>

              </div>

              <div className=''>
                <img className="w-[70%]" src={Screen1} />

              </div>

            </div>



          </section>




        </body>
      </Layout >
    </section >
  );
};

export default IndexPage;
