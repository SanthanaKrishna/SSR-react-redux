This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

ServerSideRendering: Generate HTML on the server
Universal Javascript and Isomorphic Javascript: the same code runs on the server and the browser

https://react-ssr-api.herokuapp.com/


SSR-React:
npm install:
npm install -D webpack babel-core babel-loader
npm install babel-preset-react-app file-loader css-loader postcss-loader autoprefixer extract-text-webpack-plugin

npm install express
npm install isomorphic fetch 
React Dom : render(), renderToString()
render: create instances of a bunch of components and mounts them to DOM node
renderToString: renders a bunch of components one time and produces a string out of all the resulting HTML

Problem and Solution for:
 =>if we write JSX on server we need to run webpack and babel on server side
JSX on the server: i)Run Webpack on all of our server side code, then execute the resulting bundle

Need to turn components into HTML: Use the 'react-dom/server' libraries 'renderToString' function

nodemon npm

"dev:build:server"
"dev:build:client"
"dev": "npm-run-all --parallel dev:*",  //dev:* means start with dev
 //dev dev:* we write - instead /:"dev:build-server" and "dev:build-client"


 Router 
 
 Server: StaticRouter: for use when doing SSR
 Client: BrowserRouter; for use when running in a browser

 PROVIDER:
 is use to communicate data from store to any connect component in our application



Use react-route-config for server side routing
https://tylermcginnis.com/react-router-route-config/
https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config 
and we write like this 
