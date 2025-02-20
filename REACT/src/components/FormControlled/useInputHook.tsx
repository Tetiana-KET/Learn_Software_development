import { useState } from 'react';

type UseInputHookReturn = [
	string,
	{ value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void },
	() => void
];

export default function useInputHook(initialValue: string): UseInputHookReturn {
	const [value, setValue] = useState(initialValue);

	const reset = () => setValue(initialValue);

	const bind = {
		value,
		onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
			setValue(e.target.value),
	};

	return [value, bind, reset];
}
