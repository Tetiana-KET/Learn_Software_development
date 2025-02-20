import { ReactNode, useCallback, useEffect, useState } from 'react';
import { ThemeContext, ThemeUpdateContext } from './ThemeContext';

interface ThemeProviderProps {
	children: ReactNode;
}

function ThemeProvider({ children }: ThemeProviderProps) {
	const [darkTheme, setDarkTheme] = useState<boolean>(() => {
		const storedTheme = localStorage.getItem('darkTheme');
		return storedTheme ? JSON.parse(storedTheme) : true;
	});

	const toggleTheme = useCallback(() => {
		setDarkTheme(prevDarkTheme => {
			const newTheme = !prevDarkTheme;
			localStorage.setItem('darkTheme', JSON.stringify(newTheme));
			return newTheme;
		});
	}, []);

	useEffect(() => {
		localStorage.setItem('darkTheme', JSON.stringify(darkTheme));
	}, [darkTheme]);

	return (
		<ThemeContext.Provider value={darkTheme}>
			<ThemeUpdateContext.Provider value={toggleTheme}>
				{children}
			</ThemeUpdateContext.Provider>
		</ThemeContext.Provider>
	);
}
export default ThemeProvider;
