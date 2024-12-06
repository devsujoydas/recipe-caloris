import { useState } from "react"
import FoodCard from "./FoodCard"
import WantToCook from "./WantToCook"
import { useEffect } from "react";

const OurRecipes = () => {
    const [foods, setFoods] = useState([]);
    const [foodCooking, setFoodCooking] = useState([]);

    useEffect(() => {
        fetch('food.json')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])

     const WantToCookHandler = (food) =>{
        console.log('Clicked',food);
        setFoodCooking(food)
     }

    return (
        <div className="py-10 lg:max-w-screen-2xl lg:mx-auto mx-10">
            <h1 className="text-center font-bold text-4xl">Our Recipes</h1>
            <p className="text-center text-gray-500 my-5">Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget <br /> urna volutpat curabitur elementum mauris aenean neque. </p>
            <div className="flex gap-4 flex-col lg:flex-row">
                <div id="food-container" className="lg:w-3/5 grid grid-cols-1 lg:grid-cols-2 gap-3">
                    {foods.map((food, idx) => (
                        <FoodCard food={food} key={idx} WantToCookHandler={WantToCookHandler}/>
                    ))}
                </div>

                <div className="lg:w-3/5">
                    <WantToCook foodCooking={foodCooking}/>
                </div>
            </div>
        </div>
    )
}

export default OurRecipes