import RedRising from "./components/RedRising.jsx";
import {weapons, institute} from "./utils/data.js"

// component
const App = () => {
  return (
      <>
        <h1>My Component</h1>
        <RedRising
            eo={"Eo was selfish"}
            mustang={"Virginia is better"}
            sevro={false}
            weaponArray = {weapons}
        />
      </>
  )
}

export default App;