import { Countdown } from "./components/Countdown";

function App() {
	const concertDate = new Date("2025-06-16T00:00:00");
	const albumDate = new Date("2025-05-16T00:00:00");
	return (
		<div className="flex h-screen flex-col items-center justify-center text-white">
			<main className="flex flex-col items-center justify-center gap-4">
				<Countdown targetDate={concertDate} title="Time to Linkin Park Concert" />
				{/* <Countdown targetDate={albumDate} title="Time to Linkin Park Album" /> */}
			</main>
		</div>
	);
}

export default App;
