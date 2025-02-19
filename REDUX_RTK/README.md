1. `npm init --yes` - it will initialize package.json with default settings
2. `npm install @reduxjs/toolkit`
3. rtk has some opinion about folder structure, so make sure to follow it.
   Here are the key files that make up this application:

- /src
  - main.tsx: the starting point for the app
  - App.tsx: the top-level React component
  - /app
    - store.ts: creates the Redux store instance
    - hooks.ts: exports pre-typed React-Redux hooks
  - /features -all the features of the app
    - /counter
      - Counter.tsx: a React component that shows the UI for the counter feature
      - counterSlice.ts: the Redux logic for the counter feature

4. The recommendation is to group together the reducer logic and the actions for a single feature in a single file.
   The file should contain `slice` as a suffix
   The entire application state is split into slices and managed individually
