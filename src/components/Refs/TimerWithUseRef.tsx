import React, { useEffect, useRef, useState } from 'react';

const inputStyle = {
	border: 'solid 1px #000',
	padding: '5px 10px',
	marginRight: '5px',
};

export default function TimerWithUseRef() {
	const [timer, setTimer] = useState(0);

	const timerIntervalRef = useRef<number | null>(null);

	const startTimer = () => {
		if (!timerIntervalRef.current) {
			timerIntervalRef.current = setInterval(
				() => setTimer(prev => prev + 1),
				1000
			);
		}
	};

	const stopTimer = () => {
		if (timerIntervalRef.current) {
			clearInterval(timerIntervalRef.current);
			timerIntervalRef.current = null;
		}
	};

	useEffect(() => {
		startTimer;
		return () => stopTimer();
	}, []);

	return (
		<div>
			<h2 style={{ fontWeight: 'bold', margin: '5px' }}>
				Timer With UseRef - {timer}
			</h2>
			<div
				style={{
					display: 'flex',
					gap: '10px',
					justifyContent: 'center',
					padding: '10px	',
				}}
			>
				<button onClick={stopTimer} style={inputStyle}>
					Stop Timer
				</button>
				<button onClick={startTimer} style={inputStyle}>
					Start Timer
				</button>
			</div>
		</div>
	);
}
