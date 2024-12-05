

const WantToCook = () => {
    return (
        <div className="border py-10 rounded-2xl ">
            <h1 className="font-semibold text-2xl text-center ">Want to Cook: 01</h1>
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
                    <tbody>
                        {/* row 1 */}
                        <tr className="bg-gray-100">
                            <th>1</th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src="/public/imgs/food 2.png"
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Spaghetti Bolognese</div>
                                    </div>
                                </div>
                            </td>
                            <td> 20 minutes </td>
                            <td>400 calories</td>
                            <th>
                                <button className="font-semibold bg-[#0BE58A] px-6 py-2 rounded-full hover:bg-[#5bf5a5] active:scale-95 transition-all">Prepairing</button>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
            <h1 className="font-semibold text-2xl mt-6 text-center ">Currently Cooking: 02</h1>
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
                        {/* row 1 */}
                        <tr className="">
                            <th>1</th>
                            <td className="font-bold"> Spaghetti Bolognese </td>
                            <td> 20 minutes </td>
                            <td> 400 calories</td>
                        </tr>
                    </tbody>
                </table>
                <div className="text-center mt-10">
                    <div className="font-semibold ">
                        <h1>Total Time = 45 Minutes</h1>
                        <h1>Total Calories = 600 Calories</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WantToCook