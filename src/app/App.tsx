import React from "react";
import { Route, Routes } from "react-router-dom";

const Home: React.FC = () => (
	<div>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, omnis molestias doloribus amet odit rem
			cupiditate sint hic provident voluptatum architecto cumque quis nisi libero qui, laborum blanditiis
			temporibus quisquam.
		</p>

		<p>안녕하세요 접니다</p>
	</div>
);

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
		</Routes>
	);
}

export default App;
