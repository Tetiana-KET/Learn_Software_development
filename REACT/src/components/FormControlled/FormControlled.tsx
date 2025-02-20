import React, { useState } from 'react';

const inputStyle = {
	border: 'solid 1px #000',
	padding: '5px',
};

export default function FormControlled() {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(`First Name: ${firstName}`);
		console.log(`Last Name: ${lastName}`);
	};

	return (
		<div>
			<form action='' onSubmit={handleSubmit}>
				<div style={{ marginBottom: '10px' }}>
					<label htmlFor='firstName' style={{ marginRight: '10px' }}>
						First Name
					</label>
					<input
						value={firstName}
						onChange={e => setFirstName(e.target.value)}
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
						value={lastName}
						onChange={e => setLastName(e.target.value)}
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
