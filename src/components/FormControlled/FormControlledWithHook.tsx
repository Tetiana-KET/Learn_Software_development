import React from 'react';
import useInputHook from './useInputHook';

const inputStyle = {
	border: 'solid 1px #000',
	padding: '5px',
};

export default function FormControlledWithHook() {
	const [firstName, bindFirstName, resetFirstName] = useInputHook('');
	const [lastName, bindLastName, resetLastName] = useInputHook('');

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(`First Name: ${firstName}`);
		console.log(`Last Name: ${lastName}`);
		resetFirstName();
		resetLastName();
	};

	return (
		<div>
			<form action='' onSubmit={handleSubmit}>
				<div style={{ marginBottom: '10px' }}>
					<label htmlFor='firstName' style={{ marginRight: '10px' }}>
						First Name
					</label>
					<input
						{...bindFirstName}
						type='text'
						id='firstName'
						style={inputStyle}
					/>
				</div>
				<div style={{ marginBottom: '10px' }}>
					<label htmlFor='lastName' style={{ marginRight: '10px' }}>
						Last Name
					</label>
					<input
						{...bindLastName}
						type='text'
						id='lastName'
						style={inputStyle}
					/>
				</div>
				<button type='submit' style={inputStyle}>
					Submit
				</button>
			</form>
		</div>
	);
}
