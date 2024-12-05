import FoodCard from "./FoodCard"
import WantToCook from "./WantToCook"

const OurRecipes = () => {

    return (
        <div className="py-10 lg:max-w-screen-2xl mx-auto">
            <h1 className="text-center font-bold text-4xl">Our Recipes</h1>
            <p className="text-center text-gray-500 my-5">Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget <br /> urna volutpat curabitur elementum mauris aenean neque. </p>
            <div className="flex gap-4">
                <div id="food-container" className=" grid grid-cols-2 gap-3  items-center">
                   <FoodCard/>
                   <FoodCard/>
                </div>

                <div>
                    <WantToCook/>
                </div>
            </div>
        </div>
    )
}

export default OurRecipes