import React from 'react';
// The only argument to createContext is the default value.
// If you don’t provide the context, React will use the default value you’ve specified in the previous step.
// Go to App.ts import Import the useContext and this context
// Wrap the App with a context provider to provide the Context to all children in the tree below

// export const ThemeContext = React.createContext('light');

import { createContext, useContext } from 'react';

export const ThemeContext = createContext<boolean>(false);
export const ThemeUpdateContext = createContext<() => void>(() => {});
export function useTheme() {
	return useContext(ThemeContext);
}
export function useThemeUpdateContext() {
	return useContext(ThemeUpdateContext);
}
