import React, { Component } from 'react';

interface Props {}

interface State {
	userName: string;
	comment: string;
	framework: string;
}

const inputStyle = {
	border: 'solid 1px #000',
};

class ControlledForm extends Component<Props, State> {
	constructor(props: Props) {
		super(props);

		this.state = { userName: '', comment: '', framework: 'react' };
	}

	handleUserNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({
			userName: event.target.value,
		});
	};

	handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		this.setState({ comment: event.target.value });
	};

	handleFrameworkChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		this.setState({ framework: event.target.value });
	};

	handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log(
			`Name: ${this.state.userName}, Preferred framework: ${this.state.framework}`
		);
		console.log(`Comment: ${this.state.comment}`);
	};

	render() {
		const { userName, comment, framework } = this.state;
		return (
			<div>
				<form onSubmit={this.handleSubmit} action=''>
					<div>
						<label htmlFor='userName' style={{ marginRight: '10px' }}>
							User Name
						</label>
						<input
							id='userName'
							type='text'
							value={userName}
							onChange={this.handleUserNameChange}
							style={inputStyle}
						/>
					</div>

					<div>
						<label htmlFor='commentsField' style={{ marginRight: '10px' }}>
							Comment
						</label>
						<textarea
							id='commentsField'
							value={comment}
							onChange={this.handleCommentChange}
							style={inputStyle}
						/>
					</div>

					<div>
						<label htmlFor='frameworksSelect' style={{ marginRight: '10px' }}>
							Frameworks
						</label>
						<select
							value={framework}
							onChange={this.handleFrameworkChange}
							name='frameworks'
							id='frameworksSelect'
							style={inputStyle}
						>
							<option value='angular'>Angular</option>
							<option value='react'>React</option>
							<option value='vue'>Vue</option>
						</select>
					</div>
					<button type='submit' style={inputStyle}>
						Submit
					</button>
				</form>
			</div>
		);
	}
}

export default ControlledForm;
