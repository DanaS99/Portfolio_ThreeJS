import React from 'react'

const About = () => {
  return (
    <section className='c-space my-20'>
        <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full'>
            <div className='col-span-1 xl:row-span-3'>
                <div className='grid-container'>
                    <img src='/assets/grid1.png' alt='grid-1' className='w-full h-fit sm:h-[276px] object-contain' />
                    <div>
                        <p className='grid-headtext'>Hi, I'm Dana</p>
                        <p className='grid-subtext'>With 5 years of experience, I have worked on both Frontend and Backend development for various projects.  I am passionate about creating innovative solutions that make a difference.</p>

                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About