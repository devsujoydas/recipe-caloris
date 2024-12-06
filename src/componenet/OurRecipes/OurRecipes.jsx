import { useState } from "react"
import FoodCard from "./FoodCard"
import { useEffect } from "react";

const OurRecipes = () => {
    const [foods, setFoods] = useState([]);
    const [foodCooking, setFoodCooking] = useState([]);
    const [cookedFood, setCookedFood] = useState([]);
    const [minutes, setMinutes] = useState(0);
    const [calories, setCalories] = useState(0);


    useEffect(() => {
        fetch('food.json')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])

    const wantToCookHandler = (food) => {
        let wantToCooking = [...foodCooking, food]
        setFoodCooking(wantToCooking)
    }

    const prepairingHandler = (preFood) => {
        
        const cookedFoodReady = [...cookedFood, preFood]
        setCookedFood(cookedFoodReady)
        
        minuteCaloriesHandler(preFood.minutes, preFood.calories)

        const newArr = foodCooking.filter(food => food.id != preFood.id)
        setFoodCooking(newArr)
    }
    const minuteCaloriesHandler = (minute, foodCalories) => {
        let time = parseInt(minute);
        setMinutes(minutes + time)

        let calorie = parseInt(foodCalories);
        setCalories(calories + calorie)
    };




    return (
        <div className="py-10 lg:max-w-screen-2xl lg:mx-auto mx-10">
            <h1 className="text-center font-bold text-4xl">Our Recipes</h1>
            <p className="text-center text-gray-500 my-5">Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget <br /> urna volutpat curabitur elementum mauris aenean neque. </p>
            <div className="flex gap-4 flex-col lg:flex-row">
                <div id="food-container" className="lg:w-3/5 grid grid-cols-1 lg:grid-cols-2 gap-3">
                    {foods.map((food, idx) => (
                        <FoodCard food={food} key={idx} wantToCookHandler={wantToCookHandler} />
                    ))}
                </div>

                <div className="lg:w-3/5">
                    <div className="border py-10 rounded-2xl ">
                        <h1 className="font-semibold text-2xl text-center ">Want to Cook: {foodCooking.length}</h1>
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Time</th>
                                        <th>Calories</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody className="">
                                    {foodCooking.map((food, idx) => (
                                        <tr key={idx} className="bg-gray-100">
                                            <th>{idx+1}</th>
                                            <td className="font-bold">{food.name}</td>
                                            <td> {food.minutes} minutes </td>
                                            <td>{food.calories} calories</td>
                                            <th>
                                                <button onClick={() => { prepairingHandler(food) }} className="font-semibold bg-[#0BE58A] px-6 py-2 rounded-full hover:bg-[#5bf5a5] active:scale-95 transition-all">Prepairing</button>
                                            </th>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>




                        <h1 className="font-semibold text-2xl mt-6 text-center ">Currently Cooking: {cookedFood.length}</h1>
                        <div>
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Time</th>
                                        <th>Calories</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {cookedFood.map((foodCooked, idx) => (
                                        <tr key={idx} className="">
                                            <th>{idx+1}</th>
                                            <td className="font-bold"> {foodCooked.name} </td>
                                            <td> {foodCooked.minutes} minutes </td>
                                            <td> {foodCooked.calories} calories</td>
                                        </tr>
                                    ))}

                                </tbody>



                            </table>
                            <div className="text-center mt-10">
                                <div className="font-semibold ">
                                    <h1>Total Time = {minutes} Minutes</h1>
                                    <h1>Total Calories = {calories} Calories</h1>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default OurRecipes