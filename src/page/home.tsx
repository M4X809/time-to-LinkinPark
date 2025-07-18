import { Link } from "react-router-dom";
import { Countdown } from "../components/Countdown";

export default function Home() {
	return (
		<>
			<Link to="/past" className="absolute top-0 right-0 m-5 rounded-xl bg-white/10 p-2 hover:bg-white/15">
				Past Events
			</Link>{" "}
			<h1 className="mb-1 text-center text-4xl font-bold">Time until...</h1>
			{/*<Countdown targetDate={new Date("2025-07-16T18:45:00")} title="Imagine Dragons Concert 2025" />*/}
			<Countdown targetDate={new Date("2026-06-03T18:30:00")} title="Linkin Park Concert 2026" />
			<Countdown targetDate={new Date("2026-02-21T19:00:00")} title="Motionless in White Concert 2026" />
		</>
	);
}
