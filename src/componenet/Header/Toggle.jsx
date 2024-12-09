
import { useState } from "react";
const Toggle = () => {
    const [navforsm, setNavforsm] = useState(false); // Use a boolean for clarity

    const toggleHandler = () => {
      setNavforsm((prev) => !prev); // Toggle the state
    };


  return (
    <div>
      <button onClick={toggleHandler}>Toggle Navigation</button>
      <div
        id="nav-for-sm-dv"
        className={`${
          navforsm ? "flex" : "hidden"
        }`}
      >
        {/* Navigation content goes here */}
        <p>This is the navigation menu.</p>
      </div>
    </div>
  )
}

export default Toggle