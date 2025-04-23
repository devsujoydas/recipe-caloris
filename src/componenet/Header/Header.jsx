
import { useState } from 'react'
import search from '/imgs/Frame (1).png'
import profile from '/imgs/Frame.png'
const Header = () => {
    const toggle = document.getElementById('nav-for-sm-dv')
    const [navforsm, setNavforsm] = useState(0)

    const toggleHandler = () => {
        if (navforsm) {
            toggle.classList.remove('hidden')
            toggle.classList.add('flex')
            setNavforsm(false)
        } else {
            toggle.classList.remove('flex')
            toggle.classList.add('hidden')
            setNavforsm(true)
        }

    }
    return (
        <header className=" p-10">
            <nav className="flex justify-between lg:lg:max-w-screen-2xl mx-auto relative">
                <a href="" className="font-bold lg:text-4xl text-3xl">Recipe Calories </a>
                <div className="lg:flex hidden items-center gap-10">
                    <a href="#" className="hover:text-[#0BE58A] font-semibold border-2-transparent hover:border-b-[#068f56] hover:border-b-2 transition-all active:scale-95">Home</a>
                    <a href="#" className="hover:text-[#0BE58A] font-semibold border-2-transparent hover:border-b-[#068f56] hover:border-b-2 transition-all active:scale-95">Recipes</a>
                    <a href="#" className="hover:text-[#0BE58A] font-semibold border-2-transparent hover:border-b-[#068f56] hover:border-b-2 transition-all active:scale-95">About</a>
                    <a href="#" className="hover:text-[#0BE58A] font-semibold border-2-transparent hover:border-b-[#068f56] hover:border-b-2 transition-all active:scale-95">Search</a>
                </div>
                <div className="flex gap-2">
                    <div className="flex items-center bg-gray-200 rounded-full text-black ">
                        <img className="lg:block hidden w-5 h-5 ml-3 mr-2" src={search} alt="" />
                        <input className="bg-transparent lg:block hidden outline-none  font-semibold" type="text" placeholder="Search" />
                    </div>
                    <button onClick={() => { toggleHandler() }}>
                        <img className="bg-[#0BE58A] rounded-full p-2 active:scale-95 hover:bg-emerald-400 w-10 h-10" src={profile} alt="" />
                    </button>
                </div>

                <div id='nav-for-sm-dv' className="hidden flex-col gap-2 absolute right-0 top-12 border  bg-white p-5 rounded-md text-xl">
                    <a href="#" className="hover:text-[#0BE58A] font-semibold border-2-transparent hover:border-b-[#068f56] hover:border-b-2 transition-all active:scale-95">Home</a>
                    <a href="#" className="hover:text-[#0BE58A] font-semibold border-2-transparent hover:border-b-[#068f56] hover:border-b-2 transition-all active:scale-95">Recipes</a>
                    <a href="#" className="hover:text-[#0BE58A] font-semibold border-2-transparent hover:border-b-[#068f56] hover:border-b-2 transition-all active:scale-95">About</a>
                    <a href="#" className="hover:text-[#0BE58A] font-semibold border-2-transparent hover:border-b-[#068f56] hover:border-b-2 transition-all active:scale-95">Search</a>
                </div>
            </nav>
        </header>
    )
}

export default Header 