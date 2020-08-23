import React, { useState } from 'react';

const Example = () => {
	const [ count, setCounter ] = useState(0);
	return (
		<div className="App">
			<p>you clicked {count} of times</p>
			<button onClick={() => setCounter(count + 1)}>click me</button>
		</div>
	);
};

export default Example;
