import React from 'react';

interface Props {
	id: String;
	title: String;
}

export default function Post(props: Props) {
	const { id, title } = props;

	return <li>{`${id}. ${title}`}</li>;
}
