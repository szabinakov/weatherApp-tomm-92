# Weather App

This project is a react based weather app which allows the user to search for a 5-day forecast for any UK city. I completed this work as part of the CommandShift Software Developer Bootcamp. The app uses forecast data from a CommandShift API via the Axios HTTP Client for Node.js

Access a live verison here: https://weatherapplicationinreact.netlify.app

## Features

The application will display a 5-day weather forecast for a location as defined by the user. If no location is defined, then the weather forecast for Manchester, UK will be loaded by default.

The following weather data will be displayed: date, temperature, description and an icon summarising the forecast. The user can click 'more details' for further information on the weather forecast for the selected day. This will include the maximum and minimum temperatures, humidity, wind speed, and wind direction.

## Technologies & Concepts Covered

- React inc. RTL
- Axios
- Components
- Props
- Hooks - useState & useEffect

## Installation

1 - Clone the repository to your local machine

```cli
git clone https://github.com/Tomm-92/weatherApp.git
```

2 - Navigate to the project directory

```cli
cd weatherApp
```

3 - Install the project dependencies

```cli
npm install
```

4 - Start the application

```cli
npm start
```

5 - View the application in the browser:

### `http://localhost:3000/`

## Application Dependencies

      "dependencies": {
        "@testing-library/jest-dom": "^5.16.5",
        "@testing-library/react": "^13.4.0",
        "@testing-library/user-event": "^13.5.0",
        "axios": "^1.3.4",
        "react": "^18.2.0",
        "react-dom": "^18.2.0",
        "react-scripts": "5.0.1",
        "web-vitals": "^2.1.4"
      },

## Developer Dependencies

"devDependencies": {
"eslint-config-airbnb": "^19.0.4",
"eslint-config-prettier": "^8.8.0",
"eslint-plugin-import": "^2.27.5",
"eslint-plugin-jsx-a11y": "^6.7.1",
"eslint-plugin-prettier": "^4.2.1",
"eslint-plugin-react": "^7.32.2",
"eslint-plugin-react-hooks": "^4.6.0",
"prettier": "^2.8.6"
}

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

## Author

Tom Wilkinson - https://github.com/Tomm-92
