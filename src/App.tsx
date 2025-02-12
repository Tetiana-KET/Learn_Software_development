import { useContext } from 'react';
import './App.css';
import HomePage from './pages/Home/HomePage';
import { ThemeContext } from './components/Context/ThemeContext';
import ThemeProvider from './components/Context/ThemeProvider';

function App() {
	const theme = useContext(ThemeContext);
	console.log(theme); // light

	return (
		<ThemeProvider>
			<HomePage />
		</ThemeProvider>
	);
}

export default App;
