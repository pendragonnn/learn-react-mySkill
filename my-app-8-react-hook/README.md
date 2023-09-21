# Learn React Part 8 (React Hooks)

Hooks membuat functional component mempunyai akses ke state dan lifecycle methods. 

Dalam Hooks terdapat 3 buah aturan utama yaitu : 
- hooks hanya bisa dipanggil dalam functional component
- hooks hanya dapat dipanggil pada top level of the component
- hooks tidak bisa conditional

React useState Hooks memungkinkan untuk melacak state dalam functional component.

import dan inisialisasi useState

```javascript
import { useState } from 'react';

function favoriteColor() {
  const [color, setColor] = useState(" ");
}
```

Contoh penggunaan useState

```javascript
function FavoriteColor() {
  const [color, setColor] = useState("red")

  return (
    <>
      <h1>Ny favorite color is {color}!</h1>
      <button type='button' onClick={ () => setColor("blue") }>Blue</button>
    </>  
  )
}

function Car() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });

  const updateColor = () => {
    setCar(previousState => {
      return{...previousState, color:"blue"}
    })
  }

  const updateYear = () => {
    setCar(previousState => {
      return{...previousState, year: "1999"}
    })
  }

  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}
      </p>
      <button onClick={updateColor}>Blue Car</button>
      <button onClick={updateYear}>1999</button>
    </> 
  )
}
```

Ketika memperbarui state, maka semua state akan di-overwritten. Jika ingin memperbarui hanya satu properti saja, maka dapat digunakan opertaor spread dalam javacript seperti contoh berikut : 

```javascript
  const updateColor = () => {
    setCar(previousState => {
      return{...previousState, color:"blue"}
    })
  }

  const updateYear = () => {
    setCar(previousState => {
      return{...previousState, year: "1999"}
    })
  }
```

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
