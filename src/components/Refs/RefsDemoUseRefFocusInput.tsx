import React, { useEffect, useRef } from 'react';

const inputStyle = {
	border: 'solid 1px #000',
	padding: '5px 10px',
	marginRight: '5px',
};

export default function RefsDemoUseRefFocusInput() {
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		inputRef.current?.focus();
	}, []); // empty array to execute only once

	return (
		<div>
			<label htmlFor='inputFocus'>Refs Demo with UseRef to Focus Input </label>
			<input ref={inputRef} type='text' id='inputFocus' style={inputStyle} />
		</div>
	);
}
