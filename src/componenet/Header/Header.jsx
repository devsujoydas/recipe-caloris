

const Header = () => {
  return (
    <div className="flex justify-between max-w-screen-2xl">
        <h1>Recipe Calories </h1>
        <div className="flex justify-between">
            <a href="#">Home</a>
            <a href="#">Recipes</a>
            <a href="#">About</a>
            <a href="#">Search</a>
        </div>
        <div className="flex justify-between">
            <img src="/public/imgs/Frame (1).png" alt="" />
            <input type="text" placeholder="Search" />
            <img src="/public/imgs/Frame.png" alt="" />
        </div>
    </div>
  )
}

export default Header 