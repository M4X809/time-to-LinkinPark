import { Routes, Route } from "react-router-dom";
import Past from "./page/past";
import Home from "./page/home";
import { SelectedPersonProvider } from "./context/SelectedPersonContext";

function App() {
	return (
		<SelectedPersonProvider>
			<div className="flex h-screen flex-col items-center justify-center !bg-[#0D1117] text-white">
				<main className="flex flex-col items-center justify-center gap-4">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/past" element={<Past />} />
					</Routes>
				</main>
			</div>
		</SelectedPersonProvider>
	);
}

export default App;
