import { Routes, Route } from "react-router-dom";
import Past from "./page/past";
import Home from "./page/home";

function App() {
	return (
		<div className="flex h-screen flex-col items-center justify-center text-white">
			<main className="flex flex-col items-center justify-center gap-4">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/past" element={<Past />} />
				</Routes>
			</main>
		</div>
	);
}

export default App;
