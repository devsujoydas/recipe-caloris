import './Hero.css'
const Hero = () => {
    return (
        <div id="hero" className="lg:max-w-screen-2xl lg:mx-auto mx-8 text-white rounded-3xl ">
            <div className='flex flex-col lg:gap-14 gap-10 text-center lg:p-40 p-10'>
                <h1 className='lg:text-7xl text-5xl font-bold'>Discover an exceptional cooking <br /> class tailored for you!</h1>
                <p className='text-xl'>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding <br/> problems to become an exceptionally well world-class Programmer. </p>
                <div className='flex gap-4 justify-center items-center'>
                    <button className='font-semibold border-white border-[1px] bg-[#0BE58A] hover:bg-transparent hover:text-white text-black px-3
                     lg:px-6 py-3 lg:py-4 lg:text-2xl rounded-full active:scale-95 transition-all'>Explore Now</button>
                    <button className='font-semibold border-white border-[1px] hover:bg-[#0BE58A] hover:text-black px-3
                     lg:px-6 py-3 lg:py-4 lg:text-2xl rounded-full  active:scale-95 transition-all'>Our Feedback</button>
                </div>
            </div>

        </div>
    )
}

export default Hero