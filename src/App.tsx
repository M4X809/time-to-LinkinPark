import { Routes, Route } from "react-router-dom";
import Past from "./page/past";
import Home from "./page/home";
import { SelectedPersonProvider } from "./context/SelectedPersonContext";

function App() {
	return (
		<SelectedPersonProvider>
			<div className="min-h-screen w-full !bg-[#0D1117] text-white">
				<main className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
					<div className="flex min-h-screen flex-col items-center justify-center">
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/past" element={<Past />} />
						</Routes>
					</div>
				</main>
			</div>
		</SelectedPersonProvider>
	);
}

export default App;
