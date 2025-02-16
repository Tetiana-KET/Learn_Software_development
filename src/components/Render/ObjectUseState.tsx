import React, { useState } from 'react';

const inputStyle = {
	border: 'solid 1px #000',
	padding: '5px 10px',
	margin: '5px',
};

const initialState = { fname: 'Bruce', lname: 'Wane' };

export default function ObjectUseState() {
	const [person, setPerson] = useState(initialState);

	const changePerson = () => {
		/*	
    this will not trigger rerender, as we mutate properties in the object and pass to setter 
    the reference to the same object.
    To trigger re-render we should pass another object

    person.fname = 'Clark';
		person.lname = 'Kent';
		setPerson(person);
    */

		// person.fname = 'Clark';
		// person.lname = 'Kent';
		// setPerson(person);

		const newPerson = { ...person };
		newPerson.fname = 'Clark';
		newPerson.lname = 'Kent';
		setPerson(newPerson);
	};

	console.log('ObjectUseState renders');
	return (
		<div>
			<button onClick={changePerson} style={inputStyle}>
				{person.fname} {person.lname}
			</button>
		</div>
	);
}
