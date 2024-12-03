

const Header = () => {
    return (
        <header className="border p-10">
            <div className="flex justify-between lg:lg:max-w-screen-2xl mx-auto">
                <a href="" className="font-bold text-4xl">Recipe Calories </a>
                <div className="flex items-center gap-10">
                    <a href="#" className="hover:text-[#0BE58A] font-semibold border-2-transparent hover:border-b-[#068f56] hover:border-b-2 transition-all active:scale-95">Home</a>
                    <a href="#" className="hover:text-[#0BE58A] font-semibold border-2-transparent hover:border-b-[#068f56] hover:border-b-2 transition-all active:scale-95">Recipes</a>
                    <a href="#" className="hover:text-[#0BE58A] font-semibold border-2-transparent hover:border-b-[#068f56] hover:border-b-2 transition-all active:scale-95">About</a>
                    <a href="#" className="hover:text-[#0BE58A] font-semibold border-2-transparent hover:border-b-[#068f56] hover:border-b-2 transition-all active:scale-95">Search</a>
                </div>
                <div className="flex gap-2">
                    <div className="flex items-center bg-gray-200 rounded-full text-black ">
                        <img className="w-5 h-5 ml-3 mr-2" src="/public/imgs/Frame (1).png" alt="" />
                        <input className="bg-transparent outline-none  font-semibold" type="text" placeholder="Search" />
                    </div>
                    <img className="bg-[#0BE58A] rounded-full p-2" src="/public/imgs/Frame.png" alt="" />
                </div>
            </div>
        </header>
    )
}

export default Header 