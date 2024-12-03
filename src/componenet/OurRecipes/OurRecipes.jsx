
const OurRecipes = () => {

  return (
    <div>
        <h1>Our Recipes</h1>
        <p>Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
        <div>
            <div id="food-container" className="flex justify-center items-center m-10">
                <div id="card" className="w- rounded-xl border-2 shadow-md p-3 flex flex-col gap-6">
                    <figure className="w-full">
                        <img className="w-full" src="/public/imgs/food 1.png" alt="" />
                    </figure>
                    <h1 className="font-bold">Spaghetti Bolognese</h1>
                    <p>Classic Italian pasta dish with savory meat sauce.</p>
                    <hr />
                    <h1 className="font-semibold">Ingredients: 6</h1>
                    <div className="ml-5">
                        <li className="text-gray-500">500g ground beef</li>
                        <li className="text-gray-500">1 onion, chopped</li>
                        <li className="text-gray-500">2 cloves garlic, minced</li>
                    </div>
                    <hr className=""/>
                    <div className="flex gap-4">
                        <div className="flex gap-1 justify-center itemce">
                            <img src="/public/imgs/time.png" alt="" />
                            <h1>30 Minutes</h1>
                        </div>
                        <div className="flex gap-1 justify-center itemce">
                            <img src="/public/imgs/fire.png" alt="" />
                            <h1>600 calories</h1>
                        </div>
                    </div>
                </div>
            </div>


            <div>
            Want to cook: 01
            </div>
        </div>
    </div>
  )
}

export default OurRecipes