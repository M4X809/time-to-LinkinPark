import { Countdown } from "./components/Countdown";

function App() {
	const concertDate = new Date("2026-06-03T18:30:00");
	const imagineDragons = new Date("2025-07-16T18:45:00");
	return (
		<div className="flex h-screen flex-col items-center justify-center text-white">
			<main className="flex flex-col items-center justify-center gap-4">
				<Countdown targetDate={concertDate} title="Time to Linkin Park Concert" />
				<Countdown targetDate={imagineDragons} title="Time to Imagine Dragons Concert" />
			</main>
		</div>
	);
}

export default App;
