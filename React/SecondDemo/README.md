# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Notes

- Understand the relationships between DOM, Main.jsx, HTML, app.jsx, etc etc etc
- Main.jsx is the "gateway"

```JavaScript
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
```JavaScript
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

```JavaScript
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