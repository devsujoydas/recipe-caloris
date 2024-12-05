/* eslint-disable react/prop-types */


const FoodCard = ({ food, WantToCookHandler }) => {
    const { img, name, description, minutes, calories, ingredients } = food;

    return (
        <div id="card" className="w- rounded-xl border-2 shadow-md p-5 flex flex-col gap-3 lg:gap-4">
            <figure className="w-full">
                <img className="w-full" src={img} alt="" />
            </figure>
            <h1 className="font-bold">{name}</h1>
            <p>{description}</p>
            <hr />
            <h1 className="font-semibold">Ingredients: {ingredients.length}</h1>
            <div className="ml-5">
                {ingredients.map((ingredient, idx) => (
                    <li className="text-gray-500" key={idx}>{ingredient}</li>))}
            </div>
            <hr className="" />
            <div className="flex gap-4">
                <div className="flex gap-1 justify-center itemce">
                    <img src="/public/imgs/time.png" alt="" />
                    <h1>{minutes} Minutes</h1>
                </div>
                <div className="flex gap-1 justify-center itemce">
                    <img src="/public/imgs/fire.png" alt="" />
                    <h1>{calories} calories</h1>
                </div>
            </div>
            <div>
                <button onClick={()=>{WantToCookHandler(food)}} className="font-semibold bg-[#0BE58A] px-6 py-3 rounded-full hover:bg-[#5bf5a5] active:scale-95 transition-all">Want to Cook</button>
            </div>
        </div>
    )
}

export default FoodCard