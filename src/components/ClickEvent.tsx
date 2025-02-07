export default function ClickEvent() {
	function clickHandler() {
		console.log('button clicked');
	}
	return (
		<div>
			<button
				style={{ background: '#ffffff', color: '#000000', padding: '5px 10px' }}
				onClick={clickHandler}
			>
				Click me
			</button>
		</div>
	);
}
