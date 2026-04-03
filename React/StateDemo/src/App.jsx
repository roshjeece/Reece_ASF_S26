import {useState} from "react";

const App = () => {

  // useState returns an array of two elements
  // first element is the actual variable with an initial value
  // second element is a function that changes state
  const [inputType, setInputType] = useState(false)
  console.log("Initial State: " + inputType)

  const handleClick = (event) => {
    event.preventDefault()
    let result = !inputType
    setInputType(result)
    console.log("clicked!")
  }

  return (
      <>
        <h1>I am the App Comp of State</h1>
        <form action="">
          <label htmlFor="">Password: <input type={inputType ? "text" : "password"}/>
          </label>
          <button onClick={handleClick}>Show/Hide</button>
        </form>
      </>
  )
}

export default App;