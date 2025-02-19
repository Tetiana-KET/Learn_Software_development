# React + Vite

`npm create vite@latest .` Dot is to expand the project in current dir or enter the folder name if needed.
`npm install` install dependencies
`npm install axios @reduxjs/toolkit` install axios for fetching and redux toolkit
`npm install react-redux`
`import { Provider } from 'react-redux';` in main.jsx import provider
**wrap the app component with the provider component, pass store as a prop**
`  <Provider store={store}>
    <App />
  </Provider>`

`const some Value = useSelector((state)=> state.sliceName.property)` use useSelector to get access to the state
