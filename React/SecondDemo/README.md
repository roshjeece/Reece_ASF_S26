## Notes

- Understand the relationships between DOM, Main.jsx, HTML, app.jsx, etc etc etc
- Main.jsx is the "gateway"

```jsx
const App = () => {
  return (
      <>
        <h1>My Component</h1>
          <ul>
            <li>Pax au Telemanus</li>
          </ul>
      </>
  )
}

export default App;
```

## Export/Import
```jsx
// RedRising.jsx

// component
const RedRising = () => {
    return (

        <ul>
            <li>Pax au Telemanus</li>
        </ul>

    )
}

export default RedRising;
```

```jsx
import RedRising from "./components/RedRising.jsx";

// component
const App = () => {
  return (
      <>
        <h1>My Component</h1>
        <RedRising/>
      </>
  )
}

export default App;
```

Takeaway: You can plug and play these ***components*** wherever you want them to be across React!


## Props
```jsx
import RedRising from "./components/RedRising.jsx";

// component
const App = () => {
  return (
      <>
        <h1>My Component</h1>
        <RedRising data={"Eo was selfish"} mustang={"Virginia is better"}/>
      </>
  )
}

export default App;
```

```jsx
// component
const RedRising = (props) => {
    return (

        <ul>
            <li>{props.data}</li>
            <li>{props.mustang}</li>
        </ul>

    )
}

export default RedRising;
```

## data.js vs. helper.jsx
- data.js better for bulk data storage
- helper.jsx better for function referencing

```jsx

```