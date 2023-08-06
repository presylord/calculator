
<div align="center">
<h1 align="center">
<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
<br>Simple Calculator
</h1>


<img src="https://img.shields.io/github/languages/top/presylord/calculator?style&color=5D6D7E" alt="GitHub top language" />
<img src="https://img.shields.io/github/languages/code-size/presylord/calculator?style&color=5D6D7E" alt="GitHub code size in bytes" />


</div>

---

## 📒 Table of Contents
- [📒 Table of Contents](#-table-of-contents)
- [📍 Overview](#-overview)
- [📂 Project Structure](#project-structure)
- [🧩 Modules](#modules)
- [🚀 Getting Started](#-getting-started)
- [🗺 Roadmap](#-roadmap)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [👏 Acknowledgments](#-acknowledgments)

---


## 📍 Overview

The project is a simple calculator application built with React. It provides a user interface with buttons for digits and operations, a screen to display input and output, and logic to handle calculations. The calculator allows users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division. Its purpose is to provide a convenient tool for performing calculations, making it valuable for anyone in need of a quick and accessible calculator solution.

---


## 📂 Project Structure




---

## 🧩 Modules


| File                                                                                            | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ---                                                                                             | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [index.html](https://github.com/presylord/calculator/blob/main/index.html)                      | This code snippet is an HTML file that serves as the entry point for a simple calculator application. It includes a meta tag for specifying the character set and viewport settings, a title for the page, and a script tag linking to the main JSX file that contains the calculator logic. The calculator application will be rendered in the `div` element with the `id` of "root".                                                                                                                                                                                                                                                             |
| [vite.config.js](https://github.com/presylord/calculator/blob/main/vite.config.js)              | This code snippet is a Vite configuration file that uses the Vite plugin for React. It exports a configuration object that includes the React plugin in the plugins array. Vite is a build tool for modern web development and this configuration allows for efficient development and bundling of React applications.                                                                                                                                                                                                                                                                                                                             |
| [App.css](https://github.com/presylord/calculator/blob/main/src\App.css)                        | The code snippet provides CSS styles for a calculator interface. It creates a wrapper with specific dimensions and styling. It also styles the screen and button box. The buttons have specific styling, including hover effects. The equals button is given a specific grid column and has a different background color and hover effect.                                                                                                                                                                                                                                                                                                         |
| [App.jsx](https://github.com/presylord/calculator/blob/main/src\App.jsx)                        | This code snippet imports the CSS file and the Wrapper component from their respective files. The App component returns the wrapper component, which will be rendered as the main content of the application.                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [index.css](https://github.com/presylord/calculator/blob/main/src\index.css)                    | This code snippet imports and applies the "Montserrat" font from Google Fonts. It sets the margin and padding of all elements to 0, and sets the font-family to "Montserrat" for all elements. The body element is styled to occupy the full height of the viewport and be centered both vertically and horizontally. The background color is set to a gradient between #9bd8cf and #e0b77c.                                                                                                                                                                                                                                                       |
| [main.jsx](https://github.com/presylord/calculator/blob/main/src\main.jsx)                      | The code snippet sets up the React application by rendering the `App` component within the `AppContext` component. It also includes a strict mode for development purposes. The rendered result is then displayed inside an HTML element with the ID'root'.                                                                                                                                                                                                                                                                                                                                                                                        |
| [Button.jsx](https://github.com/presylord/calculator/blob/main/src\components\Button.jsx)       | The code snippet defines a Button component that handles user click events. It imports a global context that provides functions for handling digits and operations. The handleClicker function checks if the button value is a digit or operation, and calls the appropriate context function. The button's class and label are determined based on the digit value. The component is exported to be used in other parts of the application.                                                                                                                                                                                                       |
| [ButtonBox.jsx](https://github.com/presylord/calculator/blob/main/src\components\ButtonBox.jsx) | The code snippet is a React component called ButtonBox that receives an array of calcuDigits as a prop. It maps through the array and renders a Button component for each digit, passing the digit as a prop. The Button components are enclosed in a div element with the className "buttonBox".                                                                                                                                                                                                                                                                                                                                                  |
| [context.jsx](https://github.com/presylord/calculator/blob/main/src\components\context.jsx)     | The code snippet provides a way to create a global context in a React application. It utilizes the useReducer and createContext hooks from React to manage state and provide a global context. The initialState represents the initial state of the application, and the reducer function handles state updates based on dispatched actions. There are specific handle functions for digits and operations that dispatch appropriate actions to update the state. The GlobalContext.Provider is used to provide the context value to its children components. The useGlobalContext hook can be used to access the context value within components. |
| [reducer.jsx](https://github.com/presylord/calculator/blob/main/src\components\reducer.jsx)     | This code snippet is a reducer function used for managing state in a calculator application. It handles various actions such as computing the result, clearing the state, toggling the sign, and performing arithmetic operations like addition, subtraction, multiplication, and division. It updates the state accordingly and returns the new state object.                                                                                                                                                                                                                                                                                     |
| [Screen.jsx](https://github.com/presylord/calculator/blob/main/src\components\Screen.jsx)       | The provided code exports a React component called "Screen". It imports the "useState" and "useGlobalContext" hooks. The component fetches the "display" value from the global context and displays it in a div with the "screen" class. The component exports and can be used elsewhere in the application.                                                                                                                                                                                                                                                                                                                                       |
| [Wrapper.jsx](https://github.com/presylord/calculator/blob/main/src\components\Wrapper.jsx)     | The provided code snippet is a wrapper component that includes a screen component and a button box component. It imports and uses a contextual "useGlobalContext" function and "calcuDigits" function. Overall, it encapsulates the core functionalities of a calculator interface.                                                                                                                                                                                                                                                                                                                                                                |

</details>

---
